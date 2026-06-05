// src/pages/GalleryPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import Img from '../components/Img.jsx';
import { images } from '../data/images.js';
import { useLang } from '../i18n.jsx';
import { BRAND } from '../data/content.js';

function GalleryPage() {
  const navigate = useNavigate();
  const { t } = useLang();
  const g = t.gallery;
  const go = (id) => navigate(id === 'home' ? '/' : '/' + id);

  const grid = [
    { src: images.gallery1, h: 320 }, { src: images.gallery2, h: 420 }, { src: images.gallery3, h: 320 },
    { src: images.gallery4, h: 320 }, { src: images.gallery5, h: 420 }, { src: images.gallery6, h: 320 },
  ];

  return (
    <div className="pin" style={{ paddingTop: 'var(--nav)' }}>
      {/* Editorial header */}
      <div style={{ textAlign: 'center', padding: '6rem 0 4rem' }}>
        <div className="wrap">
          <p className="overline" style={{ marginBottom: '1.5rem' }}>{g.overline}</p>
          <h1 style={{ fontFamily: 'var(--srf)', fontSize: 'clamp(2.8rem,6vw,6rem)', fontStyle: 'italic', fontWeight: 300, lineHeight: 1.05, marginBottom: '1.5rem' }}>{g.title}</h1>
          <p style={{ fontSize: '.95rem', fontWeight: 300, color: 'var(--muted)', maxWidth: 520, margin: '0 auto', lineHeight: 1.85 }}>{g.intro}</p>
        </div>
      </div>
      <div className="hr"></div>

      {/* Feature: Group Salon */}
      <section className="sec">
        <div className="wrap">
          <div className="g2" style={{ gap: '5rem' }}>
            <Img src={images.groupSalon} alt={`${BRAND} — ${g.feature.overline}`} style={{ height: 460 }} />
            <div>
              <p className="overline" style={{ marginBottom: '1.5rem' }}>{g.feature.overline}</p>
              <h2 className="slg" style={{ marginBottom: '.5rem', whiteSpace: 'pre-line' }}>{g.feature.title}</h2>
              <span className="ac" style={{ margin: '1.75rem 0' }}></span>
              <p style={{ fontSize: '.95rem', lineHeight: 1.9, color: 'var(--body)', marginBottom: '1.25rem' }}>{g.feature.p1}</p>
              <p style={{ fontSize: '.95rem', lineHeight: 1.9, color: 'var(--body)', marginBottom: '2.5rem' }}>{g.feature.p2}</p>
              <button onClick={() => go('contact')} style={{ fontFamily: 'var(--sans)', fontSize: '.72rem', fontWeight: 500, letterSpacing: '.18em', textTransform: 'uppercase', color: 'var(--bronze)', background: 'none', border: 'none', borderBottom: '1px solid var(--bronze)', paddingBottom: 2, cursor: 'pointer' }}>{g.feature.cta}</button>
            </div>
          </div>
        </div>
      </section>

      {/* Image Grid */}
      <section className="sec-sm">
        <div className="wrap">
          <div className="g3">
            {grid.map((item, i) => (
              <Img key={i} src={item.src} alt={`${BRAND} ${i + 1}`} style={{ height: item.h }} />
            ))}
          </div>
          <p style={{ textAlign: 'center', fontSize: '.72rem', color: 'var(--muted)', marginTop: '1.5rem', letterSpacing: '.05em' }}>{g.caption}</p>
        </div>
      </section>

      {/* Philosophy */}
      <section className="sec" style={{ background: '#EEF0F5' }}>
        <div className="wrap">
          <div className="g2" style={{ gap: '6rem', alignItems: 'flex-start' }}>
            {g.phil.map((p, i) => (
              <div key={i}>
                <h2 className="slg" style={{ marginBottom: '1.5rem', whiteSpace: 'pre-line' }}>{p.title}</h2>
                <span className="ac" style={{ marginBottom: '1.5rem' }}></span>
                <p style={{ fontSize: '.95rem', lineHeight: 1.9, color: 'var(--body)' }}>{p.body}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services */}
      <section className="sec">
        <div className="wrap">
          <div className="tc" style={{ marginBottom: '4.5rem' }}>
            <p className="overline" style={{ marginBottom: '1rem' }}>{g.services.overline}</p>
            <h2 className="sxl">{g.services.title}</h2>
          </div>
          <div className="g3">
            {g.services.cards.map(s => (
              <div key={s.t} style={{ padding: '2.5rem', border: '1px solid var(--cream-b)' }}>
                <h3 style={{ fontFamily: 'var(--srf)', fontSize: '1.5rem', fontWeight: 400, marginBottom: '1.25rem' }}>{s.t}</h3>
                <span className="ac" style={{ marginBottom: '1.5rem' }}></span>
                <ul style={{ display: 'flex', flexDirection: 'column', gap: '.7rem' }}>
                  {s.items.map(x => <li key={x} style={{ display: 'flex', gap: '.6rem', fontSize: '.875rem', color: 'var(--body)' }}><span style={{ color: 'var(--bronze)', flexShrink: 0 }}>—</span>{x}</li>)}
                </ul>
              </div>
            ))}
          </div>
          <div style={{ textAlign: 'center', marginTop: '3.5rem' }}>
            <button onClick={() => go('contact')} className="btn bb">{g.services.cta}</button>
          </div>
        </div>
      </section>
    </div>
  );
}

export default GalleryPage;
