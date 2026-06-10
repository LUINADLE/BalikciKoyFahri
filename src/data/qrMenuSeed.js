// src/data/qrMenuSeed.js — Balıkçıköy Fahri gerçek menüsü (snapshot).
//
// Kaynak: https://menu.kolayrestoran.com/balikcikoy-fahri (Firebase RTDB),
// 2026-06-10 tarihinde çekilip dönüştürüldü; isimler düzeltilip
// İngilizce + açıklamalarla zenginleştirildi.
//
// Veri modeli (menuStore.js ile birebir):
//   kategori: { id, name:{tr,en}, order, items:[] }
//   ürün:     { id, catId, name:{tr,en}, desc:{tr,en}, price, available, order }

export const QR_MENU_SEED = {
  "categories": [
    {
      "id": "-NtFptX0UF_clWnWEHJK",
      "name": {
        "tr": "Başlangıçlar",
        "en": "Starters"
      },
      "order": 0,
      "items": [
        {
          "id": "-NtFqV_dqD_1ILxdzM1e",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Deniz Mahsulleri Salata (1/2)",
            "en": "Seafood Salad (1/2)"
          },
          "desc": {
            "tr": "Karışık deniz mahsulleri ve mevsim yeşillikleriyle salata (yarım).",
            "en": "Mixed seafood with seasonal greens (half portion)."
          },
          "price": "430 ₺",
          "available": true,
          "order": 0
        },
        {
          "id": "-NtFqYUnhuA0qXWz31E4",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Karides Söğüş (1/2)",
            "en": "Cold Shrimp (1/2)"
          },
          "desc": {
            "tr": "Haşlanmış karidesin soğuk servisi (yarım).",
            "en": "Boiled shrimp served cold (half portion)."
          },
          "price": "490 ₺",
          "available": true,
          "order": 1
        },
        {
          "id": "-NtFz2yQgsUUaaEUQr2F",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Meze (1/2)",
            "en": "Meze Plate (1/2)"
          },
          "desc": {
            "tr": "Şefin seçtiği karışık meze tabağı (yarım).",
            "en": "Chef's assorted meze plate (half portion)."
          },
          "price": "320 ₺",
          "available": true,
          "order": 2
        },
        {
          "id": "-NtKveyXxWTZ0Vuoqxrp",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Acuka (Adet)",
            "en": "Acuka"
          },
          "desc": {
            "tr": "Ceviz, biber salçası ve baharatlarla hazırlanan acılı Antakya mezesi.",
            "en": "Spicy Antakya dip of walnuts, pepper paste and spices."
          },
          "price": "550 ₺",
          "available": true,
          "order": 3
        },
        {
          "id": "-NtKviNeUlBACq42IMWm",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Ahtapot Carpaccio",
            "en": "Octopus Carpaccio"
          },
          "desc": {
            "tr": "İnce dilimlenmiş ahtapot, zeytinyağı ve limonla.",
            "en": "Thinly sliced octopus with olive oil and lemon."
          },
          "price": "950 ₺",
          "available": true,
          "order": 4
        },
        {
          "id": "-NtKvm_m1kwu1mlHrAWE",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Ahtapot Söğüş",
            "en": "Cold Octopus"
          },
          "desc": {
            "tr": "Haşlanmış ahtapotun zeytinyağlı soğuk servisi.",
            "en": "Boiled octopus served cold with olive oil."
          },
          "price": "1.330 ₺",
          "available": true,
          "order": 5
        },
        {
          "id": "-NtKvsWbVgK20i9rupmf",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Akya Rosto",
            "en": "Marinated Leerfish"
          },
          "desc": {
            "tr": "Zeytinyağında marine edilmiş akya balığı.",
            "en": "Amberjack (leerfish) marinated in olive oil."
          },
          "price": "510 ₺",
          "available": true,
          "order": 6
        },
        {
          "id": "-NtKvvNua1m2Lc73h5b7",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Aşk Acısı",
            "en": "Aşk Acısı (Spicy Meze)"
          },
          "desc": {
            "tr": "Közlenmiş acı biber ve domatesle hazırlanan acılı meze.",
            "en": "Spicy roasted pepper and tomato meze."
          },
          "price": "345 ₺",
          "available": true,
          "order": 7
        },
        {
          "id": "-NtKvyCeVN7bIkYsDoDg",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Atom",
            "en": "Atom (Spicy Yogurt)"
          },
          "desc": {
            "tr": "Süzme yoğurt üzerine acılı biber yağı.",
            "en": "Strained yogurt topped with chili oil."
          },
          "price": "365 ₺",
          "available": true,
          "order": 8
        },
        {
          "id": "-NtKw0ju0jLLVWEsOyr5",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Avokadolu Karides",
            "en": "Shrimp with Avocado"
          },
          "desc": {
            "tr": "Avokado ve karidesle hazırlanan soğuk meze.",
            "en": "Cold meze of avocado and shrimp."
          },
          "price": "510 ₺",
          "available": true,
          "order": 9
        },
        {
          "id": "-NtKw47gfdciNTrodgqT",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Avokadolu Levrek",
            "en": "Sea Bass with Avocado"
          },
          "desc": {
            "tr": "Avokado ve marine levrekle hazırlanan meze.",
            "en": "Avocado with marinated sea bass."
          },
          "price": "520 ₺",
          "available": true,
          "order": 10
        },
        {
          "id": "-NwUOugH_1ny-A6iuq4m",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Avokadolu Salata",
            "en": "Avocado Salad"
          },
          "desc": {
            "tr": "Avokado, yeşillik ve mevsim sebzeleriyle salata.",
            "en": "Avocado salad with greens and seasonal vegetables."
          },
          "price": "450 ₺",
          "available": true,
          "order": 11
        },
        {
          "id": "-NtKw8PqDH1JMD3Ltjz5",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Babagannuş",
            "en": "Baba Ganoush"
          },
          "desc": {
            "tr": "Köz patlıcan, tahin ve sarımsakla hazırlanan meze.",
            "en": "Smoky roasted eggplant with tahini and garlic."
          },
          "price": "365 ₺",
          "available": true,
          "order": 12
        },
        {
          "id": "-OEEc3OZab8sLIEfQCTj",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Baby Ahtapot",
            "en": "Baby Octopus"
          },
          "desc": {
            "tr": "Zeytinyağında pişmiş baby ahtapot.",
            "en": "Baby octopus cooked in olive oil."
          },
          "price": "720 ₺",
          "available": true,
          "order": 13
        },
        {
          "id": "-OEEc4aJ6HiGJrb_EExy",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Baby Kalamar",
            "en": "Baby Calamari"
          },
          "desc": {
            "tr": "Zeytinyağlı baby kalamar.",
            "en": "Baby calamari in olive oil."
          },
          "price": "980 ₺",
          "available": true,
          "order": 14
        },
        {
          "id": "-OBokGBN_bFHuS-c3cju",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Baby Karides",
            "en": "Baby Shrimp"
          },
          "desc": {
            "tr": "Zeytinyağlı baby karides.",
            "en": "Baby shrimp in olive oil."
          },
          "price": "715 ₺",
          "available": true,
          "order": 15
        },
        {
          "id": "-NtKwEsmi6atI3PILjGt",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Balık Pastırma",
            "en": "Cured Fish Pastrami"
          },
          "desc": {
            "tr": "Baharatlarla kurutulmuş balık pastırması.",
            "en": "Spiced cured fish \"pastırma\"."
          },
          "price": "580 ₺",
          "available": true,
          "order": 16
        },
        {
          "id": "-O_wBKkDqUVN3CJrVHCR",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Beğendili Ahtapot",
            "en": "Octopus on Eggplant Purée"
          },
          "desc": {
            "tr": "Köz patlıcan beğendi üzerine ahtapot.",
            "en": "Octopus served over smoky eggplant purée."
          },
          "price": "1.010 ₺",
          "available": true,
          "order": 17
        },
        {
          "id": "-NtKwMrtbKBW43JTQ_gq",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Beyaz Peynir (Adet)",
            "en": "White Cheese"
          },
          "desc": {
            "tr": "Tam yağlı beyaz peynir.",
            "en": "Full-fat white cheese."
          },
          "price": "185 ₺",
          "available": true,
          "order": 18
        },
        {
          "id": "-NtKwSpoUrFeJLgmCZSl",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Bodrum Salata",
            "en": "Bodrum Salad"
          },
          "desc": {
            "tr": "Yeşillik, ot ve narla hazırlanan Ege salatası.",
            "en": "Aegean salad with greens, herbs and pomegranate."
          },
          "price": "415 ₺",
          "available": true,
          "order": 19
        },
        {
          "id": "-NtKwVX-BA58-pGXVt6K",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Bombay Fasulye",
            "en": "Bombay Beans"
          },
          "desc": {
            "tr": "Zeytinyağlı baharatlı barbunya.",
            "en": "Spiced olive-oil borlotti beans."
          },
          "price": "405 ₺",
          "available": true,
          "order": 20
        },
        {
          "id": "-NtKwZGOyJ88s52Kke4o",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Bozcaada",
            "en": "Bozcaada Meze"
          },
          "desc": {
            "tr": "Zeytinyağlı Bozcaada usulü ot mezesi.",
            "en": "Bozcaada-style herb meze in olive oil."
          },
          "price": "335 ₺",
          "available": true,
          "order": 21
        },
        {
          "id": "-NtKwb3GdUN0vi8_V21b",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Börülce",
            "en": "Black-Eyed Peas"
          },
          "desc": {
            "tr": "Zeytinyağlı börülce.",
            "en": "Black-eyed peas in olive oil."
          },
          "price": "395 ₺",
          "available": true,
          "order": 22
        },
        {
          "id": "-NtKwdTh18v3I-nocB-6",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Börülce Kokteyl",
            "en": "Black-Eyed Pea Cocktail"
          },
          "desc": {
            "tr": "Börülce, sebze ve sosla hazırlanan kokteyl meze.",
            "en": "Black-eyed pea cocktail with vegetables."
          },
          "price": "385 ₺",
          "available": true,
          "order": 23
        },
        {
          "id": "-NtKwjUpXrTpAY64n8Nf",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Çanak Enginar",
            "en": "Artichoke in a Pot"
          },
          "desc": {
            "tr": "Zeytinyağlı çanak enginar.",
            "en": "Artichoke braised in olive oil."
          },
          "price": "405 ₺",
          "available": true,
          "order": 24
        },
        {
          "id": "-NtKwoyfswRIPC7K6YOa",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Çiroz",
            "en": "Çiroz (Dried Mackerel)"
          },
          "desc": {
            "tr": "Kurutulmuş uskumru (çiroz) mezesi.",
            "en": "Sun-dried mackerel (çiroz) meze."
          },
          "price": "475 ₺",
          "available": true,
          "order": 25
        },
        {
          "id": "-NtKwru5yNXqLfrzbYWy",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Çıtır Balıklar",
            "en": "Crispy Little Fish"
          },
          "desc": {
            "tr": "Çıtır kızarmış küçük balıklar.",
            "en": "Crispy fried small fish."
          },
          "price": "515 ₺",
          "available": true,
          "order": 26
        },
        {
          "id": "-NtKwuZSRNCfVa_lJskM",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Çıtır Ege Otları",
            "en": "Crispy Aegean Herbs"
          },
          "desc": {
            "tr": "Çıtır kızarmış Ege otları.",
            "en": "Crispy fried Aegean herbs."
          },
          "price": "400 ₺",
          "available": true,
          "order": 27
        },
        {
          "id": "-OEswIRtfH9fBxvQ2fPh",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Deniz Mahsulleri Meze Special (1/2)",
            "en": "Seafood Meze Special (1/2)"
          },
          "desc": {
            "tr": "Çeşitli deniz mahsulü mezeleri tabağı (yarım).",
            "en": "Assorted seafood meze platter (half portion)."
          },
          "price": "440 ₺",
          "available": true,
          "order": 28
        },
        {
          "id": "-ODGt3gVG5FfPdsc8MCN",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Deniz Mahsulleri Meze Special",
            "en": "Seafood Meze Special"
          },
          "desc": {
            "tr": "Çeşitli deniz mahsulü mezeleri tabağı.",
            "en": "Assorted seafood meze platter."
          },
          "price": "590 ₺",
          "available": true,
          "order": 29
        },
        {
          "id": "-NtKx2be4Omzvrtk5bEN",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Deniz Mahsulleri Salatası",
            "en": "Seafood Salad"
          },
          "desc": {
            "tr": "Karışık deniz mahsulleri salatası.",
            "en": "Mixed seafood salad."
          },
          "price": "605 ₺",
          "available": true,
          "order": 30
        },
        {
          "id": "-OW19yk5mp3zjJY1st9t",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Domates Special",
            "en": "Tomato Special"
          },
          "desc": {
            "tr": "Domates, ot ve özel sosla hazırlanan meze.",
            "en": "Tomato meze with herbs and a special dressing."
          },
          "price": "485 ₺",
          "available": true,
          "order": 31
        },
        {
          "id": "-NtKxCVIp_mf8CSYQbgE",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Ege Otları",
            "en": "Aegean Herbs"
          },
          "desc": {
            "tr": "Zeytinyağlı mevsim Ege otları.",
            "en": "Seasonal Aegean herbs in olive oil."
          },
          "price": "395 ₺",
          "available": true,
          "order": 32
        },
        {
          "id": "-O1N9OKX0KBrfZfUfxcb",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Enginar Beğendi",
            "en": "Artichoke on Eggplant Purée"
          },
          "desc": {
            "tr": "Beğendi üzerine zeytinyağlı enginar.",
            "en": "Artichoke over smoky eggplant purée."
          },
          "price": "370 ₺",
          "available": true,
          "order": 33
        },
        {
          "id": "-NtKxFxJfYWnmMMkpTcO",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Enginar Ezme",
            "en": "Artichoke Spread"
          },
          "desc": {
            "tr": "Enginarla hazırlanan ezme meze.",
            "en": "Whipped artichoke spread."
          },
          "price": "410 ₺",
          "available": true,
          "order": 34
        },
        {
          "id": "-NtKxJfag7-kUUAiWM8C",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Enginar Kalbi",
            "en": "Artichoke Hearts"
          },
          "desc": {
            "tr": "Zeytinyağlı enginar kalbi.",
            "en": "Artichoke hearts in olive oil."
          },
          "price": "415 ₺",
          "available": true,
          "order": 35
        },
        {
          "id": "-NtKxNWpSSWjvyf0S1ir",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Enginar Sandviç",
            "en": "Artichoke Sandwich"
          },
          "desc": {
            "tr": "Enginarla hazırlanan özel sandviç meze.",
            "en": "Artichoke sandwich meze."
          },
          "price": "440 ₺",
          "available": true,
          "order": 36
        },
        {
          "id": "-NtKxSX2npTfUky2d1W5",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Fava",
            "en": "Fava"
          },
          "desc": {
            "tr": "Ezilmiş bakla püresi (fava).",
            "en": "Mashed broad-bean purée (fava)."
          },
          "price": "350 ₺",
          "available": true,
          "order": 37
        },
        {
          "id": "-O4GMNqK_pckeceE6YSV",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Fesleğenli Humus",
            "en": "Basil Hummus"
          },
          "desc": {
            "tr": "Fesleğenli nohut humusu.",
            "en": "Chickpea hummus with basil."
          },
          "price": "390 ₺",
          "available": true,
          "order": 38
        },
        {
          "id": "-NtKxZKMBdF_NdCThaD8",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Firaya",
            "en": "Firaya"
          },
          "desc": {
            "tr": "Girit usulü zeytinyağlı ot mezesi.",
            "en": "Cretan-style herb meze in olive oil."
          },
          "price": "350 ₺",
          "available": true,
          "order": 39
        },
        {
          "id": "-NtKxbWWrfq1yMtae79U",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Girit Ezme",
            "en": "Cretan Spread"
          },
          "desc": {
            "tr": "Girit usulü otlu peynir ezmesi.",
            "en": "Cretan-style herb and cheese spread."
          },
          "price": "415 ₺",
          "available": true,
          "order": 40
        },
        {
          "id": "-O1X3_QAuA_ElvbnRomG",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Hardallı Girit",
            "en": "Cretan Spread with Mustard"
          },
          "desc": {
            "tr": "Hardallı Girit ezmesi.",
            "en": "Cretan spread with mustard."
          },
          "price": "350 ₺",
          "available": true,
          "order": 41
        },
        {
          "id": "-NtKxnmiOXWkvcePlO4Z",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Hellim Peynir",
            "en": "Halloumi"
          },
          "desc": {
            "tr": "Izgara hellim peyniri.",
            "en": "Grilled halloumi cheese."
          },
          "price": "360 ₺",
          "available": true,
          "order": 42
        },
        {
          "id": "-O2PhCHShRb0KE5hoQoU",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "İrlanda",
            "en": "İrlanda Meze"
          },
          "desc": {
            "tr": "Ot ve baharatlarla hazırlanan ev mezesi.",
            "en": "House herb-and-spice meze."
          },
          "price": "375 ₺",
          "available": true,
          "order": 43
        },
        {
          "id": "-NtKy-9inUHF0e56h8F1",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Kabak Çiçeği Dolma",
            "en": "Stuffed Zucchini Flowers"
          },
          "desc": {
            "tr": "Pirinçle doldurulmuş kabak çiçeği.",
            "en": "Zucchini flowers stuffed with rice."
          },
          "price": "550 ₺",
          "available": true,
          "order": 44
        },
        {
          "id": "-NtKy4VVwKduPE_PTDlH",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Kalamar Burgu",
            "en": "Crispy Spiral Calamari"
          },
          "desc": {
            "tr": "Burgu şeklinde çıtır kalamar.",
            "en": "Crispy spiral-cut calamari."
          },
          "price": "560 ₺",
          "available": true,
          "order": 45
        },
        {
          "id": "-NtKy9K0iqNRRmZ-dCBD",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Kalamar Lokum",
            "en": "Calamari Bites"
          },
          "desc": {
            "tr": "Lokum gibi yumuşak kızarmış kalamar.",
            "en": "Tender bite-sized fried calamari."
          },
          "price": "515 ₺",
          "available": true,
          "order": 46
        },
        {
          "id": "-NtKyFOyRZO6EfLKgOui",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Karides Söğüş",
            "en": "Cold Shrimp"
          },
          "desc": {
            "tr": "Haşlanmış karidesin soğuk servisi.",
            "en": "Boiled shrimp served cold."
          },
          "price": "910 ₺",
          "available": true,
          "order": 47
        },
        {
          "id": "-NtKyUOOSf8fl58gBw9k",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Kaşar Peynir",
            "en": "Kashar Cheese"
          },
          "desc": {
            "tr": "Dilimlenmiş kaşar peyniri.",
            "en": "Sliced kashar cheese."
          },
          "price": "180 ₺",
          "available": true,
          "order": 48
        },
        {
          "id": "-NtKyYxYgpqohUsVwBc6",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Kaya Koruğu",
            "en": "Rock Samphire"
          },
          "desc": {
            "tr": "Zeytinyağlı kaya koruğu otu.",
            "en": "Rock samphire in olive oil."
          },
          "price": "395 ₺",
          "available": true,
          "order": 49
        },
        {
          "id": "-NtKybEKJkDNjUYQJiLw",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Kerevit Salata",
            "en": "Crayfish Salad"
          },
          "desc": {
            "tr": "Kerevit ve yeşilliklerle hazırlanan salata.",
            "en": "Crayfish salad with greens."
          },
          "price": "515 ₺",
          "available": true,
          "order": 50
        },
        {
          "id": "-NtKyeKAy4KEBfRAfCRN",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Kereviz Ezme",
            "en": "Celeriac Spread"
          },
          "desc": {
            "tr": "Kerevizden hazırlanan ezme.",
            "en": "Whipped celeriac spread."
          },
          "price": "355 ₺",
          "available": true,
          "order": 51
        },
        {
          "id": "-NtKypEDDm1UUsPqvlMS",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Köpoğlu",
            "en": "Köpoğlu"
          },
          "desc": {
            "tr": "Kızarmış patlıcan ve biber üzerine sarımsaklı yoğurt.",
            "en": "Fried eggplant and peppers with garlic yogurt."
          },
          "price": "400 ₺",
          "available": true,
          "order": 52
        },
        {
          "id": "-NtKyvkGLt2WSf756Xnl",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Közde Patlıcan",
            "en": "Roasted Eggplant"
          },
          "desc": {
            "tr": "Köz patlıcan mezesi.",
            "en": "Smoky roasted eggplant meze."
          },
          "price": "350 ₺",
          "available": true,
          "order": 53
        },
        {
          "id": "-NtKyznJmtYNKWAvj9ma",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Kuru Cacık",
            "en": "Thick Cacık"
          },
          "desc": {
            "tr": "Yoğurt, salatalık ve sarımsakla yapılan koyu cacık.",
            "en": "Thick yogurt dip with cucumber and garlic."
          },
          "price": "345 ₺",
          "available": true,
          "order": 54
        },
        {
          "id": "-NtKz45L02Algh65Xo6R",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Kuşkonmaz Salata",
            "en": "Asparagus Salad"
          },
          "desc": {
            "tr": "Kuşkonmazlı mevsim salatası.",
            "en": "Asparagus salad with seasonal greens."
          },
          "price": "560 ₺",
          "available": true,
          "order": 55
        },
        {
          "id": "-NtKz78Z4kKbWTd2TGNG",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Kuşkonmazlı Dil Sarma",
            "en": "Asparagus-Sole Roll"
          },
          "desc": {
            "tr": "Dil balığına sarılmış kuşkonmaz.",
            "en": "Sole fillet rolled with asparagus."
          },
          "price": "510 ₺",
          "available": true,
          "order": 56
        },
        {
          "id": "-NtKzAC4CvBCn2Kj0IRg",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Kuşkonmazlı Somon",
            "en": "Salmon with Asparagus"
          },
          "desc": {
            "tr": "Füme somon ve kuşkonmaz mezesi.",
            "en": "Smoked salmon with asparagus."
          },
          "price": "570 ₺",
          "available": true,
          "order": 57
        },
        {
          "id": "-NtKzCYH0LsThnZe-UtB",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Kuver",
            "en": "Cover (Couvert)"
          },
          "desc": {
            "tr": "Ekmek ve sofra servisi (kuver).",
            "en": "Bread and table service (couvert)."
          },
          "price": "",
          "available": true,
          "order": 58
        },
        {
          "id": "-NtKzLI1a_VGfDvTnv2M",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Lakerda (Adet)",
            "en": "Lakerda"
          },
          "desc": {
            "tr": "Tuzlanmış palamut (lakerda).",
            "en": "Salt-cured bonito (lakerda)."
          },
          "price": "520 ₺",
          "available": true,
          "order": 59
        },
        {
          "id": "-NtKzQOWCcH0r4C9vjlg",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Levrek Marin",
            "en": "Marinated Sea Bass"
          },
          "desc": {
            "tr": "Limon ve zeytinyağında marine levrek.",
            "en": "Sea bass marinated in lemon and olive oil."
          },
          "price": "570 ₺",
          "available": true,
          "order": 60
        },
        {
          "id": "-NtKzWn2n22ZUTdwQMMo",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Meze Special",
            "en": "Meze Special"
          },
          "desc": {
            "tr": "Şefin seçtiği karışık meze tabağı.",
            "en": "Chef's assorted meze platter."
          },
          "price": "545 ₺",
          "available": true,
          "order": 61
        },
        {
          "id": "-NtKzZJSe74Z22kBOaEm",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Muammara",
            "en": "Muhammara"
          },
          "desc": {
            "tr": "Ceviz ve kırmızı biberle yapılan acılı meze.",
            "en": "Spicy walnut and red pepper dip."
          },
          "price": "335 ₺",
          "available": true,
          "order": 62
        },
        {
          "id": "-O3rSohIxUgskCoGrS0O",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Pazı Pane",
            "en": "Breaded Chard"
          },
          "desc": {
            "tr": "Pane edilip kızartılmış pazı.",
            "en": "Breaded, fried chard."
          },
          "price": "550 ₺",
          "available": true,
          "order": 63
        },
        {
          "id": "-NtKzd5stE9jDmbCrAKS",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Pazı Sarma",
            "en": "Stuffed Chard"
          },
          "desc": {
            "tr": "Pirinçle sarılmış pazı dolması.",
            "en": "Chard leaves stuffed with rice."
          },
          "price": "550 ₺",
          "available": true,
          "order": 64
        },
        {
          "id": "-NtKzfIiyflsyyW1mx6x",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Peynir Tabağı (Tek)",
            "en": "Cheese Plate (Single)"
          },
          "desc": {
            "tr": "Çeşitli peynirlerden tabak (tek).",
            "en": "Assorted cheese plate (single)."
          },
          "price": "725 ₺",
          "available": true,
          "order": 65
        },
        {
          "id": "-OE3zbUCkpVjIH8dsQvt",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Roma Enginar",
            "en": "Roman Artichoke"
          },
          "desc": {
            "tr": "Roma usulü zeytinyağlı enginar.",
            "en": "Roman-style artichoke in olive oil."
          },
          "price": "610 ₺",
          "available": true,
          "order": 66
        },
        {
          "id": "-NtKzuFWwEFsKTBggddx",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Sebze Kokteyl",
            "en": "Vegetable Cocktail"
          },
          "desc": {
            "tr": "Mevsim sebzeleriyle soğuk kokteyl meze.",
            "en": "Cold seasonal vegetable cocktail."
          },
          "price": "385 ₺",
          "available": true,
          "order": 67
        },
        {
          "id": "-NtKzwxubQKKZSYXdtFr",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Semizotu",
            "en": "Purslane"
          },
          "desc": {
            "tr": "Yoğurtlu semizotu mezesi.",
            "en": "Purslane with yogurt."
          },
          "price": "390 ₺",
          "available": true,
          "order": 68
        },
        {
          "id": "-NtL--I9eHUf1bQsJoO0",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Somon Füme",
            "en": "Smoked Salmon"
          },
          "desc": {
            "tr": "Dilimlenmiş füme somon.",
            "en": "Sliced smoked salmon."
          },
          "price": "550 ₺",
          "available": true,
          "order": 69
        },
        {
          "id": "-NtL-9fmM3ICVqYeUQ87",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Somon Sarma",
            "en": "Salmon Rolls"
          },
          "desc": {
            "tr": "İç harçla sarılmış füme somon.",
            "en": "Smoked salmon rolls with filling."
          },
          "price": "650 ₺",
          "available": true,
          "order": 70
        },
        {
          "id": "-O3YGJgbcABaW1TYy909",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Somonlu Ege Karması",
            "en": "Aegean Mix with Salmon"
          },
          "desc": {
            "tr": "Füme somon ve Ege otları karışımı.",
            "en": "Aegean herb mix with smoked salmon."
          },
          "price": "560 ₺",
          "available": true,
          "order": 71
        },
        {
          "id": "-NtL0cXtXm2ZKJ6Djgrm",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Sultan Ezme",
            "en": "Sultan Spread"
          },
          "desc": {
            "tr": "Közlenmiş sebzelerle acılı ezme.",
            "en": "Spicy roasted-vegetable spread."
          },
          "price": "360 ₺",
          "available": true,
          "order": 72
        },
        {
          "id": "-NtL0emXuYmKJXlfXur3",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Tabule",
            "en": "Tabbouleh"
          },
          "desc": {
            "tr": "Maydanoz, bulgur ve domatesle tabule.",
            "en": "Parsley, bulgur and tomato tabbouleh."
          },
          "price": "430 ₺",
          "available": true,
          "order": 73
        },
        {
          "id": "-NtL0hTo0a-1IIbKxLk8",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Tahinli Patlıcan",
            "en": "Eggplant with Tahini"
          },
          "desc": {
            "tr": "Tahinli köz patlıcan mezesi.",
            "en": "Roasted eggplant with tahini."
          },
          "price": "400 ₺",
          "available": true,
          "order": 74
        },
        {
          "id": "-O0TcBYuxqpgANKCarhX",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Tane Hardallı Beş Peynir",
            "en": "Five Cheeses with Grain Mustard"
          },
          "desc": {
            "tr": "Tane hardallı beş peynir tabağı.",
            "en": "Five-cheese plate with grain mustard."
          },
          "price": "400 ₺",
          "available": true,
          "order": 75
        },
        {
          "id": "-NtL0kWYtEEjTgUEL7Ll",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Tereyağ-Bal",
            "en": "Butter & Honey"
          },
          "desc": {
            "tr": "Tereyağı ve bal.",
            "en": "Butter and honey."
          },
          "price": "275 ₺",
          "available": true,
          "order": 76
        },
        {
          "id": "-NtL0psgRQU-7BYqk8Rn",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Tulum Peyniri (Adet)",
            "en": "Tulum Cheese"
          },
          "desc": {
            "tr": "Keskin tulum peyniri.",
            "en": "Aged tulum cheese."
          },
          "price": "295 ₺",
          "available": true,
          "order": 77
        },
        {
          "id": "-NtL0sk-6OFAcI1n3m8Y",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Turşu",
            "en": "Pickles"
          },
          "desc": {
            "tr": "Çeşitli turşu.",
            "en": "Assorted pickles."
          },
          "price": "360 ₺",
          "available": true,
          "order": 78
        },
        {
          "id": "-NtL0v5hgaA_jdCU4aWY",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Yaz Turşusu",
            "en": "Summer Pickles"
          },
          "desc": {
            "tr": "Mevsim sebzelerinden yaz turşusu.",
            "en": "Summer vegetable pickles."
          },
          "price": "370 ₺",
          "available": true,
          "order": 79
        },
        {
          "id": "-NtL0xt2_8gMTv6uiTLn",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Yoğurt",
            "en": "Yogurt"
          },
          "desc": {
            "tr": "Süzme yoğurt.",
            "en": "Strained yogurt."
          },
          "price": "305 ₺",
          "available": true,
          "order": 80
        },
        {
          "id": "-NtL15HmMdQPdnyjH9Ho",
          "catId": "-NtFptX0UF_clWnWEHJK",
          "name": {
            "tr": "Zeytin Salata",
            "en": "Olive Salad"
          },
          "desc": {
            "tr": "Zeytin ve cevizle hazırlanan ezme.",
            "en": "Olive and walnut spread."
          },
          "price": "330 ₺",
          "available": true,
          "order": 81
        }
      ]
    },
    {
      "id": "-NtFptX0UF_clWnWEHJM",
      "name": {
        "tr": "Ara Sıcaklar",
        "en": "Hot Starters"
      },
      "order": 1,
      "items": [
        {
          "id": "-NtFzcINFagbJGkltUbW",
          "catId": "-NtFptX0UF_clWnWEHJM",
          "name": {
            "tr": "Patates Tava (1/2)",
            "en": "Fried Potatoes (1/2)"
          },
          "desc": {
            "tr": "Kızarmış patates (yarım porsiyon).",
            "en": "Fried potatoes (half portion)."
          },
          "price": "295 ₺",
          "available": true,
          "order": 0
        },
        {
          "id": "-NtFzhvwEFt2-mPuRtdI",
          "catId": "-NtFptX0UF_clWnWEHJM",
          "name": {
            "tr": "Acılav",
            "en": "Acılav (Spicy Sauté)"
          },
          "desc": {
            "tr": "Tavada acılı sıcak meze.",
            "en": "Spicy hot sautéed starter."
          },
          "price": "625 ₺",
          "available": true,
          "order": 1
        },
        {
          "id": "-NtFzjEWxNalO0Hf7ZtB",
          "catId": "-NtFptX0UF_clWnWEHJM",
          "name": {
            "tr": "Ahtapot Izgara",
            "en": "Grilled Octopus"
          },
          "desc": {
            "tr": "Izgara ahtapot.",
            "en": "Grilled octopus."
          },
          "price": "1.380 ₺",
          "available": true,
          "order": 2
        },
        {
          "id": "-NtFzmzHUtsuxTpbcnxV",
          "catId": "-NtFptX0UF_clWnWEHJM",
          "name": {
            "tr": "Ahtapot Izgara (1,5)",
            "en": "Grilled Octopus (1.5)"
          },
          "desc": {
            "tr": "Izgara ahtapot (büyük porsiyon).",
            "en": "Grilled octopus (large portion)."
          },
          "price": "2.180 ₺",
          "available": true,
          "order": 3
        },
        {
          "id": "-NtFzqwia_l2BwLwBeVc",
          "catId": "-NtFptX0UF_clWnWEHJM",
          "name": {
            "tr": "Ahtapot Pafta",
            "en": "Octopus Pafta"
          },
          "desc": {
            "tr": "Dilimlenmiş ızgara ahtapot.",
            "en": "Sliced grilled octopus."
          },
          "price": "880 ₺",
          "available": true,
          "order": 4
        },
        {
          "id": "-NtFzwTRDfmuHjiEPE06",
          "catId": "-NtFptX0UF_clWnWEHJM",
          "name": {
            "tr": "Ara Sıcak Special",
            "en": "Hot Starter Special"
          },
          "desc": {
            "tr": "Karışık ara sıcak tabağı.",
            "en": "Mixed hot-starter platter."
          },
          "price": "665 ₺",
          "available": true,
          "order": 5
        },
        {
          "id": "-NuEzxgFed_mbI6TeCPH",
          "catId": "-NtFptX0UF_clWnWEHJM",
          "name": {
            "tr": "Balıkçıköy Special",
            "en": "Balıkçıköy Special"
          },
          "desc": {
            "tr": "Şefin özel ara sıcak tabağı.",
            "en": "Chef's special hot starter."
          },
          "price": "640 ₺",
          "available": true,
          "order": 6
        },
        {
          "id": "-O2_GvJMBQcNJXiqXUJc",
          "catId": "-NtFptX0UF_clWnWEHJM",
          "name": {
            "tr": "Baby Kalamar",
            "en": "Baby Calamari"
          },
          "desc": {
            "tr": "Çıtır kızarmış baby kalamar.",
            "en": "Crispy fried baby calamari."
          },
          "price": "980 ₺",
          "available": true,
          "order": 7
        },
        {
          "id": "-NuF-KjK4IPFVvXS90RC",
          "catId": "-NtFptX0UF_clWnWEHJM",
          "name": {
            "tr": "Balık Kokoreç",
            "en": "Fish Kokoreç"
          },
          "desc": {
            "tr": "Balıkla hazırlanan kokoreç.",
            "en": "Kokoreç made with fish."
          },
          "price": "880 ₺",
          "available": true,
          "order": 8
        },
        {
          "id": "-NuF-GY6coaIeT7yBwC-",
          "catId": "-NtFptX0UF_clWnWEHJM",
          "name": {
            "tr": "Balık Köfte (Adet)",
            "en": "Fish Cakes"
          },
          "desc": {
            "tr": "Izgara balık köftesi.",
            "en": "Grilled fish cakes."
          },
          "price": "395 ₺",
          "available": true,
          "order": 9
        },
        {
          "id": "-NuF-NoNhh4lBD2bXas_",
          "catId": "-NtFptX0UF_clWnWEHJM",
          "name": {
            "tr": "Beğendili Karides",
            "en": "Shrimp on Eggplant Purée"
          },
          "desc": {
            "tr": "Köz patlıcan beğendi üzerine karides.",
            "en": "Shrimp over smoky eggplant purée."
          },
          "price": "625 ₺",
          "available": true,
          "order": 10
        },
        {
          "id": "-NuF-ZUk8FzeVkJGFNXI",
          "catId": "-NtFptX0UF_clWnWEHJM",
          "name": {
            "tr": "Beş Peynirli Kumpir",
            "en": "Five-Cheese Kumpir"
          },
          "desc": {
            "tr": "Beş peynirli fırın patates.",
            "en": "Baked jacket potato with five cheeses."
          },
          "price": "555 ₺",
          "available": true,
          "order": 11
        },
        {
          "id": "-NuF17Y9PoB4tcgxKJqC",
          "catId": "-NtFptX0UF_clWnWEHJM",
          "name": {
            "tr": "Deniz Mahsulleri Simit",
            "en": "Seafood Simit"
          },
          "desc": {
            "tr": "Deniz mahsullü simit.",
            "en": "Seafood-topped simit."
          },
          "price": "505 ₺",
          "available": true,
          "order": 12
        },
        {
          "id": "-NuF1Fc6vCXrMAB6Q7BA",
          "catId": "-NtFptX0UF_clWnWEHJM",
          "name": {
            "tr": "Deniz Ürünleri Börek",
            "en": "Seafood Börek"
          },
          "desc": {
            "tr": "Deniz ürünlü çıtır börek.",
            "en": "Crispy seafood börek."
          },
          "price": "440 ₺",
          "available": true,
          "order": 13
        },
        {
          "id": "-NuF1Rzf-QnVJQNJuK_n",
          "catId": "-NtFptX0UF_clWnWEHJM",
          "name": {
            "tr": "Fırfır Kalamar (Adet)",
            "en": "Crispy Calamari Rings"
          },
          "desc": {
            "tr": "Çıtır kalamar halkaları.",
            "en": "Crispy calamari rings."
          },
          "price": "575 ₺",
          "available": true,
          "order": 14
        },
        {
          "id": "-NuF2_4Py0Vp_NaWYR_F",
          "catId": "-NtFptX0UF_clWnWEHJM",
          "name": {
            "tr": "Humus",
            "en": "Hummus"
          },
          "desc": {
            "tr": "Nohut humusu.",
            "en": "Chickpea hummus."
          },
          "price": "",
          "available": true,
          "order": 15
        },
        {
          "id": "-NuF2awpxCk8E3UbcEaY",
          "catId": "-NtFptX0UF_clWnWEHJM",
          "name": {
            "tr": "Pastırmalı Humus",
            "en": "Hummus with Pastrami"
          },
          "desc": {
            "tr": "Pastırmalı sıcak humus.",
            "en": "Warm hummus with pastrami."
          },
          "price": "560 ₺",
          "available": true,
          "order": 16
        },
        {
          "id": "-NyAriT4jb1_lQaeOsKw",
          "catId": "-NtFptX0UF_clWnWEHJM",
          "name": {
            "tr": "Sıcak Atom",
            "en": "Hot Atom"
          },
          "desc": {
            "tr": "Sıcak acılı biber yağlı yoğurt mezesi.",
            "en": "Warm spicy yogurt with chili oil."
          },
          "price": "515 ₺",
          "available": true,
          "order": 17
        },
        {
          "id": "-NuF3-HVjC5yWvl93Akx",
          "catId": "-NtFptX0UF_clWnWEHJM",
          "name": {
            "tr": "İstiridye Mantar Güveç",
            "en": "Oyster Mushroom Casserole"
          },
          "desc": {
            "tr": "İstiridye mantarlı güveç.",
            "en": "Oyster mushroom casserole."
          },
          "price": "510 ₺",
          "available": true,
          "order": 18
        },
        {
          "id": "-NuF3MZZzpWlxY4qkUcT",
          "catId": "-NtFptX0UF_clWnWEHJM",
          "name": {
            "tr": "Kadayıflı Karides",
            "en": "Kadayıf-Wrapped Shrimp"
          },
          "desc": {
            "tr": "Kadayıfa sarılı kızarmış karides.",
            "en": "Shrimp wrapped in crispy kadayıf."
          },
          "price": "325 ₺",
          "available": true,
          "order": 19
        },
        {
          "id": "-NuF3X-4UOquRpNpG_oa",
          "catId": "-NtFptX0UF_clWnWEHJM",
          "name": {
            "tr": "Kalamar Dolma",
            "en": "Stuffed Calamari"
          },
          "desc": {
            "tr": "İç pilavla doldurulmuş kalamar.",
            "en": "Calamari stuffed with rice pilaf."
          },
          "price": "1.010 ₺",
          "available": true,
          "order": 20
        },
        {
          "id": "-NuF3by2dW4gcb3HMcBK",
          "catId": "-NtFptX0UF_clWnWEHJM",
          "name": {
            "tr": "Kalamar Izgara",
            "en": "Grilled Calamari"
          },
          "desc": {
            "tr": "Izgara kalamar.",
            "en": "Grilled calamari."
          },
          "price": "1.010 ₺",
          "available": true,
          "order": 21
        },
        {
          "id": "-NuF3eSV8jOI3N_CBfvI",
          "catId": "-NtFptX0UF_clWnWEHJM",
          "name": {
            "tr": "Kalamar Izgara (1,5)",
            "en": "Grilled Calamari (1.5)"
          },
          "desc": {
            "tr": "Izgara kalamar (büyük porsiyon).",
            "en": "Grilled calamari (large portion)."
          },
          "price": "1.550 ₺",
          "available": true,
          "order": 22
        },
        {
          "id": "-NuF3lj8QNCAwcC5yCcE",
          "catId": "-NtFptX0UF_clWnWEHJM",
          "name": {
            "tr": "Kalamar Tava",
            "en": "Fried Calamari"
          },
          "desc": {
            "tr": "Çıtır kızarmış kalamar.",
            "en": "Crispy fried calamari."
          },
          "price": "905 ₺",
          "available": true,
          "order": 23
        },
        {
          "id": "-NuF3tkEjm_cI3nKmCgK",
          "catId": "-NtFptX0UF_clWnWEHJM",
          "name": {
            "tr": "Kalamar Tava (1,5)",
            "en": "Fried Calamari (1.5)"
          },
          "desc": {
            "tr": "Çıtır kızarmış kalamar (büyük porsiyon).",
            "en": "Crispy fried calamari (large portion)."
          },
          "price": "1.380 ₺",
          "available": true,
          "order": 24
        },
        {
          "id": "-NuF46ub8AGc_4ronrNF",
          "catId": "-NtFptX0UF_clWnWEHJM",
          "name": {
            "tr": "Karides Güveç",
            "en": "Shrimp Casserole"
          },
          "desc": {
            "tr": "Domates ve kaşarlı karides güveç.",
            "en": "Shrimp casserole with tomato and cheese."
          },
          "price": "1.015 ₺",
          "available": true,
          "order": 25
        },
        {
          "id": "-O3fmATYHtORez4lUVgW",
          "catId": "-NtFptX0UF_clWnWEHJM",
          "name": {
            "tr": "Karides Güveç (1,5)",
            "en": "Shrimp Casserole (1.5)"
          },
          "desc": {
            "tr": "Karides güveç (büyük porsiyon).",
            "en": "Shrimp casserole (large portion)."
          },
          "price": "1.390 ₺",
          "available": true,
          "order": 26
        },
        {
          "id": "-O0Tc9p_VhKx5f9A5j_7",
          "catId": "-NtFptX0UF_clWnWEHJM",
          "name": {
            "tr": "Karides Şiş",
            "en": "Shrimp Skewer"
          },
          "desc": {
            "tr": "Izgara karides şiş.",
            "en": "Grilled shrimp skewer."
          },
          "price": "980 ₺",
          "available": true,
          "order": 27
        },
        {
          "id": "-O2_HnnW6Qur7seZqy_R",
          "catId": "-NtFptX0UF_clWnWEHJM",
          "name": {
            "tr": "Karides Şiş (1,5)",
            "en": "Shrimp Skewer (1.5)"
          },
          "desc": {
            "tr": "Izgara karides şiş (büyük porsiyon).",
            "en": "Grilled shrimp skewer (large portion)."
          },
          "price": "1.390 ₺",
          "available": true,
          "order": 28
        },
        {
          "id": "-NuF4LUqFkL0GFAMvSW6",
          "catId": "-NtFptX0UF_clWnWEHJM",
          "name": {
            "tr": "Karides Tava",
            "en": "Sautéed Shrimp"
          },
          "desc": {
            "tr": "Tereyağında sote karides.",
            "en": "Shrimp sautéed in butter."
          },
          "price": "990 ₺",
          "available": true,
          "order": 29
        },
        {
          "id": "-NuF4NSrxCUFJmKw6Sns",
          "catId": "-NtFptX0UF_clWnWEHJM",
          "name": {
            "tr": "Karides Tava (1,5)",
            "en": "Sautéed Shrimp (1.5)"
          },
          "desc": {
            "tr": "Tereyağında sote karides (büyük porsiyon).",
            "en": "Sautéed shrimp (large portion)."
          },
          "price": "1.490 ₺",
          "available": true,
          "order": 30
        },
        {
          "id": "-NuF5OHr4m0Yt4WZF6QG",
          "catId": "-NtFptX0UF_clWnWEHJM",
          "name": {
            "tr": "Kuşkonmazlı Levrek",
            "en": "Sea Bass with Asparagus"
          },
          "desc": {
            "tr": "Kuşkonmazla pişmiş levrek.",
            "en": "Sea bass cooked with asparagus."
          },
          "price": "675 ₺",
          "available": true,
          "order": 31
        },
        {
          "id": "-NuF6OXz_0pEBMQc98gR",
          "catId": "-NtFptX0UF_clWnWEHJM",
          "name": {
            "tr": "Patates Tava",
            "en": "Fried Potatoes"
          },
          "desc": {
            "tr": "Kızarmış patates.",
            "en": "Fried potatoes."
          },
          "price": "505 ₺",
          "available": true,
          "order": 32
        },
        {
          "id": "-NuF6TkwRECNyWnuSPud",
          "catId": "-NtFptX0UF_clWnWEHJM",
          "name": {
            "tr": "Patates (Duble)",
            "en": "Fried Potatoes (Double)"
          },
          "desc": {
            "tr": "Kızarmış patates (çift porsiyon).",
            "en": "Fried potatoes (double portion)."
          },
          "price": "815 ₺",
          "available": true,
          "order": 33
        },
        {
          "id": "-O2_IGP69SIcDchBKmc9",
          "catId": "-NtFptX0UF_clWnWEHJM",
          "name": {
            "tr": "Patlıcan Söğürme",
            "en": "Sautéed Roasted Eggplant"
          },
          "desc": {
            "tr": "Köz patlıcan söğürme.",
            "en": "Smoky sautéed eggplant."
          },
          "price": "560 ₺",
          "available": true,
          "order": 34
        },
        {
          "id": "-NyArpdeR7uz9-HOo-mw",
          "catId": "-NtFptX0UF_clWnWEHJM",
          "name": {
            "tr": "Saganaki",
            "en": "Saganaki"
          },
          "desc": {
            "tr": "Tavada eritilmiş peynir (saganaki).",
            "en": "Pan-seared melted cheese (saganaki)."
          },
          "price": "410 ₺",
          "available": true,
          "order": 35
        },
        {
          "id": "-NuF7rj42mDM6GgIvefP",
          "catId": "-NtFptX0UF_clWnWEHJM",
          "name": {
            "tr": "Sıcak Ot Tabağı",
            "en": "Warm Herb Plate"
          },
          "desc": {
            "tr": "Sıcak mevsim otları tabağı.",
            "en": "Warm seasonal herb plate."
          },
          "price": "470 ₺",
          "available": true,
          "order": 36
        },
        {
          "id": "-NyArrzuMefU5ZmwMylS",
          "catId": "-NtFptX0UF_clWnWEHJM",
          "name": {
            "tr": "Yaprak Börek",
            "en": "Leaf Börek"
          },
          "desc": {
            "tr": "İnce yufkada çıtır börek.",
            "en": "Crispy thin-pastry börek."
          },
          "price": "600 ₺",
          "available": true,
          "order": 37
        },
        {
          "id": "-OOlF01-QjLjK6LEVfnj",
          "catId": "-NtFptX0UF_clWnWEHJM",
          "name": {
            "tr": "Enginar Güveç",
            "en": "Artichoke Casserole"
          },
          "desc": {
            "tr": "Sebzeli enginar güveç.",
            "en": "Artichoke casserole with vegetables."
          },
          "price": "510 ₺",
          "available": true,
          "order": 38
        },
        {
          "id": "-OOlF0EIC-65kAuesUF4",
          "catId": "-NtFptX0UF_clWnWEHJM",
          "name": {
            "tr": "Enginar Güveç (1,5)",
            "en": "Artichoke Casserole (1.5)"
          },
          "desc": {
            "tr": "Enginar güveç (büyük porsiyon).",
            "en": "Artichoke casserole (large portion)."
          },
          "price": "715 ₺",
          "available": true,
          "order": 39
        }
      ]
    },
    {
      "id": "-NtFqkwAWbJwfN0y-_bM",
      "name": {
        "tr": "Çorbalar",
        "en": "Soups"
      },
      "order": 2,
      "items": [
        {
          "id": "-NtG-DwwOxWNNX9-fF6f",
          "catId": "-NtFqkwAWbJwfN0y-_bM",
          "name": {
            "tr": "Balık Çorbası",
            "en": "Fish Soup"
          },
          "desc": {
            "tr": "Mevsim balığıyla hazırlanan çorba.",
            "en": "Soup made with seasonal fish."
          },
          "price": "445 ₺",
          "available": true,
          "order": 0
        }
      ]
    },
    {
      "id": "-NtFqlhag0GmEs1fbBC9",
      "name": {
        "tr": "Salatalar",
        "en": "Salads"
      },
      "order": 3,
      "items": [
        {
          "id": "-NtFqmf2dXo6Whl7qbL-",
          "catId": "-NtFqlhag0GmEs1fbBC9",
          "name": {
            "tr": "Amasra Salata (Duble)",
            "en": "Amasra Salad (Double)"
          },
          "desc": {
            "tr": "Bol yeşillikli Amasra usulü salata (çift).",
            "en": "Amasra-style mixed green salad (double)."
          },
          "price": "560 ₺",
          "available": true,
          "order": 0
        },
        {
          "id": "-NtG-esEQ__FuXExcYVC",
          "catId": "-NtFqlhag0GmEs1fbBC9",
          "name": {
            "tr": "Amasra Salata (Tek)",
            "en": "Amasra Salad (Single)"
          },
          "desc": {
            "tr": "Bol yeşillikli Amasra usulü salata (tek).",
            "en": "Amasra-style mixed green salad (single)."
          },
          "price": "460 ₺",
          "available": true,
          "order": 1
        },
        {
          "id": "-NtG-kMA_MqIKpA4fIC8",
          "catId": "-NtFqlhag0GmEs1fbBC9",
          "name": {
            "tr": "Balıkçıköy Salata (Duble)",
            "en": "House Salad (Double)"
          },
          "desc": {
            "tr": "Şefin özel karışık salatası (çift).",
            "en": "House mixed salad (double)."
          },
          "price": "600 ₺",
          "available": true,
          "order": 2
        },
        {
          "id": "-NtG-pGzh-disWHoq9SO",
          "catId": "-NtFqlhag0GmEs1fbBC9",
          "name": {
            "tr": "Balıkçıköy Salata (Tek)",
            "en": "House Salad (Single)"
          },
          "desc": {
            "tr": "Şefin özel karışık salatası (tek).",
            "en": "House mixed salad (single)."
          },
          "price": "500 ₺",
          "available": true,
          "order": 3
        },
        {
          "id": "-NtG-sr1vUO3EXfh48Uq",
          "catId": "-NtFqlhag0GmEs1fbBC9",
          "name": {
            "tr": "Çoban Salata (Duble)",
            "en": "Shepherd's Salad (Double)"
          },
          "desc": {
            "tr": "Domates, salatalık, biber ve soğanla çoban salata (çift).",
            "en": "Tomato, cucumber, pepper and onion salad (double)."
          },
          "price": "560 ₺",
          "available": true,
          "order": 4
        },
        {
          "id": "-NtG-v_Nu4hsrSvuStBs",
          "catId": "-NtFqlhag0GmEs1fbBC9",
          "name": {
            "tr": "Çoban Salata (Tek)",
            "en": "Shepherd's Salad (Single)"
          },
          "desc": {
            "tr": "Domates, salatalık, biber ve soğanla çoban salata (tek).",
            "en": "Tomato, cucumber, pepper and onion salad (single)."
          },
          "price": "460 ₺",
          "available": true,
          "order": 5
        },
        {
          "id": "-NtG-xLiP8DakUAjWsg1",
          "catId": "-NtFqlhag0GmEs1fbBC9",
          "name": {
            "tr": "Gavurdağ (Duble)",
            "en": "Gavurdağı Salad (Double)"
          },
          "desc": {
            "tr": "Domates, ceviz ve narla Gavurdağı salatası (çift).",
            "en": "Tomato, walnut and pomegranate salad (double)."
          },
          "price": "600 ₺",
          "available": true,
          "order": 6
        },
        {
          "id": "-NtG0Ba7MDo_IvdeVtzL",
          "catId": "-NtFqlhag0GmEs1fbBC9",
          "name": {
            "tr": "Gavurdağ (Tek)",
            "en": "Gavurdağı Salad (Single)"
          },
          "desc": {
            "tr": "Domates, ceviz ve narla Gavurdağı salatası (tek).",
            "en": "Tomato, walnut and pomegranate salad (single)."
          },
          "price": "500 ₺",
          "available": true,
          "order": 7
        },
        {
          "id": "-NtG0DXu6_gslu74Ugdp",
          "catId": "-NtFqlhag0GmEs1fbBC9",
          "name": {
            "tr": "İstanbul Salata (Duble)",
            "en": "İstanbul Salad (Double)"
          },
          "desc": {
            "tr": "Karışık mevsim salatası (çift).",
            "en": "Mixed seasonal salad (double)."
          },
          "price": "630 ₺",
          "available": true,
          "order": 8
        },
        {
          "id": "-NtG0IpHdkGKrz0DscAl",
          "catId": "-NtFqlhag0GmEs1fbBC9",
          "name": {
            "tr": "İstanbul Salata (Tek)",
            "en": "İstanbul Salad (Single)"
          },
          "desc": {
            "tr": "Karışık mevsim salatası (tek).",
            "en": "Mixed seasonal salad (single)."
          },
          "price": "530 ₺",
          "available": true,
          "order": 9
        },
        {
          "id": "-NtG0Jus77TNfFuc-ynY",
          "catId": "-NtFqlhag0GmEs1fbBC9",
          "name": {
            "tr": "Mini Salata",
            "en": "Mini Salad"
          },
          "desc": {
            "tr": "Küçük mevsim salatası.",
            "en": "Small seasonal salad."
          },
          "price": "450 ₺",
          "available": true,
          "order": 10
        },
        {
          "id": "-NtG0b8ThpuBmOm33leO",
          "catId": "-NtFqlhag0GmEs1fbBC9",
          "name": {
            "tr": "Roka Special (Duble)",
            "en": "Arugula Special (Double)"
          },
          "desc": {
            "tr": "Roka, parmesan ve özel sosla salata (çift).",
            "en": "Arugula salad with parmesan (double)."
          },
          "price": "620 ₺",
          "available": true,
          "order": 11
        },
        {
          "id": "-NtG0cQ7Co01rVS_0uVJ",
          "catId": "-NtFqlhag0GmEs1fbBC9",
          "name": {
            "tr": "Roka Special (Tek)",
            "en": "Arugula Special (Single)"
          },
          "desc": {
            "tr": "Roka, parmesan ve özel sosla salata (tek).",
            "en": "Arugula salad with parmesan (single)."
          },
          "price": "520 ₺",
          "available": true,
          "order": 12
        }
      ]
    },
    {
      "id": "-NtFr4wJa2UOWgJZMgCo",
      "name": {
        "tr": "Balıklar",
        "en": "Fish"
      },
      "order": 4,
      "items": [
        {
          "id": "-NtG3yt4Xtet_QYDeQyG",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "Akya (Kg)",
            "en": "Leerfish (Kg)"
          },
          "desc": {
            "tr": "Akya balığı; ızgara veya buğulama, kilo ile.",
            "en": "Leerfish (amberjack); grilled or steamed, by weight."
          },
          "price": "960 ₺",
          "available": true,
          "order": 0
        },
        {
          "id": "-Oj5zgVCxm-upzbhooeP",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "Jumbo Karides (Kg)",
            "en": "Jumbo Shrimp (Kg)"
          },
          "desc": {
            "tr": "İri jumbo karides; ızgara veya tava, kilo ile.",
            "en": "Jumbo shrimp; grilled or sautéed, by weight."
          },
          "price": "3.780 ₺",
          "available": true,
          "order": 1
        },
        {
          "id": "-NtG4D2GZ36Qt4KBl0WN",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "Çinekop (Kg)",
            "en": "Bluefish, Juvenile (Kg)"
          },
          "desc": {
            "tr": "Lüfer ailesinden çinekop; ızgara, kilo ile.",
            "en": "Juvenile bluefish (çinekop); grilled, by weight."
          },
          "price": "2.300 ₺",
          "available": true,
          "order": 2
        },
        {
          "id": "-NtG4FzxldK-U15cG5Mx",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "Çipura (8/10)",
            "en": "Sea Bream (8/10)"
          },
          "desc": {
            "tr": "Deniz çipurası; ızgara.",
            "en": "Sea bream; grilled."
          },
          "price": "1.830 ₺",
          "available": true,
          "order": 3
        },
        {
          "id": "-NtG4INvfqZgMNdtj9gb",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "Deniz Sinarit",
            "en": "Wild Dentex"
          },
          "desc": {
            "tr": "Vahşi sinarit; ızgara veya buğulama.",
            "en": "Wild dentex; grilled or steamed."
          },
          "price": "3.600 ₺",
          "available": true,
          "order": 4
        },
        {
          "id": "-NtG4N4SwMsIvUkIpdMK",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "Dil (Kg)",
            "en": "Sole (Kg)"
          },
          "desc": {
            "tr": "Dil balığı; tava veya ızgara, kilo ile.",
            "en": "Sole; pan-fried or grilled, by weight."
          },
          "price": "4.350 ₺",
          "available": true,
          "order": 5
        },
        {
          "id": "-NtG9jWP0igFkUDUmCFQ",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "Dülger (Kg)",
            "en": "John Dory (Kg)"
          },
          "desc": {
            "tr": "Dülger balığı; ızgara, kilo ile.",
            "en": "John Dory; grilled, by weight."
          },
          "price": "3.300 ₺",
          "available": true,
          "order": 6
        },
        {
          "id": "-NtG9dOo-DKW51CdYISk",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "Double Jumbo Karides (Kg)",
            "en": "Double Jumbo Shrimp (Kg)"
          },
          "desc": {
            "tr": "Çok iri jumbo karides; ızgara veya tava, kilo ile.",
            "en": "Extra-large jumbo shrimp; grilled or sautéed, by weight."
          },
          "price": "3.780 ₺",
          "available": true,
          "order": 7
        },
        {
          "id": "-NtG9mSieN_Q-qAmQDLj",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "Fener Balığı",
            "en": "Monkfish"
          },
          "desc": {
            "tr": "Fener balığı; ızgara veya güveç.",
            "en": "Monkfish; grilled or in casserole."
          },
          "price": "2.100 ₺",
          "available": true,
          "order": 8
        },
        {
          "id": "-NtG9pQkuyxfjDNHkP1t",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "İri Büyük Deniz Levreği",
            "en": "Large Wild Sea Bass"
          },
          "desc": {
            "tr": "İri vahşi deniz levreği; ızgara.",
            "en": "Large wild sea bass; grilled."
          },
          "price": "2.950 ₺",
          "available": true,
          "order": 9
        },
        {
          "id": "-NtGAjFG94lI-WZl8x3g",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "İri Büyük Deniz Levreği Tuzda",
            "en": "Large Wild Sea Bass, Salt-Baked"
          },
          "desc": {
            "tr": "İri deniz levreği; tuzda pişirilir.",
            "en": "Large wild sea bass; salt-baked."
          },
          "price": "3.250 ₺",
          "available": true,
          "order": 10
        },
        {
          "id": "-NtGAmk82W6lHLuGrhQg",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "İri Deniz Çipurası",
            "en": "Large Wild Sea Bream"
          },
          "desc": {
            "tr": "İri vahşi çipura; ızgara.",
            "en": "Large wild sea bream; grilled."
          },
          "price": "2.800 ₺",
          "available": true,
          "order": 11
        },
        {
          "id": "-NtGAo72PGU17KjKMXNy",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "İri Deniz Çipurası Tuzda",
            "en": "Large Wild Sea Bream, Salt-Baked"
          },
          "desc": {
            "tr": "İri deniz çipurası; tuzda pişirilir.",
            "en": "Large wild sea bream; salt-baked."
          },
          "price": "3.130 ₺",
          "available": true,
          "order": 12
        },
        {
          "id": "-NtGAr2DaGHsBtm_yMRf",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "Kalkan (Kg)",
            "en": "Turbot (Kg)"
          },
          "desc": {
            "tr": "Kalkan balığı; tava veya ızgara, kilo ile.",
            "en": "Turbot; pan-fried or grilled, by weight."
          },
          "price": "4.200 ₺",
          "available": true,
          "order": 13
        },
        {
          "id": "-OB_4crzmlrb2Uc709rj",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "Balık Buğulama (Kg)",
            "en": "Steamed Fish (Kg)"
          },
          "desc": {
            "tr": "Sebzeli balık buğulama, kilo ile.",
            "en": "Steamed fish with vegetables, by weight."
          },
          "price": "2.000 ₺",
          "available": true,
          "order": 14
        },
        {
          "id": "-NtG447gQRdHWzxYEQdB",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "Karadeniz Mezgit (Kg)",
            "en": "Black Sea Whiting (Kg)"
          },
          "desc": {
            "tr": "Karadeniz mezgiti; tava, kilo ile.",
            "en": "Black Sea whiting; pan-fried, by weight."
          },
          "price": "1.880 ₺",
          "available": true,
          "order": 15
        },
        {
          "id": "-NtGAxpcazjaEjwPce4W",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "Kaya Levreği (Kg)",
            "en": "Rock Sea Bass (Kg)"
          },
          "desc": {
            "tr": "Kaya levreği; ızgara, kilo ile.",
            "en": "Rock sea bass; grilled, by weight."
          },
          "price": "2.110 ₺",
          "available": true,
          "order": 16
        },
        {
          "id": "-NtGB1zacYmd-fWiVnOo",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "Kaya Levreği Steak",
            "en": "Rock Sea Bass Steak"
          },
          "desc": {
            "tr": "Kaya levreği steak; ızgara.",
            "en": "Rock sea bass steak; grilled."
          },
          "price": "2.260 ₺",
          "available": true,
          "order": 17
        },
        {
          "id": "-NtGB4bqqpO8JyP0TNqC",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "Kaya Levreği Tuzda",
            "en": "Rock Sea Bass, Salt-Baked"
          },
          "desc": {
            "tr": "Kaya levreği; tuzda pişirilir.",
            "en": "Rock sea bass; salt-baked."
          },
          "price": "2.260 ₺",
          "available": true,
          "order": 18
        },
        {
          "id": "-NtGBDBmLDwMaa8xEkIf",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "Kılıç (Kg)",
            "en": "Swordfish (Kg)"
          },
          "desc": {
            "tr": "Kılıç balığı; ızgara veya şiş, kilo ile.",
            "en": "Swordfish; grilled or skewered, by weight."
          },
          "price": "2.600 ₺",
          "available": true,
          "order": 19
        },
        {
          "id": "-NtGBGGJ154YWGuXzOFk",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "Kırlangıç (Kg)",
            "en": "Gurnard (Kg)"
          },
          "desc": {
            "tr": "Kırlangıç balığı; ızgara veya buğulama, kilo ile.",
            "en": "Gurnard; grilled or steamed, by weight."
          },
          "price": "3.550 ₺",
          "available": true,
          "order": 20
        },
        {
          "id": "-NtGBJkkuWZEKZv5B2_5",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "Kırlangıç Buğulama",
            "en": "Steamed Gurnard"
          },
          "desc": {
            "tr": "Sebzeli kırlangıç buğulama.",
            "en": "Steamed gurnard with vegetables."
          },
          "price": "3.650 ₺",
          "available": true,
          "order": 21
        },
        {
          "id": "-NtGBMv5NLxo1VWrFbKq",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "Kofana (Kg)",
            "en": "Large Bluefish, Kofana (Kg)"
          },
          "desc": {
            "tr": "İri lüfer (kofana); ızgara, kilo ile.",
            "en": "Large bluefish (kofana); grilled, by weight."
          },
          "price": "2.900 ₺",
          "available": true,
          "order": 22
        },
        {
          "id": "-NtGBPcPO_kpf5TNqlNh",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "Lagos Buğulama",
            "en": "Steamed Grouper"
          },
          "desc": {
            "tr": "Sebzeli lagos buğulama.",
            "en": "Steamed grouper with vegetables."
          },
          "price": "4.100 ₺",
          "available": true,
          "order": 23
        },
        {
          "id": "-NtGBSUv49EJvb1PKrLK",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "Lagos (Kg)",
            "en": "Grouper (Kg)"
          },
          "desc": {
            "tr": "Lagos balığı; ızgara, kilo ile.",
            "en": "Grouper; grilled, by weight."
          },
          "price": "3.950 ₺",
          "available": true,
          "order": 24
        },
        {
          "id": "-NtGBVLNUNIud4VEBlT7",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "Lagos Tuzda",
            "en": "Grouper, Salt-Baked"
          },
          "desc": {
            "tr": "Lagos balığı; tuzda pişirilir.",
            "en": "Grouper; salt-baked."
          },
          "price": "4.100 ₺",
          "available": true,
          "order": 25
        },
        {
          "id": "-NtGBXzaP4oahYkqIxRr",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "Levrek (10/12)",
            "en": "Sea Bass (10/12)"
          },
          "desc": {
            "tr": "Deniz levreği; ızgara.",
            "en": "Sea bass; grilled."
          },
          "price": "2.630 ₺",
          "available": true,
          "order": 26
        },
        {
          "id": "-NtGB_TyTw695P8cqDwP",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "Levrek (8/10)",
            "en": "Sea Bass (8/10)"
          },
          "desc": {
            "tr": "Deniz levreği; ızgara.",
            "en": "Sea bass; grilled."
          },
          "price": "1.950 ₺",
          "available": true,
          "order": 27
        },
        {
          "id": "-NtGBgDEh1eoEDn2Zqwq",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "Lipsoz",
            "en": "Scorpionfish"
          },
          "desc": {
            "tr": "Lipsoz; ızgara veya çorba.",
            "en": "Scorpionfish; grilled or in soup."
          },
          "price": "2.760 ₺",
          "available": true,
          "order": 28
        },
        {
          "id": "-NtGBiprBgM9YDfRmHob",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "Lüfer (Kg)",
            "en": "Bluefish (Kg)"
          },
          "desc": {
            "tr": "Lüfer; ızgara, kilo ile.",
            "en": "Bluefish; grilled, by weight."
          },
          "price": "3.950 ₺",
          "available": true,
          "order": 29
        },
        {
          "id": "-NtGBoXIOCJMW0eMdi_I",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "Mercan (Kg)",
            "en": "Pandora / Mercan (Kg)"
          },
          "desc": {
            "tr": "Mercan balığı; ızgara, kilo ile.",
            "en": "Pandora (mercan); grilled, by weight."
          },
          "price": "3.390 ₺",
          "available": true,
          "order": 30
        },
        {
          "id": "-NtGBrXat6PXQZV4M3DV",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "Morina Şiş ve Steak",
            "en": "Cod Skewer & Steak"
          },
          "desc": {
            "tr": "Morina şiş ve steak; ızgara.",
            "en": "Cod skewer and steak; grilled."
          },
          "price": "1.960 ₺",
          "available": true,
          "order": 31
        },
        {
          "id": "-OB_5J4JI5QJrUX9ifjZ",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "Orkinos",
            "en": "Tuna"
          },
          "desc": {
            "tr": "Orkinos; ızgara.",
            "en": "Tuna; grilled."
          },
          "price": "2.060 ₺",
          "available": true,
          "order": 32
        },
        {
          "id": "-NtGBwzK9_Rtqt4F9qPa",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "Sarıkanat",
            "en": "Bluefish / Sarıkanat"
          },
          "desc": {
            "tr": "Lüfer boyu sarıkanat; ızgara.",
            "en": "Bluefish (sarıkanat); grilled."
          },
          "price": "3.100 ₺",
          "available": true,
          "order": 33
        },
        {
          "id": "-NtGBzZGRyPzueFAiBgj",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "Somon",
            "en": "Salmon"
          },
          "desc": {
            "tr": "Izgara somon.",
            "en": "Grilled salmon."
          },
          "price": "2.150 ₺",
          "available": true,
          "order": 34
        },
        {
          "id": "-NtGC7ESMFOr0i31DYIz",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "Taş Barbun",
            "en": "Red Mullet / Taş Barbun"
          },
          "desc": {
            "tr": "Taş barbunu; tava.",
            "en": "Red mullet (taş barbun); pan-fried."
          },
          "price": "4.100 ₺",
          "available": true,
          "order": 35
        },
        {
          "id": "-NtGCBr8jD5UULA0kUTB",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "Tekir (Kg)",
            "en": "Striped Red Mullet / Tekir (Kg)"
          },
          "desc": {
            "tr": "Tekir balığı; tava, kilo ile.",
            "en": "Striped red mullet (tekir); pan-fried, by weight."
          },
          "price": "1.930 ₺",
          "available": true,
          "order": 36
        },
        {
          "id": "-NtGCX_3lBRQ9R-NNTXQ",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "Izgara Dil Şiş (1,5)",
            "en": "Grilled Sole Skewer (1.5)"
          },
          "desc": {
            "tr": "Izgara dil balığı şiş (büyük porsiyon).",
            "en": "Grilled sole skewer (large portion)."
          },
          "price": "1.420 ₺",
          "available": true,
          "order": 37
        },
        {
          "id": "-NtGCeSEBtUaQmUQWMzX",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "Izgara Dil Şiş",
            "en": "Grilled Sole Skewer"
          },
          "desc": {
            "tr": "Izgara dil balığı şiş.",
            "en": "Grilled sole skewer."
          },
          "price": "980 ₺",
          "available": true,
          "order": 38
        },
        {
          "id": "-NtGCohi9jpuLLfLkggb",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "Izgara Hamsi",
            "en": "Grilled Anchovies"
          },
          "desc": {
            "tr": "Izgara hamsi.",
            "en": "Grilled anchovies."
          },
          "price": "780 ₺",
          "available": true,
          "order": 39
        },
        {
          "id": "-NtGDCQXytC34Gf1BR5s",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "Hamsi Tava",
            "en": "Fried Anchovies"
          },
          "desc": {
            "tr": "Tava hamsi.",
            "en": "Pan-fried anchovies."
          },
          "price": "780 ₺",
          "available": true,
          "order": 40
        },
        {
          "id": "-NtGDjiDXzEvTCijg9sj",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "Hamsi Tava (1,5)",
            "en": "Fried Anchovies (1.5)"
          },
          "desc": {
            "tr": "Tava hamsi (büyük porsiyon).",
            "en": "Pan-fried anchovies (large portion)."
          },
          "price": "1.190 ₺",
          "available": true,
          "order": 41
        },
        {
          "id": "-NtGDl44Z-BnelJSTSEo",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "İstavrit Tava",
            "en": "Fried Horse Mackerel"
          },
          "desc": {
            "tr": "Tava istavrit.",
            "en": "Pan-fried horse mackerel."
          },
          "price": "670 ₺",
          "available": true,
          "order": 42
        },
        {
          "id": "-NtGE50nVPSVnSU8jsEL",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "Palamut (Porsiyon)",
            "en": "Bonito (Portion)"
          },
          "desc": {
            "tr": "Izgara palamut.",
            "en": "Grilled bonito."
          },
          "price": "980 ₺",
          "available": true,
          "order": 43
        },
        {
          "id": "-O3MwvOGwNBRns6vMHAm",
          "catId": "-NtFr4wJa2UOWgJZMgCo",
          "name": {
            "tr": "Palamut (1,5)",
            "en": "Bonito (1.5)"
          },
          "desc": {
            "tr": "Izgara palamut (büyük porsiyon).",
            "en": "Grilled bonito (large portion)."
          },
          "price": "1.250 ₺",
          "available": true,
          "order": 44
        }
      ]
    },
    {
      "id": "-NtGEMYf5M8nrDxMPvUY",
      "name": {
        "tr": "Alkollü İçecekler (Rakılar)",
        "en": "Alcoholic Drinks (Rakı)"
      },
      "order": 5,
      "items": [
        {
          "id": "-NtGFA9v44MO1W-Rr3U4",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Beylerbeyi Göbek (20 cl)",
            "en": "Beylerbeyi Göbek (20 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "1.380 ₺",
          "available": true,
          "order": 0
        },
        {
          "id": "-OZikWex-oOsr_M5CHBX",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Saki (35 cl)",
            "en": "Saki (35 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "2.540 ₺",
          "available": true,
          "order": 1
        },
        {
          "id": "-OZikWtRsOytzpNILyj2",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Saki (70 cl)",
            "en": "Saki (70 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "4.750 ₺",
          "available": true,
          "order": 2
        },
        {
          "id": "-OfdfAjeB0eB9dL-FS9n",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Sarı Zeybek (20 cl)",
            "en": "Sarı Zeybek (20 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "1.680 ₺",
          "available": true,
          "order": 3
        },
        {
          "id": "-OfdfHg2O8yNgaPN1MwW",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Sarı Zeybek (50 cl)",
            "en": "Sarı Zeybek (50 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "3.150 ₺",
          "available": true,
          "order": 4
        },
        {
          "id": "-OfdfMkNmJ5JX0qQTu3T",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Sarı Zeybek (100 cl)",
            "en": "Sarı Zeybek (100 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "5.550 ₺",
          "available": true,
          "order": 5
        },
        {
          "id": "-OgHijBpfaxBh_ntq_Yw",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Beylerbeyi (100 cl)",
            "en": "Beylerbeyi (100 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "4.250 ₺",
          "available": true,
          "order": 6
        },
        {
          "id": "-Oj63YqWXMcoNHywMjBF",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Sarı Zeybek (35 cl)",
            "en": "Sarı Zeybek (35 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "2.550 ₺",
          "available": true,
          "order": 7
        },
        {
          "id": "-OqQxkYpMKaASRw2ZXVI",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Beylerbeyi Kalecik Karası",
            "en": "Beylerbeyi Kalecik Karası"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "3.990 ₺",
          "available": true,
          "order": 8
        },
        {
          "id": "-OrrfTAZ0GjZFbb4uKdH",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Beylerbeyi Mavi (35 cl)",
            "en": "Beylerbeyi Mavi (35 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "1.950 ₺",
          "available": true,
          "order": 9
        },
        {
          "id": "-NtGFDUO53Qe2WbM6lyR",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Beylerbeyi Göbek (35 cl)",
            "en": "Beylerbeyi Göbek (35 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "2.190 ₺",
          "available": true,
          "order": 10
        },
        {
          "id": "-NtGFGVMBzox9vGJls0r",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Beylerbeyi Göbek (50 cl)",
            "en": "Beylerbeyi Göbek (50 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "3.050 ₺",
          "available": true,
          "order": 11
        },
        {
          "id": "-NtGFJDCDLw_TI8eCmVi",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Beylerbeyi Göbek (70 cl)",
            "en": "Beylerbeyi Göbek (70 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "3.990 ₺",
          "available": true,
          "order": 12
        },
        {
          "id": "-NtGF50fT2yid2jdBHbz",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Beylerbeyi Göbek (100 cl)",
            "en": "Beylerbeyi Göbek (100 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "5.150 ₺",
          "available": true,
          "order": 13
        },
        {
          "id": "-NtGFPlhjrEi5TImW_-P",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Rakı (Kadeh)",
            "en": "Rakı (Kadeh)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "450 ₺",
          "available": true,
          "order": 14
        },
        {
          "id": "-NtGFUCO0EwzBLIfbqlx",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Kulüp Rakı (35 cl)",
            "en": "Kulüp Rakı (35 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "2.100 ₺",
          "available": true,
          "order": 15
        },
        {
          "id": "-NtGFVBpwVYOdeVsSuGE",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Kulüp Rakı (70 cl)",
            "en": "Kulüp Rakı (70 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "3.830 ₺",
          "available": true,
          "order": 16
        },
        {
          "id": "-Nwdl-IoAmcFtuXcyEiF",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Kulüp Delüks (35 cl)",
            "en": "Kulüp Delüks (35 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "2.150 ₺",
          "available": true,
          "order": 17
        },
        {
          "id": "-NtGFYcEMHgWUlLQwk1U",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Kulüp Rakı Delüks (70 cl)",
            "en": "Kulüp Rakı Delüks (70 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "3.880 ₺",
          "available": true,
          "order": 18
        },
        {
          "id": "-NtGFabnAYE7kLtGpn6B",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Mercan (20 cl)",
            "en": "Mercan (20 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "1.650 ₺",
          "available": true,
          "order": 19
        },
        {
          "id": "-NtGFdQzwhW49D51rgro",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Mercan (35 cl)",
            "en": "Mercan (35 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "2.430 ₺",
          "available": true,
          "order": 20
        },
        {
          "id": "-NtGFhBZ2rPlYwRaX8Zv",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Mercan (50 cl)",
            "en": "Mercan (50 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "3.180 ₺",
          "available": true,
          "order": 21
        },
        {
          "id": "-NtGFk5YtkW58DwSxlcp",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Mercan (70 cl)",
            "en": "Mercan (70 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "4.050 ₺",
          "available": true,
          "order": 22
        },
        {
          "id": "-NtGFmgN8jbK0etuGyX4",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Prototip (70 cl)",
            "en": "Prototip (70 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "4.490 ₺",
          "available": true,
          "order": 23
        },
        {
          "id": "-NtGGT7etZOxN0pbTdHD",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Sarı Zeybek 3. Meşe (35 cl)",
            "en": "Sarı Zeybek 3. Meşe (35 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "2.550 ₺",
          "available": true,
          "order": 24
        },
        {
          "id": "-NtGGVrhfxd6k7hh5-r0",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Sarı Zeybek 3. Meşe (70 cl)",
            "en": "Sarı Zeybek 3. Meşe (70 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "4.550 ₺",
          "available": true,
          "order": 25
        },
        {
          "id": "-NtGH1v5e2mJeSb6NlnR",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Tekirdağ Gold (20 cl)",
            "en": "Tekirdağ Gold (20 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "1.550 ₺",
          "available": true,
          "order": 26
        },
        {
          "id": "-NtGH5K5ZNoCRim_XXjU",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Tekirdağ Gold (35 cl)",
            "en": "Tekirdağ Gold (35 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "2.190 ₺",
          "available": true,
          "order": 27
        },
        {
          "id": "-NtGH7ytRWFSCiTQeLrh",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Tekirdağ Gold (50 cl)",
            "en": "Tekirdağ Gold (50 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "2.830 ₺",
          "available": true,
          "order": 28
        },
        {
          "id": "-NtGHBLPmpaC3W-IIxj8",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Tekirdağ Gold (70 cl)",
            "en": "Tekirdağ Gold (70 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "3.720 ₺",
          "available": true,
          "order": 29
        },
        {
          "id": "-NtGGzrA3UmdhapWHq3k",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Tekirdağ Gold (100 cl)",
            "en": "Tekirdağ Gold (100 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "4.950 ₺",
          "available": true,
          "order": 30
        },
        {
          "id": "-NtGHSxcSr6VbGxehXDs",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Yeni Efe Gold (20 cl)",
            "en": "Yeni Efe Gold (20 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "1.520 ₺",
          "available": true,
          "order": 31
        },
        {
          "id": "-NtGHHOYKkuphCtdW0Ke",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Yeni Efe Gold (35 cl)",
            "en": "Yeni Efe Gold (35 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "2.180 ₺",
          "available": true,
          "order": 32
        },
        {
          "id": "-NtGHXSioa6zk-119g1q",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Yeni Efe Gold (50 cl)",
            "en": "Yeni Efe Gold (50 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "2.860 ₺",
          "available": true,
          "order": 33
        },
        {
          "id": "-NtGHJwwJJsc0ltLTo7v",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Yeni Efe Gold (70 cl)",
            "en": "Yeni Efe Gold (70 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "3.690 ₺",
          "available": true,
          "order": 34
        },
        {
          "id": "-NtGHQ3eX04f9qIaLGRm",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Yeni Efe Gold (100 cl)",
            "en": "Yeni Efe Gold (100 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "4.900 ₺",
          "available": true,
          "order": 35
        },
        {
          "id": "-NtGHkm494XWl4z2fxp9",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Yeni Rakı (20 cl)",
            "en": "Yeni Rakı (20 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "1.130 ₺",
          "available": true,
          "order": 36
        },
        {
          "id": "-NtGHn-kWgXkH-a-BCzT",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Yeni Rakı (35 cl)",
            "en": "Yeni Rakı (35 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "1.890 ₺",
          "available": true,
          "order": 37
        },
        {
          "id": "-NtGHN-j3PvALyMg5Ble",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Yeni Rakı (50 cl)",
            "en": "Yeni Rakı (50 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "2.480 ₺",
          "available": true,
          "order": 38
        },
        {
          "id": "-NtGHprsFLG30JVXPO0M",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Yeni Rakı (70 cl)",
            "en": "Yeni Rakı (70 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "3.150 ₺",
          "available": true,
          "order": 39
        },
        {
          "id": "-NtGHiDqjnZw1tCiOk_S",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Yeni Rakı (100 cl)",
            "en": "Yeni Rakı (100 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "4.370 ₺",
          "available": true,
          "order": 40
        },
        {
          "id": "-NtGI9OUFTXdZdLcY-HA",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Yeni Seri (20 cl)",
            "en": "Yeni Seri (20 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "1.280 ₺",
          "available": true,
          "order": 41
        },
        {
          "id": "-NtGIELPwDF2ROfEa-38",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Yeni Seri (35 cl)",
            "en": "Yeni Seri (35 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "2.130 ₺",
          "available": true,
          "order": 42
        },
        {
          "id": "-NtGIFZg58Iu8UGj6X_9",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Yeni Seri (50 cl)",
            "en": "Yeni Seri (50 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "2.780 ₺",
          "available": true,
          "order": 43
        },
        {
          "id": "-NtGIICIMCGIqAxJOg9_",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Yeni Seri (70 cl)",
            "en": "Yeni Seri (70 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "3.690 ₺",
          "available": true,
          "order": 44
        },
        {
          "id": "-NvqRtDDvyD2hpBn1Eso",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Yeni Seri (100 cl)",
            "en": "Yeni Seri (100 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "4.780 ₺",
          "available": true,
          "order": 45
        },
        {
          "id": "-NxSmwIJAG8BjUjcsYL8",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Tekirdağ Göbek (35 cl)",
            "en": "Tekirdağ Göbek (35 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "2.430 ₺",
          "available": true,
          "order": 46
        },
        {
          "id": "-NxSmwSZCyMNcRrH5fFA",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Tekirdağ Göbek (70 cl)",
            "en": "Tekirdağ Göbek (70 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "3.870 ₺",
          "available": true,
          "order": 47
        },
        {
          "id": "-OA27u2S-NeniTKui80x",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Tekirdağ Göbek (100 cl)",
            "en": "Tekirdağ Göbek (100 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "4.990 ₺",
          "available": true,
          "order": 48
        },
        {
          "id": "-ON4e3MbUgcACsMg07Ak",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Lokal Derya Kuzusu Göbek (35 cl)",
            "en": "Lokal Derya Kuzusu Göbek (35 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "2.050 ₺",
          "available": true,
          "order": 49
        },
        {
          "id": "-ON4e2v4LAJWC9dIwKrm",
          "catId": "-NtGEMYf5M8nrDxMPvUY",
          "name": {
            "tr": "Lokal Derya Kuzusu Göbek (70 cl)",
            "en": "Lokal Derya Kuzusu Göbek (70 cl)"
          },
          "desc": {
            "tr": "Geleneksel anason aromalı Türk rakısı; su ve buzla servis edilir.",
            "en": "Traditional Turkish anise-flavoured rakı, served with water and ice."
          },
          "price": "3.645 ₺",
          "available": true,
          "order": 50
        }
      ]
    },
    {
      "id": "-NtGIZDrkfdd22AUm2yb",
      "name": {
        "tr": "Alkollü İçecekler (Biralar)",
        "en": "Alcoholic Drinks (Beers)"
      },
      "order": 6,
      "items": [
        {
          "id": "-NtGImBlxGFpe_y_PY0i",
          "catId": "-NtGIZDrkfdd22AUm2yb",
          "name": {
            "tr": "Alkolsüz Bira",
            "en": "Alkolsüz Bira"
          },
          "desc": {
            "tr": "Alkolsüz bira.",
            "en": "Non-alcoholic beer."
          },
          "price": "260 ₺",
          "available": true,
          "order": 0
        },
        {
          "id": "-NtGIsbbsuuAC_Z930LT",
          "catId": "-NtGIZDrkfdd22AUm2yb",
          "name": {
            "tr": "Bomonti Filtresiz (50 cl)",
            "en": "Bomonti Filtresiz (50 cl)"
          },
          "desc": {
            "tr": "Filtresiz lager bira.",
            "en": "Unfiltered lager beer."
          },
          "price": "340 ₺",
          "available": true,
          "order": 1
        },
        {
          "id": "-NtGIzJueeBWfhRNyy3t",
          "catId": "-NtGIZDrkfdd22AUm2yb",
          "name": {
            "tr": "Carlsberg (33 cl)",
            "en": "Carlsberg (33 cl)"
          },
          "desc": {
            "tr": "Soğuk servis edilen lager bira.",
            "en": "Cold lager beer."
          },
          "price": "320 ₺",
          "available": true,
          "order": 2
        },
        {
          "id": "-NtGJE7ob4aJ8wnA1xWY",
          "catId": "-NtGIZDrkfdd22AUm2yb",
          "name": {
            "tr": "Efes Pilsen (33 cl)",
            "en": "Efes Pilsen (33 cl)"
          },
          "desc": {
            "tr": "Soğuk servis edilen lager bira.",
            "en": "Cold lager beer."
          },
          "price": "300 ₺",
          "available": true,
          "order": 3
        },
        {
          "id": "-NtGJHB3Zyd4gUXudmIb",
          "catId": "-NtGIZDrkfdd22AUm2yb",
          "name": {
            "tr": "Heineken",
            "en": "Heineken"
          },
          "desc": {
            "tr": "Soğuk servis edilen lager bira.",
            "en": "Cold lager beer."
          },
          "price": "330 ₺",
          "available": true,
          "order": 4
        },
        {
          "id": "-NtGJJuZIRNdmNhL0Qru",
          "catId": "-NtGIZDrkfdd22AUm2yb",
          "name": {
            "tr": "Miller",
            "en": "Miller"
          },
          "desc": {
            "tr": "Soğuk servis edilen lager bira.",
            "en": "Cold lager beer."
          },
          "price": "340 ₺",
          "available": true,
          "order": 5
        },
        {
          "id": "-NtGJRVZX2vmF61-MYcb",
          "catId": "-NtGIZDrkfdd22AUm2yb",
          "name": {
            "tr": "Tuborg Gold (33 cl)",
            "en": "Tuborg Gold (33 cl)"
          },
          "desc": {
            "tr": "Soğuk servis edilen lager bira.",
            "en": "Cold lager beer."
          },
          "price": "300 ₺",
          "available": true,
          "order": 6
        }
      ]
    },
    {
      "id": "-NtLL6XpQHdsEyVf3Vct",
      "name": {
        "tr": "Alkollü İçecekler (Şaraplar)",
        "en": "Alcoholic Drinks (Wines)"
      },
      "order": 7,
      "items": [
        {
          "id": "-NtLLJjbgcgwaN_LftMM",
          "catId": "-NtLL6XpQHdsEyVf3Vct",
          "name": {
            "tr": "Ament Petit Verdot (75 cl)",
            "en": "Ament Petit Verdot (75 cl)"
          },
          "desc": {
            "tr": "Kırmızı şarap.",
            "en": "Red wine."
          },
          "price": "3.330 ₺",
          "available": true,
          "order": 0
        },
        {
          "id": "-O_wHj9DdjcSeRmOxjyj",
          "catId": "-NtLL6XpQHdsEyVf3Vct",
          "name": {
            "tr": "Zoza (75 cl)",
            "en": "Zoza (75 cl)"
          },
          "desc": {
            "tr": "Kırmızı şarap.",
            "en": "Red wine."
          },
          "price": "2.290 ₺",
          "available": true,
          "order": 1
        },
        {
          "id": "-Oj0TfmfTmPz3JrzIDIh",
          "catId": "-NtLL6XpQHdsEyVf3Vct",
          "name": {
            "tr": "Lüks Şarap (Kadeh)",
            "en": "Lüks Şarap (Kadeh)"
          },
          "desc": {
            "tr": "Kırmızı şarap.",
            "en": "Red wine."
          },
          "price": "650 ₺",
          "available": true,
          "order": 2
        },
        {
          "id": "-OjQSy3rub_32RCC85w_",
          "catId": "-NtLL6XpQHdsEyVf3Vct",
          "name": {
            "tr": "Caracal (75 cl)",
            "en": "Caracal (75 cl)"
          },
          "desc": {
            "tr": "Kırmızı şarap.",
            "en": "Red wine."
          },
          "price": "3.480 ₺",
          "available": true,
          "order": 3
        },
        {
          "id": "-OjQT0m4Jb12bYKjlxf4",
          "catId": "-NtLL6XpQHdsEyVf3Vct",
          "name": {
            "tr": "Borda Chardonnay",
            "en": "Borda Chardonnay"
          },
          "desc": {
            "tr": "Soğuk servis edilen beyaz şarap.",
            "en": "Chilled white wine."
          },
          "price": "2.680 ₺",
          "available": true,
          "order": 4
        },
        {
          "id": "-NtLLQGi5SPSBRepfx3X",
          "catId": "-NtLL6XpQHdsEyVf3Vct",
          "name": {
            "tr": "Casal Mendes Rose (75 cl)",
            "en": "Casal Mendes Rose (75 cl)"
          },
          "desc": {
            "tr": "Soğuk servis edilen roze şarap.",
            "en": "Chilled rosé wine."
          },
          "price": "2.470 ₺",
          "available": true,
          "order": 5
        },
        {
          "id": "-NtLL_GEOD_k1yHxftCL",
          "catId": "-NtLL6XpQHdsEyVf3Vct",
          "name": {
            "tr": "Çankaya (35 cl)",
            "en": "Çankaya (35 cl)"
          },
          "desc": {
            "tr": "Soğuk servis edilen beyaz şarap.",
            "en": "Chilled white wine."
          },
          "price": "1.760 ₺",
          "available": true,
          "order": 6
        },
        {
          "id": "-NtLLbusOZAbQllrsCoC",
          "catId": "-NtLL6XpQHdsEyVf3Vct",
          "name": {
            "tr": "Çankaya (75 cl)",
            "en": "Çankaya (75 cl)"
          },
          "desc": {
            "tr": "Soğuk servis edilen beyaz şarap.",
            "en": "Chilled white wine."
          },
          "price": "2.710 ₺",
          "available": true,
          "order": 7
        },
        {
          "id": "-NtLLe_80ONmfAjDNPt0",
          "catId": "-NtLL6XpQHdsEyVf3Vct",
          "name": {
            "tr": "Egeo Cabernet Sauvignon Kırmızı (75 cl)",
            "en": "Egeo Cabernet Sauvignon Kırmızı (75 cl)"
          },
          "desc": {
            "tr": "Kırmızı şarap.",
            "en": "Red wine."
          },
          "price": "3.820 ₺",
          "available": true,
          "order": 8
        },
        {
          "id": "-NtLLm-_KSkG3YOjspKH",
          "catId": "-NtLL6XpQHdsEyVf3Vct",
          "name": {
            "tr": "Egeo Chardonnay (75 cl)",
            "en": "Egeo Chardonnay (75 cl)"
          },
          "desc": {
            "tr": "Soğuk servis edilen beyaz şarap.",
            "en": "Chilled white wine."
          },
          "price": "3.750 ₺",
          "available": true,
          "order": 9
        },
        {
          "id": "-NtLLp0AiHszDnEJF3Or",
          "catId": "-NtLL6XpQHdsEyVf3Vct",
          "name": {
            "tr": "Egeo Sauvignon Blanc Beyaz (75 cl)",
            "en": "Egeo Sauvignon Blanc Beyaz (75 cl)"
          },
          "desc": {
            "tr": "Soğuk servis edilen beyaz şarap.",
            "en": "Chilled white wine."
          },
          "price": "3.750 ₺",
          "available": true,
          "order": 10
        },
        {
          "id": "-NtLM4-fvQy6XXEVXiRF",
          "catId": "-NtLL6XpQHdsEyVf3Vct",
          "name": {
            "tr": "Roze (Kadeh)",
            "en": "Roze (Kadeh)"
          },
          "desc": {
            "tr": "Soğuk servis edilen roze şarap.",
            "en": "Chilled rosé wine."
          },
          "price": "440 ₺",
          "available": true,
          "order": 11
        },
        {
          "id": "-NtLM77MZeHP7SOHWz8Z",
          "catId": "-NtLL6XpQHdsEyVf3Vct",
          "name": {
            "tr": "Şarap (Kadeh)",
            "en": "Şarap (Kadeh)"
          },
          "desc": {
            "tr": "Kırmızı şarap.",
            "en": "Red wine."
          },
          "price": "440 ₺",
          "available": true,
          "order": 12
        },
        {
          "id": "-NtLM9taGkvRlD1IunPF",
          "catId": "-NtLL6XpQHdsEyVf3Vct",
          "name": {
            "tr": "Leona Blush Roze (75 cl)",
            "en": "Leona Blush Roze (75 cl)"
          },
          "desc": {
            "tr": "Soğuk servis edilen roze şarap.",
            "en": "Chilled rosé wine."
          },
          "price": "1.790 ₺",
          "available": true,
          "order": 13
        },
        {
          "id": "-NtLMGcih7JluIV9pHru",
          "catId": "-NtLL6XpQHdsEyVf3Vct",
          "name": {
            "tr": "Myrina (75 cl)",
            "en": "Myrina (75 cl)"
          },
          "desc": {
            "tr": "Kırmızı şarap.",
            "en": "Red wine."
          },
          "price": "2.250 ₺",
          "available": true,
          "order": 14
        },
        {
          "id": "-NtLMPtLJTDAj7BuBezu",
          "catId": "-NtLL6XpQHdsEyVf3Vct",
          "name": {
            "tr": "Pendore Öküzgözü (75 cl)",
            "en": "Pendore Öküzgözü (75 cl)"
          },
          "desc": {
            "tr": "Kırmızı şarap.",
            "en": "Red wine."
          },
          "price": "4.470 ₺",
          "available": true,
          "order": 15
        },
        {
          "id": "-NtLMTKmbGZd8CAocJVs",
          "catId": "-NtLL6XpQHdsEyVf3Vct",
          "name": {
            "tr": "Pendore Syrah (75 cl)",
            "en": "Pendore Syrah (75 cl)"
          },
          "desc": {
            "tr": "Kırmızı şarap.",
            "en": "Red wine."
          },
          "price": "4.470 ₺",
          "available": true,
          "order": 16
        },
        {
          "id": "-ODRcPYirQqKHSceZTF7",
          "catId": "-NtLL6XpQHdsEyVf3Vct",
          "name": {
            "tr": "Porta Diverti Beyaz",
            "en": "Porta Diverti Beyaz"
          },
          "desc": {
            "tr": "Soğuk servis edilen beyaz şarap.",
            "en": "Chilled white wine."
          },
          "price": "2.100 ₺",
          "available": true,
          "order": 17
        },
        {
          "id": "-NtLMiSXgRD7t3sLWbdh",
          "catId": "-NtLL6XpQHdsEyVf3Vct",
          "name": {
            "tr": "Prestige Boğazkere (75 cl)",
            "en": "Prestige Boğazkere (75 cl)"
          },
          "desc": {
            "tr": "Kırmızı şarap.",
            "en": "Red wine."
          },
          "price": "4.600 ₺",
          "available": true,
          "order": 18
        },
        {
          "id": "-NtLMmFZmhnuGGbFUZfh",
          "catId": "-NtLL6XpQHdsEyVf3Vct",
          "name": {
            "tr": "Prestige Kalecik Karası (75 cl)",
            "en": "Prestige Kalecik Karası (75 cl)"
          },
          "desc": {
            "tr": "Kırmızı şarap.",
            "en": "Red wine."
          },
          "price": "4.600 ₺",
          "available": true,
          "order": 19
        },
        {
          "id": "-NtLMouRImTT96ELDY_h",
          "catId": "-NtLL6XpQHdsEyVf3Vct",
          "name": {
            "tr": "Prestige Narince (75 cl)",
            "en": "Prestige Narince (75 cl)"
          },
          "desc": {
            "tr": "Soğuk servis edilen beyaz şarap.",
            "en": "Chilled white wine."
          },
          "price": "4.600 ₺",
          "available": true,
          "order": 20
        },
        {
          "id": "-NtLMrt3sj-dKdOnBskz",
          "catId": "-NtLL6XpQHdsEyVf3Vct",
          "name": {
            "tr": "Prestige Öküzgözü (75 cl)",
            "en": "Prestige Öküzgözü (75 cl)"
          },
          "desc": {
            "tr": "Kırmızı şarap.",
            "en": "Red wine."
          },
          "price": "4.600 ₺",
          "available": true,
          "order": 21
        },
        {
          "id": "-NtLN-lbtRDGLulOOuaw",
          "catId": "-NtLL6XpQHdsEyVf3Vct",
          "name": {
            "tr": "Sarafin Cabernet Sauvignon (37,5 cl)",
            "en": "Sarafin Cabernet Sauvignon (37,5 cl)"
          },
          "desc": {
            "tr": "Kırmızı şarap.",
            "en": "Red wine."
          },
          "price": "2.920 ₺",
          "available": true,
          "order": 22
        },
        {
          "id": "-NtLN6o3HCc6o4JFT20Z",
          "catId": "-NtLL6XpQHdsEyVf3Vct",
          "name": {
            "tr": "Sarafin Cabernet Sauvignon (75 cl)",
            "en": "Sarafin Cabernet Sauvignon (75 cl)"
          },
          "desc": {
            "tr": "Kırmızı şarap.",
            "en": "Red wine."
          },
          "price": "4.260 ₺",
          "available": true,
          "order": 23
        },
        {
          "id": "-NtLNAAQcNroNQ04PGzu",
          "catId": "-NtLL6XpQHdsEyVf3Vct",
          "name": {
            "tr": "Sarafin Chardonnay (75 cl)",
            "en": "Sarafin Chardonnay (75 cl)"
          },
          "desc": {
            "tr": "Soğuk servis edilen beyaz şarap.",
            "en": "Chilled white wine."
          },
          "price": "4.260 ₺",
          "available": true,
          "order": 24
        },
        {
          "id": "-NtLNDKbz9dVKwKoZqmP",
          "catId": "-NtLL6XpQHdsEyVf3Vct",
          "name": {
            "tr": "Sarafin Füme Blanc (75 cl)",
            "en": "Sarafin Füme Blanc (75 cl)"
          },
          "desc": {
            "tr": "Soğuk servis edilen beyaz şarap.",
            "en": "Chilled white wine."
          },
          "price": "4.260 ₺",
          "available": true,
          "order": 25
        },
        {
          "id": "-NtLNHQGrFCreb4jm2I-",
          "catId": "-NtLL6XpQHdsEyVf3Vct",
          "name": {
            "tr": "Sarafin Merlot (75 cl)",
            "en": "Sarafin Merlot (75 cl)"
          },
          "desc": {
            "tr": "Kırmızı şarap.",
            "en": "Red wine."
          },
          "price": "4.260 ₺",
          "available": true,
          "order": 26
        },
        {
          "id": "-NtLNKXRsZZJXDMNI4L_",
          "catId": "-NtLL6XpQHdsEyVf3Vct",
          "name": {
            "tr": "Sarafin Sauvignon Blanc (75 cl)",
            "en": "Sarafin Sauvignon Blanc (75 cl)"
          },
          "desc": {
            "tr": "Soğuk servis edilen beyaz şarap.",
            "en": "Chilled white wine."
          },
          "price": "4.260 ₺",
          "available": true,
          "order": 27
        },
        {
          "id": "-NtLNNq5IVJkB9L2JXrv",
          "catId": "-NtLL6XpQHdsEyVf3Vct",
          "name": {
            "tr": "Sarafin Shiraz (75 cl)",
            "en": "Sarafin Shiraz (75 cl)"
          },
          "desc": {
            "tr": "Kırmızı şarap.",
            "en": "Red wine."
          },
          "price": "4.260 ₺",
          "available": true,
          "order": 28
        },
        {
          "id": "-NtLNQyKUeVZAJlc98RM",
          "catId": "-NtLL6XpQHdsEyVf3Vct",
          "name": {
            "tr": "Selection Narince- Emir (50 cl)",
            "en": "Selection Narince- Emir (50 cl)"
          },
          "desc": {
            "tr": "Soğuk servis edilen beyaz şarap.",
            "en": "Chilled white wine."
          },
          "price": "2.820 ₺",
          "available": true,
          "order": 29
        },
        {
          "id": "-NtLNUp5emHdG4gSAn9s",
          "catId": "-NtLL6XpQHdsEyVf3Vct",
          "name": {
            "tr": "Selection Narince- Emir (75 cl)",
            "en": "Selection Narince- Emir (75 cl)"
          },
          "desc": {
            "tr": "Soğuk servis edilen beyaz şarap.",
            "en": "Chilled white wine."
          },
          "price": "3.710 ₺",
          "available": true,
          "order": 30
        },
        {
          "id": "-NtLNXw-6niTS08kdx_o",
          "catId": "-NtLL6XpQHdsEyVf3Vct",
          "name": {
            "tr": "Selection Öküzgözü-Boğazkere (50 cl)",
            "en": "Selection Öküzgözü-Boğazkere (50 cl)"
          },
          "desc": {
            "tr": "Kırmızı şarap.",
            "en": "Red wine."
          },
          "price": "2.880 ₺",
          "available": true,
          "order": 31
        },
        {
          "id": "-NtLNa6z9ff9lweXbO-j",
          "catId": "-NtLL6XpQHdsEyVf3Vct",
          "name": {
            "tr": "Selection Öküzgözü-Boğazkere (75 cl)",
            "en": "Selection Öküzgözü-Boğazkere (75 cl)"
          },
          "desc": {
            "tr": "Kırmızı şarap.",
            "en": "Red wine."
          },
          "price": "3.710 ₺",
          "available": true,
          "order": 32
        },
        {
          "id": "-NtLNdnz7yjI8j5erv57",
          "catId": "-NtLL6XpQHdsEyVf3Vct",
          "name": {
            "tr": "Sevillen Cabernet Sauvignon",
            "en": "Sevillen Cabernet Sauvignon"
          },
          "desc": {
            "tr": "Kırmızı şarap.",
            "en": "Red wine."
          },
          "price": "3.390 ₺",
          "available": true,
          "order": 33
        },
        {
          "id": "-NtLNlpymT7YNxkLSgDp",
          "catId": "-NtLL6XpQHdsEyVf3Vct",
          "name": {
            "tr": "Şampanya",
            "en": "Şampanya"
          },
          "desc": {
            "tr": "Köpüklü şarap.",
            "en": "Sparkling wine."
          },
          "price": "2.420 ₺",
          "available": true,
          "order": 34
        },
        {
          "id": "-NtLNpdxTZy8l5QQYXGh",
          "catId": "-NtLL6XpQHdsEyVf3Vct",
          "name": {
            "tr": "Yakut (35 cl)",
            "en": "Yakut (35 cl)"
          },
          "desc": {
            "tr": "Kırmızı şarap.",
            "en": "Red wine."
          },
          "price": "1.750 ₺",
          "available": true,
          "order": 35
        },
        {
          "id": "-NtLNqv53uddnijud19n",
          "catId": "-NtLL6XpQHdsEyVf3Vct",
          "name": {
            "tr": "Yakut (75 cl)",
            "en": "Yakut (75 cl)"
          },
          "desc": {
            "tr": "Kırmızı şarap.",
            "en": "Red wine."
          },
          "price": "2.690 ₺",
          "available": true,
          "order": 36
        }
      ]
    },
    {
      "id": "-NtGJufjq77_DSaIhTMd",
      "name": {
        "tr": "Diğer Alkollü İçecekler",
        "en": "Spirits & Liqueurs"
      },
      "order": 8,
      "items": [
        {
          "id": "-NtGJxVG3s811ol9STkb",
          "catId": "-NtGJufjq77_DSaIhTMd",
          "name": {
            "tr": "Absolut Votka (100 cl)",
            "en": "Absolut Votka (100 cl)"
          },
          "desc": {
            "tr": "Damıtılmış premium votka.",
            "en": "Distilled premium vodka."
          },
          "price": "4.570 ₺",
          "available": true,
          "order": 0
        },
        {
          "id": "-Oqv-RJnEAcGtM6deHqd",
          "catId": "-NtGJufjq77_DSaIhTMd",
          "name": {
            "tr": "Belvedere (70 cl)",
            "en": "Belvedere (70 cl)"
          },
          "desc": {
            "tr": "Damıtılmış premium votka.",
            "en": "Distilled premium vodka."
          },
          "price": "8.250 ₺",
          "available": true,
          "order": 1
        },
        {
          "id": "-NtGK1IA52MAP-AnRERC",
          "catId": "-NtGJufjq77_DSaIhTMd",
          "name": {
            "tr": "Absolut Votka (35 cl)",
            "en": "Absolut Votka (35 cl)"
          },
          "desc": {
            "tr": "Damıtılmış premium votka.",
            "en": "Distilled premium vodka."
          },
          "price": "2.575 ₺",
          "available": true,
          "order": 2
        },
        {
          "id": "-NtGK6T7RAgiaLCcRkuT",
          "catId": "-NtGJufjq77_DSaIhTMd",
          "name": {
            "tr": "Absolut Votka (70 cl)",
            "en": "Absolut Votka (70 cl)"
          },
          "desc": {
            "tr": "Damıtılmış premium votka.",
            "en": "Distilled premium vodka."
          },
          "price": "3.900 ₺",
          "available": true,
          "order": 3
        },
        {
          "id": "-NtGK7bIsGY894KbUA3L",
          "catId": "-NtGJufjq77_DSaIhTMd",
          "name": {
            "tr": "Absolut Votka (Kadeh)",
            "en": "Absolut Votka (Kadeh)"
          },
          "desc": {
            "tr": "Damıtılmış premium votka.",
            "en": "Distilled premium vodka."
          },
          "price": "480 ₺",
          "available": true,
          "order": 4
        },
        {
          "id": "-NtGKAYITP8uSFyfMIyx",
          "catId": "-NtGJufjq77_DSaIhTMd",
          "name": {
            "tr": "Black Label 12 Yıllık (100 cl)",
            "en": "Black Label 12 Yıllık (100 cl)"
          },
          "desc": {
            "tr": "Premium viski.",
            "en": "Premium whisky."
          },
          "price": "6.250 ₺",
          "available": true,
          "order": 5
        },
        {
          "id": "-NtGKDudLKEqQOWN4AOj",
          "catId": "-NtGJufjq77_DSaIhTMd",
          "name": {
            "tr": "Black Label 12 Yıllık (70 cl)",
            "en": "Black Label 12 Yıllık (70 cl)"
          },
          "desc": {
            "tr": "Premium viski.",
            "en": "Premium whisky."
          },
          "price": "5.360 ₺",
          "available": true,
          "order": 6
        },
        {
          "id": "-O24tYdXVV9zlgWGH8ur",
          "catId": "-NtGJufjq77_DSaIhTMd",
          "name": {
            "tr": "Black Label 12 Yıllık (35 cl)",
            "en": "Black Label 12 Yıllık (35 cl)"
          },
          "desc": {
            "tr": "Premium viski.",
            "en": "Premium whisky."
          },
          "price": "3.410 ₺",
          "available": true,
          "order": 7
        },
        {
          "id": "-NtGKGoObXaqz-fILAEM",
          "catId": "-NtGJufjq77_DSaIhTMd",
          "name": {
            "tr": "Black Label 12 Yıllık (Kadeh)",
            "en": "Black Label 12 Yıllık (Kadeh)"
          },
          "desc": {
            "tr": "Premium viski.",
            "en": "Premium whisky."
          },
          "price": "650 ₺",
          "available": true,
          "order": 8
        },
        {
          "id": "-NtGKPGz7vgtvJs3Z63f",
          "catId": "-NtGJufjq77_DSaIhTMd",
          "name": {
            "tr": "Chivas 12 Yıllık (100 cl)",
            "en": "Chivas 12 Yıllık (100 cl)"
          },
          "desc": {
            "tr": "Premium viski.",
            "en": "Premium whisky."
          },
          "price": "6.400 ₺",
          "available": true,
          "order": 9
        },
        {
          "id": "-NtL1LxcCcDwYe8fElzV",
          "catId": "-NtGJufjq77_DSaIhTMd",
          "name": {
            "tr": "Chivas 12 Yıllık (35 cl)",
            "en": "Chivas 12 Yıllık (35 cl)"
          },
          "desc": {
            "tr": "Premium viski.",
            "en": "Premium whisky."
          },
          "price": "3.590 ₺",
          "available": true,
          "order": 10
        },
        {
          "id": "-NtL1MyXjn5Coj3RDIFY",
          "catId": "-NtGJufjq77_DSaIhTMd",
          "name": {
            "tr": "Chivas 12 Yıllık (70 cl)",
            "en": "Chivas 12 Yıllık (70 cl)"
          },
          "desc": {
            "tr": "Premium viski.",
            "en": "Premium whisky."
          },
          "price": "5.150 ₺",
          "available": true,
          "order": 11
        },
        {
          "id": "-NtL1Pt4WkuLn9NKzkrq",
          "catId": "-NtGJufjq77_DSaIhTMd",
          "name": {
            "tr": "Chivas 12 Yıllık (Kadeh)",
            "en": "Chivas 12 Yıllık (Kadeh)"
          },
          "desc": {
            "tr": "Premium viski.",
            "en": "Premium whisky."
          },
          "price": "650 ₺",
          "available": true,
          "order": 12
        },
        {
          "id": "-NtL1SUIou_0X5mZrKbQ",
          "catId": "-NtGJufjq77_DSaIhTMd",
          "name": {
            "tr": "Chivas 18 Yıllık (70 cl)",
            "en": "Chivas 18 Yıllık (70 cl)"
          },
          "desc": {
            "tr": "Premium viski.",
            "en": "Premium whisky."
          },
          "price": "9.660 ₺",
          "available": true,
          "order": 13
        },
        {
          "id": "-NtL1VMrcJcPRE3w_dx-",
          "catId": "-NtGJufjq77_DSaIhTMd",
          "name": {
            "tr": "Chivas 18 Yıllık (Kadeh)",
            "en": "Chivas 18 Yıllık (Kadeh)"
          },
          "desc": {
            "tr": "Premium viski.",
            "en": "Premium whisky."
          },
          "price": "940 ₺",
          "available": true,
          "order": 14
        },
        {
          "id": "-NtL1Xut8EiXqsLm_ZVD",
          "catId": "-NtGJufjq77_DSaIhTMd",
          "name": {
            "tr": "Chivas Royal Salute 21 Yıllık",
            "en": "Chivas Royal Salute 21 Yıllık"
          },
          "desc": {
            "tr": "Premium viski.",
            "en": "Premium whisky."
          },
          "price": "26.000 ₺",
          "available": true,
          "order": 15
        },
        {
          "id": "-NyAu_VUAjQz2XZEsmqc",
          "catId": "-NtGJufjq77_DSaIhTMd",
          "name": {
            "tr": "Glenlivet (70 cl)",
            "en": "Glenlivet (70 cl)"
          },
          "desc": {
            "tr": "Premium viski.",
            "en": "Premium whisky."
          },
          "price": "5.190 ₺",
          "available": true,
          "order": 16
        },
        {
          "id": "-OGASPvkZq1BFE9VjqmD",
          "catId": "-NtGJufjq77_DSaIhTMd",
          "name": {
            "tr": "Gordon Cin (100 cl)",
            "en": "Gordon Cin (100 cl)"
          },
          "desc": {
            "tr": "Kuru cin.",
            "en": "Dry gin."
          },
          "price": "4.300 ₺",
          "available": true,
          "order": 17
        },
        {
          "id": "-NtL1fwGucgZ2xmV1rcY",
          "catId": "-NtGJufjq77_DSaIhTMd",
          "name": {
            "tr": "Gordon Cin (70 cl)",
            "en": "Gordon Cin (70 cl)"
          },
          "desc": {
            "tr": "Kuru cin.",
            "en": "Dry gin."
          },
          "price": "2.950 ₺",
          "available": true,
          "order": 18
        },
        {
          "id": "-NtL1iF7sTOZ8Ej7SSDP",
          "catId": "-NtGJufjq77_DSaIhTMd",
          "name": {
            "tr": "Gordon Cin (Kadeh)",
            "en": "Gordon Cin (Kadeh)"
          },
          "desc": {
            "tr": "Kuru cin.",
            "en": "Dry gin."
          },
          "price": "480 ₺",
          "available": true,
          "order": 19
        },
        {
          "id": "-NtL1m9dRv02sjPSs5sh",
          "catId": "-NtGJufjq77_DSaIhTMd",
          "name": {
            "tr": "Hendrick's Cin (70 cl)",
            "en": "Hendrick's Cin (70 cl)"
          },
          "desc": {
            "tr": "Kuru cin.",
            "en": "Dry gin."
          },
          "price": "6.270 ₺",
          "available": true,
          "order": 20
        },
        {
          "id": "-NtL2SB8KJPyzqKveXzf",
          "catId": "-NtGJufjq77_DSaIhTMd",
          "name": {
            "tr": "İthal Konyak",
            "en": "İthal Konyak"
          },
          "desc": {
            "tr": "İthal konyak.",
            "en": "Imported cognac."
          },
          "price": "780 ₺",
          "available": true,
          "order": 21
        },
        {
          "id": "-NtL2Xd6kDVuHCpXWPCa",
          "catId": "-NtGJufjq77_DSaIhTMd",
          "name": {
            "tr": "Jack Daniel's Single (70 cl)",
            "en": "Jack Daniel's Single (70 cl)"
          },
          "desc": {
            "tr": "Premium viski.",
            "en": "Premium whisky."
          },
          "price": "4.940 ₺",
          "available": true,
          "order": 22
        },
        {
          "id": "-NtL2aCOnWPIkcfComIJ",
          "catId": "-NtGJufjq77_DSaIhTMd",
          "name": {
            "tr": "Jack Daniel's (100 cl)",
            "en": "Jack Daniel's (100 cl)"
          },
          "desc": {
            "tr": "Premium viski.",
            "en": "Premium whisky."
          },
          "price": "6.500 ₺",
          "available": true,
          "order": 23
        },
        {
          "id": "-NtL2dR1yHSWC1vBj8L-",
          "catId": "-NtGJufjq77_DSaIhTMd",
          "name": {
            "tr": "Jack Daniel's (35 cl)",
            "en": "Jack Daniel's (35 cl)"
          },
          "desc": {
            "tr": "Premium viski.",
            "en": "Premium whisky."
          },
          "price": "3.050 ₺",
          "available": true,
          "order": 24
        },
        {
          "id": "-NtL2gQGFDXhDpi8Cm9_",
          "catId": "-NtGJufjq77_DSaIhTMd",
          "name": {
            "tr": "Jack Daniel's (70 cl)",
            "en": "Jack Daniel's (70 cl)"
          },
          "desc": {
            "tr": "Premium viski.",
            "en": "Premium whisky."
          },
          "price": "4.150 ₺",
          "available": true,
          "order": 25
        },
        {
          "id": "-NtL2jjfVz4BniVIOT0c",
          "catId": "-NtGJufjq77_DSaIhTMd",
          "name": {
            "tr": "Jack Daniel's (Kadeh)",
            "en": "Jack Daniel's (Kadeh)"
          },
          "desc": {
            "tr": "Premium viski.",
            "en": "Premium whisky."
          },
          "price": "595 ₺",
          "available": true,
          "order": 26
        },
        {
          "id": "-NtL2m6NNfRmyDmfQDoO",
          "catId": "-NtGJufjq77_DSaIhTMd",
          "name": {
            "tr": "Jim Beam (70 cl)",
            "en": "Jim Beam (70 cl)"
          },
          "desc": {
            "tr": "Premium viski.",
            "en": "Premium whisky."
          },
          "price": "5.000 ₺",
          "available": true,
          "order": 27
        },
        {
          "id": "-NtL2pTxFA8OikNMiHpq",
          "catId": "-NtGJufjq77_DSaIhTMd",
          "name": {
            "tr": "Johnnie Walker Double Black",
            "en": "Johnnie Walker Double Black"
          },
          "desc": {
            "tr": "Premium viski.",
            "en": "Premium whisky."
          },
          "price": "4.725 ₺",
          "available": true,
          "order": 28
        },
        {
          "id": "-NtL2s0OGC2eWUTYxvZ8",
          "catId": "-NtGJufjq77_DSaIhTMd",
          "name": {
            "tr": "Pembe Gordon Cin (70 cl)",
            "en": "Pembe Gordon Cin (70 cl)"
          },
          "desc": {
            "tr": "Kuru cin.",
            "en": "Dry gin."
          },
          "price": "3.870 ₺",
          "available": true,
          "order": 29
        },
        {
          "id": "-NtL2wN1vKIDHtEUplwP",
          "catId": "-NtGJufjq77_DSaIhTMd",
          "name": {
            "tr": "Tekila",
            "en": "Tekila"
          },
          "desc": {
            "tr": "Agav tekilası.",
            "en": "Agave tequila."
          },
          "price": "420 ₺",
          "available": true,
          "order": 30
        },
        {
          "id": "-NtL2ybJ-pf2tPi0PLv3",
          "catId": "-NtGJufjq77_DSaIhTMd",
          "name": {
            "tr": "Tekila (35 cl)",
            "en": "Tekila (35 cl)"
          },
          "desc": {
            "tr": "Agav tekilası.",
            "en": "Agave tequila."
          },
          "price": "2.940 ₺",
          "available": true,
          "order": 31
        },
        {
          "id": "-NyAvlZIGjn5NWaj0Ttk",
          "catId": "-NtGJufjq77_DSaIhTMd",
          "name": {
            "tr": "Tekila (70 cl)",
            "en": "Tekila (70 cl)"
          },
          "desc": {
            "tr": "Agav tekilası.",
            "en": "Agave tequila."
          },
          "price": "5.170 ₺",
          "available": true,
          "order": 32
        },
        {
          "id": "-NtL3-hOv9kKGqkxbCv7",
          "catId": "-NtGJufjq77_DSaIhTMd",
          "name": {
            "tr": "Yerli Votka (35 cl)",
            "en": "Yerli Votka (35 cl)"
          },
          "desc": {
            "tr": "Damıtılmış premium votka.",
            "en": "Distilled premium vodka."
          },
          "price": "1.360 ₺",
          "available": true,
          "order": 33
        },
        {
          "id": "-NtL32bcPNDHfkPkLIG1",
          "catId": "-NtGJufjq77_DSaIhTMd",
          "name": {
            "tr": "Yerli Votka (70 cl)",
            "en": "Yerli Votka (70 cl)"
          },
          "desc": {
            "tr": "Damıtılmış premium votka.",
            "en": "Distilled premium vodka."
          },
          "price": "2.310 ₺",
          "available": true,
          "order": 34
        },
        {
          "id": "-NtL35OJOjIlfTFki0-T",
          "catId": "-NtGJufjq77_DSaIhTMd",
          "name": {
            "tr": "Yerli Votka (Kadeh)",
            "en": "Yerli Votka (Kadeh)"
          },
          "desc": {
            "tr": "Damıtılmış premium votka.",
            "en": "Distilled premium vodka."
          },
          "price": "325 ₺",
          "available": true,
          "order": 35
        }
      ]
    },
    {
      "id": "-NtL6p6VwbK7PCkY_vK8",
      "name": {
        "tr": "Çerezler",
        "en": "Nuts & Snacks"
      },
      "order": 9,
      "items": [
        {
          "id": "-NtL6rCfEw01maHzykUl",
          "catId": "-NtL6p6VwbK7PCkY_vK8",
          "name": {
            "tr": "Antep Fıstığı Kuruyemiş",
            "en": "Antep Pistachios"
          },
          "desc": {
            "tr": "Kavrulmuş Antep fıstığı.",
            "en": "Roasted Antep pistachios."
          },
          "price": "330 ₺",
          "available": true,
          "order": 0
        },
        {
          "id": "-NtL7-6tlqAMkG37Agnv",
          "catId": "-NtL6p6VwbK7PCkY_vK8",
          "name": {
            "tr": "Kuruyemiş",
            "en": "Mixed Nuts"
          },
          "desc": {
            "tr": "Karışık kuruyemiş.",
            "en": "Mixed roasted nuts."
          },
          "price": "310 ₺",
          "available": true,
          "order": 1
        },
        {
          "id": "-NtL71mtuH_MFR7sGRL8",
          "catId": "-NtL6p6VwbK7PCkY_vK8",
          "name": {
            "tr": "Leblebi",
            "en": "Roasted Chickpeas"
          },
          "desc": {
            "tr": "Kavrulmuş leblebi.",
            "en": "Roasted chickpeas."
          },
          "price": "125 ₺",
          "available": true,
          "order": 2
        },
        {
          "id": "-NtL74KwRnfoqYi3d112",
          "catId": "-NtL6p6VwbK7PCkY_vK8",
          "name": {
            "tr": "Tuzlu Fıstık",
            "en": "Salted Peanuts"
          },
          "desc": {
            "tr": "Tuzlu yer fıstığı.",
            "en": "Salted peanuts."
          },
          "price": "220 ₺",
          "available": true,
          "order": 3
        }
      ]
    },
    {
      "id": "-NtL3Gomzx-yxaeHNt2B",
      "name": {
        "tr": "Alkolsüz İçecekler",
        "en": "Soft Drinks"
      },
      "order": 10,
      "items": [
        {
          "id": "-NtL3mnegos6q4QygFCO",
          "catId": "-NtL3Gomzx-yxaeHNt2B",
          "name": {
            "tr": "Ayran",
            "en": "Ayran"
          },
          "desc": {
            "tr": "Geleneksel yoğurt içeceği.",
            "en": "Traditional yogurt drink."
          },
          "price": "130 ₺",
          "available": true,
          "order": 0
        },
        {
          "id": "-NtL3o7465gaH58_jJhb",
          "catId": "-NtL3Gomzx-yxaeHNt2B",
          "name": {
            "tr": "Cola",
            "en": "Cola"
          },
          "desc": {
            "tr": "Soğuk kola.",
            "en": "Chilled cola."
          },
          "price": "210 ₺",
          "available": true,
          "order": 1
        },
        {
          "id": "-NtL3qmb2EgusAYaXFrz",
          "catId": "-NtL3Gomzx-yxaeHNt2B",
          "name": {
            "tr": "Fanta",
            "en": "Fanta"
          },
          "desc": {
            "tr": "Portakal aromalı gazoz.",
            "en": "Orange soda."
          },
          "price": "210 ₺",
          "available": true,
          "order": 2
        },
        {
          "id": "-NtL3te0MwBfHlum6InU",
          "catId": "-NtL3Gomzx-yxaeHNt2B",
          "name": {
            "tr": "Meyve Suları",
            "en": "Fruit Juices"
          },
          "desc": {
            "tr": "Çeşitli meyve suları.",
            "en": "Assorted fruit juices."
          },
          "price": "210 ₺",
          "available": true,
          "order": 3
        },
        {
          "id": "-NtL3wI8j6vEegFF-Ty6",
          "catId": "-NtL3Gomzx-yxaeHNt2B",
          "name": {
            "tr": "Nar Suyu",
            "en": "Pomegranate Juice"
          },
          "desc": {
            "tr": "Taze nar suyu.",
            "en": "Fresh pomegranate juice."
          },
          "price": "270 ₺",
          "available": true,
          "order": 4
        },
        {
          "id": "-NtL41HmSRa0kNJlrTIt",
          "catId": "-NtL3Gomzx-yxaeHNt2B",
          "name": {
            "tr": "Pamir Şalgam (Küçük Şişe)",
            "en": "Pamir Şalgam (Small Bottle)"
          },
          "desc": {
            "tr": "Küçük şişe şalgam suyu.",
            "en": "Small bottle of turnip juice (şalgam)."
          },
          "price": "110 ₺",
          "available": true,
          "order": 5
        },
        {
          "id": "-NtL46BISe8uMNisoLM7",
          "catId": "-NtL3Gomzx-yxaeHNt2B",
          "name": {
            "tr": "Portakal Suyu",
            "en": "Orange Juice"
          },
          "desc": {
            "tr": "Taze sıkma portakal suyu.",
            "en": "Freshly squeezed orange juice."
          },
          "price": "270 ₺",
          "available": true,
          "order": 6
        },
        {
          "id": "-NtL49UACXUdRmPHhjpS",
          "catId": "-NtL3Gomzx-yxaeHNt2B",
          "name": {
            "tr": "Redbull",
            "en": "Red Bull"
          },
          "desc": {
            "tr": "Enerji içeceği.",
            "en": "Energy drink."
          },
          "price": "260 ₺",
          "available": true,
          "order": 7
        },
        {
          "id": "-NtL4CRxjjMIUI_RwdD4",
          "catId": "-NtL3Gomzx-yxaeHNt2B",
          "name": {
            "tr": "Soda",
            "en": "Soda"
          },
          "desc": {
            "tr": "Maden sodası.",
            "en": "Sparkling mineral water."
          },
          "price": "90 ₺",
          "available": true,
          "order": 8
        },
        {
          "id": "-NtL4ErYUr111GMAaXcu",
          "catId": "-NtL3Gomzx-yxaeHNt2B",
          "name": {
            "tr": "Soda Limon",
            "en": "Lemon Soda"
          },
          "desc": {
            "tr": "Limonlu maden sodası.",
            "en": "Lemon-flavoured soda."
          },
          "price": "110 ₺",
          "available": true,
          "order": 9
        },
        {
          "id": "-NtL4JxZf3XB_tWpBzqw",
          "catId": "-NtL3Gomzx-yxaeHNt2B",
          "name": {
            "tr": "Sprite",
            "en": "Sprite"
          },
          "desc": {
            "tr": "Limon aromalı gazoz.",
            "en": "Lemon-lime soda."
          },
          "price": "210 ₺",
          "available": true,
          "order": 10
        },
        {
          "id": "-NtL4LIlFGj06n4z5IDs",
          "catId": "-NtL3Gomzx-yxaeHNt2B",
          "name": {
            "tr": "Şalgam (Şişe)",
            "en": "Şalgam (Bottle)"
          },
          "desc": {
            "tr": "Şişe şalgam suyu.",
            "en": "Bottled turnip juice (şalgam)."
          },
          "price": "250 ₺",
          "available": true,
          "order": 11
        },
        {
          "id": "-NtL4Pyv2xICQR6f_V8W",
          "catId": "-NtL3Gomzx-yxaeHNt2B",
          "name": {
            "tr": "Zero",
            "en": "Cola Zero"
          },
          "desc": {
            "tr": "Şekersiz kola.",
            "en": "Sugar-free cola."
          },
          "price": "210 ₺",
          "available": true,
          "order": 12
        },
        {
          "id": "-Oqv-W-BkIX46BfLNfLZ",
          "catId": "-NtL3Gomzx-yxaeHNt2B",
          "name": {
            "tr": "San Pellegrino (1 lt)",
            "en": "San Pellegrino (1 lt)"
          },
          "desc": {
            "tr": "Doğal maden suyu (1 litre).",
            "en": "Sparkling natural mineral water (1 L)."
          },
          "price": "280 ₺",
          "available": true,
          "order": 13
        },
        {
          "id": "-OrrjaUaAthNV5t1Li53",
          "catId": "-NtL3Gomzx-yxaeHNt2B",
          "name": {
            "tr": "Su (1,5 lt)",
            "en": "Water (1.5 lt)"
          },
          "desc": {
            "tr": "Doğal kaynak suyu (1,5 litre).",
            "en": "Still spring water (1.5 L)."
          },
          "price": "150 ₺",
          "available": true,
          "order": 14
        }
      ]
    },
    {
      "id": "-NtL4bO6Qr1cMKKudEnA",
      "name": {
        "tr": "Tatlılar",
        "en": "Desserts"
      },
      "order": 11,
      "items": [
        {
          "id": "-NtL4gN5A_A6fpfwZirA",
          "catId": "-NtL4bO6Qr1cMKKudEnA",
          "name": {
            "tr": "Ayva Tatlısı",
            "en": "Quince Dessert"
          },
          "desc": {
            "tr": "Şerbetli ayva tatlısı, kaymakla.",
            "en": "Poached quince dessert with clotted cream."
          },
          "price": "330 ₺",
          "available": true,
          "order": 0
        },
        {
          "id": "-OjQUHPGil8nK491P7aQ",
          "catId": "-NtL4bO6Qr1cMKKudEnA",
          "name": {
            "tr": "İncir Tatlısı",
            "en": "Fig Dessert"
          },
          "desc": {
            "tr": "Cevizli incir tatlısı.",
            "en": "Fig dessert with walnuts."
          },
          "price": "370 ₺",
          "available": true,
          "order": 1
        },
        {
          "id": "-NtL4jKLrBJ1DTJ2GsE7",
          "catId": "-NtL4bO6Qr1cMKKudEnA",
          "name": {
            "tr": "Beton Helva",
            "en": "'Beton' Halva"
          },
          "desc": {
            "tr": "Yoğun tahin helvası.",
            "en": "Dense tahini halva."
          },
          "price": "295 ₺",
          "available": true,
          "order": 2
        },
        {
          "id": "-NtL4oQP12HxNX9jgwcZ",
          "catId": "-NtL4bO6Qr1cMKKudEnA",
          "name": {
            "tr": "Dondurma",
            "en": "Ice Cream"
          },
          "desc": {
            "tr": "Çeşitli dondurma.",
            "en": "Assorted ice cream."
          },
          "price": "210 ₺",
          "available": true,
          "order": 3
        },
        {
          "id": "-NtL4qocqtrfovcRP7Vs",
          "catId": "-NtL4bO6Qr1cMKKudEnA",
          "name": {
            "tr": "Dondurmalı İrmik",
            "en": "Semolina Halva with Ice Cream"
          },
          "desc": {
            "tr": "Dondurmalı irmik helvası.",
            "en": "Semolina halva with ice cream."
          },
          "price": "360 ₺",
          "available": true,
          "order": 4
        },
        {
          "id": "-NtL4t3NgH4WcqBuuMoJ",
          "catId": "-NtL4bO6Qr1cMKKudEnA",
          "name": {
            "tr": "Ekmek Kadayıfı",
            "en": "Ekmek Kadayıfı"
          },
          "desc": {
            "tr": "Kaymaklı ekmek kadayıfı.",
            "en": "Bread kadayıf with clotted cream."
          },
          "price": "295 ₺",
          "available": true,
          "order": 5
        },
        {
          "id": "-NtL55HSuA_lwZFXpTCa",
          "catId": "-NtL4bO6Qr1cMKKudEnA",
          "name": {
            "tr": "İrmik Tatlısı",
            "en": "Semolina Dessert"
          },
          "desc": {
            "tr": "İrmik helvası.",
            "en": "Semolina halva."
          },
          "price": "330 ₺",
          "available": true,
          "order": 6
        },
        {
          "id": "-NtL57XSlI25yoszq0Ue",
          "catId": "-NtL4bO6Qr1cMKKudEnA",
          "name": {
            "tr": "Kabak Tatlısı",
            "en": "Pumpkin Dessert"
          },
          "desc": {
            "tr": "Cevizli kabak tatlısı.",
            "en": "Candied pumpkin with walnuts."
          },
          "price": "330 ₺",
          "available": true,
          "order": 7
        },
        {
          "id": "-NtL5ILkD8qHmpBCfx5P",
          "catId": "-NtL4bO6Qr1cMKKudEnA",
          "name": {
            "tr": "Kavun",
            "en": "Melon"
          },
          "desc": {
            "tr": "Dilimlenmiş kavun.",
            "en": "Sliced melon."
          },
          "price": "190 ₺",
          "available": true,
          "order": 8
        },
        {
          "id": "-NvatiU2rxyQRgozs9fe",
          "catId": "-NtL4bO6Qr1cMKKudEnA",
          "name": {
            "tr": "Karpuz",
            "en": "Watermelon"
          },
          "desc": {
            "tr": "Dilimlenmiş karpuz.",
            "en": "Sliced watermelon."
          },
          "price": "205 ₺",
          "available": true,
          "order": 9
        },
        {
          "id": "-Nwyho34REUcqTVGgm4t",
          "catId": "-NtL4bO6Qr1cMKKudEnA",
          "name": {
            "tr": "Erik",
            "en": "Green Plums"
          },
          "desc": {
            "tr": "Taze yeşil erik.",
            "en": "Fresh green plums."
          },
          "price": "650 ₺",
          "available": true,
          "order": 10
        },
        {
          "id": "-NtL5KfbU-cTg9Umnk27",
          "catId": "-NtL4bO6Qr1cMKKudEnA",
          "name": {
            "tr": "Kaymaklı Köy Baklavası",
            "en": "Village Baklava with Cream"
          },
          "desc": {
            "tr": "Kaymaklı köy baklavası.",
            "en": "Village-style baklava with clotted cream."
          },
          "price": "410 ₺",
          "available": true,
          "order": 11
        },
        {
          "id": "-NtL5N0w_2psawqTXPhw",
          "catId": "-NtL4bO6Qr1cMKKudEnA",
          "name": {
            "tr": "Meyve",
            "en": "Fruit"
          },
          "desc": {
            "tr": "Mevsim meyveleri.",
            "en": "Seasonal fruit."
          },
          "price": "225 ₺",
          "available": true,
          "order": 12
        },
        {
          "id": "-ONZAgOjdEgJMHWfWtqW",
          "catId": "-NtL4bO6Qr1cMKKudEnA",
          "name": {
            "tr": "Karpuz",
            "en": "Watermelon"
          },
          "desc": {
            "tr": "Dilimlenmiş karpuz.",
            "en": "Sliced watermelon."
          },
          "price": "180 ₺",
          "available": true,
          "order": 13
        },
        {
          "id": "-OO3HUUfqmu4KKJFr88z",
          "catId": "-NtL4bO6Qr1cMKKudEnA",
          "name": {
            "tr": "Çilek",
            "en": "Strawberries"
          },
          "desc": {
            "tr": "Taze çilek.",
            "en": "Fresh strawberries."
          },
          "price": "160 ₺",
          "available": true,
          "order": 14
        },
        {
          "id": "-OO3HT1ptoNqH7xoHQJm",
          "catId": "-NtL4bO6Qr1cMKKudEnA",
          "name": {
            "tr": "Ayva",
            "en": "Quince"
          },
          "desc": {
            "tr": "Taze ayva.",
            "en": "Fresh quince."
          },
          "price": "125 ₺",
          "available": true,
          "order": 15
        },
        {
          "id": "-NtL5PfqOEADyxRVEkOk",
          "catId": "-NtL4bO6Qr1cMKKudEnA",
          "name": {
            "tr": "Sıcak Helva",
            "en": "Warm Halva"
          },
          "desc": {
            "tr": "Sıcak tahin helvası.",
            "en": "Warm tahini halva."
          },
          "price": "390 ₺",
          "available": true,
          "order": 16
        },
        {
          "id": "-NtL5UoAbOxdunbot8ri",
          "catId": "-NtL4bO6Qr1cMKKudEnA",
          "name": {
            "tr": "Tahinli Kabak Tatlısı",
            "en": "Pumpkin Dessert with Tahini"
          },
          "desc": {
            "tr": "Tahinli kabak tatlısı.",
            "en": "Pumpkin dessert with tahini."
          },
          "price": "360 ₺",
          "available": true,
          "order": 17
        },
        {
          "id": "-NxbnNs09LRrWvm5KZK6",
          "catId": "-NtL4bO6Qr1cMKKudEnA",
          "name": {
            "tr": "Serpme Meyve",
            "en": "Mixed Fruit Platter"
          },
          "desc": {
            "tr": "Karışık serpme meyve tabağı.",
            "en": "Assorted fruit platter."
          },
          "price": "305 ₺",
          "available": true,
          "order": 18
        }
      ]
    }
  ]
};
