// components/MenuPage.jsx

function MenuPage({ setPage }) {
  const [activeTab, setActiveTab] = React.useState('cold');

  const categories = [
    { id: 'cold',  en: 'Cold Appetizers',   tr: 'Soğuk Mezeler'        },
    { id: 'hot',   en: 'Hot Starters',      tr: 'Sıcak Başlangıçlar'   },
    { id: 'catch', en: 'Daily Fresh Catch', tr: 'Günün Balığı'          },
    { id: 'wine',  en: 'Wine Pairing',      tr: 'Şarap Seçkisi'         },
  ];

  const menuData = {
    cold: [
      { name: 'Narenciye Salamura Somon',   desc: 'Dereotu crème fraîche, ikra, çıtır kapari',              price: '₺285' },
      { name: 'Çipura Ceviche',             desc: 'Yuzu ponzu, salatalık jüsü, kişniş yağı',               price: '₺320' },
      { name: 'Ege Kayalık İstiridyesi',    desc: 'Mignonette sos, limon, kaba deniz tuzu — adet',          price: '₺185' },
      { name: 'Ahtapot Carpaccio',          desc: 'Truffle yağı, kapari, limon jölesi',                     price: '₺295' },
      { name: 'Karides Kokteyl',            desc: 'Marie rose sos, avokado püresi, mikroyeşillik',          price: '₺265' },
      { name: 'Ton Balığı Tartare',         desc: 'Wasabi mayo, susam yağı, nori kıtırı, çam fıstığı',     price: '₺340' },
    ],
    hot: [
      { name: 'Tereyağlı Tarak',            desc: 'Safran beurre blanc, taze karabiber, tarhun',            price: '₺345' },
      { name: 'Izgarada Kalamar',           desc: 'Harissa tereyağı, limon, kişniş, zeytinyağı',            price: '₺265' },
      { name: 'Istakoz Bisque',             desc: 'Brioche tost, crème fraîche, kırmızı havyar',            price: '₺380' },
      { name: 'Siyah Mürekkepli Ahtapot',  desc: 'Nero risotto, şekersiz turunç jölesi, parmigiano',       price: '₺395' },
      { name: 'Karides Güveç',             desc: 'Domates concassé, beyaz feta, taze kekik',               price: '₺320' },
      { name: 'Deniz Tarağı Graten',       desc: 'Emmental, taze sarımsak, maydanoz, kadayıf',             price: '₺355' },
    ],
    catch: [
      { name: 'Kalkan',     desc: 'Limon-kapari sos, bütün fırında, mevsim sebzeli',             price: 'Günün Fiyatı' },
      { name: 'Çipura',     desc: 'Akdeniz otları, tuz kabuğunda, sızma zeytinyağlı',            price: 'Günün Fiyatı' },
      { name: 'Levrek',     desc: 'Tereyağı-dereotu sos, rösti patates',                         price: 'Günün Fiyatı' },
      { name: 'Kırlangıç',  desc: 'Safran kreması, pırasa julienne, domatessiz',                 price: 'Günün Fiyatı' },
      { name: 'Lüfer',      desc: 'Izgara, İzmir sızma zeytinyağı, limon şurubu',                price: 'Günün Fiyatı' },
      { name: 'Orfoz',      desc: 'Beyaz şarap jüsü, rezene, deniz çayı',                        price: 'Günün Fiyatı' },
    ],
    wine: [
      { name: 'Chateau Musar Blanc',          desc: 'Bekaa Vadisi, Lübnan · 2018',                       price: '₺1.850' },
      { name: 'Puligny-Montrachet',           desc: 'Domaine Leflaive, Bourgogne, Fransa · 2020',        price: '₺2.200' },
      { name: 'Sancerre Blanc',              desc: 'Henri Bourgeois, Loire Vadisi · 2021',              price: '₺1.650' },
      { name: 'Kavaklidere Prestige Chardonnay', desc: 'Ankara bağları, Türkiye · 2022',               price: '₺1.200' },
      { name: 'Chablis Premier Cru',         desc: 'William Fèvre, Montée de Tonnerre · 2019',         price: '₺1.950' },
      { name: 'Pazo de Señorans Albariño',   desc: 'Rías Baixas, Galicia, İspanya · 2022',             price: '₺1.400' },
    ],
  };

  const activeCat = categories.find(c => c.id === activeTab);

  return (
    <div className="page-enter" style={{ paddingTop: 'var(--nav-h)' }}>

      {/* ── PAGE HEADER ──────────────────────────── */}
      <section style={{ background: 'var(--navy)', padding: '6rem 0 5rem' }}>
        <div className="container">
          <p className="overline" style={{ marginBottom: '1.5rem' }}>Menümüz</p>
          <h1 className="headline-xl" style={{ color: 'var(--cream)', maxWidth: '520px', marginBottom: '2rem' }}>
            A Menu of<br/><em style={{ fontStyle: 'italic' }}>Seasonal Excellence</em>
          </h1>
          <span className="accent-line"></span>
          <p style={{ fontFamily: 'var(--sans)', fontSize: '0.875rem', fontWeight: 300, color: 'rgba(253,251,247,0.42)', maxWidth: '500px', lineHeight: 1.9, marginTop: '1.5rem' }}>
            Menümüz günlük pazar fiyatları ve mevsimsel temin koşullarına göre değişkenlik gösterebilir.
            Günün balıkları için lütfen servisimizle iletişime geçiniz.
          </p>
        </div>
      </section>

      {/* ── CATEGORY TABS ────────────────────────── */}
      <div style={{
        position:     'sticky',
        top:          'var(--nav-h)',
        zIndex:       100,
        background:   'var(--cream)',
        borderBottom: '1px solid var(--cream-border)',
      }}>
        <div className="container">
          <div style={{ display: 'flex', overflowX: 'auto', scrollbarWidth: 'none' }}>
            {categories.map(cat => (
              <button
                key={cat.id}
                onClick={() => setActiveTab(cat.id)}
                style={{
                  padding:        '1.4rem 2.2rem',
                  fontFamily:     'var(--sans)',
                  fontSize:       '0.68rem',
                  fontWeight:     500,
                  letterSpacing:  '0.18em',
                  textTransform:  'uppercase',
                  whiteSpace:     'nowrap',
                  color:          activeTab === cat.id ? 'var(--bronze)'  : 'var(--text-muted)',
                  borderBottom:   activeTab === cat.id ? '2px solid var(--bronze)' : '2px solid transparent',
                  background:     'none',
                  border:         'none',
                  borderBottom:   activeTab === cat.id ? '2px solid var(--bronze)' : '2px solid transparent',
                  cursor:         'pointer',
                  transition:     'color 0.2s ease',
                  flexShrink:     0,
                }}
              >
                {cat.en}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* ── MENU ITEMS ───────────────────────────── */}
      <section className="section">
        <div className="container">
          <div style={{ maxWidth: '860px', margin: '0 auto' }}>

            {/* Category heading */}
            <div style={{ marginBottom: '3.5rem' }}>
              <h2 style={{ fontFamily: 'var(--serif)', fontSize: '2.6rem', fontStyle: 'italic', fontWeight: 300, color: 'var(--navy)' }}>
                {activeCat?.en}
              </h2>
              <p style={{ fontFamily: 'var(--sans)', fontSize: '0.68rem', letterSpacing: '0.18em', textTransform: 'uppercase', color: 'var(--text-muted)', marginTop: '0.4rem' }}>
                {activeCat?.tr}
              </p>
              <span className="accent-line" style={{ marginTop: '1.5rem', display: 'block' }}></span>
            </div>

            {/* Items */}
            {menuData[activeTab].map((item, i) => (
              <div
                key={i}
                style={{
                  display:        'flex',
                  justifyContent: 'space-between',
                  alignItems:     'flex-start',
                  padding:        '1.85rem 0',
                  borderBottom:   '1px solid var(--cream-border)',
                }}
              >
                <div style={{ flex: 1, paddingRight: '2.5rem' }}>
                  <div style={{ fontFamily: 'var(--serif)', fontSize: '1.2rem', fontWeight: 500, color: 'var(--navy)', marginBottom: '0.35rem' }}>
                    {item.name}
                  </div>
                  <div style={{ fontFamily: 'var(--sans)', fontSize: '0.8rem', fontStyle: 'italic', color: 'var(--text-muted)', lineHeight: 1.6 }}>
                    {item.desc}
                  </div>
                </div>
                <div style={{ fontFamily: 'var(--serif)', fontSize: '1.15rem', fontWeight: 400, color: 'var(--bronze)', whiteSpace: 'nowrap', flexShrink: 0 }}>
                  {item.price}
                </div>
              </div>
            ))}

            {/* Footer note */}
            <div style={{ marginTop: '3.5rem', display: 'flex', gap: '1.5rem', padding: '2rem', border: '1px solid var(--cream-border)', background: 'var(--cream-dark)' }}>
              <div style={{ width: '2px', background: 'var(--bronze)', flexShrink: 0, alignSelf: 'stretch' }}></div>
              <p style={{ fontFamily: 'var(--sans)', fontSize: '0.8rem', color: 'var(--text-muted)', lineHeight: 1.85 }}>
                Tüm fiyatlara KDV dahildir. Alerjen bilgisi ve diyet gereksinimleri için lütfen servisimizle iletişime geçiniz.
                Grup rezervasyonları için{' '}
                <span
                  onClick={() => setPage('contact')}
                  style={{ color: 'var(--bronze)', cursor: 'pointer', textDecoration: 'underline', textUnderlineOffset: '3px' }}
                >
                  rezervasyon sayfamızı
                </span>{' '}
                ziyaret ediniz. Özel menü tasarımı kurumsal etkinlikler için mevcuttur.
              </p>
            </div>

          </div>
        </div>
      </section>

    </div>
  );
}

Object.assign(window, { MenuPage });
