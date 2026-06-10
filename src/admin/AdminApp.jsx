// src/admin/AdminApp.jsx — Gizli admin paneli giriş noktası + auth gate + tema + alt rotalar.
import React from 'react';
import { Routes, Route, Navigate, useNavigate } from 'react-router-dom';
import { getSession } from './auth.js';
import Login from './Login.jsx';
import AdminHub from './AdminHub.jsx';
import Dashboard from './Dashboard.jsx';
import MenuAdmin from './MenuAdmin.jsx';

const THEME_KEY = 'bf_admin_theme';

function AdminApp() {
  const [session, setSession] = React.useState(() => getSession());
  const navigate = useNavigate();
  // Açık (light) tema varsayılan; tercih localStorage'da hatırlanır.
  const [theme, setTheme] = React.useState(() => {
    try { return localStorage.getItem(THEME_KEY) || 'light'; } catch { return 'light'; }
  });

  React.useEffect(() => {
    document.title = 'Yönetim · Balıkçıköy Fahri';
  }, []);

  const toggleTheme = () => {
    setTheme(prev => {
      const next = prev === 'light' ? 'dark' : 'light';
      try { localStorage.setItem(THEME_KEY, next); } catch { /* yok say */ }
      return next;
    });
  };

  // Ortak kabuk: tema + çıkış. Üst bar/gezinme her ekranın kendi içinde çizilir.
  const shell = {
    theme,
    onToggleTheme: toggleTheme,
    onSignOut: () => setSession(null),
  };

  // Giriş başarılıysa oturumu al ve hub'a (/admin) yönlen.
  const onSignedIn = () => { setSession(getSession()); navigate('/admin'); };

  return (
    <div className={`adm-theme adm-${theme}`}>
      {!session
        ? <Login onSignedIn={onSignedIn} />
        : (
          <Routes>
            <Route path="/admin" element={<AdminHub {...shell} />} />
            <Route path="/admin/rezervasyon" element={<Dashboard {...shell} />} />
            <Route path="/admin/menu" element={<MenuAdmin {...shell} />} />
            <Route path="*" element={<Navigate to="/admin" replace />} />
          </Routes>
        )}
    </div>
  );
}

export default AdminApp;
