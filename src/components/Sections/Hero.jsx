// src/components/Sections/Hero.jsx
import React from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import logo from '../../assets/logo.jpeg';

const Hero = () => {
  // Entrance animation variants
  const heroContainerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2
      }
    }
  };

  const heroItemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6
      }
    }
  };

  // Hover / tap objects (used directly in whileHover / whileTap)
  const cardHoverStyle = {
    scale: 1.05,
    y: -5,
    transition: { duration: 0.3, ease: "easeOut" }
  };

  const buttonHover = {
    scale: 1.05,
    boxShadow: "0px 10px 25px rgba(34, 197, 94, 0.4)",
    transition: { duration: 0.3 }
  };

  const buttonTap = {
    scale: 0.95,
    boxShadow: "0px 5px 15px rgba(34, 197, 94, 0.4)",
    transition: { duration: 0.1 }
  };

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden bg-gradient-to-br from-gray-900 to-black px-4">
      {/* Animated Background */}
      <div className="absolute inset-0">
        <motion.div 
          className="absolute top-1/4 left-1/4 w-72 h-72 bg-green-500/10 rounded-full blur-3xl"
          animate={{
            y: [0, -20, 0],
            x: [0, 10, 0],
          }}
          transition={{
            duration: 6,
            repeat: Infinity,
            ease: "easeInOut"
          }}
        />
        <motion.div 
          className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-green-400/5 rounded-full blur-3xl"
          animate={{
            y: [0, 20, 0],
            x: [0, -10, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2
          }}
        />
      </div>

      <motion.div 
        className="container-custom text-center relative z-10 px-4"
        variants={heroContainerVariants}
        initial="hidden"
        animate="visible"
      >
        {/* Society Description */}
        <motion.div 
          variants={heroItemVariants}
          initial="hidden"
          animate="visible"
          whileHover={cardHoverStyle}
          className="glass-card p-6 md:p-8 lg:p-12 max-w-4xl mx-auto mb-8 md:mb-12 border border-green-500/20 bg-gray-800/50 backdrop-blur-sm"
        >
          <motion.img 
            src={logo} 
            alt="Geek Room Logo" 
            className="w-16 h-16 md:w-20 lg:w-24 md:h-20 lg:h-24 mx-auto mb-4 md:mb-6 rounded-2xl border-2 border-green-500"
            whileHover={{ scale: 1.1, rotate: 5 }}
            transition={{ type: "spring", stiffness: 300 }}
          />
          <motion.h2 
            variants={heroItemVariants}
            className="text-3xl md:text-4xl lg:text-5xl font-bold mb-4 md:mb-6 bg-gradient-to-r from-green-400 to-green-600 bg-clip-text text-transparent"
          >
            Geek Room
          </motion.h2>
          <motion.p 
            variants={heroItemVariants}
            className="text-base md:text-lg lg:text-xl text-gray-300 mb-6 md:mb-8 leading-relaxed px-2"
          >
            A premier tech community where innovation meets collaboration.<br className="hidden sm:block" />
            <span className="block sm:inline"> </span>Join 1000+ developers, designers & tech leaders shaping the future.
          </motion.p>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 mb-6 md:mb-8">
            {[ 
              { emoji: "🚀", text: "Project-Based Learning" },
              { emoji: "👥", text: "Industry Mentorship" },
              { emoji: "💼", text: "Career Growth" }
            ].map((item, index) => (
              <motion.div
                key={index}
                variants={heroItemVariants}
                initial="hidden"
                animate="visible"
                whileHover={cardHoverStyle}
                className="flex items-center gap-3 md:gap-4 p-3 md:p-4 rounded-2xl bg-green-500/10 border border-green-500/20 hover:border-green-400/40 transition-all duration-300 cursor-pointer"
              >
                <div className="text-xl md:text-2xl">{item.emoji}</div>
                <span className="text-white font-medium text-sm md:text-base">{item.text}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div 
          variants={heroItemVariants}
          initial="hidden"
          animate="visible"
          className="flex flex-col sm:flex-row gap-3 md:gap-4 justify-center items-center px-4"
        >
          <motion.a 
            href="https://vision.hack2skill.com/event/vedathon/?utm_source=Refferal&utm_medium=Ayush"
            target="_blank"
            rel="noopener noreferrer"
            whileHover={buttonHover}
            whileTap={buttonTap}
            className="w-full sm:w-auto bg-gradient-to-r from-green-500 to-green-600 text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-sm md:text-base font-semibold shadow-lg text-center"
          >
            Vedathon - Register Now
          </motion.a>

          <motion.div
            whileHover={buttonHover}
            whileTap={buttonTap}
            className="w-full sm:w-auto"
          >
            <Link to="/events" className="border-2 border-green-500 text-green-400 hover:bg-green-500 hover:text-white px-6 md:px-8 py-3 md:py-4 rounded-lg text-sm md:text-base font-semibold transition-all duration-300 block text-center">
              View Events
            </Link>
          </motion.div>
        </motion.div>
      </motion.div>

      {/* Scroll Indicator */}
      <motion.div 
        className="absolute bottom-8 left-1/2 transform -translate-x-1/2 hidden md:block"
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity }}
      >
        <div className="w-6 h-10 border-2 border-green-500 rounded-full flex justify-center">
          <motion.div 
            className="w-1 h-3 bg-green-500 rounded-full mt-2"
            animate={{ y: [0, 12, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        </div>
      </motion.div>
    </section>
  );
};

export default Hero;
