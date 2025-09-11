import React, { useState } from 'react';
import './Auth.css';

function Login({ onNavigate }) {
  const [formData, setFormData] = useState({
    email: '',
    password: ''
  });
  const [showPassword, setShowPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Login data:', formData);
      setIsLoading(false);
      // Handle successful login here
    }, 1000);
  };

  return (
    <div className="auth-container">
      <div className="auth-background">
        <div className="floating-leaves">
          <div className="leaf leaf-1">🍃</div>
          <div className="leaf leaf-2">🌿</div>
          <div className="leaf leaf-3">🍀</div>
          <div className="leaf leaf-4">🌱</div>
          <div className="leaf leaf-5">🌾</div>
        </div>
      </div>
      
      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-icon">
            <img src="src/image/janAgro.png" alt="Jan Agro" className="logo-icon" />
          </div>
          <h2 className="auth-title">Welcome Back</h2>
          <p className="auth-subtitle">Sign in to your garden dashboard</p>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          <div className="form-group">
            <label htmlFor="email" className="form-label">
              📧 Email Address
            </label>
            <div className="input-wrapper">
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Enter your email"
                required
              />
              <div className="input-decoration">🌱</div>
            </div>
          </div>

          <div className="form-group">
            <label htmlFor="password" className="form-label">
              🔒 Password
            </label>
            <div className="input-wrapper">
              <input
                type={showPassword ? 'text' : 'password'}
                id="password"
                name="password"
                value={formData.password}
                onChange={handleInputChange}
                className="form-input"
                placeholder="Enter your password"
                required
              />
              <button
                type="button"
                className="password-toggle"
                onClick={() => setShowPassword(!showPassword)}
              >
                {showPassword ? '🙈' : '👁️'}
              </button>
            </div>
          </div>

          <div className="form-options">
            <label className="checkbox-wrapper">
              <input type="checkbox" />
              <span className="checkmark">✓</span>
              Remember me
            </label>
            <button type="button" className="forgot-password">
              Forgot Password?
            </button>
          </div>

          <button 
            type="submit" 
            className={`submit-btn ${isLoading ? 'loading' : ''}`}
            disabled={isLoading}
          >
            {isLoading ? (
              <div className="loading-spinner">
                <div className="spinner">🌿</div>
                Signing in...
              </div>
            ) : (
              <>
                <span>🌱 Sign In</span>
              </>
            )}
          </button>
        </form>

        <div className="auth-footer">
          <p>Don't have an account?</p>
          <button 
            onClick={() => onNavigate('register')}
            className="link-btn"
          >
            🌿 Create Account
          </button>
        </div>

        <div className="social-login">
          <div className="divider">
            <span>or continue with</span>
          </div>
          <div className="social-buttons">
            <button className="social-btn google">
              <img src="https://developers.google.com/identity/images/g-logo.png" alt="Google" />
              Google
            </button>
            <button className="social-btn facebook">
              📘 Facebook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Login;