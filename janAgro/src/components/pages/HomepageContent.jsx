// HomepageContent.js
import React from 'react';
import './HomepageContent.css';

function HomepageContent() {
  return (
    <main className="homepage-content">
      {/* Hero Section dengan video looping */}
      <section id="home" className="hero-section">
        <video 
          autoPlay 
          loop 
          muted 
          playsInline 
          className="hero-video"
        >
          <source src="jumbotron.mp4" type="video/mp4" />
          Browser Anda tidak mendukung video.
        </video>

        <div className="hero-overlay">
          <div className="hero-content">
            <h1 className="hero-title">
              Grow Your Dreams with <span className="highlight">Jan Agro</span>
            </h1>
            <p className="hero-subtitle">
              Premium fertilizers that bring life to your garden. 
              Watch your plants thrive with our eco-friendly solutions.
            </p>
            <button className="cta-button">Explore Products</button>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="info-section about-section">
        <div className="section-content">
          <h2>About GreenGrow</h2>
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
      </section>

      {/* Services Section */}
      <section id="services" className="info-section services-section">
        <div className="section-content">
          <h2>Our Premium Products</h2>
          <div className="services-grid">
            <div className="service-card">
              <h3>Organic Fertilizers</h3>
              <p>100% natural, compost-based fertilizers perfect for organic gardening</p>
            </div>
            <div className="service-card">
              <h3>Flower Boosters</h3>
              <p>Specialized nutrients for vibrant, long-lasting blooms</p>
            </div>
            <div className="service-card">
              <h3>Lawn Care</h3>
              <p>Keep your grass green and healthy all year round</p>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="info-section contact-section">
        <div className="section-content">
          <h2>Get Growing Today!</h2>
          <p>
            Ready to transform your garden? We're here to help you choose the perfect fertilizer!
          </p>
          <div className="contact-details">
            <div className="contact-item">📧 janagronusantara@gmail.com</div>
            <div className="contact-item">📱 +62 811 762 788</div>
            <div className="contact-item">🏪 Surabaya, Jawa Timur</div>
          </div>
        </div>
      </section>
    </main>
  );
}

export default HomepageContent;
