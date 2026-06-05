// src/pages/ContactPage.jsx
import React from 'react';
import { useLang } from '../i18n.jsx';
import { BRAND, SHARED } from '../data/content.js';

const ADDRESS = `${SHARED.addressLines.join(', ')}`;
const MAP_SRC = `https://www.google.com/maps?q=${encodeURIComponent(ADDRESS)}&output=embed`;

function ContactPage() {
  const { t } = useLang();
  const c = t.contact;
  const F = c.form;

  const [form, setForm] = React.useState({ date: '', time: '', guests: '2', name: '', phone: '', event: 'individual', notes: '' });
  const [fcs, setFcs] = React.useState(null);
  const [done, setDone] = React.useState(false);
  const [errs, setErrs] = React.useState({});
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }));

  const iS = k => ({ width: '100%', background: 'transparent', border: 'none', borderBottom: `1px solid ${errs[k] ? '#B33A3A' : fcs === k ? 'var(--bronze)' : 'var(--cream-b)'}`, padding: '.65rem 0', fontSize: '.9rem', fontFamily: 'var(--sans)', fontWeight: 300, color: 'var(--navy)', outline: 'none', transition: 'border-color .25s', borderRadius: 0 });
  const lS = { fontFamily: 'var(--sans)', fontSize: '.62rem', fontWeight: 500, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--muted)', display: 'block', marginBottom: '.35rem' };

  // NOT: Rezervasyon henüz sunucuya gönderilmiyor — yalnızca istemci tarafı doğrulama
  // + teşekkür ekranı. Gönderme entegrasyonu sonraki aşamada eklenecek.
  const submit = e => {
    e.preventDefault();
    const er = {};
    if (!form.name.trim()) er.name = true;
    if (!form.phone.trim()) er.phone = true;
    if (!form.date) er.date = true;
    if (Object.keys(er).length) { setErrs(er); return; }
    setErrs({});
    setDone(true);
  };

  return (
    <div className="pin" style={{ paddingTop: 'var(--nav)' }}>
      <div className="wrap" style={{ paddingTop: '5rem', paddingBottom: '4rem' }}>
        <h1 className="sxl" style={{ marginBottom: '1rem', whiteSpace: 'pre-line' }}>{c.title}</h1>
        <p style={{ fontSize: '.95rem', fontWeight: 300, color: 'var(--body)', maxWidth: 440, lineHeight: 1.85 }}>{c.intro}</p>
      </div>
      <div className="hr"></div>

      <section className="sec">
        <div className="wrap">
          <div className="contact-grid">
            {/* FORM */}
            <div>
              {done ? (
                <div style={{ padding: '4rem 3rem', border: '1px solid var(--cream-b)', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--srf)', fontSize: '2.8rem', fontStyle: 'italic', marginBottom: '.5rem' }}>{c.done.title}</div>
                  <span className="ac" style={{ margin: '1.5rem auto' }}></span>
                  <p style={{ fontSize: '.9rem', color: 'var(--body)', lineHeight: 1.9 }}>{c.done.body}<br/><br/>{c.done.urgent} <a href={SHARED.phoneHref} style={{ color: 'var(--bronze)', fontWeight: 500 }}>{SHARED.phone}</a></p>
                </div>
              ) : (
                <form onSubmit={submit} noValidate>
                  <h2 style={{ fontFamily: 'var(--srf)', fontSize: '2rem', fontWeight: 400, marginBottom: '2.5rem' }}>{F.heading}</h2>
                  <div className="form-row" style={{ marginBottom: '1.75rem' }}>
                    <div>
                      <label style={lS}>{F.date}</label>
                      <input type="date" value={form.date} onChange={e => set('date', e.target.value)} onFocus={() => setFcs('date')} onBlur={() => setFcs(null)} style={iS('date')} />
                      {errs.date && <span style={{ fontSize: '.7rem', color: '#B33A3A' }}>{F.required}</span>}
                    </div>
                    <div>
                      <label style={lS}>{F.time}</label>
                      <div style={{ position: 'relative' }}>
                        <select value={form.time} onChange={e => set('time', e.target.value)} onFocus={() => setFcs('time')} onBlur={() => setFcs(null)} style={{ ...iS('time'), cursor: 'pointer', appearance: 'none' }}>
                          <option value="">{F.selectTime}</option>
                          {['12:00', '12:30', '13:00', '13:30', '14:00', '18:00', '18:30', '19:00', '19:30', '20:00', '20:30', '21:00', '21:30', '22:00', '22:30'].map(tm => <option key={tm} value={tm}>{tm}</option>)}
                        </select>
                        <span style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)', pointerEvents: 'none', fontSize: '.7rem' }}>▾</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ marginBottom: '1.75rem' }}>
                    <label style={lS}>{F.party}</label>
                    <div style={{ position: 'relative' }}>
                      <select value={form.guests} onChange={e => set('guests', e.target.value)} onFocus={() => setFcs('guests')} onBlur={() => setFcs(null)} style={{ ...iS('guests'), cursor: 'pointer', appearance: 'none' }}>
                        {F.partySizes.map((label, i) => <option key={i} value={i + 1}>{label}</option>)}
                      </select>
                      <span style={{ position: 'absolute', right: 0, top: '50%', transform: 'translateY(-50%)', color: 'var(--muted)', pointerEvents: 'none', fontSize: '.7rem' }}>▾</span>
                    </div>
                  </div>
                  <div className="form-row" style={{ marginBottom: '1.75rem' }}>
                    <div>
                      <label style={lS}>{F.name}</label>
                      <input value={form.name} onChange={e => set('name', e.target.value)} onFocus={() => setFcs('name')} onBlur={() => setFcs(null)} placeholder={F.namePh} style={iS('name')} />
                      {errs.name && <span style={{ fontSize: '.7rem', color: '#B33A3A' }}>{F.required}</span>}
                    </div>
                    <div>
                      <label style={lS}>{F.phone}</label>
                      <input value={form.phone} onChange={e => set('phone', e.target.value)} onFocus={() => setFcs('phone')} onBlur={() => setFcs(null)} placeholder={F.phonePh} style={iS('phone')} />
                      {errs.phone && <span style={{ fontSize: '.7rem', color: '#B33A3A' }}>{F.required}</span>}
                    </div>
                  </div>
                  <div style={{ marginBottom: '1.75rem' }}>
                    <label style={lS}>{F.eventType}</label>
                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', paddingTop: '.5rem' }}>
                      {F.eventTypes.map(([v, l]) => (
                        <label key={v} style={{ display: 'flex', gap: '.4rem', alignItems: 'center', cursor: 'pointer', fontSize: '.85rem', color: form.event === v ? 'var(--navy)' : 'var(--muted)', fontFamily: 'var(--sans)' }}>
                          <input type="radio" name="evt" value={v} checked={form.event === v} onChange={e => set('event', e.target.value)} style={{ accentColor: 'var(--bronze)' }} />{l}
                        </label>
                      ))}
                    </div>
                  </div>
                  <div style={{ marginBottom: '2.5rem' }}>
                    <label style={lS}>{F.notes}</label>
                    <textarea value={form.notes} onChange={e => set('notes', e.target.value)} onFocus={() => setFcs('notes')} onBlur={() => setFcs(null)} rows={3} placeholder={F.notesPh} style={{ ...iS('notes'), resize: 'none', borderColor: fcs === 'notes' ? 'var(--bronze)' : 'var(--cream-b)' }} />
                  </div>
                  <button type="submit" className="btn bb" style={{ width: '100%', justifyContent: 'center' }}>{F.submit}</button>
                </form>
              )}
            </div>

            {/* SIDEBAR */}
            <div className="contact-side" style={{ position: 'sticky', top: 'calc(var(--nav) + 2rem)', display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
              <div style={{ background: '#2D4A6B', padding: '2.5rem' }}>
                <div style={{ fontSize: '.62rem', letterSpacing: '.2em', textTransform: 'uppercase', color: '#8EB4D4', marginBottom: '.75rem', fontFamily: 'var(--sans)' }}>{c.sidebar.groupTitle}</div>
                <p style={{ fontSize: '.85rem', fontWeight: 300, color: 'rgba(255,255,255,.5)', lineHeight: 1.8, marginBottom: '1.5rem' }}>{c.sidebar.groupBody}</p>
                <div style={{ fontSize: '.62rem', letterSpacing: '.15em', textTransform: 'uppercase', color: '#8EB4D4', marginBottom: '.4rem', fontFamily: 'var(--sans)' }}>{c.sidebar.directLine}</div>
                <div style={{ fontFamily: 'var(--srf)', fontSize: '1.9rem', fontStyle: 'italic', color: '#fff', marginBottom: '1.5rem', lineHeight: 1.15 }}>{SHARED.phone}</div>
                <a href={SHARED.phoneHref} className="btn bg" style={{ fontSize: '.65rem', padding: '.75rem 1.5rem', display: 'inline-flex' }}>{c.sidebar.call}</a>
              </div>
              <div style={{ border: '1px solid var(--cream-b)', padding: '2rem' }}>
                <div style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--cream-b)' }}>
                  <div style={{ fontSize: '.6rem', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--bronze)', marginBottom: '.6rem', fontFamily: 'var(--sans)' }}>{c.sidebar.locationTitle}</div>
                  <p style={{ fontSize: '.875rem', fontWeight: 300, color: 'var(--body)', lineHeight: 1.8 }}>{SHARED.addressLines[0]}<br/>{SHARED.addressLines[1]}<br/>{SHARED.addressLines[2]}</p>
                </div>
                <div style={{ marginBottom: '1.5rem', paddingBottom: '1.5rem', borderBottom: '1px solid var(--cream-b)' }}>
                  <div style={{ fontSize: '.6rem', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--bronze)', marginBottom: '.6rem', fontFamily: 'var(--sans)' }}>{c.sidebar.arrivalTitle}</div>
                  <p style={{ fontSize: '.875rem', fontWeight: 300, color: 'var(--body)', lineHeight: 1.8 }}>{c.sidebar.arrivalBody}</p>
                </div>
                <div>
                  <div style={{ fontSize: '.6rem', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--bronze)', marginBottom: '.75rem', fontFamily: 'var(--sans)' }}>{c.sidebar.hoursTitle}</div>
                  {c.sidebar.hours.map(([k, v]) => (
                    <div key={k} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '.85rem', marginBottom: '.5rem' }}>
                      <span style={{ fontWeight: 400 }}>{k}</span>
                      <span style={{ color: 'var(--muted)', fontWeight: 300 }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map — gerçek Google Maps embed (API anahtarı gerektirmez) */}
      <div className="contact-map" style={{ position: 'relative', height: 400, overflow: 'hidden' }}>
        <iframe
          title={c.mapTitle}
          src={MAP_SRC}
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', border: 0 }}
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          allowFullScreen
        ></iframe>
        <div className="map-card" style={{ position: 'absolute', bottom: '2rem', left: '3rem', background: 'var(--navy)', padding: '1.5rem 2rem', zIndex: 2, pointerEvents: 'none' }}>
          <div style={{ fontSize: '.6rem', letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--bronze)', marginBottom: '.4rem' }}>{BRAND}</div>
          <p style={{ fontSize: '.8rem', color: 'rgba(255,255,255,.65)', lineHeight: 1.7 }}>{SHARED.addressLines[0]}<br/>{SHARED.addressLines[1]}, {SHARED.addressLines[2]}</p>
        </div>
      </div>
    </div>
  );
}

export default ContactPage;
