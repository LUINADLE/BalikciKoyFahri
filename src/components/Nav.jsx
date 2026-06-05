// src/components/Nav.jsx
import React from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import { useLang } from '../i18n.jsx';
import { BRAND } from '../data/content.js';
import LangSwitch from './LangSwitch.jsx';

const pathFor = (id) => (id === 'home' ? '/' : '/' + id);

function Nav() {
  const navigate = useNavigate();
  const location = useLocation();
  const { t } = useLang();
  const go = (id) => navigate(pathFor(id));

  const [scrolled, setScrolled] = React.useState(false);
  React.useEffect(() => {
    const h = () => setScrolled(window.scrollY > 60);
    window.addEventListener('scroll', h, { passive: true });
    return () => window.removeEventListener('scroll', h);
  }, []);

  const isActive = (id) => location.pathname === pathFor(id);
  const isHome = location.pathname === '/';
  const tp = isHome && !scrolled;

  const links = [['home', t.nav.home], ['menu', t.nav.menu], ['gallery', t.nav.gallery]];
  const lkS = (id) => ({
    fontFamily: 'var(--sans)', fontSize: '.68rem', fontWeight: 500,
    letterSpacing: '.18em', textTransform: 'uppercase',
    color: isActive(id) ? 'var(--bronze)' : 'rgba(255,255,255,.65)',
    borderBottom: isActive(id) ? '1px solid var(--bronze)' : '1px solid transparent',
    paddingBottom: 2, background: 'none', border: 'none',
    cursor: 'pointer', transition: 'color .2s',
  });

  return (
    <nav style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 300, height: 'var(--nav)', display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 3rem', background: tp ? 'transparent' : 'var(--navy)', borderBottom: tp ? 'none' : '1px solid rgba(255,255,255,.07)', transition: 'background .5s ease' }}>
      <button onClick={() => go('home')} style={{ fontFamily: 'var(--srf)', fontSize: 'clamp(1.15rem, 2.2vw, 1.5rem)', fontStyle: 'italic', color: '#fff', fontWeight: 400, letterSpacing: '.03em', background: 'none', border: 'none', cursor: 'pointer', padding: 0, lineHeight: 1, whiteSpace: 'nowrap' }}>{BRAND}</button>
      <div style={{ display: 'flex', gap: '2.8rem' }}>
        {links.map(([id, lbl]) => <button key={id} onClick={() => go(id)} style={lkS(id)}>{lbl}</button>)}
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem' }}>
        <LangSwitch />
        <button onClick={() => go('contact')} className="btn bb" style={{ fontSize: '.68rem', padding: '.78rem 1.7rem' }}>{t.nav.book}</button>
      </div>
    </nav>
  );
}

export default Nav;
