// components/Nav.jsx
// Fixed navigation — transparent over hero, navy everywhere else.

const { useState: useNavState, useEffect: useNavEffect } = React;

function Nav({ currentPage, setPage }) {
  const [scrolled, setScrolled]     = useNavState(false);
  const [mobileOpen, setMobileOpen] = useNavState(false);

  useNavEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 70);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useNavEffect(() => {
    window.scrollTo({ top: 0 });
    setMobileOpen(false);
  }, [currentPage]);

  const isTransparent = currentPage === 'home' && !scrolled;

  const links = [
    { id: 'home',    label: 'Home'           },
    { id: 'menu',    label: 'Menu'           },
    { id: 'gallery', label: 'Gallery & About'},
  ];

  const navS = {
    position:        'fixed',
    top:             0,
    left:            0,
    right:           0,
    zIndex:          300,
    height:          'var(--nav-h)',
    display:         'flex',
    alignItems:      'center',
    justifyContent:  'space-between',
    padding:         '0 3rem',
    backgroundColor: isTransparent ? 'transparent' : 'var(--navy)',
    borderBottom:    isTransparent ? 'none' : '1px solid rgba(253,251,247,0.07)',
    transition:      'background-color 0.5s ease, border-color 0.5s ease',
  };

  const linkS = (id) => ({
    fontFamily:      'var(--sans)',
    fontSize:        '0.7rem',
    fontWeight:      500,
    letterSpacing:   '0.2em',
    textTransform:   'uppercase',
    color:           currentPage === id ? 'var(--bronze)' : 'rgba(253,251,247,0.7)',
    background:      'none',
    border:          'none',
    borderBottom:    currentPage === id ? '1px solid var(--bronze)' : '1px solid transparent',
    paddingBottom:   '2px',
    cursor:          'pointer',
    transition:      'color 0.25s ease, border-color 0.25s ease',
  });

  return (
    <>
      <nav style={navS}>
        {/* Logo */}
        <button
          onClick={() => setPage('home')}
          style={{
            fontFamily:   'var(--serif)',
            fontSize:     '1.75rem',
            fontWeight:   400,
            fontStyle:    'italic',
            color:        'var(--cream)',
            letterSpacing:'0.06em',
            background:   'none',
            border:       'none',
            cursor:       'pointer',
            padding:      0,
            lineHeight:   1,
          }}
        >
          Marea
        </button>

        {/* Desktop Links */}
        <div style={{ display: 'flex', gap: '2.8rem', alignItems: 'center' }}>
          {links.map(l => (
            <button key={l.id} onClick={() => setPage(l.id)} style={linkS(l.id)}>
              {l.label}
            </button>
          ))}
        </div>

        {/* CTA */}
        <button
          onClick={() => setPage('contact')}
          className="btn btn-primary"
          style={{ fontSize: '0.68rem', padding: '0.8rem 1.9rem' }}
        >
          Book a Table
        </button>
      </nav>

      {/* Mobile overlay (simple) */}
      {mobileOpen && (
        <div
          style={{
            position:        'fixed', inset: 0, zIndex: 299,
            backgroundColor: 'var(--navy)',
            display:         'flex', flexDirection: 'column',
            alignItems:      'center', justifyContent: 'center',
            gap:             '2.5rem',
          }}
        >
          {[...links, { id: 'contact', label: 'Reservations' }].map(l => (
            <button key={l.id} onClick={() => setPage(l.id)} style={{
              fontFamily:    'var(--serif)',
              fontSize:      '2rem',
              fontStyle:     'italic',
              color:         currentPage === l.id ? 'var(--bronze)' : 'var(--cream)',
              background:    'none', border: 'none', cursor: 'pointer',
            }}>
              {l.label}
            </button>
          ))}
        </div>
      )}
    </>
  );
}

Object.assign(window, { Nav });
