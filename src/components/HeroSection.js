import React from 'react';
import '../styles/HeroSection.css';

function HeroSection() {
  const handleButtonClick = () => {
    window.location.href = '/contact';
  };

  return (
    <section className="hero-section">
      <h1>Welcome to WebLingo</h1>
      <p>Your Online Language Hub</p>
      <button className="hero-button" onClick={handleButtonClick}>Get Started</button>
    </section>
  );
}

export default HeroSection;
