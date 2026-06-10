// src/admin/labels.js — Admin panelinde rezervasyon alanlarının görsel etiketleri.

export const EVENT_LABELS = {
  individual: 'Bireysel',
  group: 'Grup',
  event: 'Özel Etkinlik',
};

// Durum → etiket + renk (chip noktası ve drawer rozeti için).
// Sıralama legend ve akış mantığını yansıtır.
export const STATUS = {
  new:       { label: 'Yeni',         color: '#C9A24B' },
  pending:   { label: 'Beklemede',    color: '#B0763C' },
  verifying: { label: 'Doğrulanıyor', color: '#4F7CAC' },
  confirmed: { label: 'Onaylı',       color: '#5B8C6E' },
  cancelled: { label: 'İptal',        color: '#B05B5B' },
};

export function eventLabel(v) { return EVENT_LABELS[v] || v || '—'; }
export function statusOf(v) { return STATUS[v] || STATUS.new; }
