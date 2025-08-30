import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Clock, Users } from 'lucide-react';
import './styles/hero.css';
import '../../../styles/ctabutton.css';

// ImageKit configuration
const IMAGEKIT_URL = "https://ik.imagekit.io/o6eendyey/";

// Helper function to generate optimized image URLs with transformations
const getOptimizedImageUrl = (imagePath, minWidth = 1920, quality = 90) => {
  // Check if the path is already a full URL
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  
  // Only optimize format and quality, don't resize at all
  return `${IMAGEKIT_URL}${imagePath}?tr=q-${quality},f-auto,pr-true`;
};

const Hero = () => {
  const navigate = useNavigate();
  const [isLoaded, setIsLoaded] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  // Handle navigation
  const handleNavigation = (path) => {
    navigate(path);
    window.scrollTo(0, 0);
  };

  // Parallax scroll handler
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    setIsLoaded(true);
    
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });
    
    // Cleanup
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  // Calculate subtle parallax transforms
  const backgroundTransform = `translateY(${scrollY * 0.25}px)`;
  const contentTransform = `translateY(${scrollY * 0.05}px)`;
  const overlayOpacity = Math.max(0.7, 1 - scrollY * 0.0005);

  // Your ImageKit hero background image path
  const heroImagePath = 'INETFS/BGNO2.webp';

  return (
    <section className="hero-section">
      <div 
        className="hero-content"
        style={{
          transform: contentTransform,
          opacity: overlayOpacity
        }}
      >
        <div className="hero-text-container">
          <h1 className={`hero-title ${isLoaded ? 'animate' : ''}`}>
            PROTECT WHAT MATTERS MOST
          </h1>
          
          <p className="hero-subtitle">
            Protecting your property with <span className="hero-highlight">professional security systems</span>
          </p>
        </div>
        
        <button 
          className="CTA-button-white"
          onClick={() => handleNavigation('/contact')}
        >
          <span>Get Quote</span>
        </button>

        {/* Trust Indicators */}
        <div className="hero-trust-indicators">
          <div className="trust-indicator">
            <img 
              src={getOptimizedImageUrl('INETFS/trustsign.png', 150)} 
              alt="Security License" 
              className="trust-badge"
            />
          </div>
       
        
        </div>
      </div>

      <div
        className="hero-image"
        style={{
          backgroundImage: `url(${getOptimizedImageUrl(heroImagePath, 1920)})`,
          transform: backgroundTransform
        }}
      >
        <div 
          className="hero-image-overlay"
          style={{ opacity: overlayOpacity }}
        />
        <div 
          className="hero-bottom-gradient"
          style={{ opacity: overlayOpacity }}
        />
      </div>
    </section>
  );
};

export default Hero;