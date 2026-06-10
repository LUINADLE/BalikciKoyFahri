// src/admin/phone.js — Telefon numarası maskeleme: "5XX XXX XX XX" (gruplar 3-3-2-2).
// Baştaki 0 atılır; 10 haneye kısılır.

export function formatPhone(raw) {
  let d = (raw || '').replace(/\D/g, '');
  if (d.startsWith('0')) d = d.slice(1);
  d = d.slice(0, 10);
  const parts = [d.slice(0, 3), d.slice(3, 6), d.slice(6, 8), d.slice(8, 10)];
  return parts.filter(Boolean).join(' ');
}

// Geçerli numara 5 ile başlar (baştaki 0 zaten formatPhone'da atılır).
export function startsWithFive(value) {
  return (value || '').replace(/\D/g, '').startsWith('5');
}
