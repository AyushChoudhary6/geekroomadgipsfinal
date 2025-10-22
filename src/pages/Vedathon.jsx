import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import vd from '../assets/vd.jpg';

const Vedathon = () => {
  const [activeSection, setActiveSection] = useState(null);

  useEffect(() => {
    // Scroll to top on component mount
    window.scrollTo(0, 0);
  }, []);

  // SVG Icons with different colors and flex center
  const CalendarIcon = () => (
    <div className="flex items-center justify-center">
      <svg className="w-8 h-8 text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
      </svg>
    </div>
  );

  const FreeIcon = () => (
    <div className="flex items-center justify-center">
      <svg className="w-8 h-8 text-purple-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" />
      </svg>
    </div>
  );

  const LocationIcon = () => (
    <div className="flex items-center justify-center">
      <svg className="w-8 h-8 text-red-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    </div>
  );

  const PrizeIcon = () => (
    <div className="flex items-center justify-center">
      <svg className="w-8 h-8 text-yellow-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    </div>
  );

  const MentorIcon = () => (
    <div className="flex items-center justify-center">
      <svg className="w-8 h-8 text-indigo-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
      </svg>
    </div>
  );

  const CertificateIcon = () => (
    <div className="flex items-center justify-center">
      <svg className="w-8 h-8 text-emerald-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    </div>
  );

  const TimeIcon = () => (
    <div className="flex items-center justify-center">
      <svg className="w-8 h-8 text-cyan-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    </div>
  );

  const FoodIcon = () => (
    <div className="flex items-center justify-center">
      <svg className="w-8 h-8 text-orange-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2V9z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 22V12h6v10" />
      </svg>
    </div>
  );

  const TrophyIcon = () => (
    <div className="flex items-center justify-center">
      <svg className="w-8 h-8 text-pink-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7" />
      </svg>
    </div>
  );

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5
      }
    }
  };

  return (
    <div className="vedathon-page min-h-screen bg-gradient-to-br from-gray-900 to-black text-white pt-20">
      {/* Hero Banner with Large Image */}
      <section className="vedathon-banner relative h-[70vh] min-h-[400px] md:min-h-[500px] overflow-hidden">
        <motion.img
          src={vd}
          alt="Vedathon Banner"
          className="w-full h-full object-cover"
          initial={{ scale: 1.1 }}
          animate={{ scale: 1 }}
          transition={{ duration: 1.5 }}
        />
        <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
          </motion.div>
        </div>
      </section>

      {/* Hero Section Below Image */}
      <section className="vedathon-hero py-20 bg-gradient-to-br from-gray-800 via-gray-900 to-black">
        <div className="container max-w-6xl mx-auto px-4">
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            viewport={{ once: false, amount: 0.2 }}
            className="text-center"
          >
            <motion.div variants={itemVariants} className="organization-header mb-8">
              <h1 className="text-3xl font-bold mb-2 text-white">Geek Room Adgips</h1>
              <p className="text-xl text-green-400 font-semibold">Presents</p>
            </motion.div>

            <motion.div variants={itemVariants} className="event-title mb-8">
              <h2 className="text-4xl md:text-5xl font-black text-green-400 mb-4">
                VEDATHON
              </h2>
              <p className="text-xl md:text-2xl text-white/80 font-medium">
                INNOVATION IS KNOCKING - THIS NOVEMBER IN AN MNC!
              </p>
            </motion.div>

            <motion.p variants={itemVariants} className="vedathon-subtitle text-lg md:text-xl text-white/90 mb-12 leading-relaxed max-w-4xl mx-auto">
              Unleash your creativity and innovation in our premier ideathon. Transform your ideas into impactful solutions for real-world challenges and compete in this November MNC event.
            </motion.p>
            
            {/* Stats Grid */}
            <motion.div variants={containerVariants} className="hero-stats grid grid-cols-2 md:grid-cols-4 gap-6 my-16 max-w-4xl mx-auto">
              {[
                { icon: <CalendarIcon />, number: "1 November", label: "2025" },
                { icon: <FreeIcon />, number: "FREE", label: "Entry" },
                { icon: <LocationIcon />, number: "OPS TREE GLOBAL", label: "Venue" },
                { icon: <PrizeIcon />, number: "TBA", label: "Prize Pool" }
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  variants={itemVariants}
                  whileHover={{ scale: 1.05, y: -5 }}
                  className="stat-item bg-gray-800/50 border border-green-500/30 rounded-2xl text-center p-6 transition-all duration-300 hover:border-green-500/60 hover:shadow-lg hover:shadow-green-500/20 cursor-pointer"
                  onClick={() => setActiveSection(activeSection === index ? null : index)}
                >
                  <div className="flex items-center justify-center mb-4">
                    {stat.icon}
                  </div>
                  <span className="stat-number block text-2xl md:text-3xl font-black text-green-400 mb-2">
                    {stat.number}
                  </span>
                  <span className="stat-label text-white/70 text-sm uppercase font-semibold">
                    {stat.label}
                  </span>
                  
                  <AnimatePresence>
                    {activeSection === index && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="mt-4 text-white/70 text-sm"
                      >
                        {index === 0 && "Mark your calendars for this exciting event!"}
                        {index === 1 && "Completely free to participate for all students."}
                        {index === 2 && "Located at OPS Tree Global, Noida."}
                        {index === 3 && "Exciting prizes to be announced soon!"}
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              ))}
            </motion.div>

            {/* CTA Button */}
            <motion.div variants={itemVariants} className="hero-actions flex gap-8 justify-center mt-12">
              <motion.a 
                href="https://vision.hack2skill.com/event/vedathon/?utm_source=Refferal&utm_medium=Ayush" 
                className="bg-green-500 hover:bg-green-400 text-black font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/40"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                target="_blank"
                rel="noopener noreferrer"
              >
                REGISTER NOW
              </motion.a>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Registration Timeline */}
      <section className="registration-timeline py-16 bg-gray-800/30">
        <div className="container max-w-4xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Registration Timeline
          </motion.h2>
          
          <div className="timeline-grid grid grid-cols-1 md:grid-cols-2 gap-8">
            {[
              {
                title: "Registration Opens",
                subtitle: "Sign Up Now",
                // date: "September 20",
                description: "Registration is now open! Secure your spot and get ready to innovate."
              },
              {
                title: "Registration Closes",
                subtitle: "Last day to register",
                date: "October 27- 111:59",
                description: "Make sure you don't miss out on this amazing opportunity."
              }
            ].map((item, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="timeline-item bg-gray-800/50 border border-green-500/20 rounded-2xl p-8 text-center cursor-pointer transition-all duration-300 hover:border-green-500/40"
                onClick={() => setActiveSection(`timeline-${index}`)}
              >
                <h3 className="text-2xl font-bold text-green-400 mb-2">{item.title}</h3>
                <p className="text-white/80 mb-2">{item.subtitle}</p>
                <p className="text-lg text-green-300 font-semibold mb-4">{item.date}</p>
                <p className="text-white/90">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Event Schedule */}
      <section className="event-schedule py-16 bg-gray-900/50">
        <div className="container max-w-4xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-4xl font-bold text-center mb-12"
          >
            Event Schedule
          </motion.h2>
          
          <div className="schedule-grid space-y-8">
            {[
              // {
              //   time: "October 27- Morning",
              //   title: "Opening Ceremony",
              //   description: "Welcome address, problem statements reveal, and team formation."
              // },
              {
                time: "October 28",
                title: "PPT ROUND ENDS",
                // description: "Brainstorming sessions, concept development, and mentor consultations."
              },
                {
                time: "October 29",
                title: "PPT ROUND RESULTS",
                // description: "Brainstorming sessions, concept development, and mentor consultations."
              },
              {
                time: "November 1",
                title: "Pitch Presentations",
                description: "Offline round at Ops Tree Solutions, Noida. Same day results"
              },
              // {
              //   time: "November 1 - Night",
              //   title: "Results & Awards",
              //   description: "Winner announcements, prize distribution, and closing ceremony."
              // }
            ].map((schedule, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ scale: 1.02, y: -2 }}
                className="schedule-item bg-gray-800/50 border border-green-500/20 rounded-2xl p-8 cursor-pointer transition-all duration-300 hover:border-green-500/40"
                onClick={() => setActiveSection(`schedule-${index}`)}
              >
                <div className="flex flex-col md:flex-row md:items-center gap-4">
                  <div className="schedule-time md:w-1/3">
                    <h3 className="text-2xl font-bold text-green-400">{schedule.time}</h3>
                  </div>
                  <div className="schedule-content md:w-2/3">
                    <h4 className="text-xl font-semibold text-white mb-2">{schedule.title}</h4>
                    <p className="text-white/80">{schedule.description}</p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section py-16 bg-gray-800/30">
        <div className="container max-w-4xl mx-auto px-4">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            className="text-4xl font-bold text-center mb-12"
          >
            What's Included
          </motion.h2>
          
          <div className="benefits-grid grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "🎯", title: "FREE", description: "No registration fee required" },
              { icon: <MentorIcon />, title: "Expert Mentorship", description: "Mentorship from industry experts" },
              { icon: <CertificateIcon />, title: "Certification", description: "Certificate of participation" },
              { icon: <TimeIcon />, title: "Full Day Event", description: "Full day event participation" },
              { icon: <FoodIcon />, title: "Refreshments", description: "Meals and refreshments included" },
              { icon: <TrophyIcon />, title: "Prizes", description: "Exciting prizes for winners" }
            ].map((benefit, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.9 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: false, amount: 0.3 }}
                transition={{ duration: 0.8, delay: index * 0.1 }}
                whileHover={{ scale: 1.05, y: -5 }}
                className="benefit-item bg-green-500/10 border border-green-500/30 rounded-2xl p-6 text-center cursor-pointer transition-all duration-300 hover:border-green-500/40"
                onClick={() => setActiveSection(`benefit-${index}`)}
              >
                <div className="benefit-icon text-4xl mb-4 flex items-center justify-center">
                  {benefit.icon}
                </div>
                <h3 className="text-xl font-bold text-green-400 mb-2">{benefit.title}</h3>
                <p className="text-white/80">{benefit.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="final-cta py-16 bg-gray-800/30 text-center">
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          className="container max-w-4xl mx-auto px-4"
        >
          <h2 className="text-4xl font-bold mb-6">READY TO INNOVATE?</h2>
          <p className="text-xl mb-8 text-white/80">
            Registration opens soon. Follow us for updates!
          </p>
          <motion.a 
            href="https://vision.hack2skill.com/event/vedathon/?utm_source=Refferal&utm_medium=Ayush" 
            className="bg-green-500 hover:bg-green-400 text-black font-bold text-lg px-8 py-4 rounded-full transition-all duration-300 hover:scale-105 hover:shadow-lg hover:shadow-green-500/40 inline-block"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            target="_blank"
            rel="noopener noreferrer"
          >
            REGISTER NOW
          </motion.a>
        </motion.div>
      </section>
    </div>
  );
};

export default Vedathon;