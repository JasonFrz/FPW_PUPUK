import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HomepageContent from './components/HomepageContent';
import Shop from './components/Shop';
import About from './components/About';
import Footer from './components/Footer';
import Profile from './components/Profile'
import './App.css';

function App() {
  const [currentPage, setCurrentPage] = useState('home');

  const handleNavigate = (page) => {
    setCurrentPage(page);
  };

  const renderPage = () => {
    switch (currentPage) {
      case 'home':
        return <HomepageContent />;
      case 'shop':
        return <Shop />;
      case 'about':
        return <About />;
      case 'profile':
        return <Profile />;
      case 'services':
        return <div style={{ padding: '4rem 2rem', textAlign: 'center', background: 'linear-gradient(135deg, #1a4c3e 0%, #2d7a5f 100%)', minHeight: '100vh', color: '#d1fae5' }}>
          <h1 style={{ color: '#4ade80', fontSize: '3rem', marginBottom: '2rem' }}>🌾 Our Services</h1>
          <p style={{ fontSize: '1.3rem', marginBottom: '2rem' }}>Coming Soon! We're working on something amazing for you.</p>
          <div style={{ fontSize: '4rem', animation: 'bounce 2s infinite' }}>🚧</div>
        </div>;
      case 'contact':
        return <div style={{ padding: '4rem 2rem', textAlign: 'center', background: 'linear-gradient(135deg, #1a4c3e 0%, #2d7a5f 100%)', minHeight: '100vh', color: '#d1fae5' }}>
          <h1 style={{ color: '#4ade80', fontSize: '3rem', marginBottom: '2rem' }}>📞 Contact Us</h1>
          <p style={{ fontSize: '1.3rem', marginBottom: '2rem' }}>Get in touch with our gardening experts!</p>
          <div style={{ fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
            <p style={{ marginBottom: '1rem' }}>📧 info@greengrow.com</p>
            <p style={{ marginBottom: '1rem' }}>📱 +1 (555) 123-GROW</p>
            <p style={{ marginBottom: '1rem' }}>🏪 123 Garden Street, Green Valley</p>
          </div>
          <div style={{ fontSize: '3rem', marginTop: '2rem' }}>🌱🌿🍀</div>
        </div>;
      default:
        return <HomepageContent />;
    }
  };

  return (
    <div className="App">
      <Navbar currentPage={currentPage} onNavigate={handleNavigate} />
      {renderPage()}
      <Footer />
    </div>
  );
}

export default App;

