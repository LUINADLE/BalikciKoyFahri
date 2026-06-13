# Faz 2 Kurulumu — Supabase + Cloudflare Pages + Resend

Bu doküman, siteyi localStorage mock'tan gerçek veritabanına (Supabase) ve
rezervasyon e-postasına (Resend) taşımak için adımları içerir. Önhazırlık
dosyaları repoda hazır; bu adımları tamamlayınca Faz 2b kod bağlamasına geçilir.

> Şu an site Cloudflare'da **Workers + Static Assets** olarak (kökteki
> `wrangler.jsonc`, `npx wrangler deploy`) ve localStorage ile çalışıyor.
> Aşağıdakiler tamamlanana kadar davranış değişmez. Vercel'den çıkıldı.
> SPA yönlendirmesi `wrangler.jsonc` → `assets.not_found_handling:
> "single-page-application"` ile sağlanır (ayrı `_redirects` dosyasına gerek yok).

## Hazır gelen dosyalar
- `src/lib/supabaseClient.js` — env tanımlıysa Supabase istemcisi, değilse `null` (inert).
- `.env.example` — tüm anahtar isimleri + public/secret açıklamaları.
- `.env.local` — lokal değerler (gitignore'lu; sen doldur).
- `supabase/migrations/0001_init.sql` — tablolar + RLS.
- `supabase/seed_menu.sql` — menü verisi (12 kategori, 350 ürün; upsert).
- `functions/api/reserve.js` — rezervasyon insert + Resend mail mantığı (Faz 2 taslağı).
  **Uyarı:** Mevcut Workers Static Assets kurulumunda `functions/` dizini otomatik
  uca dönüşmez (bu yalnızca klasik Cloudflare *Pages*'te geçerli). Devreye almak için
  bkz. aşağıdaki "Cloudflare" adımı.
- `wrangler.jsonc` — Workers Static Assets yapılandırması (assets dizini + SPA fallback).

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
- **Cloudflare:** Workers & Pages → `balikcikoyfahri` → Settings → **Variables**'a aynı
  değişkenleri gir. Gizli olanları (`SUPABASE_SERVICE_ROLE_KEY`, `RESEND_API_KEY`)
  **Secret** olarak ekle. `.env.local`'ı yükleme. `VITE_` olanlar build'e gömülür;
  gizliler yalnız sunucu (Worker) çalışırken okunur.

## 4. Cloudflare (Workers + Static Assets)
1. Repo zaten Cloudflare'a bağlı: build command `npm run build`, deploy command
   `npx wrangler deploy`, statik dosyalar `wrangler.jsonc` → `assets.directory` (`./dist/`).
   SPA yönlendirmesi `assets.not_found_handling: "single-page-application"` ile çalışır.
2. Ortam değişkenlerini gir: Cloudflare panel → Workers & Pages → `balikcikoyfahri` →
   Settings → Variables. Gizli olanları (`SUPABASE_SERVICE_ROLE_KEY`, `RESEND_API_KEY`)
   **Secret** olarak ekle.
3. **Rezervasyon ucunu devreye al (Faz 2):** Workers Static Assets kurulumunda
   `functions/` otomatik çalışmaz. İki seçenek:
   - **a)** `wrangler.jsonc`'a bir Worker `main` script'i ekle; `/api/reserve` POST'unu
     bu script'te karşıla (mantığı `functions/api/reserve.js`'ten taşı), statik
     varlıklara `assets` binding ile devam et.
   - **b)** Projeyi klasik **Cloudflare Pages**'e taşı; o zaman `functions/api/reserve.js`
     olduğu gibi otomatik `POST /api/reserve` olur.
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
