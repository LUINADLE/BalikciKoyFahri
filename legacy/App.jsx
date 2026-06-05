// App.jsx — main app shell + tweaks integration

const TWEAK_DEFAULTS = /*EDITMODE-BEGIN*/{
  "accentColor": "#C87A53",
  "serifFont":   "Cormorant Garamond"
}/*EDITMODE-END*/;

function App() {
  const [t, setTweak] = useTweaks(TWEAK_DEFAULTS);

  const [currentPage, setCurrentPage] = React.useState(() => {
    return sessionStorage.getItem('marea_page') || 'home';
  });

  const setPage = (page) => {
    setCurrentPage(page);
    sessionStorage.setItem('marea_page', page);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  // Push accent color + serif font into CSS variables whenever tweaks change
  React.useEffect(() => {
    const root = document.documentElement;
    root.style.setProperty('--bronze',      t.accentColor);
    root.style.setProperty('--bronze-deep', shadeColor(t.accentColor, -20));
    root.style.setProperty('--font-serif-val', `'${t.serifFont}'`);
  }, [t.accentColor, t.serifFont]);

  const renderPage = () => {
    switch (currentPage) {
      case 'home':    return <HomePage    key="home"    setPage={setPage} />;
      case 'menu':    return <MenuPage    key="menu"    setPage={setPage} />;
      case 'gallery': return <GalleryPage key="gallery" setPage={setPage} />;
      case 'contact': return <ContactPage key="contact" setPage={setPage} />;
      default:        return <HomePage    key="home"    setPage={setPage} />;
    }
  };

  return (
    <div>
      <Nav currentPage={currentPage} setPage={setPage} />
      <main>
        {renderPage()}
      </main>
      <Footer setPage={setPage} />

      <TweaksPanel>
        <TweakSection label="Renk Paleti" />
        <TweakColor
          label="Vurgu Rengi"
          value={t.accentColor}
          options={['#C87A53', '#B0912A', '#7B9E6B', '#9B4F4F']}
          onChange={v => setTweak('accentColor', v)}
        />
        <TweakSection label="Tipografi" />
        <TweakRadio
          label="Serif Font"
          value={t.serifFont}
          options={['Cormorant Garamond', 'Playfair Display']}
          onChange={v => setTweak('serifFont', v)}
        />
      </TweaksPanel>
    </div>
  );
}

// Utility: darken/lighten a hex color by amt (-255 to +255)
function shadeColor(hex, amt) {
  const num = parseInt(hex.replace('#',''), 16);
  const r = Math.min(255, Math.max(0, (num >> 16) + amt));
  const g = Math.min(255, Math.max(0, ((num >> 8) & 0xff) + amt));
  const b = Math.min(255, Math.max(0, (num & 0xff) + amt));
  return '#' + [r, g, b].map(v => v.toString(16).padStart(2,'0')).join('');
}

ReactDOM.createRoot(document.getElementById('root')).render(<App />);
