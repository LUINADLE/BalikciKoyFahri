// src/admin/menuStore.js — QR menüsü veri katmanı (soyutlama)
//
// Şimdilik localStorage tabanlı *mock*. Faz 2'de bu dosyanın YALNIZCA içi
// Supabase ile değiştirilecek (tablolar: menu_categories, menu_items);
// dışa açılan fonksiyon imzaları aynı kaldığı için çağıranlara dokunulmayacak.
//
// Veri modeli (çift dilli):
//   kategori: { id, name: { tr, en }, order }
//   ürün:     { id, catId, name: { tr, en }, desc: { tr, en }, price, available, order }
//   price: serbest metin ("450 ₺" / "Günün Fiyatı") — piyasa-fiyatı durumları için esnek.
//   available: false → müşteri sayfasında "Tükendi".

import { content } from '../data/content.js';

// Yayın (müşterinin gördüğü) ve taslak (admin'in düzenlediği) ayrı tutulur.
// Düzenlemeler taslağa yazılır; "Kaydet" taslağı yayına kopyalar.
const KEY = 'bf_qr_menu';            // yayın (live)
const VER_KEY = 'bf_qr_menu_seed';
const DRAFT_KEY = 'bf_qr_menu_draft';     // taslak
const DRAFT_VER_KEY = 'bf_qr_menu_draft_seed';
// Seed içeriği değiştikçe artır → eski localStorage verisi yeni seed ile tazelenir.
const SEED_VERSION = 1;

// ── Seed: content.js menüsünden türetilir (TR + EN aynı sırada eşlenir). ──
// Örnek fiyatlar; gerçek menü Faz 2'de aktarılınca güncellenecek (placeholder).
const PRICES = {
  cold: ['480 ₺', '520 ₺', '90 ₺', '460 ₺', '540 ₺'],
  hot: ['620 ₺', '580 ₺', '560 ₺', '640 ₺', '590 ₺'],
  wine: ['1.450 ₺', '2.200 ₺', '1.350 ₺', '780 ₺', '1.680 ₺'],
};

// İki dilin section.items dizilerini (aynı uzunluk/sıra) tek ürün dizisine birleştirir.
function zipSection(catId, trSec, enSec) {
  const prices = PRICES[catId] || [];
  return trSec.items.map((it, i) => ({
    id: `${catId}-${i}`,
    catId,
    name: { tr: it.name, en: enSec.items[i]?.name || it.name },
    desc: { tr: it.desc || '', en: enSec.items[i]?.desc || '' },
    price: prices[i] || '',
    available: true,
    order: i,
  }));
}

// Günün balığı: açıklama olarak menşe (origin), fiyat olarak "Günün Fiyatı".
function zipCatch(catId, trCatch, enCatch) {
  return trCatch.items.map((it, i) => ({
    id: `${catId}-${i}`,
    catId,
    name: { tr: it.name, en: enCatch.items[i]?.name || it.name },
    desc: { tr: it.origin || '', en: enCatch.items[i]?.origin || '' },
    price: trCatch.daily || 'Günün Fiyatı',
    available: true,
    order: i,
  }));
}

function buildSeed() {
  const tr = content.tr.menu;
  const en = content.en.menu;
  const categories = [
    { id: 'cold', name: { tr: tr.sections.cold.title, en: en.sections.cold.title }, order: 0,
      items: zipSection('cold', tr.sections.cold, en.sections.cold) },
    { id: 'hot', name: { tr: tr.sections.hot.title, en: en.sections.hot.title }, order: 1,
      items: zipSection('hot', tr.sections.hot, en.sections.hot) },
    { id: 'catch', name: { tr: tr.catch.title, en: en.catch.title }, order: 2,
      items: zipCatch('catch', tr.catch, en.catch) },
    { id: 'wine', name: { tr: tr.sections.wine.title, en: en.sections.wine.title }, order: 3,
      items: zipSection('wine', tr.sections.wine, en.sections.wine) },
  ];
  return { categories };
}

// ── Yayın (live) okuma/yazma: seed buradan üretilir; müşteri sayfası bunu görür.
function readLive() {
  try {
    const ver = Number(localStorage.getItem(VER_KEY) || 0);
    const raw = localStorage.getItem(KEY);
    if (raw && ver === SEED_VERSION) return JSON.parse(raw);
  } catch { /* yok say */ }
  const seed = buildSeed();
  writeLive(seed);
  try { localStorage.setItem(VER_KEY, String(SEED_VERSION)); } catch { /* yok say */ }
  return seed;
}

function writeLive(menu) {
  try { localStorage.setItem(KEY, JSON.stringify(menu)); } catch { /* yok say */ }
}

// ── Taslak (draft) okuma/yazma: admin düzenlemeleri buraya gider.
// Taslak yoksa/sürümü eskiyse yayından kopyalanarak başlatılır.
// Not: CRUD fonksiyonları read()/write() üzerinden taslağa yazar (imzalar değişmez).
function read() {
  try {
    const ver = Number(localStorage.getItem(DRAFT_VER_KEY) || 0);
    const raw = localStorage.getItem(DRAFT_KEY);
    if (raw && ver === SEED_VERSION) return JSON.parse(raw);
  } catch { /* yok say */ }
  const init = readLive();
  write(init);
  try { localStorage.setItem(DRAFT_VER_KEY, String(SEED_VERSION)); } catch { /* yok say */ }
  return init;
}

function write(menu) {
  try { localStorage.setItem(DRAFT_KEY, JSON.stringify(menu)); } catch { /* yok say */ }
}

function genId(prefix) {
  return prefix + '-' + Date.now().toString(36) + '-' + Math.random().toString(36).slice(2, 6);
}

// Kategorileri ve içlerindeki ürünleri order'a göre sıralı döndürür.
function sorted(menu) {
  const cats = [...menu.categories].sort((a, b) => a.order - b.order);
  cats.forEach(c => { c.items = [...c.items].sort((a, b) => a.order - b.order); });
  return cats;
}

// ───────────────────────── Dışa açılan API ─────────────────────────

// Müşteri sayfası: YAYINLANAN menüyü döndürür (taslak değil).
export function getMenu() {
  const menu = readLive();
  return { categories: sorted(menu) };
}

// Admin editörü: TASLAK menüyü döndürür.
export function getDraft() {
  const menu = read();
  return { categories: sorted(menu) };
}

// "Değişiklikleri Kaydet": taslağı yayına kopyalar (müşteri menüsünü günceller).
export function publishDraft() {
  writeLive(read());
}

// "Geri Al": taslağı yayına eşitler (kaydedilmemiş değişiklikleri atar).
export function discardDraft() {
  write(readLive());
}

// Taslak yayından farklı mı? (kaydedilmemiş değişiklik var mı)
export function isDraftDirty() {
  readLive(); read(); // her iki anahtarın da var olmasını garanti et
  try { return localStorage.getItem(KEY) !== localStorage.getItem(DRAFT_KEY); }
  catch { return false; }
}

export function createCategory({ name } = {}) {
  const menu = read();
  const cat = {
    id: genId('cat'),
    name: { tr: (name?.tr || '').trim(), en: (name?.en || '').trim() },
    order: menu.categories.length,
    items: [],
  };
  menu.categories.push(cat);
  write(menu);
  return cat;
}

export function updateCategory(id, patch) {
  const menu = read();
  const i = menu.categories.findIndex(c => c.id === id);
  if (i === -1) return null;
  menu.categories[i] = { ...menu.categories[i], ...patch };
  write(menu);
  return menu.categories[i];
}

export function deleteCategory(id) {
  const menu = read();
  const before = menu.categories.length;
  menu.categories = menu.categories.filter(c => c.id !== id);
  write(menu);
  return menu.categories.length !== before;
}

export function createItem(catId, data = {}) {
  const menu = read();
  const cat = menu.categories.find(c => c.id === catId);
  if (!cat) return null;
  const item = {
    id: genId('item'),
    catId,
    name: { tr: (data.name?.tr || '').trim(), en: (data.name?.en || '').trim() },
    desc: { tr: (data.desc?.tr || '').trim(), en: (data.desc?.en || '').trim() },
    price: (data.price || '').trim(),
    available: data.available !== false,
    order: cat.items.length,
  };
  cat.items.push(item);
  write(menu);
  return item;
}

export function updateItem(id, patch) {
  const menu = read();
  for (const cat of menu.categories) {
    const i = cat.items.findIndex(it => it.id === id);
    if (i !== -1) {
      cat.items[i] = { ...cat.items[i], ...patch };
      write(menu);
      return cat.items[i];
    }
  }
  return null;
}

export function deleteItem(id) {
  const menu = read();
  for (const cat of menu.categories) {
    const before = cat.items.length;
    cat.items = cat.items.filter(it => it.id !== id);
    if (cat.items.length !== before) { write(menu); return true; }
  }
  return false;
}

export function toggleAvailable(id) {
  const menu = read();
  for (const cat of menu.categories) {
    const it = cat.items.find(x => x.id === id);
    if (it) { it.available = !it.available; write(menu); return it; }
  }
  return null;
}

// Kategorileri verilen id sırasına göre yeniden sıralar (sürükle-bırak).
// orderedIds: kategorilerin nihai sırası; order alanları 0..n yeniden atanır.
export function reorderCategories(orderedIds) {
  const menu = read();
  const pos = new Map(orderedIds.map((id, i) => [id, i]));
  menu.categories.forEach(c => {
    if (pos.has(c.id)) c.order = pos.get(c.id);
  });
  write(menu);
  return menu;
}

// Bir kategorinin ürünlerini verilen id sırasına göre yeniden sıralar (sürükle-bırak).
// orderedIds: kategoride olması gereken nihai sıra; order alanları 0..n yeniden atanır.
export function reorderItems(catId, orderedIds) {
  const menu = read();
  const cat = menu.categories.find(c => c.id === catId);
  if (!cat) return null;
  const pos = new Map(orderedIds.map((id, i) => [id, i]));
  cat.items.forEach(it => {
    if (pos.has(it.id)) it.order = pos.get(it.id);
  });
  write(menu);
  return cat;
}
