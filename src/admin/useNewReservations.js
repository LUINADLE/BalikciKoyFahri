// src/admin/useNewReservations.js — Yeni rezervasyon gözcüsü (mock).
//
// "Yeni rezervasyon geldi" tetikleyicisi: başka sekmeden (public form) gelen `storage`
// olayı + periyodik yoklama. status==='new' olan her yeni kayıt için toast üretir ve
// sekme başlığında bir bildirim işareti gösterir. Faz 2'de yerini Supabase realtime alır.
import React from 'react';
import { listReservations } from './store.js';

const BASE_TITLE = 'Yönetim · Balıkçıköy Fahri';
const POLL_MS = 12000;

export function useNewReservations({ enabled = true, onChange } = {}) {
  const [toasts, setToasts] = React.useState([]);
  const [unseen, setUnseen] = React.useState(0);
  const knownRef = React.useRef(null);
  const onChangeRef = React.useRef(onChange);
  onChangeRef.current = onChange;

  const dismissToast = React.useCallback((key) => {
    setToasts(t => t.filter(x => x.key !== key));
  }, []);

  const clearUnseen = React.useCallback(() => setUnseen(0), []);

  React.useEffect(() => {
    if (!enabled) return;
    // Mount anındaki tüm kayıtlar "bilinen" sayılır → seed'ler toast üretmez.
    knownRef.current = new Set(listReservations().map(r => r.id));

    const check = () => {
      const known = knownRef.current;
      if (!known) return;
      const list = listReservations();
      const fresh = list.filter(r => !known.has(r.id));
      if (!fresh.length) return;
      fresh.forEach(r => known.add(r.id));
      const arrivals = fresh.filter(r => r.status === 'new');
      if (arrivals.length) {
        setToasts(t => [...t, ...arrivals.map(r => ({ key: `${r.id}-${Date.now()}`, res: r }))]);
        setUnseen(u => u + arrivals.length);
      }
      onChangeRef.current?.();
    };

    const iv = setInterval(check, POLL_MS);
    const onStorage = (e) => { if (e.key === 'bf_reservations') check(); };
    window.addEventListener('storage', onStorage);
    return () => { clearInterval(iv); window.removeEventListener('storage', onStorage); };
  }, [enabled]);

  // Sekme başlığı bildirim işareti.
  React.useEffect(() => {
    document.title = unseen > 0 ? `(${unseen}) ● ${BASE_TITLE}` : BASE_TITLE;
    return () => { document.title = BASE_TITLE; };
  }, [unseen]);

  return { toasts, dismissToast, unseen, clearUnseen };
}
