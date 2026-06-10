// src/admin/Toasts.jsx — Sol-altta birikebilen "Yeni rezervasyon" toast yığını.
import React from 'react';
import { eventLabel } from './labels.js';

function fmtDate(d) {
  if (!d) return '—';
  try { return new Date(d + 'T00:00:00').toLocaleDateString('tr-TR', { day: '2-digit', month: 'long' }); }
  catch { return d; }
}

function ToastItem({ toast, onDismiss, duration }) {
  React.useEffect(() => {
    const t = setTimeout(() => onDismiss(toast.key), duration);
    return () => clearTimeout(t);
  }, [toast.key, duration, onDismiss]);

  const r = toast.res;
  return (
    <div className="adm-toast" role="status">
      <div className="adm-toast-body">
        <div className="adm-toast-title">Yeni Rezervasyon</div>
        <div className="adm-toast-name">{r.name}</div>
        <div className="adm-toast-meta">{fmtDate(r.date)}{r.time ? ` · ${r.time}` : ''} · {r.guests} kişi · {eventLabel(r.event)}</div>
      </div>
      <button className="adm-toast-x" onClick={() => onDismiss(toast.key)} aria-label="Kapat">×</button>
    </div>
  );
}

function Toasts({ toasts, onDismiss, duration = 180000 }) {
  if (!toasts.length) return null;
  return (
    <div className="adm-toasts">
      {toasts.map(t => <ToastItem key={t.key} toast={t} onDismiss={onDismiss} duration={duration} />)}
    </div>
  );
}

export default Toasts;
