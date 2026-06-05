// src/data/images.js
//
// Tüm site görselleri tek yerde. Şimdilik ücretsiz Unsplash stok fotoğrafları.
// KENDİ FOTOĞRAFLARINIZI KULLANMAK İÇİN:
//   1) Fotoğrafları `src/assets/` altına koyun (örn. src/assets/hero.jpg)
//   2) Üste `import hero from './assets/hero.jpg'` ekleyip aşağıdaki URL yerine `hero` yazın.
// Düzen/oranlar değişmez; sadece kaynak değişir.

// Unsplash görselini istenen genişlikte, kırpılmış ve optimize döndürür.
const u = (id, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  // Ana sayfa
  hero:          u('1559339352-11d035aa65de', 1920), // şık tabak / fine dining
  storyInterior: u('1414235077428-338989a2e8c0', 1200), // restoran iç mekan
  groupSalon: u('1517248135467-4c7edcad34c4', 1200), // grup salonu, akşam

  // Ana sayfa + Galeri görsel grid'i (6 adet)
  gallery1: u('1530062845289-9109b2c9c868', 1000), // kurumsal etkinlik düzeni
  gallery2: u('1592861956120-e524fc739696', 1000), // masa / akşam yemeği düzeni
  gallery3: u('1510812431401-41d2bd2722f3', 1000), // sommelier / şarap servisi
  gallery4: u('1424847651672-bf20a4b0982b', 1000), // mimari iç detay / ışık
  gallery5: u('1555396273-367ea4eb4db5', 1000),    // davet / topluluk düzeni
  gallery6: u('1535007813616-79dc02ba4021', 1000), // taze deniz ürünleri vitrini
};
