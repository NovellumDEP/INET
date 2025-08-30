// src/components/buttons/PrimaryButton.jsx
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './styles/Primary.css';

const PrimaryButton = ({ children, onClick, to, className = '', ...props }) => {
  const navigate = useNavigate();

  const handleClick = (e) => {
    if (onClick) {
      onClick(e);
    }
    if (to) {
      navigate(to);
      window.scrollTo(0, 0);
    }
  };

  return (
    <button 
      className={`primary-button ${className}`}
      onClick={handleClick}
      {...props}
    >
      <span>{children}</span>
    </button>
  );
};

export default PrimaryButton;