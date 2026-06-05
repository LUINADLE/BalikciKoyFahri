// src/components/Footer.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { useLang } from '../i18n.jsx';
import { BRAND, SHARED } from '../data/content.js';

function Footer() {
  const navigate = useNavigate();
  const { t } = useLang();
  const f = t.footer;
  const go = (id) => navigate(id === 'home' ? '/' : '/' + id);
  const yr = new Date().getFullYear();
  const lk = { fontFamily: 'var(--sans)', fontSize: '.875rem', fontWeight: 300, color: 'rgba(255,255,255,.48)', background: 'none', border: 'none', cursor: 'pointer', padding: '0 0 .65rem', display: 'block', textAlign: 'left', transition: 'color .2s' };
  return (
    <footer style={{ background: 'var(--navy)', padding: '5rem 0 2.5rem', color: 'rgba(255,255,255,.48)' }}>
      <div className="wrap">
        <div className="footer-grid" style={{ paddingBottom: '3.5rem', borderBottom: '1px solid rgba(255,255,255,.07)' }}>
          <div>
            <div style={{ fontFamily: 'var(--srf)', fontSize: '2rem', fontStyle: 'italic', color: '#fff', marginBottom: '1.25rem', lineHeight: 1.1 }}>{BRAND}</div>
            <p style={{ fontSize: '.875rem', fontWeight: 300, maxWidth: 280, lineHeight: 1.85, marginBottom: '1.5rem' }}>{f.tagline}</p>
            <span style={{ fontSize: '.65rem', letterSpacing: '.15em', textTransform: 'uppercase', color: 'var(--bronze)' }}>{f.hoursLine}</span>
          </div>
          <div>
            <div style={{ fontSize: '.62rem', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--bronze)', marginBottom: '1.25rem' }}>{f.navTitle}</div>
            {[['home', f.links.home], ['menu', f.links.menu], ['gallery', f.links.gallery], ['contact', f.links.contact]].map(([id, lbl]) => (
              <button key={id} onClick={() => go(id)} style={lk} onMouseEnter={e => e.target.style.color = '#fff'} onMouseLeave={e => e.target.style.color = 'rgba(255,255,255,.48)'}>{lbl}</button>
            ))}
          </div>
          <div>
            <div style={{ fontSize: '.62rem', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--bronze)', marginBottom: '1.25rem' }}>{f.contactTitle}</div>
            <p style={{ fontSize: '.875rem', fontWeight: 300, lineHeight: 1.9 }}>{SHARED.addressLines[0]}<br/>{SHARED.addressLines[1]}<br/>{SHARED.addressLines[2]}<br/><br/>{SHARED.phone}<br/>{SHARED.email}</p>
          </div>
          <div>
            <div style={{ fontSize: '.62rem', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--bronze)', marginBottom: '1.25rem' }}>{f.hoursTitle}</div>
            {f.hours.map(([d, h]) => (
              <div key={d} style={{ paddingBottom: '.75rem', marginBottom: '.75rem', borderBottom: '1px solid rgba(255,255,255,.06)' }}>
                <div style={{ fontSize: '.72rem', fontWeight: 500, color: 'rgba(255,255,255,.65)' }}>{d}</div>
                <div style={{ fontSize: '.75rem', fontWeight: 300 }}>{h}</div>
              </div>
            ))}
          </div>
        </div>
        <div style={{ paddingTop: '1.75rem', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '.5rem 1.5rem', fontSize: '.72rem', letterSpacing: '.05em' }}>
          <span>© {yr} {BRAND}. {f.rights}</span>
          <span style={{ color: 'var(--bronze)', letterSpacing: '.15em', textTransform: 'uppercase' }}>{SHARED.region}</span>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
