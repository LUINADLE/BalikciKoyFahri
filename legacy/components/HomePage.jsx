// components/HomePage.jsx

const { useState: useHomeState, useEffect: useHomeEffect } = React;

function HomePage({ setPage }) {
  const [visible, setVisible] = useHomeState(false);

  useHomeEffect(() => {
    const t = setTimeout(() => setVisible(true), 80);
    return () => clearTimeout(t);
  }, []);

  const fade = (delay = 0) => ({
    opacity:    visible ? 1 : 0,
    transform:  visible ? 'none' : 'translateY(22px)',
    transition: `opacity 0.9s ease ${delay}s, transform 0.9s ease ${delay}s`,
  });

  return (
    <div>

      {/* ── HERO ──────────────────────────────────── */}
      <section style={{
        height:     '100vh',
        minHeight:  '680px',
        background: '#090F1B',
        position:   'relative',
        display:    'flex',
        alignItems: 'center',
        overflow:   'hidden',
      }}>
        {/* Diagonal texture */}
        <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(-45deg, transparent, transparent 28px, rgba(253,251,247,0.012) 28px, rgba(253,251,247,0.012) 29px)' }}></div>

        {/* Warm glow — simulates candlelight from right */}
        <div style={{ position: 'absolute', top: '45%', right: '22%', width: '700px', height: '700px', background: 'radial-gradient(circle, rgba(200,122,83,0.07) 0%, transparent 65%)', transform: 'translate(50%,-50%)', pointerEvents: 'none' }}></div>

        {/* Image frame placeholder — right side */}
        <div className="img-ph img-ph--dark" style={{
          position: 'absolute', top: '12%', right: '6%',
          width: '36%', height: '72%',
          border: '1px solid rgba(253,251,247,0.05)',
        }}>
          <label>Hero Image<br/>Premium Seafood<br/>Table Setting</label>
        </div>

        {/* Content */}
        <div className="container" style={{ position: 'relative', zIndex: 2 }}>
          <div style={{ maxWidth: '680px' }}>
            <div className="overline" style={{ ...fade(0.1), marginBottom: '2rem' }}>
              Ankara · Est. 2019
            </div>

            <h1 className="headline-display" style={{ ...fade(0.3), marginBottom: '2rem' }}>
              Freshness<br/>brought to the<br/>capital daily.
            </h1>

            {/* Bronze rule */}
            <div style={{ ...fade(0.5), width: '3rem', height: '1.5px', background: 'var(--bronze)', marginBottom: '2rem' }}></div>

            <p style={{ ...fade(0.55), fontFamily: 'var(--sans)', fontSize: '0.975rem', fontWeight: 300, color: 'rgba(253,251,247,0.48)', maxWidth: '400px', lineHeight: 1.85, marginBottom: '3rem' }}>
              Ege ve Akdeniz'in en taze deniz ürünleri, her sabah Ankara'nın kalbine ulaşır.
            </p>

            <div style={{ ...fade(0.7), display: 'flex', gap: '1rem', flexWrap: 'wrap' }}>
              <button onClick={() => setPage('contact')} className="btn btn-primary">
                Book a Table
              </button>
              <button onClick={() => setPage('menu')} className="btn btn-ghost">
                View Menu
              </button>
            </div>
          </div>
        </div>

        {/* Scroll cue */}
        <div style={{ ...fade(1.1), position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '0.6rem' }}>
          <span style={{ fontFamily: 'var(--sans)', fontSize: '0.6rem', letterSpacing: '0.25em', textTransform: 'uppercase', color: 'rgba(253,251,247,0.25)' }}>Scroll</span>
          <div style={{ width: '1px', height: '48px', background: 'linear-gradient(to bottom, rgba(200,122,83,0.5), transparent)' }}></div>
        </div>
      </section>

      {/* ── BRONZE BAND ───────────────────────────── */}
      <div style={{ background: 'var(--bronze)', padding: '2.1rem 0' }}>
        <div className="container">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '5rem', flexWrap: 'wrap' }}>
            {[
              ['Günlük Taze Ürün',       'Her sabah kıyıdan'],
              ['Diplomatik & VIP',        'Seçkin Ankara tercihi'],
              ['Özel Grup Etkinlikleri',  '10 – 120 kişi kapasitesi'],
            ].map(([title, sub]) => (
              <div key={title} style={{ textAlign: 'center', color: 'var(--cream)' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '1.1rem', fontWeight: 500, marginBottom: '0.2rem' }}>{title}</div>
                <div style={{ fontFamily: 'var(--sans)', fontSize: '0.68rem', letterSpacing: '0.12em', textTransform: 'uppercase', opacity: 0.72 }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ── STORY ─────────────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '6rem', alignItems: 'center' }}>
            <div>
              <p className="overline" style={{ marginBottom: '1.5rem' }}>Hikayemiz</p>
              <h2 className="headline-xl" style={{ marginBottom: '0.5rem' }}>
                Ankara'nın En<br/>Seçkin Deniz<br/>Sofrası
              </h2>
              <span className="accent-line" style={{ margin: '2rem 0', display: 'block' }}></span>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.9, color: 'var(--text-body)', marginBottom: '1.25rem' }}>
                Marea, 2019 yılında Ankara'daki diplomatik çevreler ve kurumsal dünyaya gerçek bir Akdeniz lezzet deneyimi sunmak amacıyla hayata geçirildi.
              </p>
              <p style={{ fontSize: '0.95rem', lineHeight: 1.9, color: 'var(--text-body)', marginBottom: '2.75rem' }}>
                Her sabah, Ege ve Akdeniz kıyılarındaki seçkin balıkçılardan teslim alınan taze ürünlerle hazırlanan menümüz; kurumsal etkinlikler, diplomatik davetler ve özel gruplar için eşsiz bir mekan sunar.
              </p>
              <button onClick={() => setPage('gallery')} className="btn btn-outline">
                Hikayemizi Keşfedin
              </button>
            </div>
            <div className="img-ph" style={{ height: '540px' }}>
              <label>Restaurant Interior<br/>Elegant Dining Room</label>
            </div>
          </div>
        </div>
      </section>

      {/* ── FEATURES ──────────────────────────────── */}
      <section className="section" style={{ background: 'var(--cream-dark)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '5rem' }}>
            <p className="overline" style={{ marginBottom: '1rem' }}>Neden Marea</p>
            <h2 className="headline-xl">Excellence in<br/><em>Every Detail</em></h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '1.5rem' }}>
            {[
              { num: '01', title: 'Günlük Taze Ürün',      body: 'Her sabah Ege ve Akdeniz balıkçılarından doğrudan temin edilen deniz ürünleri, aynı gün sofraya taşınır. Taze olmayan hiçbir şey masanıza ulaşmaz.' },
              { num: '02', title: 'Kurumsal & VIP Mekan',  body: "10'dan 120 kişiye kapasiteli özel salonlarımız; büyükelçilik yemekleri, yönetim kurulu akşamları ve devlet protokol etkinlikleri için özenle tasarlanmıştır." },
              { num: '03', title: 'Sommelier Seçkisi',     body: "300'ü aşkın şarap koleksiyonumuzu küratörleyen uzman sommelierimiz, menüdeki her tabakla mükemmel bir uyum yakalamak için masanızda hazır bulunur." },
            ].map(item => (
              <div key={item.num} style={{ padding: '2.8rem 2.5rem', background: 'var(--cream)', border: '1px solid var(--cream-border)' }}>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '3.8rem', fontWeight: 300, color: 'var(--cream-border)', lineHeight: 1, marginBottom: '1.5rem' }}>{item.num}</div>
                <h3 style={{ fontFamily: 'var(--serif)', fontSize: '1.4rem', fontWeight: 400, color: 'var(--navy)', marginBottom: '1rem' }}>{item.title}</h3>
                <p style={{ fontSize: '0.875rem', lineHeight: 1.85, color: 'var(--text-muted)' }}>{item.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FULL-WIDTH CTA ────────────────────────── */}
      <section style={{ background: 'var(--navy)', padding: 'var(--space-xl) 0', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(-45deg, transparent, transparent 28px, rgba(253,251,247,0.012) 28px, rgba(253,251,247,0.012) 29px)', pointerEvents: 'none' }}></div>
        <div className="container" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <p className="overline" style={{ marginBottom: '1.5rem' }}>Masanızı Şimdi Ayırtın</p>
          <h2 className="headline-xl" style={{ color: 'var(--cream)', marginBottom: '1.25rem' }}>
            An Unforgettable<br/><em>Experience Awaits</em>
          </h2>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.9rem', fontWeight: 300, color: 'rgba(253,251,247,0.42)', marginBottom: '3rem', maxWidth: '440px', margin: '0 auto 3rem' }}>
            Grup etkinlikleri, iş yemekleri ve diplomatik davetler için özel organizasyon paketlerimizi keşfedin.
          </p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => setPage('contact')} className="btn btn-primary">
              Rezervasyon Yap
            </button>
            <a href="tel:+903125550000" className="btn btn-ghost">
              +90 312 555 00 00
            </a>
          </div>
        </div>
      </section>

    </div>
  );
}

Object.assign(window, { HomePage });
