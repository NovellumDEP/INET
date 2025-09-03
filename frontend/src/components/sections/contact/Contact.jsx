// src/components/Contact.jsx
import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';
import './styles/contact.css';

const Contact = () => {
  const [state, handleSubmit] = useForm("mkgvnpvy");

  if (state.succeeded) {
    return (
      <section className="contact-section">
        <div className="contact-container">
          <div className="contact-header">
            <h2 className="contact-title">MESSAGE SENT SUCCESSFULLY!</h2>
            <div className="contact-underline"></div>
            <p className="contact-subtitle">
              Thank you for your security consultation request. We'll get back to you within 24 hours.
            </p>
            <button 
              onClick={() => window.location.reload()} 
              className="contact-submit-btn"
              style={{ marginTop: '20px' }}
            >
              <span>SEND ANOTHER MESSAGE</span>
              <div className="btn-arrow">→</div>
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="contact-section">
      <div className="contact-container">
        
        {/* Header */}
        <div className="contact-header">
          <h2 className="contact-title">GET IN TOUCH WITH US</h2>
          <div className="contact-underline"></div>
          <p className="contact-subtitle">
            Secure your property today. Get a free consultation and customized security quote.
          </p>
        </div>

        {/* Content Grid */}
        <div className="contact-content-grid">
          
          {/* Left Side - Contact Form */}
          <div className="contact-form-section">
            <form className="contact-form" onSubmit={handleSubmit}>
              
              {/* Name Row - Desktop: Side by side, Mobile: Stacked */}
              <div className="name-row">
                <div className="form-group">
                  <label htmlFor="firstName" className="form-label">First Name</label>
                  <input
                    type="text"
                    id="firstName"
                    name="firstName"
                    className="form-input"
                    placeholder="Your first name"
                    required
                  />
                  <ValidationError 
                    prefix="First Name" 
                    field="firstName"
                    errors={state.errors}
                  />
                </div>

                <div className="form-group">
                  <label htmlFor="lastName" className="form-label">Last Name</label>
                  <input
                    type="text"
                    id="lastName"
                    name="lastName"
                    className="form-input"
                    placeholder="Your last name"
                    required
                  />
                  <ValidationError 
                    prefix="Last Name" 
                    field="lastName"
                    errors={state.errors}
                  />
                </div>
              </div>

              <div className="form-group">
                <label htmlFor="email" className="form-label">Email</label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="your.email@example.com"
                  required
                />
                <ValidationError 
                  prefix="Email" 
                  field="email"
                  errors={state.errors}
                />
              </div>

              <div className="form-group">
                <label htmlFor="phone" className="form-label">Phone</label>
                <input
                  type="tel"
                  id="phone"
                  name="phone"
                  className="form-input"
                  placeholder="+44 7123 456789"
                />
                <ValidationError 
                  prefix="Phone" 
                  field="phone"
                  errors={state.errors}
                />
              </div>

              <div className="form-group">
                <label htmlFor="message" className="form-label">Security Requirements</label>
                <textarea
                  id="message"
                  name="message"
                  className="form-textarea"
                  placeholder="Tell us about your security needs: CCTV, access control, fire detection, etc..."
                  rows="5"
                  required
                ></textarea>
                <ValidationError 
                  prefix="Message" 
                  field="message"
                  errors={state.errors}
                />
              </div>

              <button 
                type="submit" 
                className="contact-submit-btn"
                disabled={state.submitting}
              >
                <span>{state.submitting ? 'SENDING...' : 'SEND MESSAGE'}</span>
                <div className="btn-arrow">→</div>
              </button>
            </form>
          </div>

          {/* Right Side - Contact Details Box */}
          <div className="contact-details-section">
            <div className="contact-details-box">
              <h3 className="contact-box-title">CONTACT INFO</h3>
              
              <div className="contact-details-list">
                <div className="contact-detail-item">
                  <div className="detail-icon">
                    <Phone size={20} />
                  </div>
                  <div className="detail-content">
                    <h4 className="detail-label">PHONE</h4>
                    <p className="detail-value">03300439011</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="detail-icon">
                    <Mail size={20} />
                  </div>
                  <div className="detail-content">
                    <h4 className="detail-label">EMAIL</h4>
                    <p className="detail-value">info@inetfireandsecurity.com</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="detail-icon">
                    <MapPin size={20} />
                  </div>
                  <div className="detail-content">
                    <h4 className="detail-label">LOCATION</h4>
                    <p className="detail-value">Hereford, England</p>
                  </div>
                </div>

                <div className="contact-detail-item">
                  <div className="detail-icon">
                    <Clock size={20} />
                  </div>
                  <div className="detail-content">
                    <h4 className="detail-label">RESPONSE TIME</h4>
                    <p className="detail-value">Within 24 hours</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Contact;