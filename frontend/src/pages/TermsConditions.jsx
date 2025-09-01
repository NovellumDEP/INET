// src/pages/TermsConditions.jsx
import React from 'react';
import './styles/legal.css';

const TermsConditions = () => {
  return (
    <div className="legal-page">
      {/* Hero Section */}
      <section className="legal-hero">
        <div className="legal-hero-content">
          <h1 className="legal-hero-title">Terms & Conditions</h1>
          <p className="legal-hero-subtitle">
            The terms governing our services and your use of our website
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
                <h3 className="legal-section-title">Agreement to Terms</h3>
                <p className="legal-paragraph">
                  These Terms and Conditions ('Terms') govern your use of INET Fire & Security Limited's services and website. By engaging our services or using our website, you agree to be bound by these Terms.
                </p>
                <p className="legal-paragraph">
                  If you do not agree with these Terms, please do not use our services or website.
                </p>
              </div>

              <div className="legal-section">
                <h3 className="legal-section-title">Company Information</h3>
                <p className="legal-paragraph">
                  INET Fire & Security Limited is a company registered in England and Wales.
                </p>
                <p className="legal-paragraph">
                  Company Registration Number: 15877056<br/>
                  Our Area: Herefordshire <br/>
                  
                </p>
              </div>

              <div className="legal-section">
                <h3 className="legal-section-title">Services Provided</h3>
                <div className="legal-subsection">
                  <h4 className="legal-subsection-title">Fire Safety Services</h4>
                  <ul className="legal-list">
                    <li>Fire detection system design, installation, and maintenance</li>
                    <li>Fire suppression system installation and servicing</li>
                    <li>Emergency lighting installation and testing</li>
                    <li>Fire risk assessments and compliance certification</li>
                  </ul>
                </div>
                <div className="legal-subsection">
                  <h4 className="legal-subsection-title">Security Services</h4>
                  <ul className="legal-list">
                    <li>CCTV system design, installation, and maintenance</li>
                    <li>Access control system installation and programming</li>
                    <li>Intruder alarm system installation and monitoring</li>
                    <li>Security gate and barrier installation</li>
                  </ul>
                </div>
              </div>

              <div className="legal-section">
                <h3 className="legal-section-title">Service Terms</h3>
                <div className="legal-subsection">
                  <h4 className="legal-subsection-title">Quotations and Pricing</h4>
                  <p className="legal-paragraph">
                    All quotations are valid for 30 days unless otherwise stated. Prices exclude VAT unless explicitly stated. We reserve the right to adjust pricing for changes in scope, materials costs, or regulatory requirements.
                  </p>
                </div>
                <div className="legal-subsection">
                  <h4 className="legal-subsection-title">Payment Terms</h4>
                  <p className="legal-paragraph">
                    Payment terms are net 14 days from invoice date unless otherwise agreed in writing. Late payment charges may apply in accordance with the Late Payment of Commercial Debts (Interest) Act 1998.
                  </p>
                </div>
                <div className="legal-subsection">
                  <h4 className="legal-subsection-title">Cancellation Policy</h4>
                  <p className="legal-paragraph">
                    Service cancellations must be provided in writing with 48 hours notice. Cancellation fees may apply for work already commenced or materials ordered.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h3 className="legal-section-title">Customer Obligations</h3>
                <p className="legal-paragraph">You agree to:</p>
                <p className="legal-paragraph">
                  • Provide accurate information about your property and requirements<br/>
                  • Ensure safe access to work areas during installation and maintenance<br/>
                  • Comply with all system operating instructions and safety procedures<br/>
                  • Notify us immediately of any system faults or security incidents<br/>
                  • Maintain adequate insurance coverage for your property and systems
                </p>
              </div>

              <div className="legal-section">
                <h3 className="legal-section-title">Warranties and Guarantees</h3>
                <div className="legal-subsection">
                  <h4 className="legal-subsection-title">Installation Warranty</h4>
                  <p className="legal-paragraph">
                    We provide a 12-month warranty on all installation work from the date of completion. This covers defects in workmanship but excludes damage from misuse, environmental factors, or third-party interference.
                  </p>
                </div>
                <div className="legal-subsection">
                  <h4 className="legal-subsection-title">Equipment Warranty</h4>
                  <p className="legal-paragraph">
                    Equipment warranties are provided by manufacturers and range from 1-5 years depending on the product. We will assist with warranty claims during this period.
                  </p>
                </div>
              </div>

              <div className="legal-section">
                <h3 className="legal-section-title">Limitation of Liability</h3>
                <p className="legal-paragraph">
                  Our liability is limited to the maximum extent permitted by law. We will not be liable for:
                </p>
                <p className="legal-paragraph">
                  • Indirect, consequential, or special damages<br/>
                  • Loss of profits, data, or business interruption<br/>
                  • Damages exceeding the total value of services provided<br/>
                  • Issues arising from customer misuse or third-party actions
                </p>
                <p className="legal-paragraph">
                  This limitation does not affect your statutory rights as a consumer or our liability for death or personal injury caused by negligence.
                </p>
              </div>

              <div className="legal-section">
                <h3 className="legal-section-title">Governing Law</h3>
                <p className="legal-paragraph">
                  These Terms are governed by English law and subject to the exclusive jurisdiction of English courts. Any disputes will be resolved through the English legal system.
                </p>
                <p className="legal-paragraph">
                  If any provision of these Terms is found to be unenforceable, the remaining provisions will continue in full force.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default TermsConditions;