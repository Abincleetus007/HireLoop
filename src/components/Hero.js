// src/components/Hero.js
import React from 'react';

const Hero = () => {
  return (
    <section className="hero" id="home">
      <div className="hero-content">
        <h1>HIRE DRIVERS</h1>
        <h2>Hire Temporary Drivers at Your Convenience</h2>
         <button
  className="book-now-btn"
  onClick={() =>
    window.open(
      'https://docs.google.com/forms/d/e/1FAIpQLSdY7aHZGW5nA7RImkbFZHNezR2GAH9IDFeHrFdQKk1m-wQFSA/viewform?usp=header',
      '_blank',
      'noopener,noreferrer'
    )
  }
>
  book-now
</button>
      </div>
    </section>
  );
};

export default Hero;