// components/Footer.jsx

function Footer({ setPage }) {
  const year = new Date().getFullYear();

  const col = {
    label: { fontSize: '0.62rem', letterSpacing: '0.22em', textTransform: 'uppercase', color: 'var(--bronze)', marginBottom: '1.5rem', display: 'block', fontFamily: 'var(--sans)', fontWeight: 500 },
    link:  { fontFamily: 'var(--sans)', fontSize: '0.875rem', fontWeight: 300, color: 'rgba(253,251,247,0.5)', background: 'none', border: 'none', cursor: 'pointer', padding: 0, textAlign: 'left', transition: 'color 0.2s ease', display: 'block' },
    text:  { fontFamily: 'var(--sans)', fontSize: '0.875rem', fontWeight: 300, color: 'rgba(253,251,247,0.5)', lineHeight: 1.85 },
  };

  return (
    <footer style={{ backgroundColor: 'var(--navy)', paddingTop: '5rem', paddingBottom: '2.5rem' }}>
      <div className="container">

        {/* Top rule */}
        <div style={{ height: '1px', background: 'rgba(253,251,247,0.07)', marginBottom: '4rem' }}></div>

        {/* Columns */}
        <div style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '3.5rem', marginBottom: '4rem' }}>

          {/* Brand */}
          <div>
            <div style={{ fontFamily: 'var(--serif)', fontSize: '2.2rem', fontStyle: 'italic', color: 'var(--cream)', marginBottom: '1.25rem', lineHeight: 1 }}>
              Marea
            </div>
            <p style={{ ...col.text, maxWidth: '300px', marginBottom: '1.75rem' }}>
              Ankara'nın en seçkin sofrası. Her sabah Ege ve Akdeniz'den toplanan taze deniz ürünleri ile başkentte eşsiz bir gastronomi deneyimi.
            </p>
            <div style={{ display: 'flex', gap: '1.5rem', alignItems: 'center' }}>
              <span style={{ fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--bronze)' }}>
                Sal – Paz
              </span>
              <span style={{ color: 'rgba(253,251,247,0.15)' }}>·</span>
              <span style={col.text}>12:00 – 23:00</span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <span style={col.label}>Navigation</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.85rem' }}>
              {[['home','Home'],['menu','Menu'],['gallery','Gallery & About'],['contact','Reservations']].map(([id, label]) => (
                <button
                  key={id}
                  onClick={() => setPage(id)}
                  style={col.link}
                  onMouseEnter={e => e.currentTarget.style.color = 'var(--cream)'}
                  onMouseLeave={e => e.currentTarget.style.color = 'rgba(253,251,247,0.5)'}
                >
                  {label}
                </button>
              ))}
            </div>
          </div>

          {/* Contact */}
          <div>
            <span style={col.label}>Contact</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem' }}>
              <span style={col.text}>Kavaklıdere Cad. No: 42</span>
              <span style={col.text}>Çankaya, Ankara</span>
              <span style={col.text}>Türkiye</span>
              <span style={{ ...col.text, marginTop: '0.75rem' }}>+90 312 555 00 00</span>
              <span style={col.text}>rezervasyon@marea.com.tr</span>
            </div>
          </div>

          {/* Hours */}
          <div>
            <span style={col.label}>Çalışma Saatleri</span>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '0.75rem' }}>
              {[
                ['Sal – Cum',  '12:00–15:00, 18:00–23:00'],
                ['Cmt – Paz',  '12:00–15:30, 18:00–23:30'],
                ['Pazartesi',  'Kapalı'],
              ].map(([day, hours]) => (
                <div key={day}>
                  <div style={{ fontSize: '0.75rem', fontWeight: 500, color: 'rgba(253,251,247,0.7)', marginBottom: '0.1rem' }}>{day}</div>
                  <div style={{ fontSize: '0.78rem', color: 'rgba(253,251,247,0.38)', fontFamily: 'var(--sans)', fontWeight: 300 }}>{hours}</div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div style={{ borderTop: '1px solid rgba(253,251,247,0.07)', paddingTop: '1.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <span style={{ fontSize: '0.72rem', color: 'rgba(253,251,247,0.3)', fontFamily: 'var(--sans)', fontWeight: 300, letterSpacing: '0.05em' }}>
            © {year} Marea Restaurant. Tüm hakları saklıdır.
          </span>
          <span style={{ fontSize: '0.68rem', color: 'var(--bronze)', letterSpacing: '0.18em', textTransform: 'uppercase' }}>
            Ankara · Türkiye
          </span>
        </div>

      </div>
    </footer>
  );
}

Object.assign(window, { Footer });
