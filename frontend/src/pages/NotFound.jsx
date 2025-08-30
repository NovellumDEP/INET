import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { AlertTriangle, Home, ArrowLeft, Shield, Search } from 'lucide-react';
import './styles/Notfound.css';

// ImageKit configuration
const IMAGEKIT_URL = "https://ik.imagekit.io/o6eendyey/";

const getOptimizedImageUrl = (imagePath, quality = 90) => {
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  return `${IMAGEKIT_URL}${imagePath}?tr=q-${quality},f-auto,pr-true`;
};

const NotFound = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);

  // Handle navigation
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  // Go back function
  const handleGoBack = () => {
    if (window.history.length > 1) {
      navigate(-1);
    } else {
      navigate('/');
    }
    window.scrollTo(0, 0);
  };

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="notfound-section">
      <div className="notfound-content">
        <div className="notfound-text-container">
          {/* 404 Number */}
          <div className={`notfound-number ${isLoaded ? 'animate' : ''}`}>
            404
          </div>
          
          {/* Error Icon */}
          <div className={`notfound-icon ${isLoaded ? 'animate' : ''}`}>
            <AlertTriangle size={80} />
          </div>

          {/* Title */}
          <h1 className={`notfound-title ${isLoaded ? 'animate' : ''}`}>
            PAGE NOT FOUND
          </h1>
          
          {/* Subtitle */}
          <p className="notfound-subtitle">
            The page you're looking for doesn't exist or has been moved. 
            <span className="notfound-highlight"> Let's get you back on track.</span>
          </p>
        </div>

        {/* Action Buttons */}
        <div className="notfound-actions">
          <button
            className="notfound-btn notfound-btn-primary"
            onClick={() => handleNavigation('/')}
          >
            <Home size={20} />
            <span>Go Home</span>
          </button>
          
          <button
            className="notfound-btn notfound-btn-secondary"
            onClick={handleGoBack}
          >
            <ArrowLeft size={20} />
            <span>Go Back</span>
          </button>
        </div>

        {/* Quick Links */}
        <div className="notfound-quick-links">
          <p className="quick-links-title">Quick Links:</p>
          <div className="quick-links-grid">
            <button
              className="quick-link-item"
              onClick={() => handleNavigation('/services')}
            >
              <Shield size={16} />
              <span>Our Services</span>
            </button>
            <button
              className="quick-link-item"
              onClick={() => handleNavigation('/portfolio')}
            >
              <Search size={16} />
              <span>Our Work</span>
            </button>
            <button
              className="quick-link-item"
              onClick={() => handleNavigation('/contact')}
            >
              <AlertTriangle size={16} />
              <span>Get Quote</span>
            </button>
          </div>
        </div>

        {/* Trust Indicators */}
        <div className="notfound-trust-indicators">
          <div className="trust-indicator">
            <img
              src={getOptimizedImageUrl('INETFS/trustsign.png', 150)}
              alt="Security License"
              className="trust-badge"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default NotFound;