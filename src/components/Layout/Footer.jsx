import React from 'react'
import { Link } from 'react-router-dom'

const Footer = () => {
  return (
    <footer className="footer bg-primary-100 py-12">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="footer-content flex flex-col md:flex-row justify-between items-center mb-8">
          <div className="footer-logo mb-6 md:mb-0">
            <Link to="/" className="text-2xl font-bold">
              <span className="text-accent-green">Geek Room</span>
              <span className="text-white"> ADGIPS</span>
            </Link>
          </div>
          <div className="footer-links flex flex-wrap justify-center gap-6">
            <Link to="/about" className="text-white/80 hover:text-accent-green transition-colors">About</Link>
            <Link to="/events" className="text-white/80 hover:text-accent-green transition-colors">Events</Link>
            <Link to="/gallery" className="text-white/80 hover:text-accent-green transition-colors">Gallery</Link>
            <Link to="/contact" className="text-white/80 hover:text-accent-green transition-colors">Contact</Link>
          </div>
        </div>
        <div className="footer-bottom text-center border-t border-white/10 pt-8">
          <p className="text-white/60">&copy; 2025 Geek Room Adgips. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer