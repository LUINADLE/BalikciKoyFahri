// src/admin/Login.jsx — Markaya uygun, minimal admin giriş ekranı.
import React from 'react';
import { signIn } from './auth.js';
import { BRAND } from '../data/content.js';

function Login({ onSignedIn }) {
  const [pw, setPw] = React.useState('');
  const [err, setErr] = React.useState(false);
  const [fcs, setFcs] = React.useState(false);

  const submit = (e) => {
    e.preventDefault();
    const session = signIn(pw);
    if (session) { setErr(false); onSignedIn(); }
    else { setErr(true); }
  };

  return (
    <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '1.5rem' }}>
      <form onSubmit={submit} style={{ width: '100%', maxWidth: 360, textAlign: 'center' }}>
        <div style={{ fontSize: '.62rem', letterSpacing: '.22em', textTransform: 'uppercase', color: 'var(--bronze)', marginBottom: '.8rem', fontFamily: 'var(--sans)', fontWeight: 500 }}>Yönetim Paneli</div>
        <div style={{ fontFamily: 'var(--srf)', fontSize: '2.4rem', fontStyle: 'italic', color: 'var(--adm-text)', marginBottom: '2.5rem', lineHeight: 1.1 }}>{BRAND}</div>

        <label style={{ display: 'block', textAlign: 'left', fontFamily: 'var(--sans)', fontSize: '.62rem', fontWeight: 500, letterSpacing: '.2em', textTransform: 'uppercase', color: 'var(--adm-dim)', marginBottom: '.5rem' }}>Şifre</label>
        <input
          type="password"
          value={pw}
          autoFocus
          onChange={(e) => { setPw(e.target.value); setErr(false); }}
          onFocus={() => setFcs(true)}
          onBlur={() => setFcs(false)}
          placeholder="••••••••"
          style={{
            width: '100%', background: 'transparent', border: 'none',
            borderBottom: `1px solid ${err ? '#C0584F' : fcs ? 'var(--bronze)' : 'var(--adm-border)'}`,
            padding: '.7rem 0', fontSize: '1rem', fontFamily: 'var(--sans)', fontWeight: 300,
            color: 'var(--adm-text)', outline: 'none', transition: 'border-color .25s', borderRadius: 0,
          }}
        />
        {err && <div style={{ textAlign: 'left', fontSize: '.72rem', color: '#C0584F', marginTop: '.5rem' }}>Hatalı şifre.</div>}

        <button type="submit" className="btn bb" style={{ width: '100%', justifyContent: 'center', marginTop: '2.5rem' }}>Giriş Yap</button>
      </form>
    </div>
  );
}

export default Login;
