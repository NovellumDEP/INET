// src/components/About.jsx
import React, { useState, useEffect, useRef } from 'react';
import './styles/about.css';

// ImageKit configuration
const IMAGEKIT_URL = "https://ik.imagekit.io/o6eendyey/";

const getOptimizedImageUrl = (imagePath, quality = 90) => {
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  return `${IMAGEKIT_URL}${imagePath}?tr=q-${quality},f-auto,pr-true`;
};

// Custom hook for intersection observer
const useIntersectionObserver = (options = {}) => {
  const [isIntersecting, setIsIntersecting] = useState(false);
  const [hasAnimated, setHasAnimated] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting && !hasAnimated) {
        setIsIntersecting(true);
        setHasAnimated(true);
      }
    }, {
      threshold: 0.1,
      rootMargin: '50px',
      ...options
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      if (ref.current) {
        observer.unobserve(ref.current);
      }
    };
  }, [hasAnimated, options]);

  return [ref, isIntersecting];
};

// Animation component wrapper
const AnimatedElement = ({ 
  children, 
  animation = 'slide-up', 
  delay = 0, 
  className = '' 
}) => {
  const [ref, isVisible] = useIntersectionObserver();
  
  return (
    <div
      ref={ref}
      className={`animated-element ${animation} ${isVisible ? 'animate-in' : ''} ${className}`}
      style={{ animationDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
};

const About = () => {
  const [scrollY, setScrollY] = useState(0);

  // Parallax scroll handler
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Calculate parallax transforms
  const backgroundTransform = `translateY(${scrollY * 0.3}px)`;
  const overlayOpacity = Math.max(0.6, 1 - scrollY * 0.0003);

  return (
    <>
      {/* Hero Section */}
      <section className="about-hero">
        <div 
          className="about-hero-bg"
          style={{
            backgroundImage: `url(${getOptimizedImageUrl('INETFS/IMG_2202.jpg')})`,
            transform: backgroundTransform
          }}
        >
          <div 
            className="about-hero-overlay"
            style={{ opacity: overlayOpacity }}
          />
        </div>
        
        <div className="VX-453-hero-content">
          <AnimatedElement animation="slide-up" delay={200}>
            <h1 className="BR-642-hero-title">About Us</h1>
          </AnimatedElement>
          <AnimatedElement animation="slide-up" delay={400}>
            <p className="KL-889-hero-subtitle">
              Protecting what matters most with over 7 years of trusted experience
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Main About Section */}
      <section className="about-section">
        <div className="about-container">
          {/* Header */}
          <AnimatedElement animation="slide-up" delay={0}>
            <div className="about-header">
              <h2 className="about-title">WHY CHOOSE US</h2>
              <div className="about-title-line"></div>
            </div>
          </AnimatedElement>

          {/* Main Content */}
          <div className="about-content">
            {/* Description */}
            <AnimatedElement animation="slide-left" delay={200}>
              <div className="about-description">
                <p>
                  With over <span className="about-highlight">7+ years of experience</span> in fire and security systems, 
                  we are the trusted choice for protecting what matters most. Our BAFE certified engineers and 
                  NSI Gold approved services ensure your property receives the highest standard of protection 
                  available in the industry.
                </p>
                <p>
                  From initial consultation and system design to installation, maintenance, and 24/7 monitoring, 
                  we provide <span className="about-highlight">comprehensive security solutions</span> tailored to your 
                  specific needs. Our commitment to excellence and customer satisfaction has made us the 
                  preferred security partner for thousands of homes and businesses.
                </p>
              </div>
            </AnimatedElement>

            {/* Image */}
            <AnimatedElement animation="slide-right" delay={400}>
              <div className="about-image-container">
                <img 
                  src={getOptimizedImageUrl('INETFS/IMG_2167.png')}
                  alt="Professional fire and security installation"
                  className="about-image"
                />
                <div className="about-image-overlay"></div>
              </div>
            </AnimatedElement>
          </div>

          {/* Trust Indicators */}
          <AnimatedElement animation="slide-up" delay={0}>
            <div className="about-trust-section">
              <div className="about-stats">
                <AnimatedElement animation="slide-up" delay={100}>
                  <div className="about-stat">
                    <span className="stat-number">10+</span>
                    <span className="stat-label">Years Experience</span>
                  </div>
                </AnimatedElement>
                <AnimatedElement animation="slide-up" delay={200}>
                  <div className="about-stat">
                    <span className="stat-number">500+</span>
                    <span className="stat-label">Systems Installed</span>
                  </div>
                </AnimatedElement>
                <AnimatedElement animation="slide-up" delay={300}>
                  <div className="about-stat">
                    <span className="stat-number">24/7</span>
                    <span className="stat-label">Emergency Response</span>
                  </div>
                </AnimatedElement>
                <AnimatedElement animation="slide-up" delay={400}>
                  <div className="about-stat">
                    <span className="stat-number">100%</span>
                    <span className="stat-label">BAFE Certified</span>
                  </div>
                </AnimatedElement>
              </div>

              <div className="about-certifications">
                <AnimatedElement animation="fade-in" delay={500}>
                  <div className="cert-item">
                    <img 
                      src={getOptimizedImageUrl('INETFS/trustsign.png')}
                      alt="Security License"
                      className="cert-badge"
                    />
                  </div>
                </AnimatedElement>
              </div>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </>
  );
};

export default About;