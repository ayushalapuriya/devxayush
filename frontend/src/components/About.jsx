import React from "react";
import { motion } from "framer-motion";
import "../css/About.css";

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
              Hello! I'm <strong>Ayush Alapuriya</strong>, a passionate <strong>B.Tech Computer Science student</strong> at <strong>GLA University, Mathura</strong> with a <strong>7.8/10 CGPA</strong>, graduating in June 2026.
              My academic journey includes comprehensive coursework in <strong>Data Structures, DBMS, Operating Systems, OOP, and Computer Networks</strong>, providing me with a strong foundation in computer science fundamentals.
            </p>
            <p>
              I've gained valuable industry exposure through impactful internships at <strong>GrowIntern</strong> as a Frontend Developer and <strong>W3Elites</strong> as a Full-Stack Intern. Currently, I'm undergoing <strong>enterprise training at Capgemini</strong> as an <strong>Analyst/A4</strong> in their 4-5 month Java Full Stack Program with Python & GenAI, where I'm learning enterprise-level development practices and modern technologies.
            </p>
            <p>
              I've built impressive full-stack applications including <strong>Rail Vista</strong> - a real-time rail journey assistant with sub-5-second emergency response, <strong>Wisebook</strong> - an AI-powered handwritten note digitization platform using Google Cloud Vision and ChatGPT APIs, and <strong>ProjectHub</strong> - a collaborative project management tool with real-time Socket.io integration and JWT authentication.
            </p>
            <p>
              My expertise spans across modern web technologies including <strong>React.js, Next.js, HTML5, CSS3, JavaScript</strong> for frontend, <strong>Node.js, Express.js, Spring Boot</strong> for backend, <strong>MongoDB, MySQL</strong> for databases, and specialized skills in <strong>Python, GenAI, Socket.io, JWT, Chart.js</strong> for advanced development.
            </p>
            <p>
              I'm an active competitive programmer with remarkable hackathon performances including <strong>Finalist at Hacksagon IIIT Gwalior (2025)</strong> among 200+ teams, <strong>6th Place at Geekverse v1 Hackathon (2024)</strong>, <strong>4th Place at Hack and Viz Hackathon (2024)</strong>, and <strong>Contributor at EcoHack 2025</strong>. I've consistently honed my problem-solving skills by solving <strong>400+ LeetCode problems</strong> across 40+ coding contests.
            </p>
            <p>
              I'm currently seeking <strong>challenging full-time opportunities</strong> and <strong>exciting freelance projects</strong> where I can contribute my diverse technical expertise, continuously learn cutting-edge technologies, quickly adapt to evolving requirements, collaborate with talented teams, drive meaningful innovation, and create transformative solutions that make a real impact in the world of technology.
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
