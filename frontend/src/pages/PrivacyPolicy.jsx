// src/pages/PrivacyPolicy.jsx
import React from 'react';
import './styles/legal.css';

const PrivacyPolicy = () => {
  return (
    <div className="legal-page">
      {/* Hero Section */}
      <section className="legal-hero">
        <div className="legal-hero-content">
          <h1 className="legal-hero-title">Privacy Policy</h1>
          <p className="legal-hero-subtitle">
            How we collect, use, and protect your personal information
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
                <h3 className="legal-section-title">Introduction</h3>
                <p className="legal-paragraph">
                  INET Fire & Security Limited ('we', 'us', or 'our') is committed to protecting your privacy and personal data. This Privacy Policy explains how we collect, use, store, and protect your personal information when you use our services or interact with our website.
                </p>
                <p className="legal-paragraph">
                  We are a data controller for the purposes of the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018. Our registered office is [Your Business Address].
                </p>
              </div>

              <div className="legal-section">
                <h3 className="legal-section-title">Information We Collect</h3>
                <div className="legal-subsection">
                  <h4 className="legal-subsection-title">Personal Information</h4>
                  <p className="legal-paragraph">We may collect the following types of personal information:</p>
                  <ul className="legal-list">
                    <li>Name, address, phone number, and email address</li>
                    <li>Property details and security requirements</li>
                    <li>Payment and billing information</li>
                    <li>Communication records and preferences</li>
                    <li>Emergency contact information</li>
                    <li>Technical information about your security systems</li>
                  </ul>
                </div>
                <div className="legal-subsection">
                  <h4 className="legal-subsection-title">Automatically Collected Information</h4>
                  <p className="legal-paragraph">When you visit our website, we may automatically collect:</p>
                  <ul className="legal-list">
                    <li>IP address and browser information</li>
                    <li>Pages visited and time spent on our site</li>
                    <li>Referring website information</li>
                    <li>Device and operating system information</li>
                  </ul>
                </div>
              </div>

              <div className="legal-section">
                <h3 className="legal-section-title">How We Use Your Information</h3>
                <p className="legal-paragraph">We use your personal information for the following purposes under the legal bases outlined:</p>
                <div className="legal-subsection">
                  <h4 className="legal-subsection-title">Contract Performance</h4>
                  <ul className="legal-list">
                    <li>Providing fire safety and security services</li>
                    <li>System installation, maintenance, and support</li>
                    <li>Processing payments and managing accounts</li>
                    <li>Communicating about your services</li>
                  </ul>
                </div>
                <div className="legal-subsection">
                  <h4 className="legal-subsection-title">Legitimate Business Interests</h4>
                  <ul className="legal-list">
                    <li>Improving our services and customer experience</li>
                    <li>Marketing our services (with opt-out options)</li>
                    <li>Website analytics and optimization</li>
                    <li>Fraud prevention and security</li>
                  </ul>
                </div>
                <div className="legal-subsection">
                  <h4 className="legal-subsection-title">Legal Compliance</h4>
                  <ul className="legal-list">
                    <li>Complying with fire safety regulations</li>
                    <li>Meeting insurance and certification requirements</li>
                    <li>Responding to legal requests and court orders</li>
                  </ul>
                </div>
              </div>

              <div className="legal-section">
                <h3 className="legal-section-title">Information Sharing</h3>
                <p className="legal-paragraph">
                  We do not sell your personal information. We may share your information with:
                </p>
                <p className="legal-paragraph">
                  • Trusted service partners who help us deliver our services<br/>
                  • Professional advisors (lawyers, accountants, insurers)<br/>
                  • Regulatory bodies when required by law<br/>
                  • Emergency services in case of security incidents
                </p>
                <p className="legal-paragraph">
                  All third parties are contractually required to protect your information and use it only for specified purposes.
                </p>
              </div>

              <div className="legal-section">
                <h3 className="legal-section-title">Data Security</h3>
                <p className="legal-paragraph">
                  We implement appropriate technical and organizational measures to protect your personal information against unauthorized access, alteration, disclosure, or destruction. These include:
                </p>
                <p className="legal-paragraph">
                  • Encrypted data transmission and storage<br/>
                  • Regular security audits and updates<br/>
                  • Staff training on data protection<br/>
                  • Secure backup and recovery procedures<br/>
                  • Access controls and authentication systems
                </p>
              </div>

              <div className="legal-section">
                <h3 className="legal-section-title">Contact and Complaints</h3>
                <p className="legal-paragraph">
                  To exercise your rights or if you have questions about this Privacy Policy, please contact us:
                </p>
                <p className="legal-paragraph">
                  • Email: privacy@inetfiresecurity.co.uk<br/>
                  • Phone: [Your Phone Number]<br/>
                  • Post: [Your Business Address]
                </p>
                <p className="legal-paragraph">
                  If you're not satisfied with our response, you have the right to lodge a complaint with the Information Commissioner's Office (ICO) at ico.org.uk.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default PrivacyPolicy;