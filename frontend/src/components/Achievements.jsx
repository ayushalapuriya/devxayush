import React from 'react';
import { motion } from 'framer-motion';
import { FaTrophy, FaMedal, FaCode, FaStar } from 'react-icons/fa';
import '../css/Achievements.css';

const Achievements = () => {
  const achievements = [
    {
      icon: <FaTrophy />,
      title: 'Finalist - Hacksagon, IIIT Gwalior (2025)',
      description: 'Selected among top teams from 200+ participants',
      color: '#FFD700'
    },
    {
      icon: <FaMedal />,
      title: '6th Place - Geekverse v1 Hackathon (2024)',
      description: 'Competed against 200+ teams nationwide',
      color: '#C0C0C0'
    },
    {
      icon: <FaMedal />,
      title: '4th Place - Hack and Viz Hackathon (2024)',
      description: 'Innovative solution recognized in data visualization challenge',
      color: '#CD7F32'
    },
    {
      icon: <FaStar />,
      title: 'Contributor - EcoHack 2025 (IEEE SEED Ideathon)',
      description: 'Active participation in environmental sustainability hackathon',
      color: '#6366f1'
    },
    {
      icon: <FaCode />,
      title: '400+ Problems Solved on LeetCode',
      description: 'Consistent practice and problem-solving excellence',
      color: '#FFA116'
    },
    {
      icon: <FaStar />,
      title: '40+ Coding Contests Participated',
      description: 'Regular participation in competitive programming platforms',
      color: '#6366f1'
    }
  ];

  return (
    <section className="section achievements-section" id="achievements">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Achievements & Recognition
        </motion.h2>

        <div className="achievements-grid">
          {achievements.map((achievement, index) => (
            <motion.div
              key={index}
              className="achievement-card"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ scale: 1.05, y: -10 }}
            >
              <div className="achievement-icon" style={{ color: achievement.color }}>
                {achievement.icon}
              </div>
              <h3 className="achievement-title">{achievement.title}</h3>
              <p className="achievement-description">{achievement.description}</p>
            </motion.div>
          ))}
        </div>

        <motion.div
          className="competitive-stats"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="subsection-title">Competitive Programming</h3>
          <div className="stats-grid">
            <div className="stat-box">
              <div className="stat-value gradient-text">400+</div>
              <div className="stat-label">LeetCode Problems</div>
            </div>
            <div className="stat-box">
              <div className="stat-value gradient-text">40+</div>
              <div className="stat-label">Coding Contests</div>
            </div>
            <div className="stat-box">
              <div className="stat-value gradient-text">4</div>
              <div className="stat-label">Hackathon Wins</div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;
