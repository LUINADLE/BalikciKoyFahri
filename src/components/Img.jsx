// src/components/Img.jsx
// Konteyneri dolduran görsel sarmalayıcı.
// src verilmezse eski çizgili placeholder (.ph) kutusuna düşer.
import React from 'react';

export default function Img({ src, alt = '', label, dark = false, style, className = '' }) {
  if (!src) {
    return (
      <div className={`ph ${dark ? 'phd' : ''} ${className}`} style={style}>
        {label && <label style={{ whiteSpace: 'pre-line', textAlign: 'center' }}>{label}</label>}
      </div>
    );
  }
  return (
    <div className={className} style={{ position: 'relative', overflow: 'hidden', ...style }}>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', display: 'block' }}
      />
    </div>
  );
}
