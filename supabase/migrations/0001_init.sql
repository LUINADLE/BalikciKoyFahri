-- supabase/migrations/0001_init.sql
-- Balıkçıköy Fahri — başlangıç şeması (menü + rezervasyon) + RLS.
-- Supabase SQL Editor'da bir kez çalıştır; ardından supabase/seed_menu.sql ile menüyü doldur.

-- ───────────────────────── Menü ─────────────────────────
-- id'ler kaynak (kolayrestoran/Firebase) anahtarlarıdır → src/data/qrMenuSeed.js ile birebir.

create table if not exists public.menu_categories (
  id          text primary key,
  name_tr     text not null,
  name_en     text not null default '',
  sort_order  integer not null default 0
);

create table if not exists public.menu_items (
  id           text primary key,
  category_id  text not null references public.menu_categories(id) on delete cascade,
  name_tr      text not null,
  name_en      text not null default '',
  desc_tr      text not null default '',
  desc_en      text not null default '',
  price        text not null default '',   -- serbest metin ("1.330 ₺", "" = fiyatsız)
  available    boolean not null default true,
  sort_order   integer not null default 0
);

create index if not exists menu_items_category_idx on public.menu_items (category_id, sort_order);

-- Not (Faz 2b): admin taslak/yayın ayrımı için ileride `is_draft boolean` kolonu veya
-- ayrı *_draft tabloları eklenebilir. Şimdilik tek (canlı) set tutulur.

-- ─────────────────────── Rezervasyon ───────────────────────
create table if not exists public.reservations (
  id          uuid primary key default gen_random_uuid(),
  date        date not null,
  time        text not null default '',
  guests      text not null default '',
  name        text not null,
  phone       text not null,
  event       text not null default 'individual',
  notes       text not null default '',
  status      text not null default 'new',  -- new | pending | verifying | confirmed | cancelled
  created_at  timestamptz not null default now()
);

create index if not exists reservations_date_idx on public.reservations (date);

-- ─────────────────────────── RLS ───────────────────────────
alter table public.menu_categories enable row level security;
alter table public.menu_items      enable row level security;
alter table public.reservations    enable row level security;

-- Menü: herkese (anon) OKUMA. Yazma yok → menü düzenleme yalnız service_role ile
-- (service_role RLS'i bypass eder; admin paneli Faz 2b'de bunu kullanır/Edge function).
create policy "menu_categories_public_read" on public.menu_categories
  for select to anon, authenticated using (true);

create policy "menu_items_public_read" on public.menu_items
  for select to anon, authenticated using (true);

-- Rezervasyon: herkes (anon) EKLEYEBİLİR (public form / api/reserve).
-- Okuma/güncelleme/silme yalnız authenticated (admin). service_role da bypass eder.
create policy "reservations_public_insert" on public.reservations
  for insert to anon, authenticated with check (true);

create policy "reservations_admin_select" on public.reservations
  for select to authenticated using (true);

create policy "reservations_admin_update" on public.reservations
  for update to authenticated using (true) with check (true);

create policy "reservations_admin_delete" on public.reservations
  for delete to authenticated using (true);
