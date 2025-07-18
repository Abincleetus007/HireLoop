import React from 'react';
import './Navbar.css';

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="logo">DriveU</div>
      <ul className="nav-links">
        <li>Home</li>
        <li>Services</li>
        <li>Why DriveU</li>
        <li>Testimonials</li>
        <li>Contact</li>
      </ul>
    </nav>
  );
};

export default Navbar;
