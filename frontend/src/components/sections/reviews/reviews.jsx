// src/components/Reviews.jsx
import React, { useState, useEffect, useRef } from 'react';
import { Star, Quote } from 'lucide-react';
import './styles/reviews.css';

const Reviews = () => {
  const [isVisible, setIsVisible] = useState(false);
  const sectionRef = useRef(null);

  const reviews = [
    {
      id: 1,
      name: 'Sarah Mitchell',
      location: 'Surrey',
      rating: 5,
      review: 'Outstanding service from start to finish. The team installed our home security system professionally and explained everything clearly. We feel so much safer knowing our family is protected.',
      service: 'Home Security System',
      date: '2 months ago'
    },
    {
      id: 2,
      name: 'David Thompson',
      location: 'Manchester',
      rating: 5,
      review: 'Exceptional fire safety installation for our office building. The engineers were knowledgeable, punctual, and completed the work with minimal disruption. Highly recommend their services.',
      service: 'Fire Safety System',
      date: '3 months ago'
    },
    {
      id: 3,
      name: 'Emma Davies',
      location: 'Birmingham',
      rating: 5,
      review: 'Quick response time when our alarm was triggered. The monitoring team contacted us immediately and dispatched security. Professional service that gives us peace of mind.',
      service: 'CCTV & Monitoring',
      date: '1 month ago'
    },
    {
      id: 4,
      name: 'Michael Brown',
      location: 'Leeds',
      rating: 5,
      review: 'Comprehensive security solution for our warehouse. The access control system works flawlessly and the team provided excellent training. Worth every penny for protecting our assets.',
      service: 'Industrial Security',
      date: '4 months ago'
    },
    {
      id: 5,
      name: 'Lisa Parker',
      location: 'London',
      rating: 5,
      review: 'Smart home integration exceeded our expectations. The app control is intuitive and the automated features work seamlessly. Great value and professional installation.',
      service: 'Smart Home Security',
      date: '6 weeks ago'
    },
    {
      id: 6,
      name: 'James Wilson',
      location: 'Essex',
      rating: 5,
      review: 'Reliable 24/7 monitoring service. Had a false alarm at 2am and they handled it perfectly - called us first, then police when needed. Professional and reassuring service.',
      service: 'Security Monitoring',
      date: '2 weeks ago'
    }
  ];

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

  const renderStars = (rating) => {
    return Array.from({ length: 5 }, (_, index) => (
      <Star
        key={index}
        size={16}
        className={index < rating ? 'star-filled' : 'star-empty'}
      />
    ));
  };

  return (
    <section 
      ref={sectionRef} 
      className={`reviews-section ${isVisible ? 'animate' : ''}`}
    >
      <div className="reviews-container">
        {/* Header */}
        <div className="reviews-header">
          <h2 className="reviews-title">WHAT OUR CLIENTS SAY</h2>
          <div className="reviews-title-line"></div>
          <p className="reviews-subtitle">
            Trusted by thousands of homes and businesses across the UK
          </p>
        </div>

        {/* Reviews Grid */}
        <div className="reviews-grid">
          {reviews.map((review, index) => (
            <div 
              key={review.id} 
              className="review-card"
              style={{ 
                animationDelay: isVisible ? `${index * 0.1}s` : '0s' 
              }}
            >
              <div className="review-header">
                <Quote className="quote-icon" size={24} />
                <div className="review-rating">
                  {renderStars(review.rating)}
                </div>
              </div>

              <div className="review-content">
                <p className="review-text">"{review.review}"</p>
              </div>

              <div className="review-footer">
                <div className="reviewer-info">
                  <h4 className="reviewer-name">{review.name}</h4>
                  <p className="reviewer-location">{review.location}</p>
                </div>
                <div className="review-meta">
                  <span className="review-service">{review.service}</span>
                  <span className="review-date">{review.date}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Trust Stats */}
        <div className="reviews-stats">
          <div className="stat-item">
            <div className="stat-number">4.9</div>
            <div className="stat-label">Average Rating</div>
            <div className="stat-stars">
              {renderStars(5)}
            </div>
          </div>
          <div className="stat-item">
            <div className="stat-number">500+</div>
            <div className="stat-label">5-Star Reviews</div>
          </div>
          <div className="stat-item">
            <div className="stat-number">98%</div>
            <div className="stat-label">Customer Satisfaction</div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Reviews;