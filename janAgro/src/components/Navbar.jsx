// src/components/Navbar.jsx
import { useState } from 'react';
import './Navbar.css';

function Navbar({ currentPage, onNavigate, isTransparent }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileSlideOpen, setIsProfileSlideOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleProfileSlide = () => {
    setIsProfileSlideOpen(!isProfileSlideOpen);
  };

  const handleNavClick = (page) => {
    onNavigate(page);
    setIsMenuOpen(false);
    setIsProfileSlideOpen(false);
  };

  // Membuat string kelas yang dinamis dan bersih
  const navClasses = [
    'navbar',
    isTransparent ? 'navbar-transparent' : '',
    isProfileSlideOpen ? 'white-bg' : ''
  ].filter(Boolean).join(' ');

  return (
    <>
      <nav className={navClasses} >
        <div className="navbar-brand">
          <button onClick={() => handleNavClick('home')} className="brand-button">
            <img src="/src/image/janAgro.png" alt="Jan Agro Logo" style={{width:"50px", height:"50px"}}/>
          </button>
        </div>
        <button className="navbar-toggler" onClick={toggleMenu}>
          {isMenuOpen ? '✕' : '☰'}
        </button>
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <ul>
            <li>
              <button onClick={() => handleNavClick('shop')} className={currentPage === 'shop' ? 'active' : ''}>
                🛒 Shop
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('about')} className={currentPage === 'about' ? 'active' : ''}>
                🌿 About
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('services')} className={currentPage === 'services' ? 'active' : ''}>
                🌾 Services
              </button>
            </li>
            <li>
              <button onClick={() => handleNavClick('admin')} className={currentPage === 'admin' ? 'active' : ''}>
                ⚙️ Admin
              </button>
            </li>
            <li className="profile-item">
              <button onClick={toggleProfileSlide} className={currentPage === 'profile' ? 'active' : ''}>
                👤 Profile
              </button>
            </li>
          </ul>
        </div>
      </nav>

      <div className={`profile-dropdown-panel ${isProfileSlideOpen ? 'active white-bg' : ''}`}>
        <h2 className="profile-title">Selamat Datang!</h2>
        <div className="profile-buttons">
          <button onClick={() => handleNavClick('login')}>🔐 Masuk</button>
          <button onClick={() => handleNavClick('register')}>📝 Daftar</button>
          <button onClick={() => handleNavClick('profile')}>👤 Profil</button>
        </div>
      </div>
    </>
  );
}

export default Navbar;