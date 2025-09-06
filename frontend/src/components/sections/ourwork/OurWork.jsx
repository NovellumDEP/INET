// src/components/OurWork.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, ChevronDown, MapPin, Building, Home, Factory, Filter } from 'lucide-react';
import PrimaryButton from '../../buttons/PrimaryButton';
import './styles/ourwork.css';

// ImageKit configuration
const IMAGEKIT_URL = "https://ik.imagekit.io/o6eendyey/";

const getOptimizedImageUrl = (imagePath, quality = 90) => {
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  return `${IMAGEKIT_URL}${imagePath}?tr=q-${quality},f-auto,pr-true`;
};

const MobileFilterDropdown = ({ categories, activeCategory, onCategoryChange }) => {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, []);

  const handleCategorySelect = (categoryId) => {
    onCategoryChange(categoryId);
    setIsOpen(false);
  };

  const activeLabel = categories.find(cat => cat.id === activeCategory)?.label || 'All Projects';
  const ActiveIcon = categories.find(cat => cat.id === activeCategory)?.icon || Building;

  return (
    <div className="mobile-filter-container" ref={dropdownRef}>
      <button 
        className="mobile-filter-button"
        onClick={() => setIsOpen(!isOpen)}
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <div className="filter-button-content">
          <Filter size={16} className="filter-icon" />
          <div className="active-category">
            <ActiveIcon size={16} />
            <span>{activeLabel}</span>
          </div>
          <ChevronDown 
            size={16} 
            className={`chevron ${isOpen ? 'rotated' : ''}`}
          />
        </div>
      </button>

      {isOpen && (
        <div className="mobile-filter-dropdown">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                className={`dropdown-option ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => handleCategorySelect(category.id)}
              >
                <IconComponent size={16} />
                <span>{category.label}</span>
                {activeCategory === category.id && (
                  <div className="check-mark">✓</div>
                )}
              </button>
            );
          })}
        </div>
      )}
    </div>
  );
};

const OurWork = () => {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [scrollPosition, setScrollPosition] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);
  const scrollContainerRef = useRef(null);

  const categories = [
    { id: 'all', label: 'All Projects', icon: Building },
    { id: 'residential', label: 'Residential', icon: Home },
    { id: 'commercial', label: 'Commercial', icon: Building },
    { id: 'industrial', label: 'Industrial', icon: Factory }
  ];

const projects = [
  {
    id: 1,
    title: 'Site Wide CCTV system',
    location: 'Hereford, Herefordshire',
    category: 'residential',
    date: 'March 2024',
    image: 'INETFS/IMG_2167.png',
    systems: ['CCTV Surveillance', 'Access Control', 'Intruder Alarm', 'Smart Home Integration'],
    description: 'Complete security installation for luxury family home including perimeter protection and smart monitoring.',
    challenge: 'The client required a comprehensive security solution that would integrate seamlessly with their existing smart home system while maintaining the aesthetic appeal of their Grade II listed property.',
    solution: 'We designed a bespoke security system using discrete cameras and sensors that blend with the historic architecture. The system includes advanced facial recognition, automated lighting integration, and mobile app control.',
    results: [
      '100% perimeter coverage with minimal visual impact',
      '24/7 remote monitoring capability',
      'Seamless integration with existing home automation',
      'Zero false alarms in first 6 months'
    ],
    slug: 'luxury-home-security-system'
  },
  {
    id: 2,
    title: 'Industrial Complex Security Installation',
    location: 'Herefordshire',
    category: 'commercial',
    date: 'March 2024',
    image: 'INETFS/IMG_2175.heic',
    systems: ['Perimeter Detection', 'Motion Sensors', 'CCTV Integration', 'Access Control'],
    description: 'Advanced intruder alarm system for large industrial manufacturing facility with 24/7 monitoring.',
    challenge: 'A 15-acre industrial complex with multiple buildings, outdoor storage areas, and valuable machinery required comprehensive perimeter security while accommodating shift workers and deliveries.',
    solution: 'Deployed a multi-zone intruder alarm system with PIR sensors, beam breaks along the perimeter, integrated CCTV, and smart access control. Installation coordinated around production schedules with minimal operational impact.',
    results: [
      'Complete perimeter security coverage achieved',
      'Integration with existing CCTV system successful',
      '24/7 automated monitoring with instant alerts',
      'Remote monitoring capability for management team'
    ],
    slug: 'industrial-complex-security-installation'
  },
  {
    id: 3,
    title: 'Commercial Fire alarm install',
    location: 'Worcestershire',
    category: 'industrial',
    date: 'January 2024',
    image: 'INETFS/IMG_2171.jpg',
    systems: ['Fire Detection', 'Beam Smoke Detection', 'Manual Call Points', 'Perimeter Security'],
    description: 'Large-scale security installation protecting valuable inventory and equipment in 50,000 sq ft facility.',
    challenge: 'Massive warehouse facility with high-value goods needed comprehensive fire and security protection covering 50,000 square feet with minimal maintenance requirements.',
    solution: 'Installed beam smoke detection system for early fire detection, perimeter security with thermal cameras, and integrated access control for different security zones.',
    results: [
      '99.9% uptime for all security systems',
      'Early detection prevented potential £2M fire damage',
      'Theft incidents reduced to zero',
      '40% reduction in security staffing costs'
    ],
    slug: 'industrial-warehouse-protection'
  },
  {
    id: 4,
    title: 'Luxury Home Security Estate',
    location: 'Gloucestershire',
    category: 'residential',
    date: 'January 2024',
    image: 'INETFS/IMG_2168.jpg',
    systems: ['4K CCTV Network', 'Smart Home Integration', 'Perimeter Protection', 'Remote Monitoring'],
    description: 'Comprehensive security system for large residential property with discreet 4K surveillance and smart home integration.',
    challenge: 'Large residential property required comprehensive CCTV coverage with strategic camera positioning to eliminate blind spots, careful cable routing to maintain aesthetics, and coordinated installation schedule to minimize disruption to family routines.',
    solution: 'Installed weatherproof 4K CCTV cameras with night vision, integrated smart doorbell systems, perimeter sensors, and smartphone app control. All wiring concealed through careful planning and professional installation techniques.',
    results: [
      'Complete property coverage with strategically positioned cameras',
      'All cabling concealed maintaining property aesthetics',
      'Installation completed on schedule with minimal disruption',
      'Remote access via smartphone app for comprehensive monitoring'
    ],
    slug: 'luxury-home-security-estate'
  },
  {
    id: 5,
    title: 'Automated Gate Security',
    location: 'Bath, Somerset',
    category: 'residential',
    date: 'November 2023',
    image: 'INETFS/IMG_2166.jpg',
    systems: ['Number Plate Recognition', 'Automated Gates', 'Intercom System', 'Access Control'],
    description: 'Advanced gate security system with automatic number plate recognition and visitor management for luxury residential estate.',
    challenge: 'High-end residential estate needed sophisticated gate security that could automatically recognize authorized vehicles while maintaining elegant aesthetics and providing seamless access for residents.',
    solution: 'Installed ANPR cameras with AI-powered recognition, automated gate controls, video intercom system, and mobile app integration for remote visitor management and access control.',
    results: [
      '99.8% accurate number plate recognition',
      'Reduced unauthorized access attempts to zero',
      'Average gate opening time under 3 seconds',
      'Complete visitor log and audit trail maintained'
    ],
    slug: 'automated-gate-security'
  },
  {
    id: 6,
    title: 'Manufacturing Plant Safety',
    location: 'Hereford, Herefordshire',
    category: 'industrial',
    date: 'October 2023',
    image: 'INETFS/IMG_2170.jpg',
    systems: ['Fire Suppression', 'Gas Detection', 'Emergency Systems', 'Process Safety'],
    description: 'Critical safety systems for chemical manufacturing facility with hazard monitoring and automated response.',
    challenge: 'Chemical manufacturing plant required sophisticated fire suppression and gas detection systems to protect against multiple hazard types while maintaining production efficiency.',
    solution: 'Installed multi-zone fire suppression with different agents for different areas, continuous gas monitoring, and automated shutdown procedures for emergency situations.',
    results: [
      'Zero safety incidents since installation',
      'Reduced insurance costs by 25%',
      'Automated emergency response reduces risk',
      'Full compliance with HSE regulations'
    ],
    slug: 'manufacturing-plant-safety'
  },
  {
    id: 7,
    title: 'Warehouse Goods Security',
    location: 'Ledbury, Herefordshire',
    category: 'industrial',
    date: 'September 2023',
    image: 'INETFS/IMG_2202.jpg',
    systems: ['Perimeter Monitoring', 'Remote CCTV', 'Access Control', 'Thermal Detection'],
    description: 'Comprehensive security solution for major distribution center handling high-value electronics and consumer goods.',
    challenge: '24/7 distribution center with multiple loading bays needed security solution that would not impede operations while providing complete coverage of 75,000 sq ft facility.',
    solution: 'Implemented thermal detection for perimeter security, integrated access control for different zones, and AI-powered CCTV analysis for anomaly detection.',
    results: [
      'Eliminated cargo theft entirely',
      'Improved operational efficiency by 20%',
      'Real-time tracking of all personnel',
      'Automated incident reporting system'
    ],
    slug: 'distribution-center-security'
  },
  {
    id: 8,
    title: 'Care Home Safety Installation',
    location: 'Leominster, Herefordshire',
    category: 'commercial',
    date: 'August 2023',
    image: 'INETFS/IMG_2169.jpg',
    systems: ['Fire Detection', 'Nurse Call Integration', 'CCTV Monitoring', 'Emergency Response'],
    description: 'Comprehensive fire and security system for residential care facility with specialized resident safety features.',
    challenge: 'Care home facility required fire detection and security systems that prioritized resident safety while integrating with existing nurse call systems and ensuring staff could respond quickly to emergencies.',
    solution: 'Installed integrated fire detection with visual and audible alerts, CCTV monitoring in common areas, and emergency response systems linked to the nurse call network for coordinated staff response.',
    results: [
      'Seamless integration with existing nurse call systems',
      'Enhanced emergency response coordination',
      'Staff training completed for all shifts',
      'Improved safety monitoring in communal areas'
    ],
    slug: 'care-home-safety-installation'
  }
];

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Handle project card navigation - simplified to just go to portfolio page
  const handleProjectClick = useCallback(() => {
    navigate('/portfolio');
    window.scrollTo(0, 0);
  }, [navigate]);

  // Handle keyboard navigation for cards
  const handleCardKeyDown = useCallback((event) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleProjectClick();
    }
  }, [handleProjectClick]);

  // Check if mobile
  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    checkMobile();
    window.addEventListener('resize', checkMobile, { passive: true });
    
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  // Intersection observer for animations
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.2 }
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

  // Handle category change
  const handleCategoryChange = (categoryId) => {
    setActiveCategory(categoryId);
  };

  const handleScroll = (direction) => {
    const container = scrollContainerRef.current;
    if (!container) return;

    const cardWidth = isMobile ? 340 : 510; // Card width + gap
    const scrollAmount = direction === 'left' ? -cardWidth : cardWidth;
    
    container.scrollBy({
      left: scrollAmount,
      behavior: 'smooth'
    });
  };

  const handleScrollUpdate = () => {
    if (scrollContainerRef.current) {
      setScrollPosition(scrollContainerRef.current.scrollLeft);
    }
  };

  return (
    <section 
      ref={sectionRef} 
      className={`ourwork-section ${isVisible ? 'animate' : ''}`}
    >
      <div className="ourwork-container">
        {/* Header */}
        <div className="ourwork-header">
          <h2 className="ourwork-title">OUR WORK</h2>
          <div className="ourwork-title-line"></div>
          <p className="ourwork-subtitle">
            Protecting homes and businesses across the UK with tailored security solutions
          </p>
        </div>

        {/* Desktop Category Filter */}
        <div className="ourwork-categories">
          {categories.map((category) => {
            const IconComponent = category.icon;
            return (
              <button
                key={category.id}
                className={`category-btn ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => handleCategoryChange(category.id)}
              >
                <IconComponent size={18} />
                <span>{category.label}</span>
              </button>
            );
          })}
        </div>

        {/* Mobile Category Filter Dropdown */}
        <div className="ourwork-categories-mobile">
          <MobileFilterDropdown 
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
          />
        </div>

        {/* Projects Scroll Container */}
        <div className="ourwork-scroll-wrapper">
          {!isMobile && (
            <button 
              className="scroll-btn scroll-btn-left"
              onClick={() => handleScroll('left')}
              disabled={scrollPosition <= 0}
            >
              <ChevronLeft size={32} />
            </button>
          )}

          <div 
            ref={scrollContainerRef}
            className="ourwork-cards-container"
            onScroll={handleScrollUpdate}
          >
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="ourwork-card clickable-card"
                style={{ 
                  animationDelay: isVisible ? `${index * 0.1}s` : '0s' 
                }}
                onClick={() => handleProjectClick()}
                onKeyDown={(e) => handleCardKeyDown(e)}
                tabIndex={0}
                role="button"
                aria-label={`View portfolio page`}
              >
                <div className="card-image-container">
                  <img
                    src={getOptimizedImageUrl(project.image)}
                    alt={`${project.title} - ${project.location}`}
                    className="card-image"
                    loading={index < 2 ? "eager" : "lazy"}
                  />
                  <div className="card-image-overlay">
                    <div className="card-category-badge">
                      {categories.find(cat => cat.id === project.category)?.label}
                    </div>
                  </div>
                </div>

                <div className="card-content">
                  <h3 className="card-title">{project.title}</h3>
                  
                  <div className="card-location">
                    <MapPin size={16} />
                    <span>{project.location}</span>
                  </div>

                  <p className="card-description">{project.description}</p>

                  <div className="card-systems">
                    <h4>Systems Installed:</h4>
                    <ul className="systems-list">
                      {project.systems.map((system, idx) => (
                        <li key={idx}>{system}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {!isMobile && (
            <button 
              className="scroll-btn scroll-btn-right"
              onClick={() => handleScroll('right')}
            >
              <ChevronRight size={32} />
            </button>
          )}
        </div>

        {/* Bottom CTA */}
        <div className="ourwork-cta">
          <p>Ready to protect what matters most to you?</p>
          <PrimaryButton>
            Get Your Free Quote
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default OurWork;