// src/admin/AdminHub.jsx — Giriş sonrası karşılama sayfası: "Hoş Geldiniz" + iki kart.
import React from 'react';
import { Link } from 'react-router-dom';
import { signOut } from './auth.js';

const CARDS = [
  {
    to: '/admin/rezervasyon',
    overline: 'Takvim & Kayıtlar',
    title: 'Rezervasyonlar',
    desc: 'Gelen rezervasyonları görüntüleyin, onaylayın ve manuel kayıt ekleyin.',
  },
  {
    to: '/admin/menu',
    overline: 'QR Menü',
    title: 'Menü',
    desc: 'Müşterilerin QR ile gördüğü menüyü; kategori, ürün ve fiyatları düzenleyin.',
  },
];

function AdminHub({ theme, onToggleTheme, onSignOut }) {
  return (
    <div style={{ minHeight: '100vh' }}>
      {/* Sade üst bar */}
      <header style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', gap: '1rem', flexWrap: 'wrap', padding: '1.25rem clamp(1rem, 4vw, 2.5rem)', borderBottom: '1px solid var(--adm-border)' }}>
        <div>
          <div style={{ fontSize: '.58rem', letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--bronze)', fontFamily: 'var(--sans)', fontWeight: 500 }}>Yönetim Paneli</div>
          <div style={{ fontFamily: 'var(--srf)', fontSize: '1.5rem', fontStyle: 'italic', color: 'var(--adm-text)' }}>Balıkçıköy Fahri</div>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', gap: '.6rem' }}>
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

      {/* Karşılama + kartlar */}
      <div className="adm-hub">
        <div style={{ textAlign: 'center', marginBottom: '3rem' }}>
          <div className="overline" style={{ marginBottom: '.75rem' }}>Yönetim</div>
          <h1 style={{ fontFamily: 'var(--srf)', fontSize: 'clamp(2.2rem, 5vw, 3.4rem)', fontWeight: 400, fontStyle: 'italic', color: 'var(--adm-text)', lineHeight: 1.1 }}>Hoş Geldiniz</h1>
          <p style={{ fontSize: '.9rem', color: 'var(--adm-dim)', marginTop: '.75rem' }}>Yönetmek istediğiniz bölümü seçin.</p>
        </div>

        <div className="adm-hub-cards">
          {CARDS.map(c => (
            <Link key={c.to} to={c.to} className="adm-hub-card">
              <div className="adm-hub-card-overline">{c.overline}</div>
              <div className="adm-hub-card-title">{c.title}</div>
              <p className="adm-hub-card-desc">{c.desc}</p>
              <span className="adm-hub-card-arrow" aria-hidden="true">→</span>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

export default AdminHub;
