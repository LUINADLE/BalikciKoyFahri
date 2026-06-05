// src/pages/HomePage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Img from '../components/Img.jsx';
import { images } from '../data/images.js';
import { useLang } from '../i18n.jsx';
import { BRAND, SHARED } from '../data/content.js';

function HomePage() {
  const navigate = useNavigate();
  const { t } = useLang();
  const h = t.home;
  const go = (id) => navigate(id === 'home' ? '/' : '/' + id);

  const [vis, setVis] = React.useState(false);
  React.useEffect(() => { const t = setTimeout(() => setVis(true), 80); return () => clearTimeout(t); }, []);
  const fd = d => ({ opacity: vis ? 1 : 0, transform: vis ? 'none' : 'translateY(22px)', transition: `opacity .9s ease ${d}s,transform .9s ease ${d}s` });

  const grid = [
    { src: images.gallery1, h: 320 }, { src: images.gallery2, h: 420 }, { src: images.gallery3, h: 320 },
    { src: images.gallery4, h: 320 }, { src: images.gallery5, h: 420 }, { src: images.gallery6, h: 320 },
  ];

  return (
    <div>
      {/* HERO */}
      <section style={{ height: '100vh', minHeight: 640, position: 'relative', display: 'flex', alignItems: 'center', justifyContent: 'center', overflow: 'hidden' }}>
        <Img src={images.hero} alt={`${BRAND} — taze deniz ürünleri`} style={{ position: 'absolute', inset: 0 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(9,15,27,.74)' }}></div>
        <div style={{ position: 'absolute', width: 'min(800px, 120vw)', height: 'min(800px, 120vw)', background: 'radial-gradient(circle,rgba(156,107,88,.07) 0%,transparent 65%)', top: '50%', left: '50%', transform: 'translate(-50%,-50%)', pointerEvents: 'none' }}></div>
        <div className="wrap" style={{ position: 'relative', zIndex: 1, textAlign: 'center' }}>
          <div style={{ maxWidth: 720, margin: '0 auto' }}>
            <div className="overline" style={{ ...fd(.1), marginBottom: '2rem' }}>{h.hero.overline}</div>
            <h1 className="shero" style={{ ...fd(.3), marginBottom: '2rem', whiteSpace: 'pre-line' }}>{h.hero.title}</h1>
            <div style={{ ...fd(.45), width: '2.5rem', height: '1.5px', background: 'var(--bronze)', margin: '0 auto 2rem' }}></div>
            <p style={{ ...fd(.55), fontSize: '.975rem', fontWeight: 300, color: 'rgba(255,255,255,.46)', maxWidth: 400, lineHeight: 1.85, margin: '0 auto 3rem' }}>{h.hero.sub}</p>
            <div style={{ ...fd(.7), display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
              <button onClick={() => go('contact')} className="btn bb">{h.hero.book}</button>
              <button onClick={() => go('menu')} className="btn bg">{h.hero.menu}</button>
            </div>
          </div>
        </div>
        <div style={{ position: 'absolute', bottom: '2.5rem', left: '50%', transform: 'translateX(-50%)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '.5rem' }}>
          <span style={{ fontSize: '.6rem', letterSpacing: '.25em', textTransform: 'uppercase', color: 'rgba(255,255,255,.22)' }}>{h.hero.scroll}</span>
          <div style={{ width: 1, height: 40, background: 'linear-gradient(to bottom,rgba(156,107,88,.5),transparent)' }}></div>
        </div>
      </section>

      {/* BRONZE BAND */}
      <div style={{ background: 'var(--bronze)', padding: '1rem 0' }}>
        <div className="wrap">
          <div style={{ display: 'flex', justifyContent: 'center', gap: '5rem', flexWrap: 'wrap' }}>
            {h.band.map(([title, sub]) => (
              <div key={title} style={{ textAlign: 'center', color: '#fff' }}>
                <div style={{ fontFamily: 'var(--srf)', fontSize: '1.1rem', fontWeight: 500, marginBottom: '.2rem' }}>{title}</div>
                <div style={{ fontSize: '.68rem', letterSpacing: '.12em', textTransform: 'uppercase', opacity: .72 }}>{sub}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* STORY */}
      <section className="sec">
        <div className="wrap">
          <div className="g2">
            <div>
              <p className="overline" style={{ marginBottom: '1.5rem' }}>{h.story.overline}</p>
              <h2 className="sxl" style={{ marginBottom: '.5rem', whiteSpace: 'pre-line' }}>{h.story.title}</h2>
              <span className="ac" style={{ margin: '1.75rem 0' }}></span>
              <p style={{ fontSize: '.95rem', lineHeight: 1.9, color: 'var(--body)', marginBottom: '1.25rem' }}>{h.story.p1}</p>
              <p style={{ fontSize: '.95rem', lineHeight: 1.9, color: 'var(--body)', marginBottom: '2.5rem' }}>{h.story.p2}</p>
              <button onClick={() => go('gallery')} className="btn bl">{h.story.cta}</button>
            </div>
            <Img src={images.storyInterior} alt={`${BRAND} — iç mekan`} style={{ height: 520 }} />
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section className="sec" style={{ background: 'var(--cream-d)' }}>
        <div className="wrap">
          <div className="tc" style={{ marginBottom: '4.5rem' }}>
            <p className="overline" style={{ marginBottom: '1rem' }}>{h.features.overline}</p>
            <h2 className="sxl">{h.features.title}</h2>
          </div>
          <div className="g3">
            {h.features.cards.map(x => (
              <div key={x.n} style={{ padding: '2.5rem', background: 'var(--cream)', border: '1px solid var(--cream-b)' }}>
                <div style={{ fontFamily: 'var(--srf)', fontSize: '3.5rem', fontWeight: 300, color: 'var(--cream-b)', lineHeight: 1, marginBottom: '1.25rem' }}>{x.n}</div>
                <h3 style={{ fontFamily: 'var(--srf)', fontSize: '1.35rem', fontWeight: 400, marginBottom: '.85rem' }}>{x.t}</h3>
                <p style={{ fontSize: '.875rem', lineHeight: 1.85, color: 'var(--muted)' }}>{x.b}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* IMAGE GRID */}
      <section className="sec-sm">
        <div className="wrap">
          <div className="g3">
            {grid.map((g, i) => (
              <Img key={i} className="gimg" src={g.src} alt={`${BRAND} ${i + 1}`} style={{ height: g.h }} />
            ))}
          </div>
        </div>
      </section>

      {/* CTA BANNER */}
      <section style={{ background: 'var(--navy)', padding: '8rem 0', textAlign: 'center', position: 'relative', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'repeating-linear-gradient(-45deg,transparent,transparent 28px,rgba(255,255,255,.012) 28px,rgba(255,255,255,.012) 29px)' }}></div>
        <div className="wrap" style={{ position: 'relative', zIndex: 1 }}>
          <p className="overline" style={{ marginBottom: '1.5rem' }}>{h.cta.overline}</p>
          <h2 className="sxl" style={{ color: '#fff', marginBottom: '1rem', whiteSpace: 'pre-line' }}>{h.cta.title}</h2>
          <p style={{ fontSize: '.9rem', fontWeight: 300, color: 'rgba(255,255,255,.38)', maxWidth: 440, margin: '0 auto 3rem' }}>{h.cta.sub}</p>
          <div style={{ display: 'flex', gap: '1rem', justifyContent: 'center', flexWrap: 'wrap' }}>
            <button onClick={() => go('contact')} className="btn bb">{h.cta.book}</button>
            <a href={SHARED.phoneHref} className="btn bg">{SHARED.phone}</a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default HomePage;
