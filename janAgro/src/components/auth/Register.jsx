import { useState } from 'react';
import './Auth.css';

function Register({ onNavigate }) {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
    farmSize: '',
    cropType: '',
    termsAccepted: false
  });
  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);

  const handleInputChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: type === 'checkbox' ? checked : value
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (formData.password !== formData.confirmPassword) {
      alert('Passwords do not match!');
      return;
    }
    
    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      console.log('Registration data:', formData);
      setIsLoading(false);
      // Handle successful registration here
    }, 1000);
  };

  const nextStep = () => {
    if (currentStep < 2) setCurrentStep(currentStep + 1);
  };

  const prevStep = () => {
    if (currentStep > 1) setCurrentStep(currentStep - 1);
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
          <div className="leaf leaf-6">🌸</div>
        </div>
      </div>
      
      <div className="auth-card register-card">
        <div className="auth-header">
          <div className="auth-icon">
            <img src="src/image/janAgro.png" alt="Jan Agro" className="logo-icon" />
          </div>
          <h2 className="auth-title">Join Our Garden Community</h2>
          <p className="auth-subtitle">Start your agricultural journey with us</p>
          
          <div className="progress-bar">
            <div className={`progress-step ${currentStep >= 1 ? 'active' : ''}`}>
              <div className="step-icon">🌱</div>
              <span>Personal Info</span>
            </div>
            <div className={`progress-step ${currentStep >= 2 ? 'active' : ''}`}>
              <div className="step-icon">🌾</div>
              <span>Farm Details</span>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="auth-form">
          {currentStep === 1 && (
            <div className="step-content">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">
                    👤 First Name
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="firstName"
                      name="firstName"
                      value={formData.firstName}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Enter your first name"
                      required
                    />
                    <div className="input-decoration">🌿</div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="lastName" className="form-label">
                    👥 Last Name
                  </label>
                  <div className="input-wrapper">
                    <input
                      type="text"
                      id="lastName"
                      name="lastName"
                      value={formData.lastName}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Enter your last name"
                      required
                    />
                    <div className="input-decoration">🍃</div>
                  </div>
                </div>
              </div>

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

              <div className="form-row">
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
                      placeholder="Create password"
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

                <div className="form-group">
                  <label htmlFor="confirmPassword" className="form-label">
                    🔐 Confirm Password
                  </label>
                  <div className="input-wrapper">
                    <input
                      type={showConfirmPassword ? 'text' : 'password'}
                      id="confirmPassword"
                      name="confirmPassword"
                      value={formData.confirmPassword}
                      onChange={handleInputChange}
                      className="form-input"
                      placeholder="Confirm password"
                      required
                    />
                    <button
                      type="button"
                      className="password-toggle"
                      onClick={() => setShowConfirmPassword(!showConfirmPassword)}
                    >
                      {showConfirmPassword ? '🙈' : '👁️'}
                    </button>
                  </div>
                </div>
              </div>

              <button type="button" onClick={nextStep} className="submit-btn">
                🌱 Next Step
              </button>
            </div>
          )}

          {currentStep === 2 && (
            <div className="step-content">
              <div className="form-row">
                <div className="form-group">
                  <label htmlFor="farmSize" className="form-label">
                    🏞️ Farm Size
                  </label>
                  <div className="input-wrapper">
                    <select
                      id="farmSize"
                      name="farmSize"
                      value={formData.farmSize}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    >
                      <option value="">Select farm size</option>
                      <option value="small">🌱 Small (0-5 hectares)</option>
                      <option value="medium">🌾 Medium (5-20 hectares)</option>
                      <option value="large">🚜 Large (20+ hectares)</option>
                    </select>
                    <div className="input-decoration">🏡</div>
                  </div>
                </div>

                <div className="form-group">
                  <label htmlFor="cropType" className="form-label">
                    🌾 Primary Crop Type
                  </label>
                  <div className="input-wrapper">
                    <select
                      id="cropType"
                      name="cropType"
                      value={formData.cropType}
                      onChange={handleInputChange}
                      className="form-input"
                      required
                    >
                      <option value="">Select crop type</option>
                      <option value="rice">🌾 Rice</option>
                      <option value="corn">🌽 Corn</option>
                      <option value="vegetables">🥬 Vegetables</option>
                      <option value="fruits">🍎 Fruits</option>
                      <option value="soybeans">🫘 Soybeans</option>
                      <option value="other">🌿 Other</option>
                    </select>
                    <div className="input-decoration">🌱</div>
                  </div>
                </div>
              </div>

              <div className="form-group">
                <label className="checkbox-wrapper large">
                  <input
                    type="checkbox"
                    name="termsAccepted"
                    checked={formData.termsAccepted}
                    onChange={handleInputChange}
                    required
                  />
                  <span className="checkmark">✓</span>
                  I agree to the <button type="button" className="link-text">Terms of Service</button> and <button type="button" className="link-text">Privacy Policy</button>
                </label>
              </div>

              <div className="form-buttons">
                <button type="button" onClick={prevStep} className="back-btn">
                  ← Back
                </button>
                <button 
                  type="submit" 
                  className={`submit-btn ${isLoading ? 'loading' : ''}`}
                  disabled={isLoading || !formData.termsAccepted}
                >
                  {isLoading ? (
                    <div className="loading-spinner">
                      <div className="spinner">🌱</div>
                      Creating Account...
                    </div>
                  ) : (
                    <>
                      <span>🌿 Create Account</span>
                    </>
                  )}
                </button>
              </div>
            </div>
          )}
        </form>

        <div className="auth-footer">
          <p>Already have an account?</p>
          <button 
            onClick={() => onNavigate('login')}
            className="link-btn"
          >
            🔐 Sign In
          </button>
        </div>
      </div>
    </div>
  );
}

export default Register;