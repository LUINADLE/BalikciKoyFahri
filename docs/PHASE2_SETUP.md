# Faz 2 Kurulumu — Supabase + Cloudflare Pages + Resend

Bu doküman, siteyi localStorage mock'tan gerçek veritabanına (Supabase) ve
rezervasyon e-postasına (Resend) taşımak için adımları içerir. Önhazırlık
dosyaları repoda hazır; bu adımları tamamlayınca Faz 2b kod bağlamasına geçilir.

> Şu an site **Cloudflare Pages**'te ve localStorage ile çalışıyor. Aşağıdakiler
> tamamlanana kadar davranış değişmez. Proje tamamen Cloudflare üzerinde
> yapılandırılmıştır (Vercel'den çıkıldı); rezervasyon backend'i bir Cloudflare
> Pages Function (`functions/api/reserve.js`) olarak hazırdır.

## Hazır gelen dosyalar
- `src/lib/supabaseClient.js` — env tanımlıysa Supabase istemcisi, değilse `null` (inert).
- `.env.example` — tüm anahtar isimleri + public/secret açıklamaları.
- `.env.local` — lokal değerler (gitignore'lu; sen doldur).
- `supabase/migrations/0001_init.sql` — tablolar + RLS.
- `supabase/seed_menu.sql` — menü verisi (12 kategori, 350 ürün; upsert).
- `functions/api/reserve.js` — Cloudflare Pages Function: rezervasyon insert + Resend mail.
- `public/_redirects` — Cloudflare Pages SPA fallback (`/* /index.html 200`).

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
| `SUPABASE_URL` | Sunucu (`functions/`) | — |
| `SUPABASE_SERVICE_ROLE_KEY` | Sunucu (`functions/`) | **Evet** |
| `RESEND_API_KEY` | Sunucu (`functions/`) | **Evet** |
| `RESERVATION_FROM_EMAIL` | Sunucu (`functions/`) | — |
| `RESERVATION_TO_EMAIL` | Sunucu (`functions/`) | — |

- **Lokal:** değerleri `.env.local`'a yaz. (Bu dosya commit'lenmez.)
- **Cloudflare Pages:** Project → Settings → **Environment variables**'a aynı
  değişkenleri gir. Gizli olanları (`SUPABASE_SERVICE_ROLE_KEY`, `RESEND_API_KEY`)
  **Secret** olarak ekle. `.env.local`'ı yükleme. `VITE_` olanlar build'e gömülür
  (Production + Preview ortamlarına eklemeyi unutma); gizliler yalnız fonksiyon
  çalışırken okunur.

## 4. Cloudflare Pages
1. Repo zaten Cloudflare Pages'e bağlı. Build ayarı: build command `npm run build`,
   output directory `dist`.
2. Yukarıdaki ortam değişkenlerini gir (gizliler Secret).
3. Deploy. `public/_redirects` SPA yönlendirmesini, `functions/api/reserve.js` ise
   `POST /api/reserve` fonksiyonunu otomatik ayağa kaldırır.
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
2. **`ContactPage.jsx` formu → `POST /api/reserve`** (Cloudflare Pages Function;
   Supabase configured iken), aksi halde mevcut `createReservation` (localStorage)
   ile geriye uyum.
3. **Menü taslak/yayın** DB karşılığı: `menu_items`/`menu_categories`'e
   `is_draft` kolonu ya da ayrı `*_draft` tabloları + `publishDraft` mantığı.
4. **Admin girişi → Supabase Auth.** Şu an `src/admin/auth.js` client-side sabit
   şifre (`balikci2026`) kullanıyor; gerçek veride bu yetersiz — Supabase Auth'a
   taşınacak ve RLS `authenticated` politikaları bununla çalışacak.
