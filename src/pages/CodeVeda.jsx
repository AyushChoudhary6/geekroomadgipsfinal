import React, { useState, useEffect } from 'react';
import cv from '../assets/cv.jpeg';
import { motion } from 'framer-motion';
import one from '../assets/one.jpg';
import two from '../assets/two.jpg';
import three from '../assets/three.jpg';
import five from '../assets/five.jpg';
import six from '../assets/six.jpg';
import seven from '../assets/seven.jpg';
import eight from '../assets/eight.jpg';
import nine from '../assets/nine.jpg';
import ten from '../assets/ten.jpg';
import eleven from '../assets/eleven.jpg';

function CodeVeda() {
  const [showLoader, setShowLoader] = useState(true);

  const galleryImages = [
    {
      src: one,
      placeholder: '🎬',
      caption: 'Opening Ceremony - Setting the stage for innovation'
    },
    {
      src: two,
      placeholder: '💡',
      caption: 'Teams brainstorming creative solutions'
    },
    {
      src: three,
      placeholder: '💻',
      caption: 'Intensive coding and development'
    },
    {
      src: five,
      placeholder: '🤝',
      caption: 'Collaborative problem solving'
    },
    {
      src: six,
      placeholder: '📊',
      caption: 'Final project presentations'
    },
    {
      src: seven,
      placeholder: '🏆',
      caption: 'Winners announcement ceremony'
    },
    {
      src: eight,
      placeholder: '🎉',
      caption: 'Celebrating achievement and innovation'
    },
    {
      src: nine,
      placeholder: '🌐',
      caption: 'Networking and knowledge sharing'
    },
    {
      src: ten,
      placeholder: '👥',
      caption: 'All participants - Code Veda 2025'
    },
    {
      src: eleven,
      placeholder: '🔧',
      caption: 'Technical demonstrations and demos'
    }
  ];

  // SVG Icons
  const InnovationIcon = () => (
    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
    </svg>
  );

  const CollaborationIcon = () => (
    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
    </svg>
  );

  const ExperienceIcon = () => (
    <svg className="w-8 h-8 text-green-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 10l-2 1m0 0l-2-1m2 1v2.5M20 7l-2 1m2-1l-2-1m2 1v2.5M14 4l-2-1-2 1M4 7l2-1M4 7l2 1M4 7v2.5M12 21l-2-1m2 1l2-1m-2 1v-2.5M6 18l-2-1v-2.5M18 18l2-1v-2.5" />
    </svg>
  );

  const TrophyIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4-1" />
    </svg>
  );

  const MedalIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
    </svg>
  );

  const StarIcon = ({ className = "w-6 h-6" }) => (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
    </svg>
  );

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 1500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <div className="codeveda-page min-h-screen bg-gradient-to-br from-gray-900 to-black text-white pt-20">
      {/* Loading Overlay */}
      {showLoader && (
        <div className="page-loader fixed inset-0 bg-gradient-to-br from-gray-900 to-black flex items-center justify-center z-50">
          <div className="loader-content text-center">
            <h2 className="loader-title text-4xl font-bold text-green-400 mb-4">Code Veda</h2>
            <div className="loader-progress w-80 h-1 bg-green-400/20 rounded-full overflow-hidden mb-4">
              <div
                className="loader-progress-bar h-full bg-gradient-to-r from-green-400 to-green-300 rounded-full transition-all duration-300"
                style={{ width: '100%' }}
              ></div>
            </div>
            <p className="loader-text text-white/70">
              Loading amazing content...
            </p>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <section className="event-hero min-h-[70vh] flex items-center justify-center bg-gradient-to-br from-gray-800 to-gray-900 relative overflow-hidden py-20">
        <div className="absolute inset-0">
          <img
            src={cv}
            alt="Event Hero"
            className="w-full h-full object-cover opacity-70" />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/50 via-black/50 to-blue-900/50"></div>
        </div>

        <div className="hero-content relative z-10 text-center max-w-6xl px-8">
          <span className="event-badge bg-red-500/25 text-red-300 px-6 py-3 rounded-full text-sm font-semibold uppercase border border-red-500/40 shadow-lg shadow-red-500/20 mb-6">
            HACKATHON
          </span>
          <h1 className="event-title text-5xl md:text-7xl font-black text-white my-6">
            Code Veda
          </h1>
          <p className="event-subtitle text-xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto">
            8-hour coding marathon where innovation meets determination. 150+ participants came together to build solutions that could change the world.
          </p>

          {/* Stats Grid */}
          <div className="event-stats grid grid-cols-2 md:grid-cols-4 gap-6 my-12 max-w-4xl mx-auto">
            <div className="stat-item bg-gray-800/50 border border-green-500/30 rounded-2xl text-center p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-500/60">
              <span className="stat-number block text-3xl md:text-4xl font-black text-green-400 mb-2">13</span>
              <span className="stat-label text-white/70 text-sm uppercase font-semibold">SEPTEMBER</span>
            </div>
            <div className="stat-item bg-gray-800/50 border border-green-500/30 rounded-2xl text-center p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-500/60">
              <span className="stat-number block text-3xl md:text-4xl font-black text-green-400 mb-2">2000+</span>
              <span className="stat-label text-white/70 text-sm uppercase font-semibold">PARTICIPANTS</span>
            </div>
            <div className="stat-item bg-gray-800/50 border border-green-500/30 rounded-2xl text-center p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-500/60">
              <span className="stat-number block text-3xl md:text-4xl font-black text-green-400 mb-2">500+</span>
              <span className="stat-label text-white/70 text-sm uppercase font-semibold">PROJECTS</span>
            </div>
            <div className="stat-item bg-gray-800/50 border border-green-500/30 rounded-2xl text-center p-6 transition-all duration-300 hover:-translate-y-1 hover:border-green-500/60">
              <span className="stat-number block text-3xl md:text-4xl font-black text-green-400 mb-2">8</span>
              <span className="stat-label text-white/70 text-sm uppercase font-semibold">HOURS</span>
            </div>
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <section className="highlights-section py-16 bg-gray-800/30">
        <div className="container max-w-6xl mx-auto px-4">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Left Column */}
            <div className="space-y-8">
              <div className="highlight-card bg-gray-800/50 border border-green-500/20 rounded-2xl p-8 transition-all duration-300 hover:border-green-500/40">
                <div className="flex items-center justify-center mb-4">
                  <InnovationIcon />
                </div>
                <h3 className="text-2xl font-bold text-green-400 mb-4 text-center">Innovation at its Best</h3>
                <p className="text-white/80 leading-relaxed text-center">
                  Participants brought creative solutions to real-world problems, showcasing cutting-edge technologies including AI, ML, blockchain, and IoT applications.
                </p>
              </div>

              <div className="highlight-card bg-gray-800/50 border border-green-500/20 rounded-2xl p-8 transition-all duration-300 hover:border-green-500/40">
                <div className="flex items-center justify-center mb-4">
                  <CollaborationIcon />
                </div>
                <h3 className="text-2xl font-bold text-green-400 mb-4 text-center">Collaborative Spirit</h3>
                <p className="text-white/80 leading-relaxed text-center">
                  Teams from diverse backgrounds worked together, sharing knowledge and supporting each other throughout the intensive 8-hour coding session.
                </p>
              </div>

              <div className="highlight-card bg-gray-800/50 border border-green-500/20 rounded-2xl p-8 transition-all duration-300 hover:border-green-500/40">
                <div className="flex items-center justify-center mb-4">
                  <ExperienceIcon />
                </div>
                <h3 className="text-2xl font-bold text-green-400 mb-4 text-center">Amazing Experience</h3>
                <p className="text-white/80 leading-relaxed text-center">
                  From networking sessions to mentor guidance, participants gained valuable insights, made lasting connections, and took their first steps into the tech industry.
                </p>
              </div>
            </div>

            {/* Right Column */}
            <div className="space-y-8">
              <div className="highlight-card bg-gray-800/50 border border-green-500/20 rounded-2xl p-8 transition-all duration-300 hover:border-green-500/40">
                <h3 className="text-2xl font-bold text-green-400 mb-4">Problem Categories</h3>
                <div className="space-y-4">
                  <div className="category-item p-4 bg-gray-700/30 rounded-lg border-l-4 border-green-400">
                    <h4 className="font-semibold text-white mb-2">Healthcare</h4>
                    <p className="text-white/70 text-sm">Digital health solutions</p>
                  </div>
                  <div className="category-item p-4 bg-gray-700/30 rounded-lg border-l-4 border-blue-400">
                    <h4 className="font-semibold text-white mb-2">Education</h4>
                    <p className="text-white/70 text-sm">Learning platforms</p>
                  </div>
                  <div className="category-item p-4 bg-gray-700/30 rounded-lg border-l-4 border-emerald-400">
                    <h4 className="font-semibold text-white mb-2">Sustainability</h4>
                    <p className="text-white/70 text-sm">Green technology</p>
                  </div>
                  <div className="category-item p-4 bg-gray-700/30 rounded-lg border-l-4 border-purple-400">
                    <h4 className="font-semibold text-white mb-2">Smart Cities</h4>
                    <p className="text-white/70 text-sm">Urban solutions</p>
                  </div>
                </div>
              </div>

              <div className="highlight-card bg-gray-800/50 border border-green-500/20 rounded-2xl p-8 transition-all duration-300 hover:border-green-500/40">
                <h3 className="text-2xl font-bold text-green-400 mb-4">Tech Stack</h3>
                <p className="text-white/80 leading-relaxed mb-4">
                  Participants used various technologies including React, Node.js, Python, Flutter, TensorFlow, AWS, Firebase, and many more cutting-edge tools.
                </p>
                <div className="tech-tags flex flex-wrap gap-2 mt-4">
                  {['React', 'Node.js', 'Python', 'Flutter', 'TensorFlow', 'AWS', 'Firebase'].map((tech, index) => (
                    <span key={index} className="px-3 py-1 bg-green-500/20 text-green-300 rounded-full text-sm border border-green-500/30">
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              <div className="highlight-card bg-gray-800/50 border border-green-500/20 rounded-2xl p-8 transition-all duration-300 hover:border-green-500/40">
                <h3 className="text-2xl font-bold text-green-400 mb-4">Judging Criteria</h3>
                <p className="text-white/80 leading-relaxed">
                  Projects were evaluated based on innovation, technical implementation, user experience, impact potential, and presentation quality.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Gallery Section */}
      <section className="gallery-section py-16 bg-gray-800/30">
        <div className="container max-w-7xl mx-auto px-4">
          <div className="section-header text-center mb-16">
            <h2 className="text-4xl font-bold mb-4 text-green-400">Event Gallery</h2>
            <p className="text-xl text-white/80">Capturing the moments of innovation and collaboration</p>
          </div>

          <div className="gallery-grid grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {galleryImages.map((image, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.4, delay: index * 0.05 }}
                className="gallery-item group relative bg-gray-800 rounded-2xl overflow-hidden aspect-square transition-all duration-300 hover:-translate-y-2 hover:shadow-lg hover:shadow-green-500/20"
              >
                {/* Actual Image */}
                <img
                  src={image.src}
                  alt={image.caption}
                  className="w-full h-full object-cover"
                />
                
                <div className="gallery-overlay absolute inset-0 bg-gradient-to-b from-transparent to-black/80 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
                  <div className="gallery-caption text-white font-semibold text-lg">
                    {image.caption}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}

export default CodeVeda;