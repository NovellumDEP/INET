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
  Network,
  Target,
  FileText,
  Siren
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
   id: 'fire-detection',
   number: '01',
   title: 'Fire Detection Systems',
   description: 'Advanced smoke and heat detection systems with 24/7 monitoring to protect your property from fire damage.',
   icon: Flame,
   features: [
     'Smoke Detection',
     'Heat Detection', 
     'Manual Call Points',
     'Fire Alarm Panels',
     'BS 5839 Compliance',
     '24/7 Monitoring'
   ],
   processDetails: {
     design: [
       'Comprehensive Fire Risk Assessment',
       'BS 5839 Compliant System Design',
       'Zone Planning & Configuration',
       'Device Positioning Strategy',
       'Integration with Building Systems',
       'Regulatory Compliance Verification'
     ],
     installation: [
       'Certified Fire Technician Installation',
       'Fire-Rated Cable Installation',
       'Professional Panel Programming',
       'Device Installation & Addressing',
       'System Integration',
       'Quality Assurance Testing'
     ],
     commissioning: [
       'Full System Testing',
       'Individual Device Verification',
       'False Alarm Prevention Setup',
       'Fire Brigade Liaison',
       'User Training & Certification',
       'Handover Documentation'
     ],
     maintenance: [
       'Annual System Servicing',
       'Quarterly Safety Inspections',
       '24/7 Emergency Callout',
       'Compliance Documentation',
       'System Upgrades',
       'Performance Monitoring'
     ]
   }
 },
 {
   id: 'fire-extinguisher-services',
   number: '02',
   title: 'Fire Extinguisher Services',
   description: 'Complete fire extinguisher servicing including annual inspections, weighing, pressure testing, and replacement to ensure compliance.',
   icon: Target,
   features: [
     'Annual Inspections',
     'Pressure Testing',
     'Weighing Services',
     'Extinguisher Replacement',
     'Compliance Certification',
     'Emergency Supply'
   ],
   processDetails: {
     design: [
       'Site Fire Risk Assessment',
       'Extinguisher Type Selection',
       'Placement Strategy Planning',
       'Quantity Requirements Analysis',
       'Compliance Standards Review',
       'Maintenance Schedule Planning'
     ],
     installation: [
       'Professional Extinguisher Placement',
       'Wall Mounting & Signage',
       'Fire Point Setup',
       'Safety Equipment Installation',
       'Compliance Labeling',
       'Site Documentation'
     ],
     commissioning: [
       'Initial Pressure Testing',
       'Weight Verification',
       'Compliance Certification',
       'Staff Training Sessions',
       'Emergency Procedures Training',
       'Documentation Handover'
     ],
     maintenance: [
       'Annual Service & Inspection',
       'Pressure Testing & Recharging',
       'Weight Monitoring',
       'Replacement When Required',
       'Compliance Certificate Updates',
       'Emergency Callout Service'
     ]
   }
 },
 {
   id: 'fire-risk-assessments',
   number: '03',
   title: 'Fire Risk Assessments',
   description: 'Professional fire risk assessments to identify potential hazards and ensure your premises comply with fire safety regulations.',
   icon: FileText,
   features: [
     'Comprehensive Risk Analysis',
     'Hazard Identification',
     'Compliance Verification',
     'Action Plan Development',
     'Legal Documentation',
     'Regular Review Updates'
   ],
   processDetails: {
     design: [
       'Initial Site Survey',
       'Risk Assessment Planning',
       'Regulatory Requirements Review',
       'Stakeholder Consultation',
       'Assessment Methodology Design',
       'Documentation Framework'
     ],
     installation: [
       'Detailed Site Inspection',
       'Hazard Identification Process',
       'Risk Level Assessment',
       'Evidence Gathering',
       'Compliance Gap Analysis',
       'Photographic Documentation'
     ],
     commissioning: [
       'Risk Assessment Report Completion',
       'Action Plan Development',
       'Priority Recommendations',
       'Compliance Certification',
       'Management Presentation',
       'Staff Briefing Sessions'
     ],
     maintenance: [
       'Annual Assessment Reviews',
       'Regulatory Updates Monitoring',
       'Action Plan Progress Reviews',
       'Updated Risk Assessments',
       'Ongoing Compliance Support',
       'Emergency Consultation'
     ]
   }
 },
 {
   id: 'cctv-surveillance',
   number: '04',
   title: 'CCTV Surveillance',
   description: 'High-definition surveillance cameras with remote monitoring and cloud storage for complete security coverage.',
   icon: Eye,
   features: [
     'HD Camera Systems',
     'Remote Monitoring',
     'Cloud Storage',
     'Mobile App Access',
     'Night Vision',
     'Motion Detection'
   ],
   processDetails: {
     design: [
       'Security Risk Assessment',
       'Coverage Area Analysis',
       'Camera Positioning Strategy',
       'Network Infrastructure Planning',
       'Storage Requirements Analysis',
       'Integration Planning'
     ],
     installation: [
       'Professional Camera Installation',
       'Network Infrastructure Setup',
       'DVR/NVR Configuration',
       'Cable Management',
       'Power Supply Installation',
       'System Integration'
     ],
     commissioning: [
       'Image Quality Optimization',
       'Motion Detection Setup',
       'Remote Access Configuration',
       'Mobile App Setup',
       'User Training',
       'Performance Testing'
     ],
     maintenance: [
       'Regular System Health Checks',
       'Camera Cleaning & Maintenance',
       'Software Updates',
       'Storage Management',
       'Performance Monitoring',
       'Emergency Support'
     ]
   }
 },
 {
   id: 'access-control',
   number: '05',
   title: 'Access Control',
   description: 'Secure entry systems including key cards, biometric scanners, and smart locks for controlled access.',
   icon: Lock,
   features: [
     'Key Card Systems',
     'Biometric Scanners',
     'Smart Locks',
     'Time-Based Access',
     'Audit Trails',
     'Remote Management'
   ],
   processDetails: {
     design: [
       'Access Requirements Analysis',
       'User Level Planning',
       'Integration Strategy',
       'Security Protocol Design',
       'Hardware Selection',
       'System Architecture'
     ],
     installation: [
       'Access Control Hardware Installation',
       'Network Configuration',
       'Software Setup',
       'User Database Creation',
       'Integration Testing',
       'Security Configuration'
     ],
     commissioning: [
       'Access Level Testing',
       'User Training',
       'System Integration Verification',
       'Audit Trail Setup',
       'Performance Testing',
       'Documentation Handover'
     ],
     maintenance: [
       'Regular System Updates',
       'User Database Management',
       'Hardware Maintenance',
       'Security Monitoring',
       'Performance Optimization',
       'Technical Support'
     ]
   }
 },
 {
   id: 'intruder-alarms',
   number: '06',
   title: 'Intruder Alarms',
   description: 'Motion sensors and perimeter protection with instant alerts to keep unauthorized visitors out.',
   icon: Shield,
   features: [
     'Motion Sensors',
     'Perimeter Protection',
     'Instant Alerts',
     'Remote Monitoring',
     'Pet-Friendly Options',
     'Smartphone Integration'
   ],
   processDetails: {
     design: [
       'Security Vulnerability Assessment',
       'Sensor Placement Planning',
       'Zone Configuration Design',
       'Alert Protocol Planning',
       'Integration Requirements',
       'False Alarm Prevention'
     ],
     installation: [
       'Professional Sensor Installation',
       'Control Panel Setup',
       'Wireless Configuration',
       'Zone Programming',
       'Alert System Setup',
       'Testing & Calibration'
     ],
     commissioning: [
       'Full System Testing',
       'Zone Verification',
       'Alert Testing',
       'User Code Setup',
       'Training Sessions',
       'Performance Validation'
     ],
     maintenance: [
       'Regular System Checks',
       'Battery Replacement',
       'Sensor Calibration',
       'Software Updates',
       'False Alarm Analysis',
       'Emergency Response'
     ]
   }
 },
 {
   id: 'gate-barrier-automation',
   number: '07',
   title: 'Gate & Barrier Automation',
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
   number: '08',
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
 },
 {
   id: 'maintenance-support',
   number: '09',
   title: 'Maintenance & Support',
   description: '24/7 call-out service for system breakdowns, repairs, and ongoing maintenance to keep your security systems running.',
   icon: Siren,
   features: [
     '24/7 Emergency Callout',
     'Preventive Maintenance',
     'System Repairs',
     'Performance Monitoring',
     'Technical Support',
     'Warranty Services'
   ],
   processDetails: {
     design: [
       'Maintenance Schedule Planning',
       'Service Requirements Assessment',
       'Response Time Planning',
       'Resource Allocation',
       'Emergency Protocol Design',
       'Service Level Agreements'
     ],
     installation: [
       'Service Contract Setup',
       'Remote Monitoring Installation',
       'Diagnostic Tools Setup',
       'Emergency Contact Systems',
       'Service Documentation',
       'Team Training'
     ],
     commissioning: [
       'Service Process Testing',
       'Response Time Verification',
       'Emergency Procedure Testing',
       'Client Training',
       'Documentation Handover',
       'Service Activation'
     ],
     maintenance: [
       'Scheduled Maintenance Visits',
       'Emergency Response Service',
       'System Health Monitoring',
       'Performance Optimization',
       'Parts Replacement',
       'Service Reporting'
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