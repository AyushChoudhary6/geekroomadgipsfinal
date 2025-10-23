import React, { useState, useEffect } from 'react';
import './ContactPage.css'; 

import { 
  FaEnvelope, 
  FaDiscord, 
  FaLinkedin, 
  FaInstagram, 
  FaMapMarkerAlt,
  FaChevronDown 
} from 'react-icons/fa';

const faqData = [
  {
    question: "How does the society help in improving technical skills?",
    answer: "A tech society helps you learn new technologies through fun workshops and hands-on projects. You get to work in teams, solve challenges, and improve your problem-solving skills. Seniors and mentors guide you along the way, making learning easier and more enjoyable."
  },
  {
    question: "What exactly does this tech society do?",
    answer: "We organize coding workshops, hackathons, guest lectures from industry experts, and collaborative projects. Our goal is to create a supportive community where members can learn, build, and network."
  },
  {
    question: "What kind of events, workshops, or projects do members get to work on?",
    answer: "Members can work on web development, mobile app development, machine learning, and cybersecurity projects. We host events like 'CodeJams', 'Design-a-thons', and weekly tech talks."
  },
  {
    question: "Can beginners join?",
    answer: "Absolutely! We welcome students of all skill levels. We have beginner-friendly workshops and mentorship programs to help you get started."
  },
  {
    question: "Do you offer mentorship?",
    answer: "Yes, mentorship is a core part of our society. Senior members and alumni mentor new members, providing guidance on projects, career paths, and technical skills."
  },
  {
    question: "Are seniors approachable and friendly?",
    answer: "Yes! Our community is built on being supportive and collaborative. Seniors are always willing to help and share their knowledge."
  }
];

function ContactPage() {
  
  const [openFAQ, setOpenFAQ] = useState(0); 

  useEffect(() => {
    document.title = "Geek Room - Contact";
  }, []);

  const toggleFAQ = (index) => {
    if (openFAQ === index) {
      setOpenFAQ(null);
    } else {
      setOpenFAQ(index);
    }
  };

  return (
    <div className="contact-page-wrapper">
      
      <section className="contact-section">
        <h1 className="contact-title green-text">Get In Touch</h1>
        <p className="contact-subtitle">Ready to join our community? We'd love to hear from you!</p>
        
        <h2>Join Our Community</h2>
        
        <div className="contact-cards-grid">
          
          <div className="contact-card">
            <FaEnvelope className="card-icon" />
            <div className="card-content">
              <h3>Email Us</h3>
              <p>geekroom.adgips@gmail.com</p>
              <span>We'll respond within 24 hours</span>
            </div>
          </div>

          <a href="https://discord.com/invite/d4DjZJcG" className="contact-card-link">
            <div className="contact-card">
              <FaDiscord className="card-icon" />
              <div className="card-content">
                <h3>Discord Server</h3>
                <p>Join our active community</p>
                <span className="green-text">Join Discord →</span>
              </div>
            </div>
          </a>

          <div className="contact-card">
            <FaInstagram className="card-icon" />
            <div className="card-content">
              <h3>Social Media</h3>
              <p>Follow us for updates</p>
              <div className="social-links">
                <a href="https://www.linkedin.com/company/geekroomadgips/posts/?feedView=all" target="_blank" rel="noopener noreferrer"><FaLinkedin /></a>
                <a href="https://www.instagram.com/geekroom_adgips/" target="_blank" rel="noopener noreferrer"><FaInstagram /></a>
              </div>
            </div>
          </div>
          
          <div className="contact-card">
            <FaMapMarkerAlt className="card-icon" />
            <div className="card-content">
              <h3>Visit Us</h3>
              <p>Dr. Akhilesh Das Gupta Institute of Professional Studies</p>
              <p> FC-26, Shastri Park, New Delhi-110053, India</p>
            </div>
          </div>
          
        </div>
      </section>

      <section className="faq-section">
        <h1 className="contact-title green-text">Frequently Asked Questions</h1>
        
        <div className="faq-list">
          {faqData.map((item, index) => (
            <div 
              className={`faq-item ${openFAQ === index ? 'open' : ''}`} 
              key={index}
              onClick={() => toggleFAQ(index)}
            >
              <div className="faq-question">
                <p>{item.question}</p>
                <FaChevronDown className="faq-arrow" />
              </div>
              <div className="faq-answer">
                <p>{item.answer}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

    </div>
  );
}

export default ContactPage;