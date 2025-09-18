import React from 'react';
import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <div className="footer-brand">
            <span className="footer-logo">🌱</span>
            <h3>Jan Agro Fertilizers</h3>
            <p>Nurturing gardens, growing dreams</p>
          </div>
          <div className="footer-plants">
            <span className="footer-plant">🌿</span>
            <span className="footer-plant">🌾</span>
            <span className="footer-plant">🍀</span>
          </div>
        </div>

        <div className="footer-section">
          <h4>🌾 Products</h4>
          <ul>
            <li><a href="#organic">🥕 Organic Fertilizers</a></li>
            <li><a href="#flower">🌺 Flower Boosters</a></li>
            <li><a href="#lawn">🌿 Lawn Care</a></li>
            <li><a href="#vegetable">🍅 Vegetable Nutrition</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>🏪 Company</h4>
          <ul>
            <li><a href="#about">About Us</a></li>
            <li><a href="#sustainability">🌍 Sustainability</a></li>
            <li><a href="#careers">💼 Careers</a></li>
            <li><a href="#blog">📝 Garden Tips</a></li>
          </ul>
        </div>

        <div className="footer-section">
          <h4>📞 Contact</h4>
          <div className="footer-contact">
            <p>📧 janagronusantara@gmail.com</p>
            <p>📱 +62 811 762 788</p>
            <p>🏪 Surabaya, JawaTimur</p>
          </div>
          <div className="social-links">
            <a href="#facebook" className="social-link">📘</a>
            <a href="#instagram" className="social-link">📷</a>
            <a href="#twitter" className="social-link">🐦</a>
            <a href="#youtube" className="social-link">📺</a>
          </div>
        </div>
      </div>

      <div className="footer-bottom">
        <div className="footer-divider"></div>
        <div className="footer-bottom-content">
          <p>&copy; {currentYear} Jan Agro Fertilizers. All rights reserved.</p>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a>
            <a href="#terms">Terms of Service</a>
            <a href="#cookies">Cookie Policy</a>
          </div>
        </div>
        
      </div>
    </footer>
  );
}

export default Footer;