// src/admin/dates.js — Ortak tarih yardımcıları.

// Bugünün yerel tarihi (YYYY-MM-DD), timezone kaymasız.
export function todayStr() {
  const d = new Date();
  return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`;
}
