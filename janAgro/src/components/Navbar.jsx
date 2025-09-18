import React, { useState } from 'react';
import './Navbar.css';

function Navbar({ currentPage, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);
  // const [scrollY, setScrollY] = useState(0);

  // useEffect(() => {
  //   const handleScroll = () => setScrollY(window.scrollY);
  //   window.addEventListener('scroll', handleScroll);
  //   return () => window.removeEventListener('scroll', handleScroll);
  // }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileDropdown = () => {
    setIsProfileDropdownOpen(!isProfileDropdownOpen);
  };

  const handleNavClick = (page) => {
    onNavigate(page);
    setIsMenuOpen(false);
    setIsProfileDropdownOpen(false);
  };

  return (
    <nav className="navbar">
      <div className="navbar-brand">
        <button onClick={() => handleNavClick('home')} className="brand-button">
          <img className="plant-icon" src="src/image/janAgro.png" alt="" />
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
          <li className="profile-item">
            <button 
              onClick={() => handleNavClick('profile')}
              className={currentPage === 'profile' ? 'active' : ''}
            >
              👤 Profile
            </button>
            <div className="profile-dropdown">
              <button className="dropdown-toggle" onClick={toggleProfileDropdown}>
                <img src="src/image/down.png" alt="" width="18px" height="18px"/>
              </button>
              {isProfileDropdownOpen && (
                <div className="dropdown-menu">
                  <button 
                    onClick={() => handleNavClick('login')}
                    className="dropdown-item"
                  >
                    🔐 Login
                  </button>
                  <button 
                    onClick={() => handleNavClick('register')}
                    className="dropdown-item"
                  >
                    Register
                  </button>
                </div>
              )}
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;