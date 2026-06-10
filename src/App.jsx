// src/App.jsx
import React from 'react';
import { Routes, Route, useLocation, Navigate } from 'react-router-dom';
import Nav from './components/Nav.jsx';
import Footer from './components/Footer.jsx';
import HomePage from './pages/HomePage.jsx';
import MenuPage from './pages/MenuPage.jsx';
import GalleryPage from './pages/GalleryPage.jsx';
import ContactPage from './pages/ContactPage.jsx';
import QRMenuPage from './pages/QRMenuPage.jsx';
import AdminApp from './admin/AdminApp.jsx';

// Rota değişiminde sayfayı başa kaydır.
function ScrollToTop() {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  }, [pathname]);
  return null;
}

function App() {
  const { pathname } = useLocation();

  // Gizli admin paneli: public Nav/Footer/scroll davranışı olmadan kendi layout'unda.
  if (pathname.startsWith('/admin')) {
    return <AdminApp />;
  }

  // QR menüsü: masadaki müşteriye gösterilen standalone sayfa (Nav/Footer yok).
  if (pathname.startsWith('/qr-menu')) {
    return <QRMenuPage />;
  }

  return (
    <>
      <ScrollToTop />
      <Nav />
      <main>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/menu" element={<MenuPage />} />
          <Route path="/gallery" element={<GalleryPage />} />
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
}

export default App;
