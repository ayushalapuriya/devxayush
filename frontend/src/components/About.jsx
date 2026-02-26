import React from 'react';
import { motion } from 'framer-motion';
import './About.css';

const About = () => {
  return (
    <section className="section about-section" id="about">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        <div className="about-content">
          <motion.div
            className="about-text"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <p>
              I'm a <strong>Computer Science student</strong> at GLA University, Mathura, graduating in May 2026. 
              With a passion for building scalable and innovative solutions, I specialize in <strong>full-stack 
              development</strong> using the <strong>MERN stack</strong> and integrating <strong>AI technologies </strong> 
              to create intelligent applications.
            </p>
            <p>
              Through my internships at <strong>GrowIntern</strong> and <strong>W3Elites</strong>, I've gained 
              hands-on experience in building responsive web interfaces, developing AI-powered features, and 
              collaborating in fast-paced development environments. I've successfully delivered projects that 
              improved user experience and system efficiency.
            </p>
            <p>
              Beyond coding, I'm an active competitive programmer with achievements in multiple hackathons 
              including <strong>IIT Guwahati Hackathon</strong> (Finalist) and <strong>Hack and Viz</strong> (5th Place). 
              I've solved <strong>400+ problems on LeetCode</strong> and consistently participate in coding contests 
              to sharpen my problem-solving skills.
            </p>
            <p>
              I'm currently seeking <strong>full-time opportunities</strong> and <strong>freelance projects</strong> where 
              I can contribute to building impactful software solutions and continue growing as a developer.
            </p>
          </motion.div>

          <motion.div
            className="about-stats"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="stat-card">
              <h3 className="stat-number gradient-text">2+</h3>
              <p className="stat-label">Years of Coding</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number gradient-text">8+</h3>
              <p className="stat-label">Projects Completed</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number gradient-text">400+</h3>
              <p className="stat-label">LeetCode Problems</p>
            </div>
            <div className="stat-card">
              <h3 className="stat-number gradient-text">4</h3>
              <p className="stat-label">Hackathon Wins</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
