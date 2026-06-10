# Faz 2 Kurulumu — Supabase + Vercel + Resend

Bu doküman, siteyi localStorage mock'tan gerçek veritabanına (Supabase) ve
rezervasyon e-postasına (Resend) taşımak için adımları içerir. Önhazırlık
dosyaları repoda hazır; bu adımları tamamlayınca Faz 2b kod bağlamasına geçilir.

> Şu an site **Cloudflare Pages**'te ve localStorage ile çalışıyor. Aşağıdakiler
> tamamlanana kadar davranış değişmez. Vercel'e geçiş isteğe bağlıdır; Supabase
> + Resend, Cloudflare üzerinde de kullanılabilir (rezervasyon fonksiyonu için
> Cloudflare'de `/functions` karşılığı ayrıca yazılır — bkz. son bölüm).

## Hazır gelen dosyalar
- `src/lib/supabaseClient.js` — env tanımlıysa Supabase istemcisi, değilse `null` (inert).
- `.env.example` — tüm anahtar isimleri + public/secret açıklamaları.
- `.env.local` — lokal değerler (gitignore'lu; sen doldur).
- `supabase/migrations/0001_init.sql` — tablolar + RLS.
- `supabase/seed_menu.sql` — menü verisi (12 kategori, 350 ürün; upsert).
- `api/reserve.js` — Vercel fonksiyonu: rezervasyon insert + Resend mail.
- `vercel.json` — Vercel build + SPA rewrite.

## 1. Supabase
1. https://supabase.com → yeni proje oluştur.
2. **SQL Editor**'da sırayla çalıştır:
   - `supabase/migrations/0001_init.sql`
   - `supabase/seed_menu.sql`
3. **Project Settings → API**'den şunları al:
   - `Project URL`
   - `anon public` anahtarı (public)
   - `service_role` anahtarı (GİZLİ — yalnız sunucuda)

## 2. Resend
1. https://resend.com → API anahtarı oluştur (`RESEND_API_KEY`).
2. Gönderen alan adını doğrula (örn. `rezervasyon@alanadiniz.com`). Doğrulanmış
   bir gönderen olmadan mail gitmez.
3. Bildirimlerin düşeceği restoran adresini belirle (`RESERVATION_TO_EMAIL`).

## 3. Ortam değişkenleri
`.env.example`'daki tüm değişkenleri doldur.

| Değişken | Yer | Gizli mi? |
|---|---|---|
| `VITE_SUPABASE_URL` | Frontend | Hayır (public) |
| `VITE_SUPABASE_ANON_KEY` | Frontend | Hayır (public, RLS korur) |
| `SUPABASE_URL` | Sunucu (`api/`) | — |
| `SUPABASE_SERVICE_ROLE_KEY` | Sunucu (`api/`) | **Evet** |
| `RESEND_API_KEY` | Sunucu (`api/`) | **Evet** |
| `RESERVATION_FROM_EMAIL` | Sunucu (`api/`) | — |
| `RESERVATION_TO_EMAIL` | Sunucu (`api/`) | — |

- **Lokal:** değerleri `.env.local`'a yaz. (Bu dosya commit'lenmez.)
- **Vercel:** Project Settings → **Environment Variables**'a aynı değişkenleri gir.
  `.env.local`'ı Vercel'e yükleme. `VITE_` olanlar build'e gömülür; gizliler
  yalnız fonksiyon çalışırken okunur.

## 4. Vercel
1. Repoyu Vercel'e import et (framework: Vite — otomatik algılanır).
2. Yukarıdaki ortam değişkenlerini gir.
3. Deploy. `vercel.json` SPA yönlendirmesini ve `api/reserve` fonksiyonunu ayağa kaldırır.
4. Test: rezervasyon formunu doldur → Supabase `reservations` tablosunda kayıt +
   restoran adresine mail.

---

## Faz 2b — kalan kod bağlaması (birlikte yapılacak)
Anahtarlar girildikten sonra yapılacak kod işi (henüz YAPILMADI; davranışı
değiştireceği için ayrı adım):

1. **`store.js` / `menuStore.js` → async Supabase.** `isSupabaseConfigured()`
   true ise Supabase sorguları, değilse localStorage'a düşüş. Fonksiyonlar
   `Promise` döndüreceği için çağıran bileşenler (`Dashboard`, `MenuAdmin`,
   `QRMenuPage`, `ManualReservationPanel`, `useNewReservations`) `await`/efektle
   güncellenecek.
2. **`ContactPage.jsx` formu → `POST /api/reserve`** (Supabase configured iken),
   aksi halde mevcut `createReservation` (localStorage) ile geriye uyum.
3. **Menü taslak/yayın** DB karşılığı: `menu_items`/`menu_categories`'e
   `is_draft` kolonu ya da ayrı `*_draft` tabloları + `publishDraft` mantığı.
4. **Admin girişi → Supabase Auth.** Şu an `src/admin/auth.js` client-side sabit
   şifre (`balikci2026`) kullanıyor; gerçek veride bu yetersiz — Supabase Auth'a
   taşınacak ve RLS `authenticated` politikaları bununla çalışacak.

## Cloudflare'de kalmak istersen (Vercel yerine)
- Supabase + menü/rezervasyon okuma frontend'den aynı şekilde çalışır.
- Rezervasyon + Resend için `api/reserve.js` yerine bir **Cloudflare Pages
  Function** (`functions/api/reserve.js`) yazılır; aynı mantık, `env` Cloudflare
  Pages değişkenlerinden okunur. `vercel.json` Cloudflare'de kullanılmaz.
