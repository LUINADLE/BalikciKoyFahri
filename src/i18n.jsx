// src/i18n.jsx — basit TR/EN dil altyapısı
import React from 'react';
import { content, BRAND } from './data/content.js';

const LanguageContext = React.createContext(null);

const TITLES = {
  tr: `${BRAND} — Deniz Ürünleri · Ankara`,
  en: `${BRAND} — Seafood · Ankara`,
};

export function LanguageProvider({ children }) {
  const [lang, setLangState] = React.useState(() => {
    try { return localStorage.getItem('bf_lang') || 'tr'; } catch { return 'tr'; }
  });

  React.useEffect(() => {
    document.documentElement.lang = lang;
    document.title = TITLES[lang] || TITLES.tr;
  }, [lang]);

  const setLang = (l) => {
    setLangState(l);
    try { localStorage.setItem('bf_lang', l); } catch {}
  };

  const value = { lang, setLang, t: content[lang] || content.tr };
  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export function useLang() {
  const ctx = React.useContext(LanguageContext);
  if (!ctx) throw new Error('useLang must be used within LanguageProvider');
  return ctx;
}
