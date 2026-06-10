// src/admin/store.js — Rezervasyon veri katmanı (soyutlama)
//
// Şimdilik localStorage tabanlı *mock*. Faz 2'de bu dosyanın YALNIZCA içi
// Supabase (@supabase/supabase-js) ile değiştirilecek; dışa açılan fonksiyon
// imzaları aynı kaldığı için çağıran bileşenlere dokunulmayacak.
//
// Rezervasyon modeli:
//   { id, date, time, guests, name, phone, event, notes, createdAt, status }
//   status: 'new' | 'confirmed' | 'cancelled'

const KEY = 'bf_reservations';
const VER_KEY = 'bf_reservations_seed';
// Seed içeriği değiştikçe artır → eski localStorage verisi yeni seed ile tazelenir.
const SEED_VERSION = 3;

// İçinde bulunulan ayın verilen günü için YYYY-MM-DD (yerel, timezone sorunsuz).
function monthDay(day) {
  const now = new Date();
  const y = now.getFullYear();
  const m = now.getMonth();
  const max = new Date(y, m + 1, 0).getDate();
  const d = Math.min(Math.max(day, 1), max);
  return `${y}-${String(m + 1).padStart(2, '0')}-${String(d).padStart(2, '0')}`;
}

const iso = new Date().toISOString();
let _n = 0;
const sid = () => `seed-${++_n}`;

// Bu ay için yoğun-orta dolulukta örnek rezervasyonlar (detaylı test için).
const SEED = [
  // Yoğun gün — 4 kayıt
  { id: sid(), date: monthDay(3),  time: '12:30', guests: '2',  name: 'Ahmet Yılmaz',     phone: '0532 111 22 33', event: 'individual', notes: 'Pencere kenarı tercih edilir, balkon değil.', status: 'confirmed' },
  { id: sid(), date: monthDay(3),  time: '13:30', guests: '5',  name: 'Selin Aras',       phone: '0541 234 56 78', event: 'group',      notes: 'Doğum günü; küçük pasta servisi rica edildi.', status: 'new' },
  { id: sid(), date: monthDay(3),  time: '20:00', guests: '4',  name: 'Burak Çelik',      phone: '0533 444 55 66', event: 'individual', notes: '', status: 'pending' },
  { id: sid(), date: monthDay(3),  time: '21:30', guests: '8',  name: 'Demir Ailesi',     phone: '0535 987 65 43', event: 'group',      notes: 'Deniz manzaralı masa istiyorlar.', status: 'confirmed' },

  // Orta gün — 2 kayıt
  { id: sid(), date: monthDay(5),  time: '13:00', guests: '6',  name: 'Mehmet Kaya',      phone: '0534 777 88 99', event: 'group',      notes: 'İki kişi balık alerjisi var, alternatif menü.', status: 'new' },
  { id: sid(), date: monthDay(5),  time: '19:00', guests: '3',  name: 'Ayşe Korkmaz',     phone: '0536 555 66 77', event: 'individual', notes: '', status: 'verifying' },

  { id: sid(), date: monthDay(7),  time: '20:30', guests: '12', name: 'Aksoy Holding',    phone: '0535 222 33 44', event: 'event',      notes: 'Kurumsal akşam yemeği; e-fatura gerekli, projeksiyon istendi.', status: 'confirmed' },
  { id: sid(), date: monthDay(7),  time: '18:30', guests: '2',  name: 'Cem Toprak',       phone: '0542 333 22 11', event: 'individual', notes: 'Evlilik yıldönümü; masaya çiçek.', status: 'pending' },

  // Yoğun gün — 3 kayıt
  { id: sid(), date: monthDay(10), time: '12:00', guests: '4',  name: 'Fatma Şahin',      phone: '0543 111 00 99', event: 'individual', notes: 'Bebek sandalyesi gerekiyor.', status: 'confirmed' },
  { id: sid(), date: monthDay(10), time: '14:00', guests: '10', name: 'Yıldız Turizm',    phone: '0530 444 33 22', event: 'group',      notes: 'Tur grubu; set menü konuşulacak.', status: 'new' },
  { id: sid(), date: monthDay(10), time: '21:00', guests: '2',  name: 'Deniz Acar',       phone: '0544 555 44 33', event: 'individual', notes: '', status: 'cancelled' },

  { id: sid(), date: monthDay(12), time: '19:30', guests: '7',  name: 'Kaplan Grubu',     phone: '0531 222 11 00', event: 'group',      notes: 'Mezeler önceden hazırlanabilir.', status: 'confirmed' },

  // Orta gün — 2 kayıt
  { id: sid(), date: monthDay(14), time: '13:30', guests: '3',  name: 'Gül Yıldırım',     phone: '0545 666 77 88', event: 'individual', notes: 'Tekerlekli sandalye erişimi soruldu.', status: 'new' },
  { id: sid(), date: monthDay(14), time: '20:00', guests: '6',  name: 'Eren Bozkurt',     phone: '0532 909 80 70', event: 'group',      notes: '', status: 'pending' },

  { id: sid(), date: monthDay(16), time: '18:00', guests: '2',  name: 'Leyla Demirtaş',   phone: '0546 121 31 41', event: 'individual', notes: 'Sessiz bir köşe rica edildi.', status: 'verifying' },

  // Yoğun gün (hafta sonu) — 4 kayıt
  { id: sid(), date: monthDay(18), time: '13:00', guests: '8',  name: 'Özkan Ailesi',     phone: '0533 151 61 71', event: 'group',      notes: 'Sünnet sonrası öğle yemeği.', status: 'confirmed' },
  { id: sid(), date: monthDay(18), time: '14:30', guests: '4',  name: 'Murat Şen',        phone: '0547 181 91 01', event: 'individual', notes: '', status: 'new' },
  { id: sid(), date: monthDay(18), time: '20:30', guests: '5',  name: 'Nur Aydın',        phone: '0534 212 22 32', event: 'group',      notes: 'Vejetaryen menü ağırlıklı olsun.', status: 'pending' },
  { id: sid(), date: monthDay(18), time: '22:00', guests: '2',  name: 'Kaan Yüce',        phone: '0548 242 52 62', event: 'individual', notes: 'Geç saat rezervasyonu onaylandı.', status: 'confirmed' },

  { id: sid(), date: monthDay(20), time: '19:00', guests: '15', name: 'Mavi Yapı A.Ş.',   phone: '0530 272 82 92', event: 'event',      notes: 'Yıl sonu kutlaması; tüm salon, müzik sistemi.', status: 'verifying' },

  // Orta gün — 2 kayıt
  { id: sid(), date: monthDay(22), time: '12:30', guests: '3',  name: 'Hakan Polat',      phone: '0549 303 13 23', event: 'individual', notes: '', status: 'new' },
  { id: sid(), date: monthDay(22), time: '21:00', guests: '6',  name: 'Sema Erdoğan',     phone: '0531 343 53 63', event: 'group',      notes: 'İş yemeği; fatura kurum adına.', status: 'confirmed' },

  { id: sid(), date: monthDay(24), time: '20:00', guests: '4',  name: 'Tolga Ünal',       phone: '0535 373 83 93', event: 'individual', notes: 'Balkon masası mümkünse.', status: 'pending' },

  { id: sid(), date: monthDay(26), time: '13:00', guests: '9',  name: 'Çiçek Düğün',      phone: '0532 404 14 24', event: 'event',      notes: 'Nişan yemeği ön görüşmesi yapılacak.', status: 'new' },
  { id: sid(), date: monthDay(26), time: '19:30', guests: '2',  name: 'İrem Kılıç',       phone: '0546 434 54 64', event: 'individual', notes: '', status: 'cancelled' },

  { id: sid(), date: monthDay(28), time: '20:30', guests: '7',  name: 'Barış Aktaş',      phone: '0533 464 74 84', event: 'group',      notes: 'Arkadaş buluşması; uzun masa.', status: 'confirmed' },
].map(r => ({ ...r, createdAt: iso }));

function read() {
  try {
    const ver = Number(localStorage.getItem(VER_KEY) || 0);
    const raw = localStorage.getItem(KEY);
    if (raw && ver === SEED_VERSION) return JSON.parse(raw);
  } catch { /* yok say */ }
  // İlk kez veya seed sürümü eskiyse: seed yaz ve döndür.
  try {
    localStorage.setItem(KEY, JSON.stringify(SEED));
    localStorage.setItem(VER_KEY, String(SEED_VERSION));
  } catch { /* yok say */ }
  return SEED.slice();
}

function write(list) {
  try { localStorage.setItem(KEY, JSON.stringify(list)); } catch { /* yok say */ }
}

function genId() {
  return 'r-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 7);
}

export function listReservations() {
  return read();
}

export function getReservation(id) {
  return read().find(r => r.id === id) || null;
}

export function createReservation(data) {
  const list = read();
  const rec = {
    id: genId(),
    date: data.date || '',
    time: data.time || '',
    guests: String(data.guests ?? ''),
    name: (data.name || '').trim(),
    phone: (data.phone || '').trim(),
    event: data.event || 'individual',
    notes: (data.notes || '').trim(),
    createdAt: new Date().toISOString(),
    status: data.status || 'new', // public form göndermez → 'new'; manuel → 'confirmed'
  };
  list.push(rec);
  write(list);
  return rec;
}

export function updateReservation(id, patch) {
  const list = read();
  const i = list.findIndex(r => r.id === id);
  if (i === -1) return null;
  list[i] = { ...list[i], ...patch };
  write(list);
  return list[i];
}

export function deleteReservation(id) {
  const list = read();
  const next = list.filter(r => r.id !== id);
  write(next);
  return next.length !== list.length;
}
