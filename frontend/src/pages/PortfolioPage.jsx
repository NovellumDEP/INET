// src/pages/PortfolioPage.jsx
import React, { useState, useEffect, useRef, useCallback } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { MapPin, Building, Home, Factory, Calendar, Users, ArrowRight, Filter, ChevronDown } from 'lucide-react';
import PrimaryButton from '../components/buttons/PrimaryButton';
import './styles/portfolio.css';

// ImageKit configuration
const IMAGEKIT_URL = "https://ik.imagekit.io/o6eendyey/";

const getOptimizedImageUrl = (imagePath, quality = 90) => {
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  return `${IMAGEKIT_URL}${imagePath}?tr=q-${quality},f-auto,pr-true`;
};

const MobileFilterDropdown = ({ categories, activeCategory, onCategoryChange, projects }) => {
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
            const count = category.id === 'all' ? projects.length : projects.filter(p => p.category === category.id).length;
            return (
              <button
                key={category.id}
                className={`dropdown-option ${activeCategory === category.id ? 'active' : ''}`}
                onClick={() => handleCategorySelect(category.id)}
              >
                <IconComponent size={16} />
                <span>{category.label}</span>
                <span className="category-count">({count})</span>
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

const PortfolioPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(false);
  const [activeCategory, setActiveCategory] = useState('all');
  const [selectedProject, setSelectedProject] = useState(null);
  const [isMobile, setIsMobile] = useState(false);
  const sectionRef = useRef(null);

  const categories = [
    { id: 'all', label: 'All Projects', icon: Building },
    { id: 'residential', label: 'Residential', icon: Home },
    { id: 'commercial', label: 'Commercial', icon: Building },
    { id: 'industrial', label: 'Industrial', icon: Factory }
  ];

  const projects = [
    {
      id: 1,
      title: 'Luxury Home Security System',
      location: 'Surrey, London',
      category: 'residential',
      date: 'March 2024',
      client: 'Private Residence',
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
      title: 'Office Complex Fire Safety',
      location: 'Manchester Business Park',
      category: 'commercial',
      date: 'February 2024',
      client: 'Manchester Business Solutions',
      image: 'INETFS/IMG_2175.heic',
      systems: ['Fire Detection', 'Emergency Lighting', 'Sprinkler System', 'Evacuation Systems'],
      description: 'Comprehensive fire safety system for 5-story office building with 24/7 monitoring.',
      challenge: 'A 5-story office complex housing 200+ employees needed a complete fire safety overhaul to meet new BS 5839 regulations while minimizing business disruption.',
      solution: 'Phased installation over 6 weeks with night and weekend work to avoid disrupting business operations. Implemented advanced smoke detection, emergency lighting, and evacuation systems.',
      results: [
        'Full BS 5839 compliance achieved',
        'Zero business downtime during installation',
        'Reduced insurance premiums by 15%',
        'Staff training completed for 200+ employees'
      ],
      slug: 'office-complex-fire-safety'
    },
    {
      id: 3,
      title: 'Industrial Warehouse Protection',
      location: 'Birmingham Industrial Estate',
      category: 'industrial',
      date: 'January 2024',
      client: 'Midlands Logistics Ltd',
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
      title: 'Retail Chain Security',
      location: 'Central London',
      category: 'commercial',
      date: 'December 2023',
      client: 'Fashion Forward Retail',
      image: 'INETFS/IMG_2168.jpg',
      systems: ['Anti-theft System', 'CCTV Monitoring', 'Emergency Response', 'Access Control'],
      description: 'Multi-location retail security with real-time monitoring and rapid response across 8 stores.',
      challenge: 'Fashion retail chain with 8 London locations experiencing high theft rates needed coordinated security solution with central monitoring.',
      solution: 'Deployed integrated CCTV system with facial recognition, anti-theft tagging, and central monitoring station providing real-time alerts to all locations.',
      results: [
        'Theft reduced by 65% across all locations',
        'Average response time under 3 minutes',
        'ROI achieved within 8 months',
        'Staff confidence and safety improved significantly'
      ],
      slug: 'retail-chain-security'
    },
    {
      id: 5,
      title: 'Smart Home Integration',
      location: 'Essex Countryside',
      category: 'residential',
      date: 'November 2023',
      client: 'The Johnson Family',
      image: 'INETFS/IMG_2166.jpg',
      systems: ['Smart Alarms', 'Mobile Monitoring', 'Automated Security', 'Environmental Controls'],
      description: 'Modern smart home security with app-based control and automation features for rural property.',
      challenge: 'Remote countryside property needed smart security solution with reliable connectivity and integration with existing home automation systems.',
      solution: 'Implemented cellular backup systems, solar-powered perimeter sensors, and advanced mobile app with real-time notifications and remote control capabilities.',
      results: [
        '100% reliable connectivity via cellular backup',
        'Energy-efficient solar-powered sensors',
        'Complete property coverage including outbuildings',
        'Peace of mind for extended travel periods'
      ],
      slug: 'smart-home-integration'
    },
    {
      id: 6,
      title: 'Manufacturing Plant Safety',
      location: 'Leeds Industrial Park',
      category: 'industrial',
      date: 'October 2023',
      client: 'Northern Manufacturing Co.',
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
      title: 'Distribution Center Security',
      location: 'Bristol Logistics Hub',
      category: 'industrial',
      date: 'September 2023',
      client: 'Southwest Distribution Ltd',
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
      title: 'Heritage Building Protection',
      location: 'Bath Historic District',
      category: 'commercial',
      date: 'August 2023',
      client: 'Bath Heritage Trust',
      image: 'INETFS/IMG_2169.jpg',
      systems: ['Discrete Fire Detection', 'Heritage-Compliant CCTV', 'Environmental Monitoring', 'Visitor Safety'],
      description: 'Sensitive installation in Grade I listed building requiring heritage-compliant security and fire safety systems.',
      challenge: 'Grade I listed Georgian building housing museum needed modern fire and security systems while preserving historical integrity and meeting strict heritage guidelines.',
      solution: 'Developed bespoke heritage-compliant detection systems with discrete sensors, wireless technology to avoid structural alterations, and environmental monitoring to protect artifacts.',
      results: [
        'Full heritage compliance achieved',
        'Advanced artifact protection implemented',
        'Visitor safety enhanced without visual impact',
        'Recognized by English Heritage as best practice'
      ],
      slug: 'heritage-building-protection'
    }
  ];

  // Filter projects based on active category
  const filteredProjects = activeCategory === 'all' 
    ? projects 
    : projects.filter(project => project.category === activeCategory);

  // Handle project card navigation
  const handleProjectClick = useCallback((project) => {
    setSelectedProject(project);
  }, []);

  // Handle keyboard navigation for cards
  const handleCardKeyDown = useCallback((event, project) => {
    if (event.key === 'Enter' || event.key === ' ') {
      event.preventDefault();
      handleProjectClick(project);
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
    setSelectedProject(null);
  };

  // Initialize from location state if available
  useEffect(() => {
    if (location.state?.selectedProject) {
      setSelectedProject(location.state.selectedProject);
    }
    if (location.state?.category) {
      setActiveCategory(location.state.category);
    }
  }, [location.state]);

  return (
    <section 
      ref={sectionRef} 
      className={`portfolio-section ${isVisible ? 'animate' : ''}`}
    >
      <div className="portfolio-container">
        {/* Header */}
        <div className="portfolio-header">
          <h1 className="portfolio-title">Our Portfolio</h1>
          <div className="portfolio-title-line"></div>
          <p className="portfolio-subtitle">
            Showcasing our expertise across residential, commercial, and industrial security solutions
          </p>
        </div>

        {/* Desktop Category Filter */}
        <div className="portfolio-categories">
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
                <span className="category-count">
                  ({category.id === 'all' ? projects.length : projects.filter(p => p.category === category.id).length})
                </span>
              </button>
            );
          })}
        </div>

        {/* Mobile Category Filter Dropdown */}
        <div className="portfolio-categories-mobile">
          <MobileFilterDropdown 
            categories={categories}
            activeCategory={activeCategory}
            onCategoryChange={handleCategoryChange}
            projects={projects}
          />
        </div>

        {/* Projects Grid Container */}
        <div className="portfolio-scroll-wrapper">
          <div className="portfolio-cards-container">
            {filteredProjects.map((project, index) => (
              <div 
                key={project.id} 
                className="portfolio-card clickable-card"
                style={{ 
                  animationDelay: isVisible ? `${index * 0.1}s` : '0s' 
                }}
                onClick={() => handleProjectClick(project)}
                onKeyDown={(e) => handleCardKeyDown(e, project)}
                tabIndex={0}
                role="button"
                aria-label={`View details for ${project.title} project`}
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
                  
                  <div className="card-date">
                    <Calendar size={14} />
                    <span>{project.date}</span>
                  </div>

                  <p className="card-description">{project.description}</p>

                  <div className="card-systems">
                    <h4>Systems Installed:</h4>
                    <ul className="systems-list">
                      {project.systems.slice(0, 3).map((system, idx) => (
                        <li key={idx}>{system}</li>
                      ))}
                      {project.systems.length > 3 && (
                        <li>+{project.systems.length - 3} more</li>
                      )}
                    </ul>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Project Detail Modal */}
        {selectedProject && (
          <div className="portfolio-modal" onClick={() => setSelectedProject(null)}>
            <div className="portfolio-modal-content" onClick={(e) => e.stopPropagation()}>
              <button 
                className="portfolio-modal-close"
                onClick={() => setSelectedProject(null)}
              >
                ×
              </button>

              <div className="portfolio-modal-header">
                <h2>{selectedProject.title}</h2>
                <div className="portfolio-modal-meta">
                  <span><MapPin size={16} /> {selectedProject.location}</span>
                  <span><Calendar size={16} /> {selectedProject.date}</span>
                  <span><Users size={16} /> {selectedProject.client}</span>
                </div>
              </div>

              <div className="portfolio-modal-body">
                <div className="portfolio-modal-image">
                  <img
                    src={getOptimizedImageUrl(selectedProject.image)}
                    alt={`${selectedProject.title} - Project Image`}
                  />
                </div>

                <div className="portfolio-modal-details">
                  <div className="project-section">
                    <h3>Challenge</h3>
                    <p>{selectedProject.challenge}</p>
                  </div>

                  <div className="project-section">
                    <h3>Solution</h3>
                    <p>{selectedProject.solution}</p>
                  </div>

                  <div className="project-section">
                    <h3>Systems Installed</h3>
                    <div className="systems-grid">
                      {selectedProject.systems.map((system, idx) => (
                        <span key={idx} className="system-badge">{system}</span>
                      ))}
                    </div>
                  </div>

                  <div className="project-section">
                    <h3>Results</h3>
                    <ul className="results-list">
                      {selectedProject.results.map((result, idx) => (
                        <li key={idx}>{result}</li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* Bottom CTA */}
        <div className="portfolio-cta">
          <h2>Ready to Start Your Project?</h2>
          <p>
            Let us design a custom security solution tailored to your specific needs and requirements.
          </p>
          <PrimaryButton onClick={() => navigate('/contact')}>
            Get Your Free Consultation
          </PrimaryButton>
        </div>
      </div>
    </section>
  );
};

export default PortfolioPage;