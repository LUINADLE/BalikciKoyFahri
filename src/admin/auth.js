// src/admin/auth.js — Admin oturum katmanı (soyutlama)
//
// Şimdilik sabit şifre + localStorage token tabanlı *mock*. Faz 2'de bu dosyanın
// YALNIZCA içi Supabase Auth ile değiştirilecek (getSession → Supabase session,
// signIn → signInWithPassword vb.). Dışa açılan imzalar aynı kalacak.
//
// NOT: Bu client-side bir kontrol; gerçek güvenlik sağlamaz. Şifre derlenmiş
// bundle içinde görülebilir. Gerçek koruma Faz 2'de Supabase ile gelecek.

const KEY = 'bf_admin_session';
const ADMIN_PASSWORD = 'balikci2026'; // Faz 2'de kaldırılacak (Supabase Auth)

export function signIn(password) {
  if (password === ADMIN_PASSWORD) {
    const session = { token: 'mock-' + Date.now().toString(36), at: new Date().toISOString() };
    try { localStorage.setItem(KEY, JSON.stringify(session)); } catch { /* yok say */ }
    return session;
  }
  return null;
}

export function signOut() {
  try { localStorage.removeItem(KEY); } catch { /* yok say */ }
}

export function getSession() {
  try {
    const raw = localStorage.getItem(KEY);
    return raw ? JSON.parse(raw) : null;
  } catch {
    return null;
  }
}
