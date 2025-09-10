import React, { useState } from 'react';
import './HomepageContent.css';

function HomepageContent() {
  const [hoveredService, setHoveredService] = useState(null);

  const FloatingLeaf = ({ delay, duration, size }) => (
    <div 
      className="floating-leaf"
      style={{
        animationDelay: `${delay}s`,
        animationDuration: `${duration}s`,
        fontSize: `${size}rem`
      }}
    >
      🍃
    </div>
  );

  return (
    <main className="homepage-content">
      {/* Animated Background Elements */}
      <div className="bg-animations">
        <FloatingLeaf delay={0} duration={15} size={2} />
        <FloatingLeaf delay={3} duration={18} size={1.5} />
        <FloatingLeaf delay={6} duration={20} size={1.8} />
        <FloatingLeaf delay={9} duration={16} size={1.2} />
        <FloatingLeaf delay={12} duration={22} size={2.2} />
      </div>

      {/* Hero Section */}
      <section id="home" className="hero-section">
        <div className="hero-content">
          <div className="hero-plants">
            <span className="hero-plant plant-1">🌻</span>
            <span className="hero-plant plant-2">🌹</span>
            <span className="hero-plant plant-3">🌸</span>
            <span className="hero-plant plant-4">🌺</span>
          </div>
          <h1 className="hero-title">
            Grow Your Dreams with 
            <span className="gradient-text"> GreenGrow</span>
          </h1>
          <p className="hero-subtitle">
            Premium fertilizers that bring life to your garden. 
            Watch your plants thrive with our eco-friendly solutions! 🌱
          </p>
          <button className="cta-button">
            <span>🌿 Explore Products</span>
            <div className="button-sparkle"></div>
          </button>
        </div>
        <div className="hero-garden">
          <div className="garden-row">
            <span className="garden-plant">🌱</span>
            <span className="garden-plant">🌿</span>
            <span className="garden-plant">🍀</span>
            <span className="garden-plant">🌾</span>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="info-section about-section">
        <div className="section-content">
          <div className="section-header">
            <h2>🌿 About GreenGrow</h2>
            <div className="growing-line"></div>
          </div>
          <div className="about-content">
            <div className="about-text">
              <p>
                We are passionate gardeners dedicated to providing premium, eco-friendly fertilizers 
                that nurture your plants and protect our environment. With over 15 years of experience, 
                we've helped thousands of gardens bloom beautifully.
              </p>
              <div className="stats-container">
                <div className="stat-item">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Years Experience</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">50k+</span>
                  <span className="stat-label">Happy Gardens</span>
                </div>
                <div className="stat-item">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Eco-Friendly</span>
                </div>
              </div>
            </div>
            <div className="about-visual">
              <div className="plant-showcase">
                <div className="showcase-plant">🌳</div>
                <div className="showcase-plant">🌲</div>
                <div className="showcase-plant">🌴</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="info-section services-section">
        <div className="section-content">
          <div className="section-header">
            <h2>🌾 Our Premium Products</h2>
            <div className="growing-line"></div>
          </div>
          <div className="services-grid">
            <div 
              className={`service-card ${hoveredService === 'organic' ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredService('organic')}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="service-icon">🌱</div>
              <h3>Organic Fertilizers</h3>
              <p>100% natural, compost-based fertilizers perfect for organic gardening</p>
              <div className="service-plants">
                <span>🥕</span><span>🥬</span><span>🍅</span>
              </div>
            </div>
            
            <div 
              className={`service-card ${hoveredService === 'flower' ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredService('flower')}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="service-icon">🌺</div>
              <h3>Flower Boosters</h3>
              <p>Specialized nutrients for vibrant, long-lasting blooms</p>
              <div className="service-plants">
                <span>🌹</span><span>🌻</span><span>🌷</span>
              </div>
            </div>
            
            <div 
              className={`service-card ${hoveredService === 'lawn' ? 'hovered' : ''}`}
              onMouseEnter={() => setHoveredService('lawn')}
              onMouseLeave={() => setHoveredService(null)}
            >
              <div className="service-icon">🌿</div>
              <h3>Lawn Care</h3>
              <p>Keep your grass green and healthy all year round</p>
              <div className="service-plants">
                <span>🌾</span><span>🍀</span><span>🌱</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="info-section contact-section">
        <div className="section-content">
          <div className="section-header">
            <h2>📞 Get Growing Today!</h2>
            <div className="growing-line"></div>
          </div>
          <div className="contact-content">
            <div className="contact-info">
              <p>Ready to transform your garden? We're here to help you choose the perfect fertilizer!</p>
              <div className="contact-details">
                <div className="contact-item">
                  <span className="contact-icon">📧</span>
                  <span>info@greengrow.com</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">📱</span>
                  <span>+1 (555) 123-GROW</span>
                </div>
                <div className="contact-item">
                  <span className="contact-icon">🏪</span>
                  <span>123 Garden Street, Green Valley</span>
                </div>
              </div>
            </div>
            <div className="contact-garden">
              <div className="contact-plants">
                <span className="contact-plant">🌱</span>
                <span className="contact-plant">🌿</span>
                <span className="contact-plant">🍃</span>
                <span className="contact-plant">🌾</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomepageContent;