import { useState } from 'react';
import './Navbar.css';

function Navbar({ currentPage, onNavigate }) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isProfileDropdownOpen, setIsProfileDropdownOpen] = useState(false);

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
          Jan Agro Nusantara
        </button>
      </div>
      <button className="navbar-toggler" onClick={toggleMenu}>
        {isMenuOpen ? '✕' : '☰'}
      </button>
      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          {/* <li>
            <button 
              onClick={() => handleNavClick('home')}
              className={currentPage === 'home' ? 'active' : ''}
            >
              🏠 Home
            </button>
          </li> */}
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

          {/* 🔹 Tambahan tombol Admin */}
          <li>
            <button
              onClick={() => handleNavClick('admin')}
              className={currentPage === 'admin' ? 'active' : ''}
            >
              ⚙️ Admin
            </button>
          </li>

          <li className="profile-item">
            <button 
              onClick={toggleProfileDropdown}
              className={currentPage === 'profile' ? 'active' : ''}
            >
              👤 Profile
            </button>
            {isProfileDropdownOpen && (
              <div className="profile-dropdown fullscreen-dropdown">
                <button 
                  onClick={() => { handleNavClick('profile'); setIsProfileDropdownOpen(false); }}
                  className="dropdown-item"
                >
                  Visit Profile
                </button>
                <button 
                  onClick={() => { handleNavClick('login'); setIsProfileDropdownOpen(false); }}
                  className="dropdown-item"
                >
                  🔐 Login
                </button>
                <button 
                  onClick={() => { handleNavClick('register'); setIsProfileDropdownOpen(false); }}
                  className="dropdown-item"
                >
                  Register
                </button>
              </div>
            )}
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
