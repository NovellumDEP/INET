// src/components/Services.jsx
import React, { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { Shield, Flame, Eye, Lock, Siren, Zap, Network, DoorOpen } from 'lucide-react';
import './styles/hero-servicelist.css';

// ImageKit configuration
const IMAGEKIT_URL = "https://ik.imagekit.io/o6eendyey/";

// Helper function to generate optimized image URLs with transformations
const getOptimizedImageUrl = (imagePath, minWidth = 600, quality = 90) => {
  // Check if the path is already a full URL
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  
  // Only optimize format and quality, don't resize at all
  return `${IMAGEKIT_URL}${imagePath}?tr=q-${quality},f-auto,pr-true`;
};

const Services = () => {
  const navigate = useNavigate();
  const [windowWidth, setWindowWidth] = useState(typeof window !== 'undefined' ? window.innerWidth : 1200);
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  // Track window resize for responsive image sizes
  useEffect(() => {
    if (typeof window === 'undefined') return;
    
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    window.addEventListener('resize', handleResize, { passive: true });
    
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  // Enhanced Intersection Observer for better mobile compatibility
  useEffect(() => {
    // Different thresholds for mobile vs desktop
    const isMobile = window.innerWidth <= 768;
    const threshold = isMobile ? 0.1 : 0.35; // Much lower threshold for mobile
    
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
        rootMargin: isMobile ? '50px 0px -50px 0px' : '0px' // Add margin for mobile to trigger earlier
      }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => {
      if (sectionRef.current) {
        observer.unobserve(sectionRef.current);
      }
    };
  }, []);

  // Fallback: trigger animation after a delay if intersection observer doesn't work
  useEffect(() => {
    const fallbackTimer = setTimeout(() => {
      if (!isVisible) {
        console.log('Fallback animation trigger activated');
        setIsVisible(true);
      }
    }, 2000); // Trigger after 2 seconds if not already visible

    return () => clearTimeout(fallbackTimer);
  }, [isVisible]);

  // Handle service card navigation
  const handleServiceClick = (serviceSlug) => {
    navigate('/services', { 
      state: { scrollToService: serviceSlug },
      replace: false 
    });
    window.scrollTo(0, 0);
  };

  // Handle keyboard navigation
  const handleKeyDown = (event, serviceSlug) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleServiceClick(serviceSlug);
    }
  };

  // Calculate appropriate image size based on screen width
  const getResponsiveImageWidth = () => {
    if (windowWidth <= 480) return 480;
    if (windowWidth <= 768) return 768;
    if (windowWidth <= 1024) return 800;
    return 1000;
  };

  const serviceData = [
    {
      id: 1,
      title: "Fire Detection Systems",
      description: "Advanced smoke and heat detection systems with 24/7 monitoring to protect your property from fire damage.",
      icon: Flame,
      image: "INETFS/IMG_2169.jpg",
      slug: "fire-detection"
    },
    {
      id: 2,
      title: "CCTV Surveillance",
      description: "High-definition surveillance cameras with remote monitoring and cloud storage for complete security coverage.",
      icon: Eye,
      image: 'INETFS/IMG_2167.png', 
      slug: "cctv-surveillance"
    },
    {
      id: 3,
      title: "Access Control",
      description: "Secure entry systems including key cards, biometric scanners, and smart locks for controlled access.",
      icon: Lock,
      image: "INETFS/SECURITY1.jpg",
      slug: "access-control"
    },
    {
      id: 4,
      title: "Intruder Alarms",
      description: "Motion sensors and perimeter protection with instant alerts to keep unauthorized visitors out.",
      icon: Shield,
      image: "INETFS/alarm.jpg",
      slug: "intruder-alarms"
    },
    {
      id: 5,
      title: "Maintenance & Support",
      description: "24/7 call-out service for system breakdowns, repairs, and ongoing maintenance to keep your security systems running.",
      icon: Siren,
      image: "INETFS/cam.jpg",
      slug: "maintenance-support"
    },
    {
      id: 6,
      title: "Gate & Barrier automation",
      description: "Automated gate and barrier systems for secure, controlled access and efficient traffic management across residential and commercial properties.",
      icon: DoorOpen,
      image: "INETFS/IMG_2222.jpg",
      slug: "electrical-safety"
    },
     {
      id: 7,
      title: "Networking",
      description: "Reliable networking infrastructure and system connectivity to support seamless communication, monitoring, and integration of security and fire systems.",
      icon: Network,
      image: "INETFS/IMG_2228.jpeg",
      slug: "electrical-safety"
    }
  ];

  return (
    <section ref={sectionRef} className={`hero-servicelist-section ${isVisible ? 'animate' : ''}`}>
      <div className="hero-servicelist-container">
        <div className="hero-servicelist-header">
          <h2 className="hero-servicelist-title">Our Services</h2>
          <div className="hero-servicelist-title-line"></div>
          <p className="hero-servicelist-subtitle">
            Comprehensive fire and security solutions to protect what matters most
          </p>
        </div>

        <div className="hero-servicelist-grid">
          {serviceData.map((service) => {
            const IconComponent = service.icon;
            return (
              <div 
                key={service.id} 
                className="hero-service-card"
                onClick={() => handleServiceClick(service.slug)}
                onKeyDown={(e) => handleKeyDown(e, service.slug)}
                tabIndex={0}
                role="button"
                aria-label={`Learn more about ${service.title}`}
              >
                <div className="hero-service-image-container">
                  <img 
                    src={getOptimizedImageUrl(service.image, getResponsiveImageWidth())}
                    alt={`${service.title} - Professional security installation`}
                    loading={service.id === 1 || service.id === 2 ? "eager" : "lazy"}
                    className="hero-service-image"
                  />
                  <div className="hero-service-overlay"></div>
                  
                  {/* Icon */}
                  <div className="hero-service-icon">
                    <IconComponent size={28} />
                  </div>
                  
                  {/* Content Overlay */}
                  <div className="hero-service-content-overlay">
                    <h3 className="hero-service-title">{service.title}</h3>
                    <p className="hero-service-description">{service.description}</p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;