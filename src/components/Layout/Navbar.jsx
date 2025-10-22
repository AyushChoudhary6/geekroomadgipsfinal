import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from '../../assets/logo.jpeg';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const navLinks = [
    { path: '/home', label: 'Home' },
    { path: '/events', label: 'Events' },
    { path: '/team', label: 'Team' },
    { path: '/about', label: 'About' },
  ];

  const isActive = (path) => location.pathname === path;

  return (
    <nav className="fixed top-0 w-full bg-black/80 backdrop-blur-md z-50 border-b border-white/10">
      <div className="container-custom">
        <div className="flex items-center justify-between py-4">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-3 text-xl font-bold">
            <img src={logo} alt="Geek Room Logo" className="w-10 h-10 rounded-full" />

            <span className="text-secondary">Geek Room</span>
            <span className="text-white">ADGIPS</span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link
                key={link.path}
                to={link.path}
                className={`font-medium transition-all duration-300 ${
                  isActive(link.path)
                    ? 'text-secondary'
                    : 'text-white/70 hover:text-secondary'
                }`}
              >
                {link.label}
              </Link>
            ))}
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden p-2 rounded-lg border border-secondary/20 bg-secondary/10"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            <div className="w-6 h-6 flex flex-col justify-center gap-1">
              <span className={`w-full h-0.5 bg-secondary transition-all ${isMenuOpen ? 'rotate-45 translate-y-1.5' : ''}`}></span>
              <span className={`w-full h-0.5 bg-secondary transition-all ${isMenuOpen ? 'opacity-0' : ''}`}></span>
              <span className={`w-full h-0.5 bg-secondary transition-all ${isMenuOpen ? '-rotate-45 -translate-y-1.5' : ''}`}></span>
            </div>
          </button>
        </div>

        {/* Mobile Navigation */}
        {isMenuOpen && (
          <div className="md:hidden absolute top-full left-0 w-full bg-black/95 backdrop-blur-lg border-b border-white/10">
            <div className="py-4 space-y-4">
              {navLinks.map((link) => (
                <Link
                  key={link.path}
                  to={link.path}
                  className={`block px-6 py-3 font-medium transition-all ${
                    isActive(link.path)
                      ? 'text-secondary bg-secondary/10 border-r-2 border-secondary'
                      : 'text-white/70 hover:text-secondary hover:bg-white/5'
                  }`}
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.label}
                </Link>
              ))}
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;