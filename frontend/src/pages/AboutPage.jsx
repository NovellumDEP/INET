// src/pages/AboutPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Shield, Clock, Users, Award, MapPin, Heart } from 'lucide-react';
import './styles/aboutpage.css';

// ImageKit configuration
const IMAGEKIT_URL = "https://ik.imagekit.io/o6eendyey/";

const getOptimizedImageUrl = (imagePath, quality = 90) => {
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  return `${IMAGEKIT_URL}${imagePath}?tr=q-${quality},f-auto,pr-true`;
};

const AboutPage = () => {
  const [isVisible, setIsVisible] = useState(false);
  const [scrollY, setScrollY] = useState(0);
  const sectionRef = useRef(null);

  // Parallax scroll handler
  const handleScroll = () => {
    setScrollY(window.scrollY);
  };

  useEffect(() => {
    // Add scroll event listener
    window.addEventListener('scroll', handleScroll, { passive: true });

    // Enhanced Intersection Observer for better mobile compatibility
    const isMobile = window.innerWidth <= 768;
    const threshold = isMobile ? 0.05 : 0.2; // Much lower threshold for mobile
    
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { 
        threshold: threshold,
        rootMargin: isMobile ? '100px 0px -50px 0px' : '0px' // Add margin for mobile to trigger earlier
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    // Fallback: trigger animation after a delay if intersection observer doesn't work
    const fallbackTimer = setTimeout(() => {
      if (!isVisible) {
        console.log('Fallback animation trigger activated');
        setIsVisible(true);
      }
    }, 2000); // Trigger after 2 seconds if not already visible

    return () => {
      window.removeEventListener('scroll', handleScroll);
      clearTimeout(fallbackTimer);
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, [isVisible]);

  // Calculate parallax transforms
  const backgroundTransform = `translateY(${scrollY * 0.25}px)`;
  const overlayOpacity = Math.max(0.7, 1 - scrollY * 0.0005);

  // Your ImageKit hero background image path
  const heroImagePath = 'INETFS/IMG_2167.png';

  return (
    <div className="about-page">
      {/* Hero Section */}
      <section className="about-hero">
        <div 
          className="about-hero-image"
          style={{
            backgroundImage: `url(${getOptimizedImageUrl(heroImagePath)})`,
            transform: backgroundTransform
          }}
        >
          <div 
            className="about-hero-overlay"
            style={{ opacity: overlayOpacity }}
          />
        </div>
        
        <div className="about-hero-container">
          <div className="about-hero-content">
            <h1 className="about-hero-title">PROTECTING THE SOUTH WEST FOR 10+ YEARS</h1>
            <p className="about-hero-subtitle">
              Based in the heart of the South West, we're passionate about security and dedicated to protecting what matters most to our community.
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section 
        ref={sectionRef}
        className={`about-main ${isVisible ? 'animate' : ''}`}
      >
        <div className="about-container">
          
          {/* Story Section */}
          <div className="about-story">
            <div className="about-story-content">
              <h2 className="about-section-title">OUR STORY</h2>
              <div className="about-section-line"></div>
              
              <div className="about-story-text">
             <p>                   
              Our experienced engineers have been the trusted guardians of homes and businesses across the South West for over 10+ years. What started as a passion for protecting our local community has grown into comprehensive security expertise that combines cutting-edge technology with genuine care for our clients.                 
              </p>
                
                <p>
                  Based in the beautiful South West of England, we understand the unique security challenges our region faces. From bustling city centres to remote countryside properties, we've seen it all and protected it all. Our team doesn't just install security systems – we build relationships with our clients that last for years.
                </p>
                
                <p>
                  Every project we undertake is driven by our unwavering passion for security excellence. We genuinely enjoy what we do, and it shows in every installation, every maintenance call, and every emergency response. When you choose INET, you're not just getting a security system – you're getting a dedicated partner who cares about your safety as much as you do.
                </p>
              </div>
            </div>

            <div className="about-story-image">
              <img 
                src={getOptimizedImageUrl('INETFS/IMG_2202.jpg')}
                alt="INET Fire & Security Team"
                className="story-image"
              />
            </div>
          </div>

          {/* Values Section */}
          <div className="about-values">
            <h2 className="about-section-title">WHAT DRIVES US</h2>
            <div className="about-section-line"></div>
            
            <div className="values-grid">
              <div className="value-card">
                <Heart className="value-icon" size={40} />
                <h3 className="value-title">Passion for Security</h3>
                <p className="value-description">
                  We genuinely love what we do. Security isn't just our job – it's our calling. This passion drives us to constantly improve and exceed expectations.
                </p>
              </div>
              
              <div className="value-card">
                <MapPin className="value-icon" size={40} />
                <h3 className="value-title">Local Expertise</h3>
                <p className="value-description">
                  Born and raised in the South West, we understand our community's unique needs and challenges. We're not just your security provider – we're your neighbours.
                </p>
              </div>
              
              <div className="value-card">
                <Award className="value-icon" size={40} />
                <h3 className="value-title">Expert Engineers</h3>
                <p className="value-description">
                  Our certified engineers bring over 10+ years of individual experience to every installation. Their expertise ensures your system is installed to the highest standards.
                </p>
              </div>
              
              <div className="value-card">
                <Users className="value-icon" size={40} />
                <h3 className="value-title">Community Focus</h3>
                <p className="value-description">
                  We're not a faceless corporation. We're a local business that takes pride in contributing to our community's safety and security.
                </p>
              </div>
            </div>
          </div>

          {/* Experience Stats */}
          <div className="about-stats">
            <div className="stats-container">
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years Serving the South West</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">500+</span>
                <span className="stat-label">Systems installed</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">24/7</span>
                <span className="stat-label">Emergency Response</span>
              </div>
              <div className="stat-item">
                <span className="stat-number">10+</span>
                <span className="stat-label">Years Experience</span>
              </div>
            </div>
          </div>

          {/* Mission Section */}
          <div className="about-mission">
            <div className="mission-content">
              <h2 className="about-section-title">OUR MISSION</h2>
              <div className="about-section-line"></div>
              
              <div className="mission-text">
                <p>
                  Our mission is simple: to provide the South West with unparalleled security solutions that give you complete peace of mind. We believe that everyone deserves to feel safe in their homes and businesses, and we're passionate about making that happen.
                </p>
                
                <p>
                  Through our 10+ years of dedicated service, we've learned that great security isn't just about the latest technology – it's about understanding people's needs, building trust, and delivering solutions that truly work. That's what drives us every single day.
                </p>
              </div>
            </div>
          </div>

          {/* Certifications */}
          <div className="about-certifications">
            <h2 className="about-section-title">TRUSTED & CERTIFIED</h2>
           
            
            <div className="certification-badges">
              <div className="cert-item">
                <img 
                  src={getOptimizedImageUrl('INETFS/trustsign.png')}
                  alt="Security License"
                  className="cert-badge"
                />
              </div>
            </div>
          </div>

        </div>
      </section>
    </div>
  );
};

export default AboutPage;