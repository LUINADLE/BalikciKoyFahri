// src/admin/SlidePanel.jsx — Sağdan kayan ortak panel kabuğu (backdrop + aside).
// Manuel Rezervasyon ve Doğrulanacaklar panellerinde kullanılır.
import React from 'react';

function SlidePanel({ open, onClose, title, subtitle, half = false, children }) {
  React.useEffect(() => {
    if (!open) return;
    const h = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', h);
    return () => window.removeEventListener('keydown', h);
  }, [open, onClose]);

  return (
    <>
      <div className={`adm-backdrop${open ? ' open' : ''}`} onClick={onClose} />
      <aside className={`adm-drawer${half ? ' adm-drawer-half' : ''}${open ? ' open' : ''}`} aria-hidden={!open}>
        <div style={{ display: 'flex', flexDirection: 'column', height: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'flex-start', justifyContent: 'space-between', padding: '2rem 2rem 1.5rem', borderBottom: '1px solid var(--adm-border)' }}>
            <div>
              <div style={{ fontSize: '.6rem', letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--bronze)', marginBottom: '.5rem', fontFamily: 'var(--sans)', fontWeight: 500 }}>{subtitle || 'Yönetim'}</div>
              <div style={{ fontFamily: 'var(--srf)', fontSize: '1.9rem', fontStyle: 'italic', color: 'var(--adm-text)', lineHeight: 1.15 }}>{title}</div>
            </div>
            <button onClick={onClose} aria-label="Kapat" style={{ background: 'none', border: 'none', color: 'var(--adm-dim)', cursor: 'pointer', fontSize: '1.5rem', lineHeight: 1, padding: '.2rem' }}>×</button>
          </div>
          {open && children}
        </div>
      </aside>
    </>
  );
}

export default SlidePanel;
