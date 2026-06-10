// src/admin/Calendar.jsx — Sıfırdan (bağımlılıksız) takvim: Ay / Hafta / Gün görünümleri.
// Chip üzerine gelince hızlı bilgi popover'ı çıkar; tıklayınca onSelect ile drawer açılır.
import React from 'react';
import { eventLabel, statusOf } from './labels.js';

const WEEKDAYS = ['Pzt', 'Sal', 'Çar', 'Per', 'Cum', 'Cmt', 'Paz'];
const pad = (n) => String(n).padStart(2, '0');
const dateKey = (y, m, d) => `${y}-${pad(m + 1)}-${pad(d)}`;
const keyOf = (date) => dateKey(date.getFullYear(), date.getMonth(), date.getDate());

function todayKey() {
  const t = new Date();
  return keyOf(t);
}

// Verilen tarihin haftasının Pazartesi'si.
function mondayOf(date) {
  const d = new Date(date.getFullYear(), date.getMonth(), date.getDate());
  const off = (d.getDay() + 6) % 7; // Pzt = 0
  d.setDate(d.getDate() - off);
  return d;
}

function Calendar({ view, cursor, reservations, onSelect }) {
  const [hover, setHover] = React.useState(null); // { res, x, y }
  const tKey = todayKey();

  // Rezervasyonları güne göre grupla + gün içinde saate göre sırala.
  const byDay = React.useMemo(() => {
    const map = {};
    for (const r of reservations) {
      if (!r.date) continue;
      (map[r.date] = map[r.date] || []).push(r);
    }
    for (const k of Object.keys(map)) map[k].sort((a, b) => (a.time || '').localeCompare(b.time || ''));
    return map;
  }, [reservations]);

  const showHover = (e, res) => {
    const r = e.currentTarget.getBoundingClientRect();
    setHover({ res, x: r.left + r.width / 2, y: r.top });
  };
  const hideHover = () => setHover(null);

  // Ortak chip (ay + hafta görünümleri).
  const Chip = ({ res }) => {
    const st = statusOf(res.status);
    return (
      <button
        className="adm-chip"
        onClick={() => onSelect(res)}
        onMouseEnter={(e) => showHover(e, res)}
        onMouseLeave={hideHover}
      >
        <span className="adm-chip-dot" style={{ background: st.color }} />
        <span className="adm-chip-time">{res.time || '—'}</span>
        <span className="adm-chip-name">{res.name}</span>
      </button>
    );
  };

  return (
    <div style={{ position: 'relative' }}>
      {view === 'month' && <MonthView cursor={cursor} byDay={byDay} tKey={tKey} Chip={Chip} />}
      {view === 'week' && <WeekView cursor={cursor} byDay={byDay} tKey={tKey} Chip={Chip} />}
      {view === 'day' && <DayView cursor={cursor} byDay={byDay} onSelect={onSelect} />}

      {/* Hover hızlı bilgi popover'ı (sabit konumlu) */}
      {hover && (
        <div className="adm-pop" style={{ left: hover.x, top: hover.y }}>
          <div className="adm-pop-name">{hover.res.name}</div>
          <div className="adm-pop-row"><span>Saat</span><b>{hover.res.time || '—'}</b></div>
          <div className="adm-pop-row"><span>Kişi</span><b>{hover.res.guests}</b></div>
          <div className="adm-pop-row"><span>Telefon</span><b>{hover.res.phone || '—'}</b></div>
          <div className="adm-pop-row"><span>Tür</span><b>{eventLabel(hover.res.event)}</b></div>
          <div className="adm-pop-status" style={{ color: statusOf(hover.res.status).color }}>
            ● {statusOf(hover.res.status).label}
          </div>
        </div>
      )}
    </div>
  );
}

// ----- Ay görünümü -----
function MonthView({ cursor, byDay, tKey, Chip }) {
  const year = cursor.getFullYear();
  const m = cursor.getMonth();
  const daysInMonth = new Date(year, m + 1, 0).getDate();
  const firstWeekday = (new Date(year, m, 1).getDay() + 6) % 7;

  const cells = [];
  for (let i = 0; i < firstWeekday; i++) cells.push(null);
  for (let d = 1; d <= daysInMonth; d++) cells.push(d);

  return (
    <>
      <div className="adm-cal-grid" style={{ marginBottom: '.5rem' }}>
        {WEEKDAYS.map((w) => (
          <div key={w} style={{ fontFamily: 'var(--sans)', fontSize: '.6rem', fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', color: 'var(--adm-dim)', textAlign: 'center', padding: '.4rem 0' }}>{w}</div>
        ))}
      </div>
      <div className="adm-cal-grid">
        {cells.map((d, i) => {
          if (d === null) return <div key={`e${i}`} className="adm-cell adm-cell-empty" />;
          const key = dateKey(year, m, d);
          const list = byDay[key] || [];
          const isToday = key === tKey;
          return (
            <div key={key} className={`adm-cell${isToday ? ' adm-cell-today' : ''}`}>
              <div className="adm-cell-num">{d}</div>
              <div className="adm-cell-chips">
                {list.map((res) => <Chip key={res.id} res={res} />)}
              </div>
            </div>
          );
        })}
      </div>
    </>
  );
}

// ----- Hafta görünümü -----
function WeekView({ cursor, byDay, tKey, Chip }) {
  const monday = mondayOf(cursor);
  const days = Array.from({ length: 7 }, (_, i) => {
    const d = new Date(monday);
    d.setDate(monday.getDate() + i);
    return d;
  });

  return (
    <div className="adm-week-grid">
      {days.map((d, i) => {
        const key = keyOf(d);
        const list = byDay[key] || [];
        const isToday = key === tKey;
        return (
          <div key={key} className={`adm-week-col${isToday ? ' today' : ''}`}>
            <div className="adm-week-head">
              <div className="wd">{WEEKDAYS[i]}</div>
              <div className="dn">{d.getDate()}</div>
            </div>
            <div className="adm-week-body">
              {list.map((res) => <Chip key={res.id} res={res} />)}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ----- Gün görünümü (saate göre ajanda) -----
function DayView({ cursor, byDay, onSelect }) {
  const key = keyOf(cursor);
  const list = byDay[key] || [];

  if (!list.length) {
    return <div className="adm-day-empty">Bu gün için rezervasyon yok.</div>;
  }

  return (
    <div className="adm-day">
      {list.map((res) => {
        const st = statusOf(res.status);
        return (
          <button key={res.id} className="adm-day-card" onClick={() => onSelect(res)}>
            <div className="adm-day-time">{res.time || '—'}</div>
            <div className="adm-day-info">
              <div className="adm-day-name">{res.name}</div>
              <div className="adm-day-meta">{res.guests} kişi · {eventLabel(res.event)} · {res.phone || '—'}</div>
            </div>
            <span style={{ display: 'inline-flex', alignItems: 'center', gap: '.4rem', fontSize: '.7rem', fontWeight: 600, color: st.color, whiteSpace: 'nowrap' }}>● {st.label}</span>
          </button>
        );
      })}
    </div>
  );
}

export default Calendar;
