// src/admin/PendingPanel.jsx — "Doğrulanacaklar": status 'new' rezervasyonlar,
// en yakın tarihten en uzağa sıralı. Yarım ekran sağ panel.
import React from 'react';
import { eventLabel } from './labels.js';
import { todayStr } from './dates.js';
import SlidePanel from './SlidePanel.jsx';

function fmtDate(d) {
  if (!d) return { dm: '—', wd: '' };
  try {
    const dt = new Date(d + 'T00:00:00');
    return {
      dm: dt.toLocaleDateString('tr-TR', { day: '2-digit', month: 'long' }),
      wd: dt.toLocaleDateString('tr-TR', { weekday: 'long' }),
    };
  } catch { return { dm: d, wd: '' }; }
}

function PendingPanel({ open, onClose, reservations, onSelect }) {
  // Onaylı ve İptal dışındaki tüm durumlar (new + pending + verifying),
  // yalnızca bugün ve sonrası (geçmiş günler gizli).
  const today = todayStr();
  const list = React.useMemo(() => {
    return reservations
      .filter(r => r.status !== 'confirmed' && r.status !== 'cancelled' && r.date >= today)
      .sort((a, b) => (a.date || '').localeCompare(b.date || '') || (a.time || '').localeCompare(b.time || ''));
  }, [reservations, today]);

  return (
    <SlidePanel open={open} onClose={onClose} half subtitle="Doğrulanacaklar" title={`Doğrulanacaklar (${list.length})`}>
      <div className="adm-panel-body">
        {list.length === 0 ? (
          <div className="adm-list-empty">Doğrulanacak yeni rezervasyon yok.</div>
        ) : (
          <div className="adm-list">
            {list.map((res) => {
              const f = fmtDate(res.date);
              return (
                <button key={res.id} className="adm-list-row" onClick={() => onSelect(res)}>
                  <div className="adm-list-date">{f.dm}<small>{f.wd}{res.time ? ` · ${res.time}` : ''}</small></div>
                  <div className="adm-list-info">
                    <div className="adm-list-name">{res.name}</div>
                    <div className="adm-list-meta">{res.guests} kişi · {eventLabel(res.event)} · {res.phone || '—'}</div>
                  </div>
                </button>
              );
            })}
          </div>
        )}
      </div>
    </SlidePanel>
  );
}

export default PendingPanel;
