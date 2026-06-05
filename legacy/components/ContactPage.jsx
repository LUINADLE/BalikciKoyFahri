// components/ContactPage.jsx

function ContactPage() {
  const [form, setForm]         = React.useState({ name:'', phone:'', email:'', date:'', time:'', guests:'2', event:'individual', notes:'' });
  const [focused, setFocused]   = React.useState(null);
  const [submitted, setSubmitted] = React.useState(false);
  const [errors, setErrors]     = React.useState({});

  const update = (k, v) => setForm(p => ({ ...p, [k]: v }));

  const validate = () => {
    const e = {};
    if (!form.name.trim())  e.name  = 'Ad soyad zorunludur';
    if (!form.phone.trim()) e.phone = 'Telefon zorunludur';
    if (!form.date)         e.date  = 'Tarih zorunludur';
    if (!form.time)         e.time  = 'Saat seçiniz';
    return e;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }
    setSubmitted(true);
  };

  /* ---- shared style helpers ---- */
  const fieldWrap = { display: 'flex', flexDirection: 'column', gap: '0.45rem' };

  const labelS = {
    fontFamily:    'var(--sans)',
    fontSize:      '0.62rem',
    fontWeight:    500,
    letterSpacing: '0.2em',
    textTransform: 'uppercase',
    color:         'var(--text-muted)',
  };

  const inputS = (name) => ({
    width:         '100%',
    background:    'transparent',
    border:        'none',
    borderBottom:  `1.5px solid ${errors[name] ? '#B33A3A' : focused === name ? 'var(--bronze)' : 'var(--cream-border)'}`,
    padding:       '0.65rem 0',
    fontSize:      '0.95rem',
    fontFamily:    'var(--sans)',
    fontWeight:    300,
    color:         'var(--navy)',
    outline:       'none',
    transition:    'border-color 0.25s ease',
    borderRadius:  0,
  });

  const selectS = (name) => ({ ...inputS(name), cursor: 'pointer', appearance: 'none', paddingRight: '1.5rem' });

  const errS = { fontFamily: 'var(--sans)', fontSize: '0.7rem', color: '#B33A3A', marginTop: '0.2rem' };

  /* ---- render ---- */
  return (
    <div className="page-enter" style={{ paddingTop: 'var(--nav-h)' }}>

      {/* ── PAGE HEADER ──────────────────────────── */}
      <section style={{ background: 'var(--navy)', padding: '6rem 0 5rem' }}>
        <div className="container">
          <p className="overline" style={{ marginBottom: '1.5rem' }}>İletişim &amp; Rezervasyon</p>
          <h1 className="headline-xl" style={{ color: 'var(--cream)', maxWidth: '560px', marginBottom: '2rem' }}>
            Reserve Your<br/><em>Table or Event</em>
          </h1>
          <span className="accent-line"></span>
        </div>
      </section>

      {/* ── MAIN CONTENT ─────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1.25fr 1fr', gap: '6rem', alignItems: 'flex-start' }}>

            {/* ── FORM ──────────────────────────── */}
            <div>
              {submitted ? (
                <div style={{ padding: '4rem 3rem', border: '1px solid var(--cream-border)', textAlign: 'center' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '2.8rem', fontStyle: 'italic', color: 'var(--navy)', marginBottom: '0.5rem' }}>Teşekkürler</div>
                  <span className="accent-line" style={{ margin: '1.5rem auto', display: 'block' }}></span>
                  <p style={{ fontFamily: 'var(--sans)', fontSize: '0.9rem', fontWeight: 300, color: 'var(--text-body)', lineHeight: 1.9, maxWidth: '380px', margin: '0 auto 2rem' }}>
                    Rezervasyon talebiniz alındı. En geç <strong style={{ fontWeight: 500 }}>24 saat</strong> içinde onay için sizinle iletişime geçeceğiz.
                  </p>
                  <p style={{ fontFamily: 'var(--sans)', fontSize: '0.82rem', color: 'var(--text-muted)' }}>
                    Acil talepler:{' '}
                    <a href="tel:+903125550000" style={{ color: 'var(--bronze)', fontWeight: 500 }}>+90 312 555 00 00</a>
                  </p>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>
                  <h2 style={{ fontFamily: 'var(--serif)', fontSize: '2.2rem', fontWeight: 400, marginBottom: '3rem' }}>
                    Rezervasyon Formu
                  </h2>

                  {/* Name + Phone */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                    <div style={fieldWrap}>
                      <label style={labelS}>Ad Soyad *</label>
                      <input value={form.name} onChange={e => update('name', e.target.value)}
                        onFocus={() => setFocused('name')} onBlur={() => setFocused(null)}
                        style={inputS('name')} placeholder="Ad Soyad" />
                      {errors.name && <span style={errS}>{errors.name}</span>}
                    </div>
                    <div style={fieldWrap}>
                      <label style={labelS}>Telefon *</label>
                      <input value={form.phone} onChange={e => update('phone', e.target.value)}
                        onFocus={() => setFocused('phone')} onBlur={() => setFocused(null)}
                        style={inputS('phone')} placeholder="+90 5XX XXX XX XX" />
                      {errors.phone && <span style={errS}>{errors.phone}</span>}
                    </div>
                  </div>

                  {/* Email */}
                  <div style={{ ...fieldWrap, marginBottom: '2rem' }}>
                    <label style={labelS}>E-posta</label>
                    <input type="email" value={form.email} onChange={e => update('email', e.target.value)}
                      onFocus={() => setFocused('email')} onBlur={() => setFocused(null)}
                      style={inputS('email')} placeholder="ornek@email.com" />
                  </div>

                  {/* Date + Time + Guests */}
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: '2rem', marginBottom: '2rem' }}>
                    <div style={fieldWrap}>
                      <label style={labelS}>Tarih *</label>
                      <input type="date" value={form.date} onChange={e => update('date', e.target.value)}
                        onFocus={() => setFocused('date')} onBlur={() => setFocused(null)}
                        style={inputS('date')} />
                      {errors.date && <span style={errS}>{errors.date}</span>}
                    </div>
                    <div style={fieldWrap}>
                      <label style={labelS}>Saat *</label>
                      <div style={{ position: 'relative' }}>
                        <select value={form.time} onChange={e => update('time', e.target.value)}
                          onFocus={() => setFocused('time')} onBlur={() => setFocused(null)}
                          style={selectS('time')}>
                          <option value="">Seçiniz</option>
                          {['12:00','12:30','13:00','13:30','14:00','14:30','18:00','18:30','19:00','19:30','20:00','20:30','21:00','21:30','22:00','22:30'].map(t => (
                            <option key={t} value={t}>{t}</option>
                          ))}
                        </select>
                        <span style={{ position:'absolute', right:0, top:'50%', transform:'translateY(-50%)', fontSize:'0.7rem', color:'var(--text-muted)', pointerEvents:'none' }}>▾</span>
                      </div>
                      {errors.time && <span style={errS}>{errors.time}</span>}
                    </div>
                    <div style={fieldWrap}>
                      <label style={labelS}>Kişi Sayısı</label>
                      <div style={{ position: 'relative' }}>
                        <select value={form.guests} onChange={e => update('guests', e.target.value)}
                          onFocus={() => setFocused('guests')} onBlur={() => setFocused(null)}
                          style={selectS('guests')}>
                          {['1','2','3','4','5','6','7','8','9','10','10–20','20–50','50+'].map(g => (
                            <option key={g} value={g}>{g}</option>
                          ))}
                        </select>
                        <span style={{ position:'absolute', right:0, top:'50%', transform:'translateY(-50%)', fontSize:'0.7rem', color:'var(--text-muted)', pointerEvents:'none' }}>▾</span>
                      </div>
                    </div>
                  </div>

                  {/* Event type */}
                  <div style={{ ...fieldWrap, marginBottom: '2rem' }}>
                    <label style={labelS}>Etkinlik Türü</label>
                    <div style={{ display: 'flex', gap: '1.5rem', flexWrap: 'wrap', paddingTop: '0.6rem' }}>
                      {[
                        ['individual', 'Bireysel'],
                        ['corporate',  'Kurumsal'],
                        ['diplomatic', 'Diplomatik'],
                        ['vip',        'VIP Özel Salon'],
                      ].map(([val, lbl]) => (
                        <label key={val} style={{ display: 'flex', alignItems: 'center', gap: '0.5rem', cursor: 'pointer', fontFamily: 'var(--sans)', fontSize: '0.85rem', color: form.event === val ? 'var(--navy)' : 'var(--text-muted)', transition: 'color 0.2s' }}>
                          <input type="radio" name="event" value={val} checked={form.event === val}
                            onChange={e => update('event', e.target.value)}
                            style={{ accentColor: 'var(--bronze)', width: '14px', height: '14px' }} />
                          {lbl}
                        </label>
                      ))}
                    </div>
                  </div>

                  {/* Notes */}
                  <div style={{ ...fieldWrap, marginBottom: '3rem' }}>
                    <label style={labelS}>Özel Notlar &amp; Talepler</label>
                    <textarea value={form.notes} onChange={e => update('notes', e.target.value)}
                      onFocus={() => setFocused('notes')} onBlur={() => setFocused(null)}
                      rows={4} placeholder="Diyet kısıtlamaları, özel dekor, doğum günü, erişilebilirlik gereksinimleri…"
                      style={{ ...inputS('notes'), resize: 'none', borderBottom: `1.5px solid ${focused === 'notes' ? 'var(--bronze)' : 'var(--cream-border)'}`, paddingTop: '0.65rem' }} />
                  </div>

                  <button type="submit" className="btn btn-primary" style={{ width: '100%', justifyContent: 'center' }}>
                    Rezervasyon Talebi Gönder
                  </button>
                </form>
              )}
            </div>

            {/* ── SIDEBAR ───────────────────────── */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem', position: 'sticky', top: 'calc(var(--nav-h) + 2rem)' }}>

              {/* Call to Reserve */}
              <div style={{ background: 'var(--navy)', padding: '2.8rem' }}>
                <span style={{ fontFamily: 'var(--sans)', fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--bronze)', display: 'block', marginBottom: '1.1rem' }}>
                  Hemen Ara
                </span>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '2rem', fontStyle: 'italic', color: 'var(--cream)', marginBottom: '0.5rem', lineHeight: 1.15 }}>
                  +90 312 555 00 00
                </div>
                <p style={{ fontFamily: 'var(--sans)', fontSize: '0.8rem', fontWeight: 300, color: 'rgba(253,251,247,0.42)', lineHeight: 1.85, marginBottom: '2rem' }}>
                  Asistanlar ve VIP misafirler için özel rezervasyon hattı. Her zaman bir yetkiliye bağlanırsınız.
                </p>
                <a href="tel:+903125550000" className="btn btn-ghost" style={{ fontSize: '0.68rem', padding: '0.85rem 1.8rem', display: 'inline-flex' }}>
                  Hemen Ara →
                </a>
              </div>

              {/* Hours */}
              <div style={{ border: '1px solid var(--cream-border)', padding: '2.2rem' }}>
                <span style={{ fontFamily: 'var(--sans)', fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--bronze)', display: 'block', marginBottom: '1.5rem' }}>
                  Çalışma Saatleri
                </span>
                {[['Salı – Cuma', '12:00–15:00  ·  18:00–23:00'],['Cumartesi – Pazar', '12:00–15:30  ·  18:00–23:30'],['Pazartesi', 'Kapalı']].map(([day, hrs]) => (
                  <div key={day} style={{ display: 'flex', justifyContent: 'space-between', fontSize: '0.84rem', padding: '0.85rem 0', borderBottom: '1px solid var(--cream-border)' }}>
                    <span style={{ fontWeight: 400, color: 'var(--navy)' }}>{day}</span>
                    <span style={{ fontFamily: 'var(--sans)', fontWeight: 300, color: 'var(--text-muted)' }}>{hrs}</span>
                  </div>
                ))}
              </div>

              {/* Address + Valet */}
              <div style={{ border: '1px solid var(--cream-border)', padding: '2.2rem' }}>
                <span style={{ fontFamily: 'var(--sans)', fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--bronze)', display: 'block', marginBottom: '1.25rem' }}>
                  Konum &amp; Vale Park
                </span>
                <p style={{ fontFamily: 'var(--sans)', fontSize: '0.875rem', fontWeight: 300, color: 'var(--text-body)', lineHeight: 1.85, marginBottom: '1.5rem' }}>
                  Kavaklıdere Cad. No: 42<br/>Çankaya, 06680 Ankara<br/>Türkiye
                </p>
                <div style={{ display: 'flex', gap: '0.6rem', alignItems: 'flex-start' }}>
                  <span style={{ color: 'var(--bronze)', marginTop: '0.1rem', flexShrink: 0 }}>—</span>
                  <p style={{ fontFamily: 'var(--sans)', fontSize: '0.82rem', fontWeight: 300, color: 'var(--text-muted)', lineHeight: 1.7 }}>
                    Vale park hizmeti mevcuttur. Araç teslimi resepsiyona bildirildiğinde gerçekleştirilir. <strong style={{ color: 'var(--navy)', fontWeight: 400 }}>₺150 / araç</strong>
                  </p>
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>

      {/* ── MAP SECTION ──────────────────────────── */}
      <div style={{ position: 'relative', height: '420px', overflow: 'hidden' }}>
        <div className="img-ph" style={{ position: 'absolute', inset: 0, height: '100%' }}>
          <label>Google Maps<br/>Kavaklıdere, Çankaya<br/>Ankara, Türkiye</label>
        </div>
        {/* Address card */}
        <div style={{ position: 'absolute', bottom: '2.5rem', left: '3rem', background: 'var(--navy)', padding: '1.6rem 2rem', maxWidth: '260px', zIndex: 2 }}>
          <span style={{ fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.2em', textTransform: 'uppercase', color: 'var(--bronze)', display: 'block', marginBottom: '0.6rem' }}>Marea Restaurant</span>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.82rem', fontWeight: 300, color: 'rgba(253,251,247,0.65)', lineHeight: 1.7 }}>
            Kavaklıdere Cad. No: 42<br/>Çankaya, Ankara
          </p>
        </div>
      </div>

    </div>
  );
}

Object.assign(window, { ContactPage });
