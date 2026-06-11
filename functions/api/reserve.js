// functions/api/reserve.js — Cloudflare Pages Function: rezervasyon kaydı + Resend bildirimi.
//
// Yol: POST /api/reserve  (Cloudflare Pages, functions/ dizinini otomatik yönlendirir)
//
// NOT: Şimdilik ATIL. Frontend rezervasyonu localStorage mock'una yazıyor
// (src/admin/store.js); bu uç henüz çağrılmıyor. Faz 2'de createReservation içi
// bu uca bağlanacak. Ortam değişkenleri tanımlı değilken çağrılırsa 500 döner.
//
// Gerekli ortam değişkenleri (Cloudflare Pages → Settings → Environment variables;
// gizli olanları Secret olarak gir — VITE_ DEĞİL):
//   SUPABASE_URL, SUPABASE_SERVICE_ROLE_KEY, RESEND_API_KEY,
//   RESERVATION_FROM_EMAIL, RESERVATION_TO_EMAIL
//
// İstek: POST application/json { name, phone, date, time, guests, event, notes }
// Yanıt: 200 { ok:true, id } | 4xx/5xx { error }

import { createClient } from '@supabase/supabase-js';
import { Resend } from 'resend';

const esc = (s) => String(s ?? '').replace(/[<>&]/g, (c) => ({ '<': '&lt;', '>': '&gt;', '&': '&amp;' }[c]));

const json = (obj, status = 200) =>
  new Response(JSON.stringify(obj), { status, headers: { 'content-type': 'application/json' } });

export async function onRequestPost({ request, env }) {
  const body = await request.json().catch(() => ({}));
  const name = (body.name || '').trim();
  const phone = (body.phone || '').trim();
  const date = (body.date || '').trim();
  const time = (body.time || '').trim();
  const guests = String(body.guests ?? '').trim();
  const event = (body.event || 'individual').trim();
  const notes = (body.notes || '').trim();

  if (!name || !phone || !date) {
    return json({ error: 'Zorunlu alanlar eksik (ad, telefon, tarih).' }, 400);
  }

  const supabaseUrl = env.SUPABASE_URL;
  const serviceKey = env.SUPABASE_SERVICE_ROLE_KEY;
  if (!supabaseUrl || !serviceKey) {
    return json({ error: 'Sunucu yapılandırması eksik (Supabase).' }, 500);
  }

  // service_role → RLS bypass; sunucu tarafı güvenli ortamda.
  const supabase = createClient(supabaseUrl, serviceKey, { auth: { persistSession: false } });

  const { data, error } = await supabase
    .from('reservations')
    .insert({ name, phone, date, time, guests, event, notes, status: 'new' })
    .select('id')
    .single();

  if (error) {
    return json({ error: 'Rezervasyon kaydedilemedi: ' + error.message }, 500);
  }

  // Mail bildirimi — başarısız olsa bile rezervasyonu engellemez.
  try {
    const apiKey = env.RESEND_API_KEY;
    const from = env.RESERVATION_FROM_EMAIL;
    const to = env.RESERVATION_TO_EMAIL;
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

  return json({ ok: true, id: data.id });
}
