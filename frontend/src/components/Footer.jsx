import React from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaLinkedin, FaEnvelope, FaHeart } from 'react-icons/fa';
import { SiLeetcode } from 'react-icons/si';
import '../css/Footer.css';

const Footer = () => {
  const socialLinks = [
    { icon: <FaGithub />, url: 'https://github.com/YOUR_GITHUB_USERNAME', label: 'GitHub' },
    { icon: <FaLinkedin />, url: 'https://www.linkedin.com/in/YOUR_LINKEDIN', label: 'LinkedIn' },
    { icon: <SiLeetcode />, url: 'https://leetcode.com/YOUR_LEETCODE', label: 'LeetCode' },
    { icon: <FaEnvelope />, url: 'mailto:alapuriya04@gmail.com', label: 'Email' }
  ];

  const quickLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Contact', href: '#contact' }
  ];

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="footer-title">Ayush Alapuriya</h3>
            <p className="footer-description">
              Software Developer passionate about building innovative solutions with modern web technologies and AI integration.
            </p>
            <div className="footer-social">
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="footer-social-link"
                  aria-label={link.label}
                  whileHover={{ scale: 1.1, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </div>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
          >
            <h4 className="footer-section-title">Quick Links</h4>
            <ul className="footer-links">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <a href={link.href}>{link.name}</a>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            className="footer-section"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h4 className="footer-section-title">Get In Touch</h4>
            <div className="footer-contact">
              <p>📧 alapuriya04@gmail.com</p>
              <p>📱 +91 8058452975</p>
              <p>📍 Agra, India</p>
            </div>
            <p className="footer-availability">
              <span className="status-dot"></span>
              Available for freelance projects
            </p>
          </motion.div>
        </div>

        <motion.div
          className="footer-bottom"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <p className="footer-copyright">
            © {new Date().getFullYear()} Ayush Alapuriya. All Rights Reserved.
          </p>
          <button className="scroll-to-top" onClick={scrollToTop} aria-label="Scroll to top">
            ↑
          </button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
