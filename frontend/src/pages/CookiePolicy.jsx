// src/pages/CookiePolicy.jsx
import React from 'react';
import './styles/legal.css';

const CookiePolicy = () => {
  return (
    <div className="legal-page">
      {/* Hero Section */}
      <section className="legal-hero">
        <div className="legal-hero-content">
          <h1 className="legal-hero-title">Cookie Policy</h1>
          <p className="legal-hero-subtitle">
            How we use cookies and similar technologies on our website
          </p>
        </div>
      </section>

      {/* Main Content */}
      <section className="legal-main">
        <div className="legal-container">
          <div className="legal-content">
            <div className="legal-document">
              <p className="legal-last-updated">Last updated: January 2025</p>
              
              <div className="legal-section">
                <h3 className="legal-section-title">What Are Cookies</h3>
                <p className="legal-paragraph">
                  Cookies are small text files that are stored on your device when you visit our website. They help us provide you with a better browsing experience and allow us to analyze how our website is used.
                </p>
                <p className="legal-paragraph">
                  This Cookie Policy explains what cookies we use, why we use them, and how you can manage your cookie preferences.
                </p>
              </div>

              <div className="legal-section">
                <h3 className="legal-section-title">Types of Cookies We Use</h3>
                <div className="legal-subsection">
                  <h4 className="legal-subsection-title">Essential Cookies</h4>
                  <p className="legal-paragraph">These cookies are necessary for our website to function properly and cannot be disabled. They include:</p>
                  <ul className="legal-list">
                    <li>Session cookies that maintain your browsing session</li>
                    <li>Security cookies that protect against malicious activity</li>
                    <li>Load balancing cookies that ensure proper website performance</li>
                    <li>Cookie consent cookies that remember your preferences</li>
                  </ul>
                </div>
                <div className="legal-subsection">
                  <h4 className="legal-subsection-title">Performance Cookies</h4>
                  <p className="legal-paragraph">These cookies help us understand how visitors interact with our website by collecting anonymous information:</p>
                  <ul className="legal-list">
                    <li>Google Analytics cookies for website usage statistics</li>
                    <li>Page load performance monitoring</li>
                    <li>Error tracking and reporting</li>
                    <li>User journey analysis</li>
                  </ul>
                </div>
                <div className="legal-subsection">
                  <h4 className="legal-subsection-title">Functional Cookies</h4>
                  <p className="legal-paragraph">These cookies enable enhanced functionality and personalization:</p>
                  <ul className="legal-list">
                    <li>Language and region preferences</li>
                    <li>Contact form auto-fill information</li>
                    <li>Accessibility settings</li>
                    <li>Website theme preferences</li>
                  </ul>
                </div>
                <div className="legal-subsection">
                  <h4 className="legal-subsection-title">Marketing Cookies</h4>
                  <p className="legal-paragraph">These cookies are used to deliver relevant advertisements and track campaign effectiveness:</p>
                  <ul className="legal-list">
                    <li>Social media integration cookies</li>
                    <li>Advertising platform cookies (Google Ads, Facebook)</li>
                    <li>Remarketing and retargeting cookies</li>
                    <li>Conversion tracking cookies</li>
                  </ul>
                </div>
              </div>

              <div className="legal-section">
                <h3 className="legal-section-title">Third-Party Cookies</h3>
                <p className="legal-paragraph">
                  We use several third-party services that may set their own cookies:
                </p>
                <p className="legal-paragraph">
                  • Google Analytics - for website analytics and user behavior tracking<br/>
                  • Google Ads - for advertising and conversion tracking<br/>
                  • Social Media Platforms - for social sharing and integration<br/>
                  • Customer Support Tools - for live chat and support functionality
                </p>
                <p className="legal-paragraph">
                  These third parties have their own privacy policies and cookie policies, which we encourage you to review.
                </p>
              </div>

              <div className="legal-section">
                <h3 className="legal-section-title">Managing Your Cookie Preferences</h3>
                <div className="legal-subsection">
                  <h4 className="legal-subsection-title">Cookie Banner</h4>
                  <p className="legal-paragraph">
                    When you first visit our website, you'll see a cookie banner allowing you to accept or customize your cookie preferences. You can:
                  </p>
                  <p className="legal-paragraph">
                    • Accept all cookies<br/>
                    • Reject non-essential cookies<br/>
                    • Customize your preferences by category
                  </p>
                </div>
                <div className="legal-subsection">
                  <h4 className="legal-subsection-title">Browser Settings</h4>
                  <p className="legal-paragraph">You can also manage cookies through your browser settings. Most browsers allow you to:</p>
                  <ul className="legal-list">
                    <li>View and delete existing cookies</li>
                    <li>Block cookies from specific websites</li>
                    <li>Block all cookies (may affect website functionality)</li>
                    <li>Set preferences for different types of cookies</li>
                  </ul>
                </div>
              </div>

              <div className="legal-section">
                <h3 className="legal-section-title">Impact of Disabling Cookies</h3>
                <p className="legal-paragraph">
                  While you can browse our website with cookies disabled, some functionality may be affected:
                </p>
                <p className="legal-paragraph">
                  • Contact forms may not work properly<br/>
                  • Website preferences may not be saved<br/>
                  • Some interactive features may be unavailable<br/>
                  • Analytics and performance monitoring will be limited
                </p>
                <p className="legal-paragraph">
                  Essential cookies cannot be disabled as they're necessary for basic website security and functionality.
                </p>
              </div>

              <div className="legal-section">
                <h3 className="legal-section-title">Updates to This Policy</h3>
                <p className="legal-paragraph">
                  We may update this Cookie Policy periodically to reflect changes in our practices or for other operational, legal, or regulatory reasons.
                </p>
                <p className="legal-paragraph">
                  We will notify you of any material changes by posting the updated policy on our website with a revised 'Last Updated' date.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default CookiePolicy;