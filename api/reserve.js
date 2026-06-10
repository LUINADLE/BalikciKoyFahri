// api/reserve.js — Vercel Serverless Function: rezervasyon kaydı + Resend bildirimi.
//
// NOT: Bu dosya yalnız VERCEL'de çalışır. Cloudflare Pages `/api`'yi yok sayar
// (CF Functions `/functions` dizinindedir) ve Vite build'i `api/`'yi paketlemez —
// dolayısıyla mevcut Cloudflare dağıtımı etkilenmez (inert).
//
// Gerekli ortam değişkenleri (Vercel panelinde — VITE_ DEĞİL, gizli):
//   SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, RESEND_API_KEY,
//   RESERVATION_FROM_EMAIL, RESERVATION_TO_EMAIL
//
// İstek: POST application/json { name, phone, date, time, guests, event, notes }
// Yanıt: 200 { ok:true, id } | 4xx/5xx { error }

import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const esc = (s) => String(s ?? '').replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST');
    return res.status(405).json({ error: 'Method not allowed' });
  }

  const body = typeof req.body === 'string' ? safeJson(req.body) : (req.body || {});
  const name = (body.name || '').trim();
  const phone = (body.phone || '').trim();
  const date = (body.date || '').trim();
  const time = (body.time || '').trim();
  const guests = String(body.guests ?? '').trim();
  const event = (body.event || 'individual').trim();
  const notes = (body.notes || '').trim();

  if (!name || !phone || !date) {
    return res.status(400).json({ error: 'Zorunlu alanlar eksik (ad, telefon, tarih).' });
  }

  const supabaseUrl = process.env.SUPABASE_URL;
  const serviceKey = process.env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceKey) {
    return res.status(500).json({ error: 'Sunucu yapılandırması eksik (Supabase).' });
  }

  // service_role → RLS bypass; sunucu tarafı güvenli ortamda.
  const supabase = createClient(supabaseUrl, serviceKey, { auth: { persistSession: false } });

  const { data, error } = await supabase
    .from('reservations')
    .insert({ name, phone, date, time, guests, event, notes, status: 'new' })
    .select('id')
    .single();

  if (error) {
    return res.status(500).json({ error: 'Rezervasyon kaydedilemedi: ' + error.message });
  }

  // Mail bildirimi — başarısız olsa bile rezervasyonu engellemez.
  try {
    const apiKey = process.env.RESEND_API_KEY;
    const from = process.env.RESERVATION_FROM_EMAIL;
    const to = process.env.RESERVATION_TO_EMAIL;
    if (apiKey && from && to) {
      const resend = new Resend(apiKey);
      await resend.emails.send({
        from,
        to,
        subject: `Yeni Rezervasyon — ${name} (${date}${time ? ' ' + time : ''})`,
        html: `
          <h2>Yeni Rezervasyon</h2>
          <table cellpadding="6" style="border-collapse:collapse;font-family:sans-serif;font-size:14px">
            <tr><td><b>Ad</b></td><td>${esc(name)}</td></tr>
            <tr><td><b>Telefon</b></td><td>${esc(phone)}</td></tr>
            <tr><td><b>Tarih</b></td><td>${esc(date)}</td></tr>
            <tr><td><b>Saat</b></td><td>${esc(time)}</td></tr>
            <tr><td><b>Kişi</b></td><td>${esc(guests)}</td></tr>
            <tr><td><b>Tür</b></td><td>${esc(event)}</td></tr>
            <tr><td><b>Not</b></td><td>${esc(notes)}</td></tr>
          </table>`,
      });
    }
  } catch {
    // mail hatası yutulur; kayıt zaten alındı.
  }

  return res.status(200).json({ ok: true, id: data.id });
}

function safeJson(s) {
  try { return JSON.parse(s); } catch { return {}; }
}
