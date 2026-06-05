// src/pages/MenuPage.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLang } from '../i18n.jsx';

function MenuPage() {
  const navigate = useNavigate();
  const { t } = useLang();
  const m = t.menu;
  const go = (id) => navigate(id === 'home' ? '/' : '/' + id);

  const Sec = ({ data }) => (
    <div style={{ marginBottom: '3.5rem' }}>
      <div style={{ marginBottom: '1.75rem', paddingBottom: '1rem', borderBottom: '1px solid var(--cream-b)' }}>
        <h2 style={{ fontFamily: 'var(--srf)', fontSize: '2.2rem', fontWeight: 400 }}>{data.title}</h2>
        <div style={{ fontSize: '.68rem', letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: '.3rem' }}>{data.sub}</div>
      </div>
      {data.items.map((item, i) => (
        <div key={i} style={{ padding: '1.2rem 0', borderBottom: '1px solid var(--cream-b)' }}>
          <div style={{ fontFamily: 'var(--srf)', fontSize: '1.15rem', fontWeight: 500, marginBottom: '.3rem' }}>{item.name}</div>
          {item.desc && <div style={{ fontSize: '.78rem', fontStyle: 'italic', color: 'var(--muted)', lineHeight: 1.6 }}>{item.desc}</div>}
        </div>
      ))}
    </div>
  );

  return (
    <div className="pin" style={{ paddingTop: 'var(--nav)' }}>
      <div className="wrap" style={{ paddingTop: '5rem', paddingBottom: '3rem' }}>
        <p className="overline" style={{ marginBottom: '1rem' }}>{m.overline}</p>
        <h1 className="sxl" style={{ marginBottom: '.5rem' }}>{m.title}</h1>
        <span className="ac" style={{ margin: '1.5rem 0' }}></span>
        <p style={{ fontSize: '.875rem', color: 'var(--muted)', maxWidth: 480, lineHeight: 1.85 }}>{m.intro}</p>
      </div>
      <div className="hr"></div>

      <section className="sec">
        <div className="wrap">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem' }}>
            <div>
              <Sec data={m.sections.cold} />
              <Sec data={m.sections.hot} />
            </div>
            <div>
              <div style={{ marginBottom: '3.5rem' }}>
                <div style={{ marginBottom: '1.75rem', paddingBottom: '1rem', borderBottom: '1px solid var(--cream-b)', display: 'flex', justifyContent: 'space-between', alignItems: 'baseline' }}>
                  <div>
                    <h2 style={{ fontFamily: 'var(--srf)', fontSize: '2.2rem', fontWeight: 400 }}>{m.catch.title}</h2>
                    <div style={{ fontSize: '.68rem', letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--muted)', marginTop: '.3rem' }}>{m.catch.sub}</div>
                  </div>
                  <span style={{ fontSize: '.62rem', letterSpacing: '.1em', textTransform: 'uppercase', color: 'var(--bronze)', border: '1px solid var(--bronze)', padding: '.2rem .6rem', flexShrink: 0 }}>{m.catch.badge}</span>
                </div>
                <div style={{ background: 'var(--cream-d)', padding: '1.25rem', marginBottom: '.75rem', borderLeft: '2px solid var(--bronze)' }}>
                  <p style={{ fontSize: '.8rem', fontStyle: 'italic', color: 'var(--body)', lineHeight: 1.75 }}>{m.catch.note}</p>
                </div>
                {m.catch.items.map((item, i) => (
                  <div key={i} style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '1.1rem 0', borderBottom: '1px solid var(--cream-b)' }}>
                    <div style={{ display: 'flex', gap: '.75rem', alignItems: 'center' }}>
                      <span style={{ fontFamily: 'var(--srf)', fontSize: '1.15rem', fontWeight: 500 }}>{item.name}</span>
                      <span style={{ fontSize: '.58rem', letterSpacing: '.1em', textTransform: 'uppercase', background: 'var(--navy)', color: '#fff', padding: '.2rem .5rem' }}>{item.origin}</span>
                    </div>
                    <span style={{ fontFamily: 'var(--srf)', fontSize: '1rem', color: 'var(--bronze)' }}>{m.catch.daily}</span>
                  </div>
                ))}
              </div>
              <Sec data={m.sections.wine} />
            </div>
          </div>
          <div style={{ marginTop: '2rem', padding: '1.75rem', border: '1px solid var(--cream-b)', background: 'var(--cream-d)', display: 'flex', gap: '1.5rem' }}>
            <div style={{ width: 2, background: 'var(--bronze)', flexShrink: 0, alignSelf: 'stretch' }}></div>
            <p style={{ fontSize: '.8rem', color: 'var(--muted)', lineHeight: 1.85 }}>{m.note.pre}<span style={{ color: 'var(--bronze)', cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: 3 }} onClick={() => go('contact')}>{m.note.link}</span>{m.note.post}</p>
          </div>
        </div>
      </section>
    </div>
  );
}

export default MenuPage;
