import React, { useState } from 'react';
import { motion } from 'framer-motion';

const Team = () => {
  const [activeSection, setActiveSection] = useState('council-members');

  // Council Members data from team.html
  const councilMembers = [
    {
      id: 1,
      name: 'Sumit Thakur',
      role: 'President',
      image: '/1.jpg',
      bio: 'Leading the tech revolution at Geek Room',
      social: {
        linkedin: 'https://www.linkedin.com/in/sumit-thakur-80ba72278/',
      },
    },
    {
      id: 2,
      name: 'Shaurya Pratap Singh',
      role: 'Vice President',
      image: '/photos/shaurya.jpg',
      bio: 'Passionate about innovation and collaboration',
      social: {
        linkedin: 'https://www.linkedin.com/in/shaurya-pratap-singh-7425822a8',
      },
    },
    {
      id: 3,
      name: 'Sampreeti Rastogi',
      role: 'General Secretary',
      image: '/photos/sam1.jpg',
      bio: 'Building the foundation of our community',
      social: {
        linkedin: 'https://www.linkedin.com/in/sampreeti-rastogi-868612325',
      },
    },
  ];

  // Core Team data from team.html
  const coreTeam = [
    {
      id: 1,
      name: 'Vidhi',
      role: 'Student Coordinator',
      image: '/photos/vidhi.jpg',
      bio: 'Coordinating and guiding our community',
      social: {
        linkedin: 'https://www.linkedin.com/in/vidhi-garg-d70v07897?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      },
    },
    {
      id: 2,
      name: 'Ayush Choudhary',
      role: 'Web Dev Lead',
      image: '/photos/ayush.jpg',
      bio: 'Crafting beautiful web experiences',
      social: {
        linkedin: 'https://www.linkedin.com/in/ayush-choudhary-29aa01325/',
      },
    },
    {
      id: 3,
      name: 'Riya',
      role: 'Web Dev Co-Lead',
      image: '/photos/riya.jpg',
      bio: 'Building modern web applications',
      social: {
        linkedin: 'https://www.linkedin.com/in/riya-mittal-94a152326',
      },
    },
    {
      id: 4,
      name: 'Chetan Kumar',
      role: 'Marketing Lead',
      image: '/photos/chetan1.jpg',
      bio: 'Spreading the word about tech',
      social: {
        linkedin: 'https://www.linkedin.com/in/chetan-kumar-12922a322',
      },
    },
    {
      id: 5,
      name: 'Revant Jain',
      role: 'Marketing Co-Lead',
      image: '/photos/revant.jpg',
      bio: 'Driving community engagement',
      social: {
        linkedin: 'https://www.linkedin.com/in/revant-jain-833835338?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      },
    },
    {
      id: 6,
      name: 'Dharmesh',
      role: 'PR Lead',
      image: '/photos/dharmesh1.jpg',
      bio: 'Managing public relations',
      social: {
        linkedin: 'https://www.linkedin.com/in/dharmesh-yadavoprofile/',
      },
    },
    {
      id: 7,
      name: 'Aditi',
      role: 'PR Co-Lead',
      image: '/photos/aditi1.jpg',
      bio: 'Building community connections',
      social: {
        linkedin: 'https://www.linkedin.com/in/aditi-mishra-a9aa6b328',
      },
    },
    {
      id: 8,
      name: 'Aryan Shrivastava',
      role: 'Event Lead',
      image: '/photos/aryan1.jpg',
      bio: 'Creating memorable tech experiences',
      social: {
        linkedin: 'https://www.linkedin.com/in/aryanshrivastava290605/',
      },
    },
    {
      id: 9,
      name: 'Nikhil Sood',
      role: 'Media and Design Lead',
      image: '/photos/nikhil.jpg',
      bio: 'Designing intuitive user experiences',
      social: {
        linkedin: 'https://www.linkedin.com/in/nikhils00d',
      },
    },
    {
      id: 10,
      name: 'Preksha',
      role: 'Design Co-Lead',
      image: '/photos/preksha.jpg',
      bio: 'Crafting beautiful designs',
      social: {
        linkedin: 'https://www.linkedin.com/in/preksha-dixit-709a13278?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      },
    },
    {
      id: 11,
      name: 'Animesh',
      role: 'Media Co-Lead',
      image: '/photos/animesh.jpg',
      bio: 'Creating engaging media content',
      social: {
        linkedin: 'https://www.linkedin.com/in/animesh-2006-sharma/',
      },
    },
    {
      id: 12,
      name: 'Himanshu Pathak',
      role: 'AI/ML Lead',
      image: '/photos/himanshu1.jpg',
      bio: 'Exploring the frontiers of AI',
      social: {
        linkedin: 'https://www.linkedin.com/in/animesh-2006-sharma/',
      },
    },
    {
      id: 13,
      name: 'Shahil Choudhary',
      role: 'AI/ML Co-Lead',
      image: '/photos/shahil1.jpg',
      bio: 'Building intelligent systems',
      social: {
        linkedin: 'https://www.linkedin.com/in/shahil-choudhary-552a37276?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      },
    },
    {
      id: 14,
      name: 'Mohit Aggarwal',
      role: 'Emerging Tech Lead',
      image: '/photos/mohit.jpg',
      bio: 'Exploring emerging technologies',
      social: {
        linkedin: 'https://www.linkedin.com/in/mohitaggarwal551/',
      },
    },
    {
      id: 15,
      name: 'Mahak',
      role: 'Emerging Tech Co-Lead',
      image: '/photos/mahak.jpg',
      bio: 'Innovating with new technologies',
      social: {
        linkedin: 'https://www.linkedin.com/in/mahak-68840b329?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app',
      },
    },
    {
      id: 16,
      name: 'Sanvi Jindal',
      role: 'DSA Lead',
      image: '/photos/saanvi.jpg',
      bio: 'Mastering data structures and algorithms',
      social: {
        linkedin: 'https://www.linkedin.com/in/sanvijindal',
      },
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
      },
    },
  };

  const itemVariants = {
    hidden: { y: 30, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.6,
        ease: 'easeOut',
      },
    },
  };

  const cardHoverVariants = {
    initial: { scale: 1, y: 0 },
    hover: {
      scale: 1.05,
      y: -10,
      transition: {
        duration: 0.3,
        ease: 'easeOut',
      },
    },
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

  const TeamCard = ({ member }) => (
    <motion.div
      variants={itemVariants}
      whileHover="hover"
      initial="initial"
      className="team-card"
    >
      <motion.div
        className="bg-gradient-to-br from-gray-800 to-gray-900 border border-gray-700 rounded-3xl overflow-hidden relative group"
        variants={cardHoverVariants}
      >
        {/* Gradient overlay on hover */}
        <div className="absolute inset-0 bg-gradient-to-br from-green-500/10 to-blue-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-10"></div>

        {/* Image Section */}
        <div className="relative w-full h-72 overflow-hidden">
          <img
            src={member.image}
            alt={member.name}
            className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-transparent to-transparent"></div>
        </div>

        {/* Content Section */}
        <div className="p-6 relative z-20">
          <h3 className="text-2xl font-bold mb-2 text-white">{member.name}</h3>
          <div className="inline-block px-4 py-2 rounded-full text-xs font-semibold uppercase mb-3 bg-green-500/25 text-green-300 border border-green-500/40">
            {member.role}
          </div>
          <p className="text-white/70 mb-4 leading-relaxed">{member.bio}</p>

          {/* Social Links */}
          <div className="flex gap-4 mt-4">
            {member.social.linkedin && (
              <motion.a
                href={member.social.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full bg-gray-700/50 flex items-center justify-center hover:bg-green-500 transition-colors duration-300"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                </svg>
              </motion.a>
            )}
          </div>
        </div>
      </motion.div>
    </motion.div>
  );

  return (
    <div className="team-page min-h-screen bg-gradient-to-br from-gray-900 to-black text-white pt-20">
      {/* Header Section */}
      <motion.div
        className="container mx-auto px-4 py-12 text-center"
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
      >
        <h1 className="text-5xl font-bold ">Meet Our Team</h1>
      </motion.div>

      {/* Team Navigation - Desktop View */}
      <motion.div
        className="team-navigation-container hidden md:flex justify-center mb-16 pt-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <div className="team-navigation flex bg-gray-800 rounded-full p-2">
          <motion.button
            variants={navButtonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className={`team-nav-btn flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
              activeSection === 'council-members'
                ? 'bg-green-500 text-black font-bold'
                : 'text-gray-300 hover:text-white'
            }`}
            onClick={() => scrollToSection('council-members')}
          >
            <span className="nav-icon mr-2">👑</span>
            <span className="nav-text">Council Members</span>
            <span className="nav-count ml-2 bg-black/30 px-2 py-1 rounded-full text-xs">
              {councilMembers.length}
            </span>
          </motion.button>
          <motion.button
            variants={navButtonVariants}
            initial="initial"
            whileHover="hover"
            whileTap="tap"
            className={`team-nav-btn flex items-center px-6 py-3 rounded-full transition-all duration-300 ${
              activeSection === 'core-team'
                ? 'bg-green-500 text-black font-bold'
                : 'text-gray-300 hover:text-white'
            }`}
            onClick={() => scrollToSection('core-team')}
          >
            <span className="nav-icon mr-2">⚡</span>
            <span className="nav-text">Core Team</span>
            <span className="nav-count ml-2 bg-black/30 px-2 py-1 rounded-full text-xs">
              {coreTeam.length}
            </span>
          </motion.button>
        </div>
      </motion.div>

      {/* Team Navigation - Mobile View */}
      <motion.div
        className="team-navigation-mobile md:hidden flex flex-col gap-4 px-4 mb-16 pt-8"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6, delay: 0.3 }}
      >
        <motion.button
          variants={navButtonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className={`team-nav-btn-mobile flex items-center justify-center w-full px-6 py-4 rounded-2xl transition-all duration-300 ${
            activeSection === 'council-members'
              ? 'bg-green-500 text-black font-bold shadow-lg shadow-green-500/40'
              : 'bg-gray-800/50 border border-green-500/30 text-white'
          }`}
          onClick={() => scrollToSection('council-members')}
        >
          <span className="nav-icon text-2xl mr-3">👑</span>
          <span className="nav-text text-lg font-semibold">Council Members</span>
          <span className={`nav-count ml-3 px-3 py-1 rounded-full text-sm font-bold ${
            activeSection === 'council-members' 
              ? 'bg-black/30 text-black' 
              : 'bg-green-500/20 text-green-400'
          }`}>
            {councilMembers.length}
          </span>
        </motion.button>
        
        <motion.button
          variants={navButtonVariants}
          initial="initial"
          whileHover="hover"
          whileTap="tap"
          className={`team-nav-btn-mobile flex items-center justify-center w-full px-6 py-4 rounded-2xl transition-all duration-300 ${
            activeSection === 'core-team'
              ? 'bg-green-500 text-black font-bold shadow-lg shadow-green-500/40'
              : 'bg-gray-800/50 border border-green-500/30 text-white'
          }`}
          onClick={() => scrollToSection('core-team')}
        >
          <span className="nav-icon text-2xl mr-3">⚡</span>
          <span className="nav-text text-lg font-semibold">Core Team</span>
          <span className={`nav-count ml-3 px-3 py-1 rounded-full text-sm font-bold ${
            activeSection === 'core-team' 
              ? 'bg-black/30 text-black' 
              : 'bg-green-500/20 text-green-400'
          }`}>
            {coreTeam.length}
          </span>
        </motion.button>
      </motion.div>

      {/* Council Members Section */}
      <section id="council-members" className="py-8 mb-12">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center border-b-2 border-green-500 pb-4 inline-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Council Members
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {councilMembers.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Core Team Section */}
      <section id="core-team" className="py-8 bg-gray-800/30">
        <div className="container max-w-7xl mx-auto px-4">
          <motion.h2
            className="text-4xl font-bold mb-12 text-center border-b-2 border-green-500 pb-4 inline-block"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            Core Team
          </motion.h2>

          <motion.div
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-8"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
          >
            {coreTeam.map((member) => (
              <TeamCard key={member.id} member={member} />
            ))}
          </motion.div>
        </div>
      </section>

      {/* Join Us Section */}
      <section className="py-16 bg-gray-800/50">
        <div className="container max-w-4xl mx-auto px-4 text-center">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-4xl font-bold mb-6">Want to Join Our Team?</h2>
            <p className="text-xl text-gray-300 mb-8">
              We're always looking for passionate individuals to join our community
            </p>
            <motion.button
              className="bg-green-500 text-black px-8 py-4 rounded-full font-bold text-lg relative overflow-hidden group"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <span className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -skew-x-12 transform -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></span>
              <span className="relative">Get In Touch</span>
            </motion.button>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Team;
