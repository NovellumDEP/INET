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
     title: 'Office Security System',
     location: 'Reading, Berkshire',
     category: 'commercial',
     image: 'INETFS/IMG_2167.png', 
     systems: ['CCTV Surveillance', 'Access Control', 'Intruder Alarm'],
     description: 'Complete security installation for luxury family home including perimeter protection and smart monitoring.',
     slug: 'office-security-system'
   },
   {
     id: 2,
     title: 'Office Complex Fire Safety',
     location: 'Oxford, Oxfordshire',
     category: 'commercial',
     image: 'INETFS/IMG_2175.heic', 
     systems: ['Fire Detection', 'Emergency Lighting', 'Sprinkler System'],
     description: 'Comprehensive fire safety system for 5-story office building with 24/7 monitoring.',
     slug: 'office-complex-fire-safety'
   },
   {
     id: 3,
     title: 'Industrial Warehouse Fire Safety',
     location: 'Swindon, Wiltshire',
     category: 'industrial',
     image: 'INETFS/IMG_2171.jpg', 
     systems: ['Fire Detection', 'Beam Smoke Detection', 'Manual Call Points'],
     description: 'Large-scale security installation protecting valuable inventory and equipment.',
     slug: 'industrial-warehouse-fire-safety'
   },
   {
     id: 4,
     title: 'Retail Store Protection',
     location: 'Cheltenham, Gloucestershire',
     category: 'commercial',
     image: 'INETFS/IMG_2168.jpg', 
     systems: ['Anti-theft System', 'CCTV Monitoring', 'Emergency Response'],
     description: 'Multi-location retail security with real-time monitoring and rapid response.',
     slug: 'retail-store-protection'
   },
  {
    id: 5,
    title: 'Automated Gate Security',
    location: 'Bath, Somerset',
    category: 'residential',
    image: 'INETFS/IMG_2166.jpg',
    systems: ['Number Plate Recognition', 'Automated Gates', 'Intercom System', 'Access Control'],
    description: 'Advanced gate security system with automatic number plate recognition and visitor management.',
    slug: 'automated-gate-security'
  },
   {
     id: 6,
     title: 'Manufacturing Plant Safety',
     location: 'Hereford, Herefordshire',
     category: 'industrial',
     image: 'INETFS/IMG_2170.jpg', 
     systems: ['Fire Suppression', 'Gas Detection', 'Emergency Systems'],
     description: 'Critical safety systems for chemical manufacturing facility with hazard monitoring.',
     slug: 'manufacturing-plant-safety'
   },
   {
     id: 7,
     title: 'Warehouse Goods Security',
     location: 'Bristol, Somerset',
     category: 'industrial',
     image: 'INETFS/IMG_2202.jpg', 
     systems: ['Monitoring', 'Remote CCTV', 'Emergency Systems'],
     description: 'Critical safety systems for chemical manufacturing facility with hazard monitoring.',
     slug: 'warehouse-goods-security'
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