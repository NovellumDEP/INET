import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import './styles/nav.css';

// ImageKit configuration
const IMAGEKIT_URL = "https://ik.imagekit.io/o6eendyey/";

// Helper function to generate optimized image URLs
const getOptimizedImageUrl = (imagePath, quality = 90) => {
  if (imagePath.startsWith('http')) {
    return imagePath;
  }
  return `${IMAGEKIT_URL}${imagePath}?tr=q-${quality},f-auto,pr-true`;
};

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();
  const [prevScrollPos, setPrevScrollPos] = useState(window.scrollY);
  const [visible, setVisible] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.scrollY;
      setVisible(prevScrollPos > currentScrollPos || currentScrollPos < 10);
      setIsScrolled(currentScrollPos > 50);
      setPrevScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, [prevScrollPos]);

  // Prevent body scroll when mobile menu is open
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }

    // Cleanup on unmount
    return () => {
      document.body.style.overflow = 'unset';
    };
  }, [isOpen]);

  const navItems = [
    { name: 'Home', href: '/' },
    { name: 'About', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'Contact', href: '/contact' },
    { name: 'Our Work ', href: '/portfolio' }
  ];

  const isActivePath = (path) => location.pathname === path;

  // INET logo path - update this to match your actual ImageKit path
  const logoImagePath = 'INETFS/TLOGOSHRUNK.png';

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <nav 
        className={`nav ${isScrolled ? 'nav-scrolled' : ''}`}
        style={{ transform: visible ? 'translateY(0)' : 'translateY(-100%)' }}
      >
        <div className="nav-container">
          <div className="nav-content">
            {/* Logo */}
            <div className="nav-logo">
              <Link to="/" className="logo-link">
                <img 
                  src={getOptimizedImageUrl(logoImagePath)}
                  alt="INET Fire & Security"
                  className="logo-image"
                  onError={(e) => {
                    // Fallback to text logo if image fails to load
                    e.target.style.display = 'none';
                    e.target.nextSibling.style.display = 'block';
                  }}
                />
                <span className="logo-text" style={{ display: 'none' }}>
                  INET
                </span>
              </Link>
            </div>

            {/* Desktop Navigation */}
            <div className="nav-links-desktop">
              {navItems.map((item) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-link ${isActivePath(item.href) ? 'active' : ''}`}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* CTA Button */}
              <Link to="/contact" className="nav-cta-button">
                GET QUOTE
              </Link>
            </div>

            {/* Mobile Menu Button */}
            <div className="nav-mobile-button">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className="mobile-menu-button"
                aria-label={isOpen ? 'Close menu' : 'Open menu'}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Overlay */}
      <div className={`nav-mobile-overlay ${isOpen ? 'nav-mobile-overlay-open' : ''}`}>
        <div className={`nav-mobile-menu ${isOpen ? 'nav-mobile-menu-open' : ''}`}>
          {/* Close Button */}
          <button
            onClick={closeMenu}
            className="nav-mobile-close"
            aria-label="Close menu"
          >
            <X size={32} />
          </button>

          <div className="nav-mobile-content">
            {/* Mobile Logo */}
            <div className="nav-mobile-logo">
              <Link to="/" className="logo-link" onClick={closeMenu}>
                <img 
                  src={getOptimizedImageUrl(logoImagePath)}
                  alt="INET Fire & Security"
                  className="logo-image"
                />
              </Link>
            </div>

            {/* Mobile Links */}
            <div className="nav-mobile-links">
              {navItems.map((item, index) => (
                <Link
                  key={item.name}
                  to={item.href}
                  className={`nav-mobile-link ${isActivePath(item.href) ? 'active' : ''}`}
                  onClick={closeMenu}
                  style={{ animationDelay: `${index * 0.1 + 0.2}s` }}
                >
                  {item.name}
                </Link>
              ))}
              
              {/* Mobile CTA */}
              <Link
                to="/contact"
                className="nav-mobile-cta"
                onClick={closeMenu}
                style={{ animationDelay: `${navItems.length * 0.1 + 0.3}s` }}
              >
                GET QUOTE
              </Link>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;