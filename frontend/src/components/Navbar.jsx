import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { FaBars, FaTimes } from 'react-icons/fa';
import '../css/Navbar.css';

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: 'About', href: '#about' },
    { name: 'Skills', href: '#skills' },
    { name: 'Projects', href: '#projects' },
    { name: 'Experience', href: '#experience' },
    { name: 'Certifications', href: '#certifications' },
    { name: 'Contact', href: '#contact' }
  ];

  const handleLinkClick = () => {
    setIsMobileMenuOpen(false);
  };

  return (
    <motion.nav
      className={`navbar ${isScrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="navbar-content">
          <motion.a 
            href="#home" 
            className="logo"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            dev<span className="gradient-text">x</span>ayush
          </motion.a>

          {/* Desktop Menu */}
          <ul className="nav-links desktop-menu">
            {navLinks.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <a href={link.href} className="nav-link">
                  {link.name}
                </a>
              </motion.li>
            ))}
          </ul>

          {/* Mobile Menu Toggle */}
          <button
            className="mobile-menu-toggle"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <FaTimes /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Menu */}
        <motion.div
          className={`mobile-menu ${isMobileMenuOpen ? 'open' : ''}`}
          initial={{ opacity: 0, height: 0, scale: 0.95 }}
          animate={isMobileMenuOpen ? 
            { opacity: 1, height: 'auto', scale: 1 } : 
            { opacity: 0, height: 0, scale: 0.95 }
          }
          transition={{ 
            duration: 0.3, 
            ease: [0.4, 0, 0.2, 1],
            height: { duration: 0.3 }
          }}
        >
          <motion.ul 
            className="mobile-nav-links"
            initial={{ opacity: 0 }}
            animate={isMobileMenuOpen ? { opacity: 1 } : { opacity: 0 }}
            transition={{ delay: isMobileMenuOpen ? 0.1 : 0 }}
          >
            {navLinks.map((link, index) => (
              <motion.li
                key={link.name}
                initial={{ opacity: 0, x: -20 }}
                animate={isMobileMenuOpen ? 
                  { opacity: 1, x: 0 } : 
                  { opacity: 0, x: -20 }
                }
                transition={{ 
                  delay: isMobileMenuOpen ? index * 0.05 : 0,
                  duration: 0.2
                }}
              >
                <a href={link.href} className="nav-link" onClick={handleLinkClick}>
                  {link.name}
                </a>
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
