// src/components/LangSwitch.jsx — TR | EN dil değiştirici
import React from 'react';
import { useLang } from '../i18n.jsx';

export default function LangSwitch() {
  const { lang, setLang } = useLang();
  const btn = (active) => ({
    fontFamily: 'var(--sans)', fontSize: '.66rem', fontWeight: 600, letterSpacing: '.12em',
    textTransform: 'uppercase', background: 'none', border: 'none', cursor: 'pointer',
    padding: '0 .1rem', transition: 'color .2s',
    color: active ? 'var(--bronze)' : 'rgba(255,255,255,.55)',
  });
  return (
    <div style={{ display: 'flex', alignItems: 'center', gap: '.35rem' }}>
      <button onClick={() => setLang('tr')} style={btn(lang === 'tr')} aria-label="Türkçe">TR</button>
      <span style={{ color: 'rgba(255,255,255,.3)', fontSize: '.66rem' }}>|</span>
      <button onClick={() => setLang('en')} style={btn(lang === 'en')} aria-label="English">EN</button>
    </div>
  );
}
