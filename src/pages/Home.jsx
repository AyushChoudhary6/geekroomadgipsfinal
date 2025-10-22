// src/pages/Home.jsx
import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { gsap } from 'gsap';
import { motion } from 'framer-motion';
import Hero from '../components/Sections/Hero';
import vedathonImage from '../assets/vd.jpg';

const Home = () => {
  useEffect(() => {
    gsap.fromTo(
      '.feature-card',
      { y: 50, opacity: 0 },
      { y: 0, opacity: 1, duration: 0.8, stagger: 0.2, delay: 0.5 }
    );
  }, []);

  // ✅ Unique animation variants for Home page
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2 },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: { duration: 0.6 },
    },
  };

  const cardHoverVariants = {
    rest: { scale: 1, y: 0 },
    hover: {
      scale: 1.05,
      y: -8,
      transition: { duration: 0.3, ease: 'easeOut' },
    },
  };

  const buttonVariants = {
    rest: { scale: 1 },
    hover: {
      scale: 1.05,
      boxShadow: '0px 10px 25px rgba(34, 197, 94, 0.4)',
      transition: { duration: 0.3 },
    },
    tap: { scale: 0.95, transition: { duration: 0.1 } },
  };

  const features = [
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"
          />
        </svg>
      ),
      title: 'Hands-on Projects',
      description:
        'Build real-world applications with industry-standard tools and frameworks',
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
      ),
      title: 'Expert Mentorship',
      description:
        'Learn from industry professionals and experienced developers',
    },
    {
      icon: (
        <svg
          className="w-12 h-12"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z"
          />
        </svg>
      ),
      title: 'Innovation Focus',
      description: 'Explore cutting-edge technologies and emerging trends',
    },
  ];

  return (
    <div className="pt-20 bg-gradient-to-br from-gray-900 to-black">
      {/* ✅ Hero Section (kept from components/Sections/Hero.jsx) */}
      <Hero />

      {/* ✅ Features Section */}
      <section className="section-padding bg-gradient-to-b from-gray-900 to-green-900/30">
        <div className="container-custom px-4">
          <motion.div
            className="text-center mb-12 md:mb-16"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent">
              Why Choose Geek Room?
            </h2>
            <p className="text-lg md:text-xl text-gray-300 max-w-2xl mx-auto px-4">
              Experience learning that goes beyond textbooks
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 px-4">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                className="feature-card glass-card p-8 text-center group border border-green-500/20 hover:border-green-400/40 bg-gray-800/50"
                whileHover="hover"
                initial="rest"
                variants={cardHoverVariants}
              >
                <motion.div
                  className="flex items-center justify-center text-green-400 mb-4"
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ type: 'spring', stiffness: 300 }}
                >
                  {feature.icon}
                </motion.div>
                <h3 className="text-xl md:text-2xl font-bold text-white mb-4">
                  {feature.title}
                </h3>
                <p className="text-sm md:text-base text-gray-300 leading-relaxed">
                  {feature.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ✅ Event Highlight (Vedathon Section) */}
      <section className="section-padding bg-green-900/20">
        <div className="container-custom px-4">
          <motion.div
            className="glass-card p-6 md:p-8 lg:p-12 max-w-6xl mx-auto border border-green-500/20 bg-gray-800/50"
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <div className="flex flex-col lg:flex-row items-center justify-between gap-6 md:gap-8">
              <div className="flex-1 w-full">
                <span className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-4 py-2 rounded-full text-xs md:text-sm font-bold mb-4">
                  Upcoming Event
                </span>
                <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
                  Vedathon 2025
                </h3>
                <p className="text-sm md:text-base text-gray-300 mb-6">
                  Join us for our exciting event. Innovation, collaboration, and
                  amazing prizes!
                </p>

                <div className="space-y-2 text-sm md:text-base text-gray-300 mb-6">
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">📅</span>
                    <span>1 November 2025</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">📍</span>
                    <span>OPS Tree Global Noida</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <span className="text-green-400">🏆</span>
                    <span>Revealing Soon</span>
                  </div>
                </div>

                <motion.div
                  variants={buttonVariants}
                  whileHover="hover"
                  whileTap="tap"
                >
                  <Link
                    to="/events"
                    className="inline-block bg-gradient-to-r from-green-500 to-green-600 text-white px-4 md:px-6 py-2 md:py-3 rounded-lg text-sm md:text-base font-semibold"
                  >
                    View All Events
                  </Link>
                </motion.div>
              </div>

              {/* Vedathon Image */}
              <div className="flex-shrink-0 w-full lg:w-auto">
                <motion.div
                  className="relative group"
                  whileHover="hover"
                  initial="rest"
                  variants={cardHoverVariants}
                >
                  <div className="w-full lg:w-80 h-48 md:h-64 rounded-xl border border-green-500/30 overflow-hidden shadow-2xl">
                    <img
                      src={vedathonImage}
                      alt="Vedathon 2025 Event"
                      className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    <div className="absolute bottom-0 left-0 right-0 p-3 md:p-4 text-white">
                      <div className="flex items-center justify-between">
                        <div>
                          <h4 className="font-bold text-base md:text-xl mb-1">
                            Vedathon 2025
                          </h4>
                          <p className="text-green-300 text-xs md:text-sm">
                            Innovation Summit
                          </p>
                        </div>
                        <div className="bg-green-500/90 backdrop-blur-sm rounded-full p-1.5 md:p-2">
                          <svg
                            className="w-4 h-4 md:w-6 md:h-6 text-white"
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path
                              strokeLinecap="round"
                              strokeLinejoin="round"
                              strokeWidth={2}
                              d="M13 10V3L4 14h7v7l9-11h-7z"
                            />
                          </svg>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -inset-2 bg-gradient-to-r from-green-500 to-green-600 rounded-xl blur opacity-30 group-hover:opacity-50 transition duration-300 -z-10"></div>
                </motion.div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Home;
