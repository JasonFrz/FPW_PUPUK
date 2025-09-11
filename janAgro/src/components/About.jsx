import React from 'react';
import './About.css';

function About() {
  const teamMembers = [
    {
      id: 1,
      name: "Janneman Alamsjah",
      position: "Founder & CEO",
      icon: "👩‍🌾",
      bio: "15 years of organic farming experience",
      specialty: "Organic Solutions"
    },
    {
      id: 2,
      name: "Jason Juan",
      position: "Head of Research",
      icon: "👨‍🔬",
      bio: "PhD in Plant Nutrition Science",
      specialty: "Formula Development"
    },
    {
      id: 3,
      name: "Hans Christian",
      position: "Specialist Turu",
      icon: "👩‍🌱",
      bio: "Master Gardener with 12 years experience",
      specialty: "Customer Support"
    },
    {
      id: 4,
      name: "Irvin Caesar Young",
      position: "Jadi Irvin",
      icon: "👨‍🏫",
      bio: "Environmental Science Expert",
      specialty: "Eco-Friendly Practices"
    }
  ];

  const milestones = [
    { year: "2008", event: "🌱 Company Founded", description: "Started in Sarah's backyard" },
    { year: "2012", event: "🏆 First Award", description: "Best Organic Fertilizer Award" },
    { year: "2015", event: "🌍 Went National", description: "Expanded to all 50 states" },
    { year: "2018", event: "♻️ Zero Waste", description: "Achieved zero waste manufacturing" },
    { year: "2020", event: "🌿 50k Gardens", description: "Helped 50,000 gardens bloom" },
    { year: "2023", event: "🎯 Carbon Negative", description: "Became carbon negative company" }
  ];

  const values = [
    {
      icon: "🌱",
      title: "Organic First",
      description: "We believe in natural, chemical-free solutions that work in harmony with nature."
    },
    {
      icon: "🌍",
      title: "Sustainability",
      description: "Every product is designed to protect and nurture our planet for future generations."
    },
    {
      icon: "💚",
      title: "Community",
      description: "We grow together, sharing knowledge and supporting gardeners worldwide."
    },
    {
      icon: "🎯",
      title: "Innovation",
      description: "Constantly researching and developing better ways to feed your plants."
    }
  ];

  return (
    <div className="about-page">
      {/* Background Plants */}
      <div className="about-bg-plants">
        <div className="floating-about-plant">🌿</div>
        <div className="floating-about-plant">🌱</div>
        <div className="floating-about-plant">🍀</div>
        <div className="floating-about-plant">🌸</div>
        <div className="floating-about-plant">🌾</div>
      </div>

      {/* Hero Section */}
      <section className="about-hero">
        <div className="hero-content">
          <h1>🌿 About GreenGrow</h1>
          <p>Nurturing gardens and growing dreams since 2008</p>
          <div className="hero-plants">
            <span className="hero-plant">🌱</span>
            <span className="hero-plant">🌻</span>
            <span className="hero-plant">🌿</span>
          </div>
        </div>
      </section>

      {/* Story Section */}
      <section className="story-section">
        <div className="section-content">
          <h2>🌱 Our Story</h2>
          <div className="story-content">
            <div className="story-text">
              <p>
                It all started in Sarah's backyard in 2008. Frustrated with chemical fertilizers 
                harming her soil and the environment, she began experimenting with organic 
                alternatives. What began as a personal mission to create healthier fertilizers 
                soon blossomed into GreenGrow Fertilizers.
              </p>
              <p>
                Today, we're proud to be a leading provider of eco-friendly fertilizers, 
                helping over 50,000 gardens across the nation thrive naturally. Our commitment 
                to sustainability and innovation continues to drive everything we do.
              </p>
              <div className="story-stats">
                <div className="stat">
                  <span className="stat-number">15+</span>
                  <span className="stat-label">Years Growing</span>
                </div>
                <div className="stat">
                  <span className="stat-number">50k+</span>
                  <span className="stat-label">Happy Gardens</span>
                </div>
                <div className="stat">
                  <span className="stat-number">100%</span>
                  <span className="stat-label">Organic</span>
                </div>
              </div>
            </div>
            <div className="story-visual">
              <div className="growth-animation">
                <div className="plant-stage stage-1">🌱</div>
                <div className="plant-stage stage-2">🌿</div>
                <div className="plant-stage stage-3">🌳</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="values-section">
        <div className="section-content">
          <h2>💚 Our Values</h2>
          <div className="values-grid">
            {values.map((value, index) => (
              <div key={index} className="value-card">
                <div className="value-icon">{value.icon}</div>
                <h3>{value.title}</h3>
                <p>{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      <section className="timeline-section">
        <div className="section-content">
          <h2>🏆 Our Journey</h2>
          <div className="timeline">
            {milestones.map((milestone, index) => (
              <div key={index} className="timeline-item">
                <div className="timeline-year">{milestone.year}</div>
                <div className="timeline-content">
                  <h3>{milestone.event}</h3>
                  <p>{milestone.description}</p>
                </div>
                <div className="timeline-plant">🌱</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="team-section">
        <div className="section-content">
          <h2>👥 Meet Our Team</h2>
          <div className="team-grid">
            {teamMembers.map(member => (
              <div key={member.id} className="team-card">
                <div className="team-avatar">{member.icon}</div>
                <h3>{member.name}</h3>
                <h4>{member.position}</h4>
                <p>{member.bio}</p>
                <div className="specialty-tag">{member.specialty}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="mission-section">
        <div className="section-content">
          <div className="mission-content">
            <div className="mission-text">
              <h2>🎯 Our Mission</h2>
              <p>
                To revolutionize gardening by providing premium, eco-friendly fertilizers 
                that nurture both plants and planet. We're committed to sustainable practices, 
                continuous innovation, and helping gardeners everywhere achieve their green dreams.
              </p>
              <div className="mission-goals">
                <div className="goal">
                  <span className="goal-icon">🌍</span>
                  <span>Carbon Negative by 2025</span>
                </div>
                <div className="goal">
                  <span className="goal-icon">♻️</span>
                  <span>100% Recyclable Packaging</span>
                </div>
                <div className="goal">
                  <span className="goal-icon">🌱</span>
                  <span>1M Gardens by 2030</span>
                </div>
              </div>
            </div>
            <div className="mission-visual">
              <div className="planet-garden">
                <div className="planet">🌍</div>
                <div className="garden-plants">
                  <span className="garden-plant">🌱</span>
                  <span className="garden-plant">🌿</span>
                  <span className="garden-plant">🌸</span>
                  <span className="garden-plant">🌻</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA Section */}
      <section className="contact-cta">
        <div className="section-content">
          <h2>🌱 Ready to Grow Together?</h2>
          <p>Join thousands of gardeners who trust GreenGrow for their plant nutrition needs.</p>
          <div className="cta-buttons">
            <button className="cta-primary">🛒 Shop Now</button>
            <button className="cta-secondary">📞 Contact Us</button>
          </div>
          <div className="cta-plants">
            <span className="cta-plant">🌱</span>
            <span className="cta-plant">🌿</span>
            <span className="cta-plant">🌸</span>
          </div>
        </div>
      </section>
    </div>
  );
}

export default About;