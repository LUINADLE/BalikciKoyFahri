// src/data/content.js
// Sitenin tüm görünür metinleri — tek kaynak. TR ve EN.
// Yeni metin eklerken iki dile de eklemeyi unutmayın.

export const BRAND = `Balıkçıköy Fahri`;

// Diller arasında ortak (adres, telefon, e-posta vb.)
export const SHARED = {
  phone: `+90 312 555 00 00`,
  phoneHref: `tel:+903125550000`,
  email: `rezervasyon@balikcikoyfahri.com`,
  addressLines: [`Prof. Dr. Ahmet Taner Kışlalı Mah.`, `2853. Cd. No: 24`, `Çankaya, Ankara`],
  region: `Ankara · Türkiye`,
};

export const content = {
  /* ════════════════════ TÜRKÇE ════════════════════ */
  tr: {
    nav: { home: `Ana Sayfa`, menu: `Menü`, gallery: `Galeri`, contact: `Rezervasyon`, book: `Masa Ayırt` },

    footer: {
      tagline: `Ankara'nın sıcak balık sofrası. Her sabah Ege ve Akdeniz'den taze deniz ürünleri, başkente taşınır.`,
      hoursLine: `Sal – Paz · 12:00 – 23:00`,
      navTitle: `Sayfalar`,
      links: { home: `Ana Sayfa`, menu: `Menü`, gallery: `Galeri & Hakkımızda`, contact: `Rezervasyon` },
      contactTitle: `İletişim`,
      hoursTitle: `Saatler`,
      hours: [[`Sal – Cum`, `12:00–15:00 · 18:00–23:00`], [`Cmt – Paz`, `12:00–15:30 · 18:00–23:30`], [`Pazartesi`, `Kapalı`]],
      rights: `Tüm hakları saklıdır.`,
    },

    home: {
      hero: {
        overline: `Ankara · 2019'dan beri`,
        title: `Tazelik her sabah\nbaşkente gelir.`,
        sub: `Ege ve Akdeniz'in en taze deniz ürünleri her sabah Ankara'ya ulaşır.`,
        book: `Masa Ayırt`,
        menu: `Menüyü Gör`,
        scroll: `Kaydır`,
      },
      band: [[`Günlük Taze Ürün`, `Her sabah kıyıdan`], [`Grup & Etkinlik`, `Birlikte daha güzel`], [`Özel Etkinlikler`, `10–120 kişi kapasitesi`]],
      story: {
        overline: `Hikayemiz`,
        title: `Akdeniz'in\nÖzü.`,
        p1: `2019 yılında kurulan ${BRAND}, Ankara'nın kalbinde, taze deniz ürünlerini sıcak bir sofra kültürüyle buluşturmak için yola çıktı.`,
        p2: `Her sabah kıyılardan seçilen taze ürünlerle hazırlanan menümüz; aile sofraları, grup yemekleri ve özel etkinlikler için keyifli bir mekan sunar.`,
        cta: `Hikayemizi Keşfedin`,
      },
      features: {
        overline: `Neden ${BRAND}`,
        title: `Her Detayda Özen`,
        cards: [
          { n: `01`, t: `Günlük Taze Ürün`, b: `Her sabah Ege ve Akdeniz balıkçılarından doğrudan temin edilen ürünler aynı gün sofraya taşınır. Taze olmayan hiçbir şey masanıza ulaşmaz.` },
          { n: `02`, t: `Grup & Etkinlik`, b: `Geniş salonumuz aile sofraları, grup yemekleri ve kutlamalar için tasarlandı. 10'dan 120 kişiye kadar ağırlayabiliriz.` },
          { n: `03`, t: `Şarap Seçkisi`, b: `Özenle seçilmiş şarap listemiz her tabakla uyum içinde; mevsime ve menüye göre güncellenir.` },
        ],
      },
      cta: {
        overline: `Masanızı Ayırtın`,
        title: `Unutulmaz bir Deneyim\nSizi Bekliyor`,
        sub: `Grup yemekleri ve özel etkinlikler için paketlerimizi keşfedin.`,
        book: `Rezervasyon Yap`,
      },
    },

    menu: {
      overline: `Menümüz`,
      title: `Mutfak Sanatı`,
      intro: `Ege ve Akdeniz'in en taze ürünleri, sade ve özenli bir mutfak anlayışıyla hazırlanan günlük menümüz.`,
      sections: {
        cold: {
          title: `Soğuk Mezeler`, sub: `Serin Başlangıçlar`,
          items: [
            { name: `Narenciye Salamura Somon`, desc: `Dereotu crème fraîche, ikra, çıtır kapari` },
            { name: `Çipura Ceviche`, desc: `Yuzu ponzu, salatalık jüsü, kişniş yağı` },
            { name: `Ege İstiridyesi`, desc: `Mignonette sos, limon, kaba deniz tuzu — adet` },
            { name: `Ahtapot Carpaccio`, desc: `Truffle yağı, kapari, limon jölesi` },
            { name: `Ton Balığı Tartare`, desc: `Wasabi mayo, susam yağı, nori kıtırı` },
          ],
        },
        hot: {
          title: `Sıcak Başlangıçlar`, sub: `Ocaktan & Fırından`,
          items: [
            { name: `Tereyağlı Tarak`, desc: `Safran beurre blanc, taze karabiber, tarhun` },
            { name: `Izgarada Kalamar`, desc: `Harissa tereyağı, limon, kişniş` },
            { name: `Istakoz Bisque`, desc: `Brioche tost, crème fraîche, kırmızı havyar` },
            { name: `Siyah Mürekkepli Ahtapot`, desc: `Nero risotto, şekersiz turunç jölesi` },
            { name: `Karides Güveç`, desc: `Domates concassé, beyaz feta, taze kekik` },
          ],
        },
        wine: {
          title: `Şarap Seçkisi`, sub: `Şef Önerileri`,
          items: [
            { name: `Chateau Musar Blanc`, desc: `Bekaa Vadisi, Lübnan · 2018` },
            { name: `Puligny-Montrachet`, desc: `Domaine Leflaive, Bourgogne · 2020` },
            { name: `Sancerre Blanc`, desc: `Henri Bourgeois, Loire Vadisi · 2021` },
            { name: `Kavaklıdere Prestige`, desc: `Ankara bağları, Türkiye · 2022` },
            { name: `Chablis Premier Cru`, desc: `William Fèvre, Montée de Tonnerre · 2019` },
          ],
        },
      },
      catch: {
        title: `Günün Balığı`, sub: `Taze Seçim`, badge: `Piyasa Fiyatı`, daily: `Günün Fiyatı`,
        note: `Günlük seçimlerimiz Ege'nin bağımsız balıkçılarından doğrudan temin edilir. Tuzda, ızgarada ya da odun ateşinde; zeytinyağı ve limon ile sunulur.`,
        items: [
          { name: `Kalkan`, origin: `KARADENİZ` }, { name: `Çipura`, origin: `EGE` },
          { name: `Levrek`, origin: `AKDENİZ` }, { name: `Kırlangıç`, origin: `EGE` },
          { name: `Lüfer`, origin: `MARMARA` }, { name: `Orfoz`, origin: `AKDENİZ` },
        ],
      },
      note: { pre: `Menümüz mevsime ve günün taze ürünlerine göre değişir. Alerjen bilgisi için servisimizle iletişime geçiniz. Grup rezervasyonları için `, link: `rezervasyon sayfamızı`, post: ` ziyaret ediniz.` },
    },

    gallery: {
      overline: `Galeri & Hakkımızda`,
      title: `Deniz & Sofra`,
      intro: `Dostların, ailelerin ve toplulukların bir araya geldiği; taze denizin, sıcak misafirperverliğin ve özenli servisin buluştuğu bir sofra.`,
      feature: {
        overline: `Grup Salonu`,
        title: `Grup\nSalonu`,
        p1: `Geniş grup salonumuz; kutlamalar, aile sofraları ve kurumsal yemekler için tasarlandı. Ferah yerleşim ve esnek masa düzeniyle kalabalık gruplar rahatça ağırlanır.`,
        p2: `Doğum günleri, yıl dönümleri ve şirket etkinlikleri için özel menü ve düzen seçenekleri sunuyoruz.`,
        cta: `Grup Yemeği Sorgula →`,
      },
      caption: `İç Tasarım: Studio Çankaya`,
      phil: [
        { title: `Tavizsiz\nTedarik`, body: `Denizle ilişkimiz derin bir saygıya dayanır. Ege ve Akdeniz genelindeki küçük tekne işletmeleriyle çalışır, sabahın taze ürünlerini doğrudan Ankara'ya taşırız. Menümüzü malzemeler yönetir; tersi asla.` },
        { title: `Sıcak\nMisafirperverlik`, body: `Her misafiri kendi soframızdaymış gibi ağırlarız. Güler yüzlü, özenli ve samimi servisimizle masada geçirdiğiniz her anın keyifli olmasını isteriz.` },
      ],
      services: {
        overline: `Grup & Etkinlik`,
        title: `Grup Yemeği & Etkinlik`,
        cards: [
          { t: `Grup Yemekleri`, items: [`Geniş ve ferah grup masaları`, `Paylaşımlı tabak menüleri`, `10–80 kişilik düzenler`, `Esnek menü seçenekleri`] },
          { t: `Kurumsal Etkinlikler`, items: [`Şirket yemekleri & kutlamalar`, `AV & teknik destek`, `Kişiye özel menü tasarımı`, `Ayrılmış alan seçeneği`] },
          { t: `Özel Kutlamalar`, items: [`Doğum günü & yıl dönümleri`, `Pasta & özel sunum`, `Dekorasyon koordinasyonu`, `Ön etkinlik danışmanlığı`] },
        ],
        cta: `Etkinlik Sorgula`,
      },
    },

    contact: {
      title: `Rezervasyon &\nİletişim`,
      intro: `${BRAND}'de masanızı ayırtın ya da grup yemekleri ve özel etkinlikler için bize ulaşın.`,
      done: { title: `Teşekkürler`, body: `Talebiniz alındı. En kısa süre içinde sizinle iletişime geçeceğiz.`, urgent: `Acil:` },
      form: {
        heading: `Online Rezervasyon`,
        date: `Tarih`, time: `Saat`, selectTime: `Saat Seçin`, party: `Kişi Sayısı`,
        name: `Ad Soyad *`, namePh: `Ad Soyad`, phone: `Telefon *`, phonePh: `5XX XXX XX XX`,
        eventType: `Etkinlik Türü`, notes: `Özel İstekler / Diyet`, notesPh: `Alerjiler, kutlama detayları, erişilebilirlik…`,
        submit: `Rezervasyon Talep Et →`, required: `Zorunlu alan`, phoneInvalid: `Telefon numarası 5 ile başlamalıdır.`,
        partySizes: [`1 Kişi`, `2 Kişi`, `3 Kişi`, `4 Kişi`, `5 Kişi`, `6 Kişi`, `7 Kişi`, `8 Kişi`, `9 Kişi`, `10 Kişi`, `10–20 Kişi`, `20–50 Kişi`, `50+ Kişi`],
        eventTypes: [[`individual`, `Bireysel`], [`group`, `Grup`], [`event`, `Özel Etkinlik`]],
      },
      sidebar: {
        groupTitle: `Grup & Etkinlik`,
        groupBody: `Grup yemekleri ve özel etkinlikler için bize doğrudan ulaşın.`,
        directLine: `Direkt Hat`, call: `Hemen Ara →`,
        locationTitle: `Konum`, arrivalTitle: `Ulaşım & Vale`,
        arrivalBody: `Girişte ücretsiz vale hizmeti. Varışta rezervasyon onayınızı belirtmeniz yeterli.`,
        hoursTitle: `Saatler`,
        hours: [[`Akşam`, `18:00 – 23:30 (Her gün)`], [`Öğle`, `12:00 – 15:30 (Sal–Paz)`]],
      },
      mapTitle: `${BRAND} konumu`,
    },
  },

  /* ════════════════════ ENGLISH ════════════════════ */
  en: {
    nav: { home: `Home`, menu: `Menu`, gallery: `Gallery`, contact: `Reservations`, book: `Book a Table` },

    footer: {
      tagline: `Ankara's warm seafood table. Every morning, fresh catch from the Aegean and Mediterranean comes to the capital.`,
      hoursLine: `Tue – Sun · 12:00 – 23:00`,
      navTitle: `Navigation`,
      links: { home: `Home`, menu: `Menu`, gallery: `Gallery & About`, contact: `Reservations` },
      contactTitle: `Contact`,
      hoursTitle: `Hours`,
      hours: [[`Tue – Fri`, `12:00–15:00 · 18:00–23:00`], [`Sat – Sun`, `12:00–15:30 · 18:00–23:30`], [`Monday`, `Closed`]],
      rights: `All rights reserved.`,
    },

    home: {
      hero: {
        overline: `Ankara · Est. 2019`,
        title: `Freshness brought\nto the capital daily.`,
        sub: `The freshest seafood from the Aegean and Mediterranean arrives in Ankara every morning.`,
        book: `Book a Table`,
        menu: `View Menu`,
        scroll: `Scroll`,
      },
      band: [[`Daily Fresh Catch`, `Straight from the coast`], [`Group & Events`, `Better together`], [`Special Events`, `Capacity for 10–120`]],
      story: {
        overline: `Our Story`,
        title: `The Essence of\nthe Mediterranean.`,
        p1: `Founded in 2019, ${BRAND} set out to bring the freshest seafood together with a warm, convivial table culture in the heart of Ankara.`,
        p2: `Prepared each morning with the day's catch, our menu offers a welcoming setting for family meals, group dining and special events.`,
        cta: `Discover Our Story`,
      },
      features: {
        overline: `Why ${BRAND}`,
        title: `Excellence in Every Detail`,
        cards: [
          { n: `01`, t: `Daily Fresh Catch`, b: `Sourced directly from Aegean and Mediterranean fishermen each morning and served the same day. Nothing reaches your table unless it's fresh.` },
          { n: `02`, t: `Group & Events`, b: `Our spacious dining room is made for family meals, group dining and celebrations — seating from 10 up to 120 guests.` },
          { n: `03`, t: `Curated Wines`, b: `A carefully chosen wine list that pairs with every plate, updated with the season and the menu.` },
        ],
      },
      cta: {
        overline: `Reserve Your Table`,
        title: `An Unforgettable\nExperience Awaits`,
        sub: `Discover our packages for group dining and special events.`,
        book: `Make a Reservation`,
      },
    },

    menu: {
      overline: `Our Menu`,
      title: `Culinary Arts`,
      intro: `The freshest produce of the Aegean and Mediterranean, prepared with a simple, careful approach — our daily menu.`,
      sections: {
        cold: {
          title: `Cold Appetizers`, sub: `Chilled Starters`,
          items: [
            { name: `Citrus-Cured Salmon`, desc: `Dill crème fraîche, roe, crispy capers` },
            { name: `Sea Bream Ceviche`, desc: `Yuzu ponzu, cucumber jus, coriander oil` },
            { name: `Aegean Oysters`, desc: `Mignonette, lemon, coarse sea salt — each` },
            { name: `Octopus Carpaccio`, desc: `Truffle oil, capers, lemon gel` },
            { name: `Tuna Tartare`, desc: `Wasabi mayo, sesame oil, nori crisp` },
          ],
        },
        hot: {
          title: `Hot Starters`, sub: `From the Fire`,
          items: [
            { name: `Buttered Scallops`, desc: `Saffron beurre blanc, cracked pepper, tarragon` },
            { name: `Grilled Calamari`, desc: `Harissa butter, lemon, coriander` },
            { name: `Lobster Bisque`, desc: `Brioche toast, crème fraîche, red caviar` },
            { name: `Squid-Ink Octopus`, desc: `Nero risotto, bitter-orange gel` },
            { name: `Shrimp Casserole`, desc: `Tomato concassé, white feta, fresh thyme` },
          ],
        },
        wine: {
          title: `Curated Pairings`, sub: `Sommelier Picks`,
          items: [
            { name: `Chateau Musar Blanc`, desc: `Bekaa Valley, Lebanon · 2018` },
            { name: `Puligny-Montrachet`, desc: `Domaine Leflaive, Burgundy · 2020` },
            { name: `Sancerre Blanc`, desc: `Henri Bourgeois, Loire Valley · 2021` },
            { name: `Kavaklıdere Prestige`, desc: `Ankara vineyards, Türkiye · 2022` },
            { name: `Chablis Premier Cru`, desc: `William Fèvre, Montée de Tonnerre · 2019` },
          ],
        },
      },
      catch: {
        title: `Daily Fresh Catch`, sub: `Today's Selection`, badge: `Market Price`, daily: `Daily Price`,
        note: `Our daily selection comes directly from independent Aegean fishermen — served in salt, grilled or over wood fire, with olive oil and lemon.`,
        items: [
          { name: `Turbot`, origin: `BLACK SEA` }, { name: `Sea Bream`, origin: `AEGEAN` },
          { name: `Sea Bass`, origin: `MEDITERRANEAN` }, { name: `Gurnard`, origin: `AEGEAN` },
          { name: `Bluefish`, origin: `MARMARA` }, { name: `Grouper`, origin: `MEDITERRANEAN` },
        ],
      },
      note: { pre: `Our menu changes with the season and the daily catch. For allergen information, please ask our team. For group reservations, visit our `, link: `reservations page`, post: `.` },
    },

    gallery: {
      overline: `Gallery & About`,
      title: `Sea & Table`,
      intro: `A table where friends, families and groups come together — where the freshest sea, warm hospitality and attentive service meet.`,
      feature: {
        overline: `Group Salon`,
        title: `The Group\nSalon`,
        p1: `Our spacious group salon is designed for celebrations, family gatherings and corporate dinners. With airy seating and flexible table layouts, larger groups are welcomed with ease.`,
        p2: `For birthdays, anniversaries and company events, we offer tailored menu and seating options.`,
        cta: `Inquire about Group Dining →`,
      },
      caption: `Interior Design by Studio Çankaya`,
      phil: [
        { title: `Uncompromising\nSourcing`, body: `Our relationship with the sea rests on deep respect. We work with small boat operations across the Aegean and Mediterranean, bringing the morning's catch straight to Ankara. The ingredients lead our menu; never the other way around.` },
        { title: `Warm\nHospitality`, body: `We welcome every guest as if at our own table. With warm, attentive and sincere service, we want every moment you spend with us to be a pleasure.` },
      ],
      services: {
        overline: `Group & Events`,
        title: `Group Dining & Events`,
        cards: [
          { t: `Group Dining`, items: [`Spacious group tables`, `Shared-plate menus`, `Seating for 10–80`, `Flexible menu options`] },
          { t: `Corporate Events`, items: [`Company dinners & celebrations`, `AV & technical support`, `Tailored menu design`, `Reserved-area option`] },
          { t: `Special Celebrations`, items: [`Birthdays & anniversaries`, `Cake & special presentation`, `Decoration coordination`, `Pre-event consultation`] },
        ],
        cta: `Inquire about Events`,
      },
    },

    contact: {
      title: `Reservations &\nInquiries`,
      intro: `Reserve your table at ${BRAND}, or get in touch for group dining and special events.`,
      done: { title: `Thank You`, body: `Your request has been received. We will be in touch within 24 hours.`, urgent: `Urgent:` },
      form: {
        heading: `Online Reservation`,
        date: `Date`, time: `Time`, selectTime: `Select Time`, party: `Party Size`,
        name: `Full Name *`, namePh: `First Last`, phone: `Contact Number *`, phonePh: `5XX XXX XX XX`,
        eventType: `Event Type`, notes: `Special Requests / Dietary`, notesPh: `Allergies, occasion details, accessibility…`,
        submit: `Request Reservation →`, required: `Required field`, phoneInvalid: `Phone number must start with 5.`,
        partySizes: [`1 Guest`, `2 Guests`, `3 Guests`, `4 Guests`, `5 Guests`, `6 Guests`, `7 Guests`, `8 Guests`, `9 Guests`, `10 Guests`, `10–20 Guests`, `20–50 Guests`, `50+ Guests`],
        eventTypes: [[`individual`, `Individual`], [`group`, `Group`], [`event`, `Special Event`]],
      },
      sidebar: {
        groupTitle: `Group Dining & Events`,
        groupBody: `For group dining and special events, reach us directly.`,
        directLine: `Direct Line`, call: `Call Directly →`,
        locationTitle: `Location`, arrivalTitle: `Arrival & Valet`,
        arrivalBody: `Complimentary valet at the entrance. Present your reservation confirmation on arrival.`,
        hoursTitle: `Hours`,
        hours: [[`Dinner`, `18:00 – 23:30 (Daily)`], [`Lunch`, `12:00 – 15:30 (Tue–Sun)`]],
      },
      mapTitle: `${BRAND} location`,
    },
  },
};
