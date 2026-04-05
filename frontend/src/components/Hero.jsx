import React from "react";

import { motion } from "framer-motion";

import { FaGithub, FaLinkedin, FaEnvelope, FaArrowDown } from "react-icons/fa";

import { SiLeetcode } from "react-icons/si";

import "../css/Hero.css";

const Hero = () => {
  const socialLinks = [
    {
      icon: <FaGithub />,
      url: "https://github.com/ayushalapuriya",
      label: "GitHub",
    },

    {
      icon: <FaLinkedin />,
      url: "https://www.linkedin.com/in/ayush-alapuriya-a4b3132b1/",
      label: "LinkedIn",
    },

    {
      icon: <SiLeetcode />,
      url: "https://leetcode.com/its_alapuriya",
      label: "LeetCode",
    },

    {
      icon: <FaEnvelope />,
      url: "mailto:alapuriya0@gmail.com",
      label: "Email",
    },
  ];

  return (
    <section className="hero" id="home">
      <div className="bg-gradient-blur bg-gradient-blur-1"></div>

      <div className="container">
        <div className="hero-content">
          <motion.div
            className="hero-text"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.p
              className="hero-greeting"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
            >
              Hi, I'm
            </motion.p>

            <motion.h1
              className="hero-name"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
            >
              Ayush Alapuriya
            </motion.h1>

            <motion.h2
              className="hero-title"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
            >
              <span className="gradient-text">
                Full-Stack Developer & AI Enthusiast
              </span>{" "}
              | Transforming Ideas into Intelligent Digital Solutions
            </motion.h2>

            <motion.p
              className="hero-description"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
            >
              B.Tech Computer Science student at GLA University with enterprise training from Capgemini. 
              Passionate about building scalable full-stack solutions using MERN, Next.js, Spring Boot, 
              and cutting-edge AI technologies. Specialized in creating intelligent applications 
              that solve real-world problems with measurable impact.
            </motion.p>

            <motion.div
              className="hero-cta"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.6 }}
            >
              <a href="#projects" className="btn btn-primary">
                View Projects
              </a>

              <a href="#contact" className="btn btn-secondary">
                Get In Touch
              </a>
            </motion.div>

            <motion.div
              className="hero-social"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.7 }}
            >
              {socialLinks.map((link, index) => (
                <motion.a
                  key={link.label}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="social-link"
                  aria-label={link.label}
                  whileHover={{ scale: 1.2, y: -3 }}
                  whileTap={{ scale: 0.9 }}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.7 + index * 0.1 }}
                >
                  {link.icon}
                </motion.a>
              ))}
            </motion.div>
          </motion.div>

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="code-window">
              <div className="window-header">
                <div className="window-dots">
                  <span className="dot red"></span>
                  <span className="dot yellow"></span>
                  <span className="dot green"></span>
                </div>

                <span className="window-title">portfolio.jsx</span>
              </div>

              <div className="window-body">
                <pre>
                  <code>
                    {`const developer = {
  name: "Ayush Alapuriya",
  role: "Full-Stack Developer & AI Engineer",
  skills: ["React", "CSS", "Java", "AI"],
  passion: "Innovation & Impact",
  status: "Open to opportunities"
};

export default developer;`}
                  </code>
                </pre>
              </div>
            </div>
          </motion.div>
        </div>
      </div>

      <motion.div
        className="scroll-indicator"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, repeat: Infinity, duration: 2 }}
      >
        <FaArrowDown />
      </motion.div>
    </section>
  );
};

export default Hero;
