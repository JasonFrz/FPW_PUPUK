import React, { useState, /*useEffect*/ } from 'react';
import './Navbar.css';

function Navbar({ currentPage, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  // const [scrollY, setScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => setScrollY(window.scrollY);
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavClick = (page) => {
    onNavigate(page);
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar" style={{ transform: `translateY(${Math.min(scrollY * 0.5, 50)}px)` }}>
      <div className="navbar-brand">
        <button onClick={() => handleNavClick('home')} className="brand-button">
          <img className="plant-icon" src="src/image/janAgro.png" alt="" />
          {/* <span className="plant-icon">🌱</span> */}
          Jan Agro Fertilizers
        </button>
      </div>
      <button className="navbar-toggler" onClick={toggleMenu}>
        {isMenuOpen ? '✕' : '☰'}
      </button>
      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li>
            <button 
              onClick={() => handleNavClick('home')}
              className={currentPage === 'home' ? 'active' : ''}
            >
              🏠 Home
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavClick('shop')}
              className={currentPage === 'shop' ? 'active' : ''}
            >
              🛒 Shop
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavClick('about')}
              className={currentPage === 'about' ? 'active' : ''}
            >
              🌿 About
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavClick('services')}
              className={currentPage === 'services' ? 'active' : ''}
            >
              🌾 Services
            </button>
          </li>
          <li>
            <button 
              onClick={() => handleNavClick('profile')}
              className={currentPage === 'profile' ? 'active' : ''}
            >
              👤 Profile
            </button>
          </li>
          {/* <li>
            <button 
              onClick={() => handleNavClick('contact')}
              className={currentPage === 'contact' ? 'active' : ''}
            >
              📞 Contact
            </button>
          </li> */}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;