// src/admin/AdminHeader.jsx — Admin alt sayfalarının ortak üst barı: marka + bölüm sekmeleri + tema + çıkış.
// Rezervasyon (Dashboard) ve Menü (MenuAdmin) ekranlarında kullanılır; bölüme özel
// aksiyon butonları `children` ile sağ tarafa yerleştirilir. Gezinme URL-tabanlıdır.
import React from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { signOut } from './auth.js';

const SECTIONS = [['/admin/rezervasyon', 'Rezervasyonlar'], ['/admin/menu', 'Menü']];

function AdminHeader({ theme, onToggleTheme, onSignOut, children }) {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  return (
    <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', padding: '1.25rem clamp(1rem, 4vw, 2.5rem)', borderBottom: '1px solid var(--adm-border)' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '1.5rem', flexWrap: 'wrap' }}>
        <button
          onClick={() => navigate('/admin')}
          title="Panele dön"
          style={{ background: 'none', border: 'none', padding: 0, textAlign: 'left', cursor: 'pointer' }}
        >
          <div style={{ fontSize: '.58rem', letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--bronze)', fontFamily: 'var(--sans)', fontWeight: 500 }}>Yönetim Paneli</div>
          <div style={{ fontFamily: 'var(--srf)', fontSize: '1.5rem', fontStyle: 'italic', color: 'var(--adm-text)' }}>Balıkçıköy Fahri</div>
        </button>
        <div className="adm-seg">
          {SECTIONS.map(([to, lbl]) => (
            <Link key={to} to={to} className={pathname === to ? 'active' : ''}>{lbl}</Link>
          ))}
        </div>
      </div>
      <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem', flexWrap: 'wrap' }}>
        {children}
        <button
          onClick={onToggleTheme}
          className="adm-icon-btn"
          title={theme === 'light' ? 'Koyu temaya geç' : 'Açık temaya geç'}
          aria-label="Tema değiştir"
        >{theme === 'light' ? '☾' : '☀'}</button>
        <button
          onClick={() => { signOut(); onSignOut(); }}
          style={{ background: 'none', border: '1px solid var(--adm-border)', color: 'var(--adm-text)', padding: '.6rem 1.4rem', fontFamily: 'var(--sans)', fontSize: '.62rem', fontWeight: 600, letterSpacing: '.16em', textTransform: 'uppercase', cursor: 'pointer', transition: 'border-color .2s' }}
        >Çıkış</button>
      </div>
    </header>
  );
}

export default AdminHeader;
