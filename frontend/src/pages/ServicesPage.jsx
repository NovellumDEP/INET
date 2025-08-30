// src/pages/ServicesPage.jsx
import React, { useState, useEffect, useRef } from 'react';
import { 
  Flame, 
  Eye, 
  Lock, 
  Shield, 
  Home,
  Building,
  Factory,
  DoorOpen,
  Wrench,
  PenTool,
  Settings,
  CheckCircle,
  X,
  Info,
  ArrowRight,
  Network
} from 'lucide-react';
import PrimaryButton from '../components/buttons/PrimaryButton';
import './styles/services.css';

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

const ServicesPage = () => {
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

  // Keep the service phases exactly as requested
  const servicePhases = [
    {
      id: 'design',
      title: 'Design & Consultation',
      icon: PenTool,
      summary: 'Custom system design tailored to your specific requirements and building layout.',
      description: 'Our expert team conducts comprehensive site surveys and risk assessments to design the perfect security solution for your property.'
    },
    {
      id: 'installation',
      title: 'Professional Installation',
      icon: Settings,
      summary: 'Expert installation by certified technicians using industry best practices.',
      description: 'Skilled installation teams ensure your systems are fitted correctly, safely, and with minimal disruption to your operations.'
    },
    {
      id: 'commissioning',
      title: 'Testing & Commissioning',
      icon: CheckCircle,
      summary: 'Thorough testing and commissioning to ensure optimal system performance.',
      description: 'Complete system testing, documentation, and staff training to ensure everything works perfectly from day one.'
    },
    {
      id: 'maintenance',
      title: 'Ongoing Maintenance',
      icon: Wrench,
      summary: '24/7 support and regular maintenance to keep your systems running reliably.',
      description: 'Comprehensive maintenance programs and emergency support to ensure your systems remain compliant and effective.'
    }
  ];

  // Simple, clean service list
 const services = [
 {
   id: 'commercial-fire',
   number: '01',
   title: 'Commercial Fire Services',
   description: 'Complete fire detection and suppression systems for offices, retail, and commercial properties.',
   icon: Flame,
   features: [
     'Fire Detection Systems',
     'Suppression Systems', 
     'Emergency Lighting',
     'Fire Risk Assessments',
     'BS 5839 Compliance',
     '24/7 Monitoring'
   ],
   processDetails: {
     design: [
       'Comprehensive Fire Risk Assessment',
       'BS 5839 Compliant System Design',
       'Cause & Effect Programming Design',
       'Emergency Evacuation Planning',
       'Integration with Building Systems',
       'Regulatory Compliance Verification'
     ],
     installation: [
       'Certified Fire Technician Installation',
       'Fire-Rated Cable Installation',
       'Professional Panel Programming',
       'Zone Configuration & Setup',
       'Device Addressing & Testing',
       'System Integration'
     ],
     commissioning: [
       'Full Fire System Testing',
       'Individual Device Verification',
       'False Alarm Prevention Setup',
       'Fire Brigade Liaison',
       'User Training & Certification',
       'Handover Documentation'
     ],
     maintenance: [
       'Annual Fire System Servicing',
       'Quarterly Safety Inspections',
       '24/7 Emergency Fire Callout',
       'Fire Certificate Provision',
       'Compliance Documentation',
       'System Upgrades'
     ]
   }
 },
 {
   id: 'commercial-security',
   number: '02',
   title: 'Commercial Security Services',
   description: 'Advanced CCTV, access control, and intruder alarm systems for business protection.',
   icon: Building,
   features: [
     'CCTV Surveillance',
     'Access Control Systems',
     'Intruder Alarms',
     'Remote Monitoring',
     'Mobile App Control',
     'Cloud Storage'
   ],
   processDetails: {
     design: [
       'Security Risk Assessment',
       'Coverage Area Analysis',
       'Network Infrastructure Planning',
       'Integration Strategy Design',
       'Scalability Planning',
       'User Access Planning'
     ],
     installation: [
       'Professional Security Installation',
       'Network Infrastructure Setup',
       'Camera & Sensor Mounting',
       'Control Panel Configuration',
       'Server & Storage Setup',
       'Mobile App Configuration'
     ],
     commissioning: [
       'Full System Integration Testing',
       'Image Quality Optimization',
       'Access Level Configuration',
       'Mobile App Setup',
       'Staff Training Program',
       'Performance Verification'
     ],
     maintenance: [
       'Regular System Health Checks',
       'Camera Cleaning & Alignment',
       'Software Updates & Patches',
       'Hardware Maintenance',
       'Storage System Maintenance',
       'Emergency Support'
     ]
   }
 },
 {
   id: 'residential-security',
   number: '03',
   title: 'Residential Security Services',
   description: 'Smart home security systems designed for family protection and peace of mind.',
   icon: Home,
   features: [
     'Home Alarm Systems',
     'Residential CCTV',
     'Smart Doorbells',
     'Smart Locks',
     'Mobile Alerts',
     'Family-Friendly Design'
   ],
   processDetails: {
     design: [
       'Home Security Survey',
       'Family Lifestyle Assessment',
       'Smart Home Integration Planning',
       'Aesthetic Considerations',
       'Pet-Friendly Solutions',
       'Privacy Considerations'
     ],
     installation: [
       'Discreet Home Installation',
       'WiFi Network Optimization',
       'Smart Device Configuration',
       'Minimal Disruption Methods',
       'Aesthetic Installation',
       'Family Safety Setup'
     ],
     commissioning: [
       'System Performance Testing',
       'Family Training Session',
       'Mobile App Setup',
       'Emergency Procedures Training',
       'Smart Home Integration',
       'User-Friendly Configuration'
     ],
     maintenance: [
       'Annual System Check',
       'Battery Replacement Service',
       'Software Updates',
       'Family Support',
       'System Optimization',
       'Seasonal Checks'
     ]
   }
 },
 {
   id: 'security-gates',
   number: '04',
   title: 'Security Gate Installation',
   description: 'Automated gates, barriers, and vehicle access control for properties of all sizes.',
   icon: DoorOpen,
   features: [
     'Automated Gates',
     'Rising Arm Barriers',
     'Bollard Systems',
     'ANPR Integration',
     'Remote Control',
     'Safety Systems'
   ],
   processDetails: {
     design: [
       'Site Access Assessment',
       'Traffic Flow Analysis',
       'Safety Requirements Planning',
       'Ground Works Assessment',
       'Integration Planning',
       'Regulatory Compliance'
     ],
     installation: [
       'Ground Works & Foundations',
       'Gate & Barrier Installation',
       'Motor & Control Installation',
       'Safety System Setup',
       'Access Control Integration',
       'Testing & Calibration'
     ],
     commissioning: [
       'Safety System Testing',
       'Emergency Override Testing',
       'Performance Optimization',
       'User Training',
       'Remote Control Setup',
       'Final Safety Checks'
     ],
     maintenance: [
       'Mechanical System Maintenance',
       'Motor & Gearbox Service',
       'Safety System Checks',
       'Lubrication & Adjustment',
       'Control System Maintenance',
       'Emergency Repair Service'
     ]
   }
 },
 {
   id: 'gate-barrier-automation',
   number: '05',
   title: 'Gate & Barrier automation',
   description: 'Automated gate and barrier systems for secure, controlled access and efficient traffic management across residential and commercial properties.',
   icon: DoorOpen,
   features: [
     'Automated Gates',
     'Rising Arm Barriers',
     'Traffic Management',
     'Remote Control',
     'Safety Systems',
     'ANPR Integration'
   ],
   processDetails: {
     design: [
       'Site Access Assessment',
       'Traffic Flow Analysis',
       'Safety Requirements Planning',
       'Ground Works Assessment',
       'Integration Planning',
       'Regulatory Compliance'
     ],
     installation: [
       'Ground Works & Foundations',
       'Gate & Barrier Installation',
       'Motor & Control Installation',
       'Safety System Setup',
       'Access Control Integration',
       'Testing & Calibration'
     ],
     commissioning: [
       'Safety System Testing',
       'Emergency Override Testing',
       'Performance Optimization',
       'User Training',
       'Remote Control Setup',
       'Final Safety Checks'
     ],
     maintenance: [
       'Mechanical System Maintenance',
       'Motor & Gearbox Service',
       'Safety System Checks',
       'Lubrication & Adjustment',
       'Control System Maintenance',
       'Emergency Repair Service'
     ]
   }
 },
 {
   id: 'networking',
   number: '06',
   title: 'Networking',
   description: 'Reliable networking infrastructure and system connectivity to support seamless communication, monitoring, and integration of security and fire systems.',
   icon: Network,
   features: [
     'Network Infrastructure',
     'System Connectivity',
     'Remote Monitoring',
     'Data Management',
     'Integration Support',
     'Performance Optimization'
   ],
   processDetails: {
     design: [
       'Network Infrastructure Assessment',
       'Bandwidth Requirements Analysis',
       'System Integration Planning',
       'Security Protocol Design',
       'Redundancy Planning',
       'Performance Optimization'
     ],
     installation: [
       'Network Cable Installation',
       'Switch & Router Setup',
       'Server Configuration',
       'Wireless Network Setup',
       'Security Configuration',
       'System Integration'
     ],
     commissioning: [
       'Network Performance Testing',
       'Security Testing',
       'Integration Verification',
       'Performance Optimization',
       'Documentation & Training',
       'Final System Testing'
     ],
     maintenance: [
       'Network Performance Monitoring',
       'Security Updates',
       'Hardware Maintenance',
       'System Optimization',
       'Technical Support',
       'Emergency Response'
     ]
   }
 }
];

  return (
    <div className="services-page-clean">
      {/* Hero Section */}
      <section className="services-hero-clean">
        <div 
          className="services-hero-bg-clean"
          style={{
            backgroundImage: `url(${getOptimizedImageUrl('INETFS/IMG_2202.jpg')})`,
            transform: backgroundTransform
          }}
        >
          <div 
            className="services-hero-overlay-clean"
            style={{ opacity: overlayOpacity }}
          />
        </div>
        
        <div className="services-hero-content-clean">
          <AnimatedElement animation="slide-up" delay={200}>
            <h1 className="services-hero-title-clean">Our Services</h1>
          </AnimatedElement>
          <AnimatedElement animation="slide-up" delay={400}>
            <p className="services-hero-subtitle-clean">
              Professional fire safety and security solutions from design through ongoing maintenance
            </p>
          </AnimatedElement>
        </div>
      </section>

      {/* Service Process Overview */}
      <section className="service-process-section">
        <div 
          className="service-process-bg"
          style={{

          }}
        />
        <div className="service-process-overlay" />
        
        <div className="service-process-container">
          <AnimatedElement animation="slide-up" delay={0}>
            <div className="service-process-header">
              <h2 className="service-process-title">Our Complete Service Process</h2>
              <div className="service-process-divider"></div>
              <p className="service-process-intro">
                Every project follows our proven four-stage process to ensure optimal results
              </p>
            </div>
          </AnimatedElement>

          <div className="service-process-grid">
            {servicePhases.map((phase, index) => {
              const IconComponent = phase.icon;
              return (
                <AnimatedElement 
                  key={phase.id} 
                  animation="slide-up" 
                  delay={index * 150}
                >
                  <div className="service-process-card">
                    <div className="service-process-card-top">
                      <div className="service-process-number">{index + 1}</div>
                      <div className="service-process-icon">
                        <IconComponent size={28} />
                      </div>
                      <h3 className="service-process-card-title">{phase.title}</h3>
                    </div>
                    <div className="service-process-card-middle">
                      <p className="service-process-summary">{phase.summary}</p>
                    </div>
                    <div className="service-process-card-bottom">
                      <p className="service-process-description">{phase.description}</p>
                    </div>
                  </div>
                </AnimatedElement>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services List */}
      <section className="services-list-section">
        <div className="services-list-container">
          <AnimatedElement animation="slide-up" delay={0}>
            <div className="services-list-header">
              <h2 className="services-list-title">What We Do</h2>
              <div className="services-list-divider"></div>
            </div>
          </AnimatedElement>

          <div className="services-list">
            {services.map((service, index) => {
              const IconComponent = service.icon;
              return (
                <AnimatedElement 
                  key={service.id} 
                  animation="slide-left" 
                  delay={index * 100}
                >
                  <div className="service-list-item">
                    <div className="service-list-number">{service.number}</div>
                    
                    <div className="service-list-content">
                      <div className="service-list-header-row">
                        <div className="service-list-icon">
                          <IconComponent size={24} />
                        </div>
                        <h3 className="service-list-title">{service.title}</h3>
                      </div>
                      
                      <p className="service-list-description">{service.description}</p>
                      
                      <div className="service-list-features">
                        {service.features.map((feature, featureIndex) => (
                          <AnimatedElement 
                            key={featureIndex} 
                            animation="fade-in" 
                            delay={(index * 100) + (featureIndex * 50)}
                          >
                            <span className="service-feature-tag">{feature}</span>
                          </AnimatedElement>
                        ))}
                      </div>
                      
                      <button 
                        className="service-enquire-button"
                        onClick={() => window.location.href = '/contact'}
                      >
                        <Info size={16} />
                        Enquire Now
                        <ArrowRight size={16} />
                      </button>
                    </div>
                  </div>
                </AnimatedElement>
              );
            })}
          </div>

          {/* CTA Section */}
          <AnimatedElement animation="slide-up" delay={0}>
            <div className="services-cta-section">
              <h2 className="services-cta-title">Ready to Get Started?</h2>
              <p className="services-cta-text">
                Contact us today for a free consultation and quote tailored to your specific needs.
              </p>
              <PrimaryButton>
                Get Your Free Quote
              </PrimaryButton>
            </div>
          </AnimatedElement>
        </div>
      </section>
    </div>
  );
};

export default ServicesPage;