// src/admin/ManualReservationPanel.jsx — Admin'in elle rezervasyon eklediği sağ panel.
import React from 'react';
import { createReservation } from './store.js';
import { EVENT_LABELS } from './labels.js';
import { todayStr } from './dates.js';
import { formatPhone, startsWithFive } from './phone.js';
import SlidePanel from './SlidePanel.jsx';

const TIMES = ['12:00', '12:30', '13:00', '13:30', '14:00', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30'];
const EMPTY = { date: '', time: '', guests: '2', name: '', phone: '', event: 'individual', notes: '' };

function ManualReservationPanel({ open, onClose, onCreated }) {
  const [form, setForm] = React.useState(EMPTY);
  const [errs, setErrs] = React.useState({});
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));
  const today = todayStr();

  // Panel her kapandığında formu sıfırla.
  React.useEffect(() => { if (!open) { setForm(EMPTY); setErrs({}); } }, [open]);

  const submit = (e) => {
    e.preventDefault();
    const er = {};
    if (!form.name.trim()) er.name = true;
    if (!form.phone.trim()) er.phone = true;
    else if (!startsWithFive(form.phone)) er.phone = 'invalid';
    if (!form.date || form.date < today) er.date = true;
    if (Object.keys(er).length) { setErrs(er); return; }
    // Admin bizzat eklediği için doğrudan 'Onaylı'.
    const rec = createReservation({ ...form, status: 'confirmed' });
    onCreated(rec);
    onClose();
  };

  const ec = (k) => `adm-field${errs[k] ? ' adm-field-err' : ''}`;

  return (
    <SlidePanel open={open} onClose={onClose} subtitle="Yeni Kayıt" title="Manuel Rezervasyon">
      <form onSubmit={submit} className="adm-panel-body" style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
        <div style={{ flex: 1 }}>
          <div className="adm-field-row">
            <div className={ec('date')}>
              <label>Tarih *</label>
              <input type="date" min={today} value={form.date} onChange={(e) => set('date', e.target.value)} />
            </div>
            <div className="adm-field">
              <label>Saat</label>
              <select value={form.time} onChange={(e) => set('time', e.target.value)}>
                <option value="">Seçiniz</option>
                {TIMES.map(t => <option key={t} value={t}>{t}</option>)}
              </select>
            </div>
          </div>
          <div className="adm-field-row">
            <div className="adm-field">
              <label>Kişi Sayısı</label>
              <select value={form.guests} onChange={(e) => set('guests', e.target.value)}>
                {Array.from({ length: 20 }, (_, i) => i + 1).map(n => <option key={n} value={String(n)}>{n}</option>)}
              </select>
            </div>
            <div className="adm-field">
              <label>Etkinlik Türü</label>
              <select value={form.event} onChange={(e) => set('event', e.target.value)}>
                {Object.entries(EVENT_LABELS).map(([v, l]) => <option key={v} value={v}>{l}</option>)}
              </select>
            </div>
          </div>
          <div className="adm-field-row">
            <div className={ec('name')}>
              <label>Ad Soyad *</label>
              <input value={form.name} onChange={(e) => set('name', e.target.value)} placeholder="İsim" />
            </div>
            <div className={ec('phone')}>
              <label>Telefon *</label>
              <input value={form.phone} onChange={(e) => set('phone', formatPhone(e.target.value))} placeholder="5XX XXX XX XX" inputMode="numeric" />
              {errs.phone === 'invalid' && <div style={{ fontSize: '.7rem', color: '#C0584F', marginTop: '.35rem' }}>Telefon numarası 5 ile başlamalıdır.</div>}
            </div>
          </div>
          <div className="adm-field">
            <label>Notlar</label>
            <textarea rows={3} value={form.notes} onChange={(e) => set('notes', e.target.value)} placeholder="Özel istekler, masa tercihi…" />
          </div>
        </div>
        <button type="submit" className="btn bb" style={{ width: '100%', justifyContent: 'center', marginTop: '1rem' }}>Rezervasyonu Kaydet</button>
      </form>
    </SlidePanel>
  );
}

export default ManualReservationPanel;
