import React, { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    <nav className="navbar-container">
      <Link to="/" className="nav-logo">
        <img src="/geekroom_logo.png" alt="Geek Room Logo" className="nav-logo-image" />
        <span>Geek Room</span>
      </Link>

      {/* Hamburger Menu Button */}
      <button 
        className={`hamburger ${isMenuOpen ? 'active' : ''}`}
        onClick={toggleMenu}
        aria-label="Toggle menu"
      >
        <span></span>
        <span></span>
        <span></span>
      </button>

      <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
        <li className="nav-item">
          <NavLink to="/home" className="nav-link" onClick={closeMenu}>
            Home
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/about" className="nav-link" onClick={closeMenu}>
            About
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/events" className="nav-link" onClick={closeMenu}>
            Events
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/team" className="nav-link" onClick={closeMenu}>
            Team
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/gallery" className="nav-link" onClick={closeMenu}>
            Gallery
          </NavLink>
        </li>
        <li className="nav-item">
          <NavLink to="/contact" className="nav-link" onClick={closeMenu}>
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;