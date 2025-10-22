import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import cv from '../assets/cv.jpeg';
import vd from '../assets/vd.jpg';

const Events = () => {
  const [activeSection, setActiveSection] = useState('upcoming-events');

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  const upcomingEvents = [
    {
      id: 1,
      title: 'Vedathon',
      category: 'Ideathon',
      date: '1 November',
      time: 'Timings: Revealing Soon',
      location: 'OPS Tree Global Noida',
      prize: 'Prize: Revealing Soon',
      price: 'Free',
      link: '/events/vedathon',
      image: vd,
    },
  ];

  const pastEvents = [
    {
      id: 1,
      title: 'Code Veda',
      category: 'Hackathon',
      date: '13 September 2025',
      description:
        '8-hour coding marathon with 150+ participants building innovative solutions for real-world problems.',
      stats: {
        participants: '2000+',
        projects: '500+',
      },
      image: cv,
      link: '/events/codeveda',
      status: 'Completed',
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } },
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } },
  };

  const cardHoverVariants = {
    initial: { scale: 1, y: 0 },
    hover: { scale: 1.05, y: -8, transition: { duration: 0.3, ease: 'easeOut' } },
  };

  const buttonHoverVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.1, transition: { duration: 0.2, ease: 'easeOut' } },
    tap: { scale: 0.95 },
  };

  const navButtonVariants = {
    initial: { scale: 1 },
    hover: { scale: 1.05 },
    tap: { scale: 0.95 },
  };

  const scrollToSection = (sectionId) => {
    setActiveSection(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      const navbarHeight = 80;
      const offsetTop = element.offsetTop - navbarHeight - 20;
      window.scrollTo({ top: offsetTop, behavior: 'smooth' });
    }
  };

  useEffect(() => {
    // Only scroll to section if it's not the initial load
    if (activeSection !== 'upcoming-events') {
      const element = document.getElementById(activeSection);
      if (element) {
        const navbarHeight = 80;
        const offsetTop = element.offsetTop - navbarHeight - 20;
        window.scrollTo({ top: offsetTop, behavior: 'smooth' });
      }
    }
  }, [activeSection]);

  return (
    <div className="events-page min-h-screen bg-gradient-to-br from-gray-900 to-black text-white pt-24">
      {/* Header Section */}
      <motion.div
        className="container mx-auto px-4 py-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-5xl font-bold mb-4">Geek Room Adgips</h1>
        <p className="text-xl text-gray-300">Innovate. Collaborate. Elevate.</p>
      </motion.div>

      {/* Events Navigation */}
      <motion.div
        className="events-navigation-container flex justify-center mb-16 pt-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="events-navigation flex bg-gray-800 rounded-full p-2">
          <motion.button
            variants={navButtonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className={`events-nav-btn flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
              activeSection === 'upcoming-events'
                ? 'bg-green-500 text-black font-bold'
                : 'text-gray-300 hover:text-white'
            }`}
            onClick={() => scrollToSection('upcoming-events')}
          >
            <span className="nav-icon mr-2">📅</span>
            <span className="nav-text">Upcoming Events</span>
            <span className="nav-count ml-2 bg-black/30 px-2 py-1 rounded-full text-xs">
              {upcomingEvents.length}
            </span>
          </motion.button>
          <motion.button
            variants={navButtonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className={`events-nav-btn flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
              activeSection === 'past-events'
                ? 'bg-green-500 text-black font-bold'
                : 'text-gray-300 hover:text-white'
            }`}
            onClick={() => scrollToSection('past-events')}
          >
            <span className="nav-icon mr-2">📚</span>
            <span className="nav-text">Past Events</span>
            <span className="nav-count ml-2 bg-black/30 px-2 py-1 rounded-full text-xs">
              {pastEvents.length}
            </span>
          </motion.button>
        </div>
      </motion.div>

      {/* Upcoming Events Section */}
      <section id="upcoming-events" className="py-8 mb-12">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center border-b-2 border-green-500 pb-4 inline-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Upcoming Events
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {upcomingEvents.map((event) => (
              <motion.div
                key={event.id}
                variants={itemVariants}
                whileHover="hover"
                initial="initial"
              >
                <Link to={event.link} className="event-card-link block group">
                  <motion.div
                    className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-3xl overflow-hidden relative"
                    variants={cardHoverVariants}
                  >
                    <div className="relative w-full h-56 overflow-hidden">
                      <img
                        src={event.image}
                        alt={event.title}
                        className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>

                    <div className="p-8 flex flex-col relative z-10">
                      <div className="event-date bg-gradient-to-br from-green-400 to-green-300 text-black w-20 h-20 rounded-2xl flex flex-col items-center justify-center mb-6 font-bold shadow-lg shadow-green-500/40">
                        <span className="date-day text-3xl">{event.date.split(' ')[0]}</span>
                        <span className="date-month text-sm uppercase">{event.date.split(' ')[1]}</span>
                      </div>

                      <span
                        className={`event-category inline-block px-4 py-2 rounded-full text-xs font-semibold uppercase mb-4 ${
                          event.category === 'Ideathon'
                            ? 'bg-blue-500/25 text-blue-300 border border-blue-500/40'
                            : 'bg-purple-500/25 text-purple-300 border border-purple-500/40'
                        }`}
                      >
                        {event.category}
                      </span>

                      <h3 className="text-2xl font-bold mb-4">{event.title}</h3>

                      <div className="space-y-2 mb-6">
                        <div className="text-white/70 flex items-center gap-2">
                          <span>⏰</span>
                          <span>{event.time}</span>
                        </div>
                        <div className="text-white/70 flex items-center gap-2">
                          <span>📍</span>
                          <span>{event.location}</span>
                        </div>
                        <div className="text-white/70 flex items-center gap-2">
                          <span>🏆</span>
                          <span>{event.prize}</span>
                        </div>
                      </div>

                      <div className="flex justify-between items-center mt-auto">
                        <span className="text-green-400 text-xl font-bold">{event.price}</span>
                        <motion.span
                          className="bg-green-500 text-black text-sm px-6 py-3 rounded-full font-semibold relative overflow-hidden group"
                          variants={buttonHoverVariants}
                          whileHover="hover"
                          whileTap="tap"
                        >
                          <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                          Learn More
                        </motion.span>
                      </div>
                    </div>
                  </motion.div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Past Events Section */}
      <section id="past-events" className="py-8 bg-gray-800/30">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center border-b-2 border-green-500 pb-4 inline-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Past Events
          </motion.h2>

          <motion.div
            className="space-y-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {pastEvents.map((event) => (
              <motion.div
                key={event.id}
                variants={itemVariants}
                whileHover={{ y: -5 }}
                transition={{ duration: 0.3 }}
              >
                <Link to={event.link} className="past-event-card-link block">
                  <div className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 overflow-hidden rounded-3xl hover:shadow-2xl hover:shadow-green-500/20 relative">
                    <div className="absolute inset-0 bg-gradient-to-br from-green-500/5 to-blue-500/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

                    <div className="flex flex-col md:flex-row relative z-10">
                      <div className="md:w-2/5 relative">
                        <motion.img
                          src={event.image}
                          alt={event.title}
                          className="w-full h-64 md:h-full object-cover"
                          whileHover={{ scale: 1.05 }}
                          transition={{ duration: 0.3 }}
                        />
                        <div className="absolute top-4 right-4 bg-green-500/90 text-white px-3 py-1 rounded-full text-sm font-semibold uppercase">
                          {event.status}
                        </div>
                      </div>
                      <div className="md:w-3/5 p-8 flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-2 mb-4 text-green-400 font-semibold">
                            <span className="text-3xl">{event.date.split(' ')[0]}</span>
                            <span className="text-lg">{event.date.split(' ')[1]}</span>
                            <span className="text-white/70">{event.date.split(' ')[2]}</span>
                          </div>
                          <span className="bg-red-500/25 text-red-300 px-4 py-2 rounded-full text-xs font-semibold uppercase">
                            {event.category}
                          </span>
                          <h3 className="text-3xl font-bold my-4">{event.title}</h3>
                          <p className="text-white/80 mb-6 leading-relaxed">{event.description}</p>
                          <div className="flex gap-8 mb-6">
                            <div className="text-center">
                              <span className="block text-2xl font-bold text-green-400">{event.stats.participants}</span>
                              <span className="text-sm text-white/70 uppercase">Participants</span>
                            </div>
                            <div className="text-center">
                              <span className="block text-2xl font-bold text-green-400">{event.stats.projects}</span>
                              <span className="text-sm text-white/70 uppercase">Projects</span>
                            </div>
                          </div>
                        </div>
                        <div>
                          <motion.span
                            className="bg-green-500 text-black text-sm px-6 py-3 rounded-full font-semibold inline-flex items-center gap-2 relative overflow-hidden group"
                            variants={buttonHoverVariants}
                            whileHover="hover"
                            whileTap="tap"
                          >
                            <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
                            Learn More
                          </motion.span>
                        </div>
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Event Guidelines Section */}
      <section className="py-12 bg-gray-800/50">
        <div className="container max-w-4xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            EVENT GUIDELINES
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {[
              {
                title: 'Registration Required',
                content:
                  'Most events require prior registration. Register early to secure your spot as seats are limited.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4" viewBox="0 0 24 24" fill="url(#grad1)">
                    <defs>
                      <linearGradient id="grad1" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#ff6a00"/>
                        <stop offset="100%" stopColor="#ee0979"/>
                      </linearGradient>
                    </defs>
                    <path d="M12 2L2 7l10 5 10-5-10-5zm0 5v13m-7-8h14"/>
                  </svg>
                ),
              },
              {
                title: 'Bring Your ID',
                content:
                  'Valid student or professional ID required for entry. Screenshots of registration confirmations accepted.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4" viewBox="0 0 24 24" fill="url(#grad2)">
                    <defs>
                      <linearGradient id="grad2" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#12c2e9"/>
                        <stop offset="100%" stopColor="#c471ed"/>
                      </linearGradient>
                    </defs>
                    <path d="M12 12c2.21 0 4-1.79 4-4S14.21 4 12 4 8 5.79 8 8s1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"/>
                  </svg>
                ),
              },
              {
                title: 'Bring Your Laptop',
                content:
                  'For workshops and hackathons, bring your laptop with necessary software pre-installed.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4" viewBox="0 0 24 24" fill="url(#grad3)">
                    <defs>
                      <linearGradient id="grad3" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#f7971e"/>
                        <stop offset="100%" stopColor="#ffd200"/>
                      </linearGradient>
                    </defs>
                    <path d="M3 6h18v12H3V6zm0-2a2 2 0 00-2 2v12a2 2 0 002 2h18a2 2 0 002-2V6a2 2 0 00-2-2H3zM8 18h8v2H8v-2z"/>
                  </svg>
                ),
              },
              {
                title: 'Networking Encouraged',
                content:
                  'Connect with fellow attendees, share ideas, and build professional relationships.',
                icon: (
                  <svg xmlns="http://www.w3.org/2000/svg" className="w-12 h-12 mb-4" viewBox="0 0 24 24" fill="url(#grad4)">
                    <defs>
                      <linearGradient id="grad4" x1="0%" y1="0%" x2="100%" y2="100%">
                        <stop offset="0%" stopColor="#43cea2"/>
                        <stop offset="100%" stopColor="#185a9d"/>
                      </linearGradient>
                    </defs>
                    <path d="M16.5 10.125a4.125 4.125 0 11-8.25 0 4.125 4.125 0 018.25 0zM4.5 20.25a7.5 7.5 0 0115 0"/>
                  </svg>
                ),
              },
            ].map((guideline, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ scale: 1.03 }}
                className="bg-gray-800/50 p-6 rounded-2xl border border-gray-700 flex flex-col items-center justify-center text-center"
              >
                {guideline.icon}
                <h3 className="text-xl font-bold mb-2">{guideline.title}</h3>
                <p className="text-white/80">{guideline.content}</p>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Events;
