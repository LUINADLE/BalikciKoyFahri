// src/pages/QRMenuPage.jsx — Müşterilerin QR okutup gördüğü menü sayfası (standalone).
// Site /menu sayfasından AYRIDIR. Veriler menuStore (localStorage / Faz 2'de DB).
import React from 'react';
import { getMenu } from '../admin/menuStore.js';
import { useLang } from '../i18n.jsx';
import { BRAND } from '../data/content.js';

const UI = {
  tr: { overline: 'Dijital Menü', out: 'Tükendi', empty: 'Menü hazırlanıyor.', toTop: 'Kategorilere dön', theme: 'Temayı değiştir' },
  en: { overline: 'Digital Menu', out: 'Sold out', empty: 'Menu coming soon.', toTop: 'Back to categories', theme: 'Toggle theme' },
};

const THEME_KEY = 'bf_qr_theme';

function QRMenuPage() {
  const { lang, setLang } = useLang();
  const L = UI[lang] || UI.tr;
  const [menu] = React.useState(() => getMenu());
  const [showTop, setShowTop] = React.useState(false);
  const [theme, setTheme] = React.useState(() => {
    try { return localStorage.getItem(THEME_KEY) || 'light'; } catch { return 'light'; }
  });
  const dark = theme === 'dark';

  const toggleTheme = () => setTheme(prev => {
    const next = prev === 'dark' ? 'light' : 'dark';
    try { localStorage.setItem(THEME_KEY, next); } catch { /* yok say */ }
    return next;
  });

  // Aşağı kaydırınca "Kategorilere dön" butonunu göster.
  React.useEffect(() => {
    const onScroll = () => setShowTop(window.scrollY > 120);
    window.addEventListener('scroll', onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Koyu temada merkezî sütunun yanları da kararsın diye body arka planını ayarla.
  React.useEffect(() => {
    document.body.style.backgroundColor = dark ? '#0F1E36' : '';
    return () => { document.body.style.backgroundColor = ''; };
  }, [dark]);

  const goToCat = (id) => {
    document.getElementById('qr-cat-' + id)?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };
  const scrollTop = () => window.scrollTo({ top: 0, behavior: 'smooth' });

  return (
    <>
    <div className={`qr-page pin${dark ? ' qr-dark' : ''}`}>
      <header className="qr-head">
        <div className="qr-brand">
          <div className="overline" style={{ marginBottom: '.4rem' }}>{L.overline}</div>
          <h1 style={{ fontFamily: 'var(--srf)', fontSize: 'clamp(2rem,7vw,3rem)', fontWeight: 400, lineHeight: 1.05 }}>{BRAND}</h1>
        </div>
        <div className="qr-actions">
          <div className="qr-lang">
            <button className={lang === 'tr' ? 'active' : ''} onClick={() => setLang('tr')}>TR</button>
            <button className={lang === 'en' ? 'active' : ''} onClick={() => setLang('en')}>EN</button>
          </div>
          <button className="qr-theme-btn" onClick={toggleTheme} title={L.theme} aria-label={L.theme}>{dark ? '☀' : '☾'}</button>
        </div>
      </header>

      {menu.categories.length > 0 && (
        <nav className="qr-nav" aria-label="Kategoriler">
          {menu.categories.map(cat => (
            <button key={cat.id} onClick={() => goToCat(cat.id)}>{cat.name[lang] || cat.name.tr}</button>
          ))}
        </nav>
      )}

      <div className="qr-body">
        {menu.categories.length === 0 && <p className="qr-empty">{L.empty}</p>}

        {menu.categories.map(cat => (
          <section key={cat.id} id={`qr-cat-${cat.id}`} className="qr-cat">
            <h2 className="qr-cat-title">{cat.name[lang] || cat.name.tr}</h2>
            {cat.items.map(item => (
              <div key={item.id} className={`qr-item${item.available ? '' : ' qr-item-out'}`}>
                <div className="qr-item-text">
                  <div className="qr-item-name">
                    {item.name[lang] || item.name.tr}
                    {!item.available && <span className="qr-item-badge">{L.out}</span>}
                  </div>
                  {(item.desc[lang] || item.desc.tr) && (
                    <div className="qr-item-desc">{item.desc[lang] || item.desc.tr}</div>
                  )}
                </div>
                {item.price && <div className="qr-item-price">{item.price}</div>}
              </div>
            ))}
          </section>
        ))}
      </div>

      <footer className="qr-foot">{BRAND} · {new Date().getFullYear()}</footer>
    </div>

    <button
      className={`qr-top${showTop ? ' show' : ''}${dark ? ' qr-dark' : ''}`}
      onClick={scrollTop}
      aria-hidden={!showTop}
    ><span aria-hidden="true">↑</span> {L.toTop}</button>
    </>
  );
}

export default QRMenuPage;
