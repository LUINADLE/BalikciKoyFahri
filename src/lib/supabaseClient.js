// src/lib/supabaseClient.js — Supabase istemcisi (Faz 2 önhazırlık, şimdilik inert).
//
// Bu dosya yalnızca ortam değişkenleri tanımlıysa gerçek bir istemci üretir.
// Şu an .env.local boş → `supabase = null`, `isSupabaseConfigured() = false`.
// Hiçbir uygulama dosyası henüz bunu import etmediği için derlemeye/bundle'a
// dahil olmaz; Cloudflare davranışı değişmez.
//
// Faz 2b: store.js / menuStore.js bu istemciyi kullanarak localStorage yerine
// Supabase'e bağlanacak (yalnızca env tanımlıysa; aksi halde localStorage'a düşüş).
//
// ÖNEMLİ: Burada YALNIZCA public anahtar (anon) kullanılır. service_role ve
// Resend gibi GİZLİ anahtarlar asla frontend'e (VITE_*) konmaz — onlar sadece
// sunucu tarafı `api/reserve.js` içinde, Vercel ortam değişkenlerinden okunur.

import { createClient } from '@supabase/supabase-js';

const url = import.meta.env.VITE_SUPABASE_URL;
const anonKey = import.meta.env.VITE_SUPABASE_ANON_KEY;

export const supabase = url && anonKey ? createClient(url, anonKey) : null;

export function isSupabaseConfigured() {
  return Boolean(url && anonKey);
}
