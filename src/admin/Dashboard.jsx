// src/admin/Dashboard.jsx — Admin paneli ana ekranı: üst bar + kontroller + takvim + drawer.
import React from 'react';
import { listReservations, updateReservation, deleteReservation } from './store.js';
import { STATUS } from './labels.js';
import AdminHeader from './AdminHeader.jsx';
import Calendar from './Calendar.jsx';
import ReservationDrawer from './ReservationDrawer.jsx';
import ManualReservationPanel from './ManualReservationPanel.jsx';
import PendingPanel from './PendingPanel.jsx';
import Toasts from './Toasts.jsx';
import { useNewReservations } from './useNewReservations.js';
import { todayStr } from './dates.js';

const MONTHS = ['Ocak', 'Şubat', 'Mart', 'Nisan', 'Mayıs', 'Haziran', 'Temmuz', 'Ağustos', 'Eylül', 'Ekim', 'Kasım', 'Aralık'];
const MONTHS_SHORT = ['Oca', 'Şub', 'Mar', 'Nis', 'May', 'Haz', 'Tem', 'Ağu', 'Eyl', 'Eki', 'Kas', 'Ara'];

function mondayOf(date) {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  d.setDate(d.getDate() - ((d.getDay() + 6) % 7));
  return d;
}
function sameDay(a, b) {
  return a.getFullYear() === b.getFullYear() && a.getMonth() === b.getMonth() && a.getDate() === b.getDate();
}

function Dashboard({ onSignOut, theme, onToggleTheme }) {
  const [reservations, setReservations] = React.useState(() => listReservations());
  const [cursor, setCursor] = React.useState(() => new Date());
  const [view, setView] = React.useState('month'); // 'month' | 'week' | 'day'
  const [showCancelled, setShowCancelled] = React.useState(true);
  const [selectedId, setSelectedId] = React.useState(null);
  const [drawerOpen, setDrawerOpen] = React.useState(false);
  const [manualOpen, setManualOpen] = React.useState(false);
  const [pendingOpen, setPendingOpen] = React.useState(false);

  const refresh = React.useCallback(() => setReservations(listReservations()), []);

  // Yeni rezervasyon gözcüsü: toast + sekme bildirimi (mock).
  const { toasts, dismissToast, unseen, clearUnseen } = useNewReservations({ enabled: true, onChange: refresh });

  // Doğrulanacaklar rozeti: Onaylı/İptal dışı + bugün ve sonrası (geçmiş hariç).
  const newCount = React.useMemo(() => {
    const today = todayStr();
    return reservations.filter(r => r.status !== 'confirmed' && r.status !== 'cancelled' && r.date >= today).length;
  }, [reservations]);

  // İptal filtresi uygulanmış liste (takvime bu gider).
  const visible = React.useMemo(
    () => (showCancelled ? reservations : reservations.filter(r => r.status !== 'cancelled')),
    [reservations, showCancelled]
  );

  const selected = React.useMemo(
    () => reservations.find(r => r.id === selectedId) || null,
    [reservations, selectedId]
  );

  const openRes = (res) => { setSelectedId(res.id); setDrawerOpen(true); };
  const closeDrawer = () => setDrawerOpen(false);
  const handleUpdate = (id, patch) => { updateReservation(id, patch); refresh(); };
  const handleDelete = (id) => { deleteReservation(id); setDrawerOpen(false); refresh(); };

  const openPending = () => { clearUnseen(); setPendingOpen(true); };
  // Doğrulanacaklar listesinden bir kayıt seçilince: paneli kapat, detayı aç.
  const selectFromPending = (res) => { setPendingOpen(false); openRes(res); };
  const handleManualCreated = () => refresh();

  // Navigasyon: aktif görünüme göre kaydır.
  const shift = (delta) => setCursor(c => {
    const d = new Date(c);
    if (view === 'month') d.setMonth(d.getMonth() + delta);
    else if (view === 'week') d.setDate(d.getDate() + delta * 7);
    else d.setDate(d.getDate() + delta);
    return d;
  });
  const goToday = () => setCursor(new Date());

  // Görünüme göre başlık.
  const title = React.useMemo(() => {
    if (view === 'month') return `${MONTHS[cursor.getMonth()]} ${cursor.getFullYear()}`;
    if (view === 'day') return cursor.toLocaleDateString('tr-TR', { weekday: 'long', day: '2-digit', month: 'long', year: 'numeric' });
    // week: Pzt–Paz aralığı
    const mon = mondayOf(cursor);
    const sun = new Date(mon); sun.setDate(mon.getDate() + 6);
    if (mon.getMonth() === sun.getMonth()) return `${mon.getDate()}–${sun.getDate()} ${MONTHS[mon.getMonth()]} ${mon.getFullYear()}`;
    if (mon.getFullYear() === sun.getFullYear()) return `${mon.getDate()} ${MONTHS_SHORT[mon.getMonth()]} – ${sun.getDate()} ${MONTHS_SHORT[sun.getMonth()]} ${sun.getFullYear()}`;
    return `${mon.getDate()} ${MONTHS_SHORT[mon.getMonth()]} ${mon.getFullYear()} – ${sun.getDate()} ${MONTHS_SHORT[sun.getMonth()]} ${sun.getFullYear()}`;
  }, [view, cursor]);

  // Aktif görünüm aralığındaki rezervasyon sayısı.
  const count = React.useMemo(() => {
    return visible.filter(r => {
      if (!r.date) return false;
      const d = new Date(r.date + 'T00:00:00');
      if (view === 'month') return d.getFullYear() === cursor.getFullYear() && d.getMonth() === cursor.getMonth();
      if (view === 'day') return sameDay(d, cursor);
      const mon = mondayOf(cursor); const sun = new Date(mon); sun.setDate(mon.getDate() + 6);
      return d >= mon && d <= new Date(sun.getFullYear(), sun.getMonth(), sun.getDate(), 23, 59, 59);
    }).length;
  }, [visible, view, cursor]);

  const views = [['day', 'Gün'], ['week', 'Hafta'], ['month', 'Ay']];

  // Başlık kutusu genişliği görünüme göre (kaymayı önler, butonları metne yaklaştırır).
  const titleW = view === 'day' ? 280 : view === 'week' ? 240 : 160;

  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Ortak üst bar + rezervasyona özel aksiyonlar */}
      <AdminHeader theme={theme} onToggleTheme={onToggleTheme} onSignOut={onSignOut}>
        <button onClick={openPending} className="adm-action">
          Doğrulanacaklar
          {newCount > 0 && <span className="badge">{newCount}</span>}
        </button>
        <button onClick={() => setManualOpen(true)} className="adm-action">+ Manuel Rezervasyon</button>
      </AdminHeader>

      {/* Kontroller: navigasyon + görünüm seçici + iptal filtresi + lejant */}
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', padding: '1.5rem clamp(1rem, 4vw, 2.5rem) 1rem' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.85rem', flexWrap: 'wrap' }}>
          <button onClick={() => shift(-1)} aria-label="Önceki" className="adm-navbtn">‹</button>
          <div style={{ fontFamily: 'var(--srf)', fontSize: '1.5rem', width: titleW, flex: 'none', textAlign: 'center', whiteSpace: 'nowrap', overflow: 'hidden', textOverflow: 'ellipsis', color: 'var(--adm-text)' }}>{title}</div>
          <button onClick={() => shift(1)} aria-label="Sonraki" className="adm-navbtn">›</button>
          <button onClick={goToday} className="adm-today-btn">Bugün</button>
          <span style={{ fontSize: '.75rem', color: 'var(--adm-dim)' }}>{count} rezervasyon</span>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '1.25rem', flexWrap: 'wrap' }}>
          <div className="adm-seg">
            {views.map(([v, lbl]) => (
              <button key={v} className={view === v ? 'active' : ''} onClick={() => setView(v)}>{lbl}</button>
            ))}
          </div>
          <label className="adm-check">
            <input type="checkbox" checked={showCancelled} onChange={(e) => setShowCancelled(e.target.checked)} />
            İptal edilenleri göster
          </label>
        </div>
      </div>

      {/* Lejant */}
      <div style={{ display: 'flex', gap: '1.25rem', flexWrap: 'wrap', padding: '0 clamp(1rem, 4vw, 2.5rem) 1rem' }}>
        {Object.entries(STATUS).map(([k, v]) => (
          <span key={k} style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', fontSize: '.7rem', color: 'var(--adm-dim)' }}>
            <span style={{ width: 8, height: 8, borderRadius: '50%', background: v.color }} />{v.label}
          </span>
        ))}
      </div>

      {/* Takvim */}
      <div style={{ padding: '0 clamp(1rem, 4vw, 2.5rem) 3rem' }}>
        <Calendar view={view} cursor={cursor} reservations={visible} onSelect={openRes} />
      </div>

      {/* Detay drawer'ı */}
      <ReservationDrawer reservation={selected} open={drawerOpen} onClose={closeDrawer} onUpdate={handleUpdate} onDelete={handleDelete} />

      {/* Manuel rezervasyon + Doğrulanacaklar panelleri */}
      <ManualReservationPanel open={manualOpen} onClose={() => setManualOpen(false)} onCreated={handleManualCreated} />
      <PendingPanel open={pendingOpen} onClose={() => setPendingOpen(false)} reservations={reservations} onSelect={selectFromPending} />

      {/* Yeni rezervasyon toast'ları (sol-alt) */}
      <Toasts toasts={toasts} onDismiss={dismissToast} />
    </div>
  );
}

export default Dashboard;
