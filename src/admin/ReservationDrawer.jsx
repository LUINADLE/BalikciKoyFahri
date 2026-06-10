// src/admin/ReservationDrawer.jsx — Sağdan kayan rezervasyon detay/düzenleme paneli.
import React from 'react';
import { statusOf, STATUS, EVENT_LABELS } from './labels.js';
import { todayStr } from './dates.js';
import { formatPhone, startsWithFive } from './phone.js';

const TIMES = ['12:00', '12:30', '13:00', '13:30', '14:00', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30'];

function fmtCreated(iso) {
  if (!iso) return '—';
  try {
    return new Date(iso).toLocaleString('tr-TR', { day: '2-digit', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' });
  } catch { return iso; }
}

const FIELDS = ['date', 'time', 'guests', 'event', 'name', 'phone', 'notes'];

function ReservationDrawer({ reservation, open, onClose, onUpdate, onDelete }) {
  const [form, setForm] = React.useState(null);
  const [errs, setErrs] = React.useState({});
  const [saved, setSaved] = React.useState(false);
  const [confirmDel, setConfirmDel] = React.useState(false);
  const set = (k, v) => { setForm(p => ({ ...p, [k]: v })); setSaved(false); };

  // Seçili rezervasyon değişince (veya panel açılınca) formu doldur.
  React.useEffect(() => {
    if (reservation) {
      setForm({
        date: reservation.date || '', time: reservation.time || '', guests: String(reservation.guests ?? ''),
        event: reservation.event || 'individual', name: reservation.name || '', phone: reservation.phone || '',
        notes: reservation.notes || '',
      });
      setErrs({}); setSaved(false); setConfirmDel(false);
    }
  }, [reservation?.id, open]);

  // Esc ile kapat.
  React.useEffect(() => {
    if (!open) return;
    const h = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [open, onClose]);

  const r = reservation;
  const st = r ? statusOf(r.status) : null;

  // Değişiklik var mı? (dirty kontrolü → Kaydet pasif/aktif)
  const dirty = r && form && FIELDS.some(k => String(form[k] ?? '') !== String((k === 'guests' ? String(r.guests ?? '') : r[k]) ?? ''));

  const today = todayStr();
  const save = () => {
    const er = {};
    if (!form.name.trim()) er.name = true;
    if (!form.phone.trim()) er.phone = true;
    else if (!startsWithFive(form.phone)) er.phone = 'invalid';
    // Geçmiş gün seçilemez; ancak zaten geçmiş tarihli bir kaydın tarihi değiştirilmediyse korunur.
    if (!form.date || (form.date < today && form.date !== r.date)) er.date = true;
    if (Object.keys(er).length) { setErrs(er); return; }
    onUpdate(r.id, {
      date: form.date, time: form.time, guests: form.guests, event: form.event,
      name: form.name.trim(), phone: form.phone.trim(), notes: form.notes.trim(),
    });
    setErrs({}); setSaved(true);
  };

  const ec = (k) => `adm-field${errs[k] ? ' adm-field-err' : ''}`;

  return (
    <>
      <div className={`adm-backdrop${open ? ' open' : ''}`} onClick={onClose} />
      <aside className={`adm-drawer${open ? ' open' : ''}`} aria-hidden={!open}>
        {r && form && (
          <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
            {/* Başlık */}
            <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', padding: '2rem 2rem 1.5rem', borderBottom: '1px solid var(--adm-border)' }}>
              <div>
                <div style={{ fontSize: '.6rem', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--bronze)', marginBottom: '.5rem', fontFamily: 'var(--sans)', fontWeight: 500 }}>Rezervasyon</div>
                <div style={{ fontFamily: 'var(--srf)', fontSize: '1.9rem', fontStyle: 'italic', color: 'var(--adm-text)', lineHeight: 1.15 }}>{form.name || '—'}</div>
                <div style={{ marginTop: '.6rem', display: 'inline-flex', alignItems: 'center', gap: '.4rem', fontSize: '.72rem', color: st.color, fontWeight: 500 }}>● {st.label}</div>
              </div>
              <button onClick={onClose} aria-label="Kapat" style={{ background: 'none', border: 'none', color: 'var(--adm-dim)', cursor: 'pointer', fontSize: '1.5rem', lineHeight: 1, padding: '.2rem' }}>×</button>
            </div>

            {/* Düzenlenebilir alanlar */}
            <div className="adm-panel-body" style={{ flex: 1 }}>
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
              <div style={{ fontFamily: 'var(--sans)', fontSize: '.7rem', color: 'var(--adm-dim)', marginTop: '.5rem' }}>
                Oluşturulma: {fmtCreated(r.createdAt)}
              </div>
            </div>

            {/* Footer: büyük Kaydet + durum butonları */}
            <div style={{ padding: '1.25rem 2rem', borderTop: '1px solid var(--adm-border)' }}>
              <button
                onClick={save}
                disabled={!dirty}
                className="btn bb"
                style={{ width: '100%', justifyContent: 'center', marginBottom: '1rem', opacity: dirty ? 1 : 0.5, cursor: dirty ? 'pointer' : 'default' }}
              >{saved && !dirty ? 'Kaydedildi ✓' : 'Değişiklikleri Kaydet'}</button>

              <div style={{ display: 'flex', gap: '.6rem', flexWrap: 'wrap' }}>
                {[
                  ['confirmed', 'Onayla'],
                  ['pending', 'Beklemede'],
                  ['verifying', 'Doğrulanıyor'],
                  ['cancelled', 'İptal Et'],
                ].map(([key, label]) => {
                  const active = r.status === key;
                  const color = STATUS[key].color;
                  return (
                    <button
                      key={key}
                      onClick={() => onUpdate(r.id, { status: key })}
                      disabled={active}
                      style={{ flex: '1 1 calc(50% - .3rem)', padding: '.8rem', fontFamily: 'var(--sans)', fontSize: '.64rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', cursor: active ? 'default' : 'pointer', border: `1px solid ${color}`, background: active ? color : 'transparent', color: active ? '#fff' : 'var(--adm-text)', opacity: active ? 0.6 : 1, transition: 'all .2s', borderRadius: 2 }}
                    >{label}</button>
                  );
                })}
              </div>

              {/* Kalıcı silme — iki adımlı onay */}
              <div style={{ marginTop: '1rem', paddingTop: '1rem', borderTop: '1px solid var(--adm-border)' }}>
                {!confirmDel ? (
                  <button
                    onClick={() => setConfirmDel(true)}
                    style={{ width: '100%', padding: '.7rem', background: 'none', border: 'none', fontFamily: 'var(--sans)', fontSize: '.66rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', color: STATUS.cancelled.color, cursor: 'pointer' }}
                  >Rezervasyonu Sil</button>
                ) : (
                  <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', flexWrap: 'wrap' }}>
                    <span style={{ flex: '1 1 100%', fontFamily: 'var(--sans)', fontSize: '.72rem', color: 'var(--adm-dim)', marginBottom: '.2rem' }}>Bu rezervasyon kalıcı olarak silinsin mi?</span>
                    <button
                      onClick={() => onDelete(r.id)}
                      style={{ flex: 1, padding: '.7rem', fontFamily: 'var(--sans)', fontSize: '.64rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', cursor: 'pointer', border: `1px solid ${STATUS.cancelled.color}`, background: STATUS.cancelled.color, color: '#fff', borderRadius: 2 }}
                    >Evet, Sil</button>
                    <button
                      onClick={() => setConfirmDel(false)}
                      style={{ flex: 1, padding: '.7rem', fontFamily: 'var(--sans)', fontSize: '.64rem', fontWeight: 600, letterSpacing: '.1em', textTransform: 'uppercase', cursor: 'pointer', border: '1px solid var(--adm-border)', background: 'transparent', color: 'var(--adm-text)', borderRadius: 2 }}
                    >Vazgeç</button>
                  </div>
                )}
              </div>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}

export default ReservationDrawer;
