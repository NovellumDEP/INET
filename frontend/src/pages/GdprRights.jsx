// src/pages/GdprRights.jsx
import React from 'react';
import './styles/legal.css';

const GdprRights = () => {
  return (
    <div className="legal-page">
      {/* Hero Section */}
      <section className="legal-hero">
        <div className="legal-hero-content">
          <h1 className="legal-hero-title">Your GDPR Rights</h1>
          <p className="legal-hero-subtitle">
            Understanding your data protection rights under UK GDPR
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
                <h3 className="legal-section-title">Your Data Protection Rights</h3>
                <p className="legal-paragraph">
                  Under the UK General Data Protection Regulation (UK GDPR) and the Data Protection Act 2018, you have several important rights regarding your personal data. This page explains these rights and how to exercise them.
                </p>
                <p className="legal-paragraph">
                  These rights are designed to give you control over your personal information and ensure transparency in how organizations handle your data.
                </p>
              </div>

              <div className="legal-section">
                <h3 className="legal-section-title">Right of Access (Article 15)</h3>
                <p className="legal-paragraph">You have the right to request access to your personal data that we hold. This includes:</p>
                <div className="legal-subsection">
                  <h4 className="legal-subsection-title">What You Can Request</h4>
                  <ul className="legal-list">
                    <li>Confirmation that we are processing your personal data</li>
                    <li>A copy of your personal data in a commonly used format</li>
                    <li>Information about why we process your data</li>
                    <li>Details of who we share your data with</li>
                    <li>How long we will keep your data</li>
                    <li>Information about your other data protection rights</li>
                  </ul>
                </div>
                <div className="legal-subsection">
                  <h4 className="legal-subsection-title">How to Make a Request</h4>
                  <p className="legal-paragraph">To request access to your data, please contact us with:</p>
                  <p className="legal-paragraph">
                    • Your full name and contact details<br/>
                    • Proof of identity (e.g., copy of passport or driving license)<br/>
                    • Specific details about the information you want to access
                  </p>
                  <p className="legal-paragraph">We will respond within one month of receiving your request.</p>
                </div>
              </div>

              <div className="legal-section">
                <h3 className="legal-section-title">Right to Rectification (Article 16)</h3>
                <p className="legal-paragraph">
                  You have the right to have inaccurate or incomplete personal data corrected. If you believe any information we hold about you is incorrect or outdated, we will:
                </p>
                <div className="legal-subsection">
                  <h4 className="legal-subsection-title">What We Will Do</h4>
                  <ul className="legal-list">
                    <li>Correct inaccurate data immediately</li>
                    <li>Complete any incomplete data</li>
                    <li>Notify third parties if we've shared the incorrect data</li>
                    <li>Provide confirmation of the changes made</li>
                  </ul>
                </div>
              </div>

              <div className="legal-section">
                <h3 className="legal-section-title">Right to Erasure (Article 17) - 'Right to be Forgotten'</h3>
                <p className="legal-paragraph">You may request that we delete your personal data in certain circumstances:</p>
                <div className="legal-subsection">
                  <h4 className="legal-subsection-title">When You Can Request Deletion</h4>
                  <ul className="legal-list">
                    <li>The data is no longer necessary for the original purpose</li>
                    <li>You withdraw consent and there's no other legal basis</li>
                    <li>Your data has been unlawfully processed</li>
                    <li>Deletion is required for compliance with a legal obligation</li>
                    <li>You object to processing and there are no overriding legitimate grounds</li>
                  </ul>
                </div>
                <div className="legal-subsection">
                  <h4 className="legal-subsection-title">When We May Not Delete Your Data</h4>
                  <ul className="legal-list">
                    <li>We need it to comply with legal obligations</li>
                    <li>It's required for the establishment or defense of legal claims</li>
                    <li>We have overriding legitimate interests</li>
                    <li>It's necessary for the performance of a contract</li>
                  </ul>
                </div>
              </div>

              <div className="legal-section">
                <h3 className="legal-section-title">Right to Data Portability (Article 20)</h3>
                <p className="legal-paragraph">
                  Where technically feasible, you have the right to receive your personal data in a structured, commonly used, machine-readable format and transmit it to another data controller.
                </p>
                <div className="legal-subsection">
                  <h4 className="legal-subsection-title">When This Right Applies</h4>
                  <ul className="legal-list">
                    <li>Processing is based on consent or contract</li>
                    <li>Processing is carried out by automated means</li>
                    <li>It doesn't adversely affect the rights of others</li>
                  </ul>
                </div>
              </div>

              <div className="legal-section">
                <h3 className="legal-section-title">Right to Object (Article 21)</h3>
                <p className="legal-paragraph">You have the right to object to processing of your personal data in certain circumstances:</p>
                <div className="legal-subsection">
                  <h4 className="legal-subsection-title">Absolute Right to Object</h4>
                  <ul className="legal-list">
                    <li>Direct marketing communications</li>
                    <li>Profiling related to direct marketing</li>
                    <li>Automated decision-making that significantly affects you</li>
                  </ul>
                </div>
              </div>

              <div className="legal-section">
                <h3 className="legal-section-title">How to Exercise Your Rights</h3>
                <div className="legal-subsection">
                  <h4 className="legal-subsection-title">Contact Information</h4>
                  <p className="legal-paragraph">To exercise any of these rights, please contact us:</p>
                  <p className="legal-paragraph">
                    • Email: privacy@inetfiresecurity.co.uk<br/>
                    • Phone: [Your Phone Number]<br/>
                    • Post: Data Protection Officer, [Your Business Address]
                  </p>
                </div>
                <div className="legal-subsection">
                  <h4 className="legal-subsection-title">Our Response Times</h4>
                  <ul className="legal-list">
                    <li>Initial acknowledgment: Within 72 hours</li>
                    <li>Full response: Within one month</li>
                    <li>Complex requests: Up to three months (we'll explain why)</li>
                    <li>Urgent requests: We'll prioritize appropriately</li>
                  </ul>
                </div>
              </div>

              <div className="legal-section">
                <h3 className="legal-section-title">Right to Complain</h3>
                <p className="legal-paragraph">
                  If you're not satisfied with how we handle your request or believe we're not complying with data protection law, you have the right to complain to the supervisory authority.
                </p>
                <div className="legal-subsection">
                  <h4 className="legal-subsection-title">UK Information Commissioner's Office (ICO)</h4>
                  <p className="legal-paragraph">
                    Website: ico.org.uk<br/>
                    Helpline: 0303 123 1113<br/>
                    Post: Information Commissioner's Office, Wycliffe House, Water Lane, Wilmslow, Cheshire SK9 5AF
                  </p>
                  <p className="legal-paragraph">
                    The ICO provides free, independent advice and can investigate complaints about data protection violations.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default GdprRights;