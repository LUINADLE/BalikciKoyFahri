// components/GalleryPage.jsx

function GalleryPage({ setPage }) {

  const galleryItems = [
    { label: 'Diplomatic Private\nDining Room',      h: 360 },
    { label: 'Corporate Event Setup\n80 Guests',      h: 480 },
    { label: 'Board Room Dinner\nTable Setting',      h: 360 },
    { label: 'Sommelier Wine\nService Detail',        h: 480 },
    { label: 'Architectural Interior\nDetail & Light', h: 360 },
    { label: 'Fresh Seafood\nMorning Display',        h: 360 },
  ];

  const services = [
    {
      title: 'Diplomatik Davetler',
      items: ['Protokol standartlarına tam uyum', 'Özel giriş & ayrı çıkış düzeni', 'Tam gizlilik garantisi', 'Tercüman koordinasyon servisi', 'Güvenlik ekibi koordinasyonu'],
    },
    {
      title: 'Kurumsal Etkinlikler',
      items: ['Marka kimliğine uygun dekor', 'AV ekipman & teknik destek', 'Kişiye özel menü tasarımı', '10 – 80 kişilik esnek kapasiteler', 'Post-event catering seçeneği'],
    },
    {
      title: 'VIP Özel Salonlar',
      items: ['3 bağımsız özel yemek odası', 'Kişiye özel şarap seçkisi', 'Adanmış servis personeli', 'Pre-event konsültasyon hizmeti', 'Özel masa düzenlemesi'],
    },
  ];

  return (
    <div className="page-enter" style={{ paddingTop: 'var(--nav-h)' }}>

      {/* ── PAGE HEADER ──────────────────────────── */}
      <section style={{ background: 'var(--navy)', padding: '6rem 0 5rem', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(-45deg, transparent, transparent 28px, rgba(253,251,247,0.01) 28px, rgba(253,251,247,0.01) 29px)' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1 }}>
          <p className="overline" style={{ marginBottom: '1.5rem' }}>Galeri & Hakkımızda</p>
          <h1 className="headline-xl" style={{ color: 'var(--cream)', maxWidth: '620px', marginBottom: '2rem' }}>
            Spaces Designed for<br/><em>Exceptional Moments</em>
          </h1>
          <span className="accent-line"></span>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.875rem', fontWeight: 300, color: 'rgba(253,251,247,0.42)', maxWidth: '480px', lineHeight: 1.9, marginTop: '1.5rem' }}>
            Diplomatik görüşmelerden kurumsal öğle yemeklerine, özel gruplardan devlet protokol davetlerine kadar her ölçekte etkinliğe ev sahipliği yapıyoruz.
          </p>
        </div>
      </section>

      {/* ── GALLERY GRID ─────────────────────────── */}
      <section className="section--sm">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1rem' }}>
            {galleryItems.map((item, i) => (
              <div
                key={i}
                className="img-ph"
                style={{
                  height: item.h,
                  gridRow: item.h === 480 ? 'span 1' : 'auto',
                }}
              >
                <label style={{ whiteSpace: 'pre-line', textAlign: 'center' }}>{item.label}</label>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── ABOUT ────────────────────────────────── */}
      <section className="section" style={{ background: 'var(--cream-dark)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>

            {/* Image */}
            <div className="img-ph" style={{ height: '580px' }}>
              <label>Marea Restaurant<br/>Exterior / Interior<br/>Architecture</label>
            </div>

            {/* Text */}
            <div>
              <p className="overline" style={{ marginBottom: '1.5rem' }}>Hakkımızda</p>
              <h2 className="headline-lg" style={{ marginBottom: '0.5rem' }}>
                Ankara'nın Deniz<br/>Gastronomi Merkezi
              </h2>
              <span className="accent-line" style={{ margin: '1.75rem 0', display: 'block' }}></span>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.9, color: 'var(--text-body)', marginBottom: '1.25rem' }}>
                2019 yılında kurulan Marea, Ankara'nın diplomatik bölgesinin kalbinde konumlanan ve başkentteki en seçkin isimlerin tercih ettiği deniz ürünleri restoranıdır.
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.9, color: 'var(--text-body)', marginBottom: '1.25rem' }}>
                Restoranımız; büyükelçiler, bakanlar, üst düzey yöneticiler ve iş dünyasının önde gelen isimleri tarafından gizlilik, kalite ve sınıfın bir arada arandığı adres olarak benimsenmiştir.
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.9, color: 'var(--text-body)', marginBottom: '2.5rem' }}>
                7 yılı aşkın süredir denizin en tazesini başkente taşıma misyonumuzu sürdürmekte; her tabakta mükemmeliyeti hedeflemekteyiz.
              </p>

              {/* Stats */}
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '2rem', paddingTop: '2rem', borderTop: '1px solid var(--cream-border)' }}>
                {[['7+', 'Yıllık Deneyim'], ['120', 'Kişi Kapasitesi'], ['300+', 'Şarap Çeşidi']].map(([num, lbl]) => (
                  <div key={lbl}>
                    <div style={{ fontFamily: 'var(--serif)', fontSize: '2.8rem', fontWeight: 300, color: 'var(--bronze)', lineHeight: 1, marginBottom: '0.3rem' }}>{num}</div>
                    <div style={{ fontFamily: 'var(--sans)', fontSize: '0.65rem', letterSpacing: '0.15em', textTransform: 'uppercase', color: 'var(--text-muted)' }}>{lbl}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ── SERVICES ─────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <p className="overline" style={{ marginBottom: '1rem' }}>Özel Etkinlikler</p>
            <h2 className="headline-xl">Corporate &amp; Private<br/><em>Dining</em></h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem', marginBottom: '4rem' }}>
            {services.map(svc => (
              <div key={svc.title} style={{ padding: '2.8rem 2.5rem', border: '1px solid var(--cream-border)' }}>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.5rem', fontWeight: 400, color: 'var(--navy)', marginBottom: '1.5rem' }}>{svc.title}</h3>
                <span className="accent-line" style={{ marginBottom: '1.75rem', display: 'block' }}></span>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '0.8rem' }}>
                  {svc.items.map(item => (
                    <li key={item} style={{ display: 'flex', gap: '0.75rem', alignItems: 'flex-start', fontSize: '0.875rem', color: 'var(--text-body)', lineHeight: 1.55 }}>
                      <span style={{ color: 'var(--bronze)', marginTop: '0.1rem', flexShrink: 0, fontSize: '0.9rem' }}>—</span>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center' }}>
            <button onClick={() => setPage('contact')} className="btn btn-primary">
              Etkinlik Sorgula
            </button>
          </div>
        </div>
      </section>

      {/* ── WIDE IMAGE ───────────────────────────── */}
      <div className="img-ph" style={{ height: '380px' }}>
        <label>Full-Width Venue<br/>Private Dining Hall<br/>Event Setup</label>
      </div>

    </div>
  );
}

Object.assign(window, { GalleryPage });
