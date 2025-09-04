// src/components/Footer.jsx
import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';
import './styles/footer.css';

// ImageKit configuration
const IMAGEKIT_URL = "https://ik.imagekit.io/o6eendyey/";

// Helper function to generate optimized image URLs
const getOptimizedImageUrl = (imagePath, quality = 90) => {
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  return `${IMAGEKIT_URL}${imagePath}?tr=q-${quality},f-auto,pr-true`;
};

const Footer = () => {
  // Logo path - update this to match your actual ImageKit path
  const logoImagePath = 'INETFS/TLOGOSHRUNK.png';

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Top Section */}
        <div className="footer-top">
          <div className="footer-brand">
            <Link to="/" className="footer-logo-link">
              <img 
                src={getOptimizedImageUrl(logoImagePath)}
                alt="INET Fire & Security"
                className="footer-logo-image"
                onError={(e) => {
                  // Fallback to text logo if image fails to load
                  e.target.style.display = 'none';
                  e.target.nextSibling.style.display = 'block';
                }}
              />
              <span className="footer-logo-text" style={{ display: 'none' }}>
                INET
              </span>
            </Link>
          </div>
          
          <div className="footer-nav">
            <div className="footer-column">
              <h4 className="footer-heading">Services</h4>
              <ul className="footer-links">
                <li><Link to="/services">Fire Detection</Link></li>
                <li><Link to="/services">CCTV Surveillance</Link></li>
                <li><Link to="/services">Access Control</Link></li>
                <li><Link to="/services">Security Monitoring</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-heading">Company</h4>
              <ul className="footer-links">
                <li><Link to="/about">About Us</Link></li>
                <li><Link to="/portfolio">Our Work</Link></li>
                <li><Link to="/">Reviews</Link></li>
                <li><Link to="/contact">Contact</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-heading">Legal</h4>
              <ul className="footer-links">
                <li><Link to="/privacy-policy">Privacy Policy</Link></li>
                <li><Link to="/terms-conditions">Terms & Conditions</Link></li>
                <li><Link to="/cookie-policy">Cookie Policy</Link></li>
                <li><Link to="/gdpr-rights">GDPR Rights</Link></li>
              </ul>
            </div>
            
            <div className="footer-column">
              <h4 className="footer-heading">Contact Info</h4>
              <div className="footer-contact">
                <div className="footer-contact-item">
                  <Phone size={16} />
                  <span>03300439011</span>
                </div>
                <div className="footer-contact-item">
                  <Mail size={16} />
                  <span>info@inetfireandsecurity.com</span>
                </div>
                <div className="footer-contact-item">
                  <MapPin size={16} />
                  <span>Hereford, England</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Bottom Section */}
        <div className="footer-bottom">
          <div className="footer-bottom-left">
            <p className="footer-copyright">
              © {new Date().getFullYear()} INET Fire & Security. All rights reserved.
            </p>
            <p className="footer-credit">
              Website by <a 
                href="https://novellum.uk/" 
                target="_blank" 
                rel="noopener noreferrer"
                className="novellum-link"
              >
                Novellum
              </a>
            </p>
          </div>
          
          <div className="footer-bottom-right">
            <div className="footer-certifications">
              <div className="cert-item">
                <img 
                  src={getOptimizedImageUrl('INETFS/trustsign.png')}
                  alt="Security License"
                  className="cert-badge-image"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;