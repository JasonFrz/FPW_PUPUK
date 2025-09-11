import React, { useState, useEffect } from 'react';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => setScrollY(window.scrollY);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar" style={{ transform: `translateY(${Math.min(scrollY * 0.5, 50)}px)` }}>
      <div className="navbar-brand">
        <a href="#home">
          <img className="plant-icon" src="src/image/janAgro.png" alt="" />
          {/* <span className="plant-icon" ></span> */}
          GreenGrow Fertilizers
        </a>
      </div>
      <button className="navbar-toggler" onClick={toggleMenu}>
        {isMenuOpen ? '✕' : '☰'}
      </button>
      <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
        <ul>
          <li><a href="#home" onClick={() => setIsMenuOpen(false)}>🏠 Home</a></li>
          <li><a href="#about" onClick={() => setIsMenuOpen(false)}>🌿 About</a></li>
          <li><a href="#services" onClick={() => setIsMenuOpen(false)}>🌾 Products</a></li>
          <li><a href="#contact" onClick={() => setIsMenuOpen(false)}>📞 Contact</a></li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;