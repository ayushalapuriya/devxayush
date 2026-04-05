import React from 'react';
import { motion } from 'framer-motion';

import {
  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt,
  FaGithub, FaJava, FaDocker, FaDatabase, FaNetworkWired, FaCogs, FaProjectDiagram
} from 'react-icons/fa';

import {
  SiExpress, SiMongodb, SiMysql, SiTailwindcss, SiSocketdotio,
  SiJsonwebtokens, SiPostman, SiGooglecloud, SiVercel,
  SiNextdotjs, SiSpringboot, SiBootstrap,
  SiRedux, SiNetlify, SiAuth0, SiRender
} from 'react-icons/si';

import '../css/Skills.css';

const Skills = () => {

  const skillCategories = [

    {
      title: 'Frontend',
      skills: [
        { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },
        { name: 'Next.js', icon: <SiNextdotjs />, color: '#333333' },
        { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },
        { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },
        { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },
        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' },
        { name: 'Bootstrap', icon: <SiBootstrap />, color: '#7952B3' },
        { name: 'Redux / Context API', icon: <SiRedux />, color: '#764ABC' },
        { name: 'Framer Motion', icon: <FaReact />, color: '#E10098' }
      ]
    },

    {
      title: 'Backend',
      skills: [
        { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },
        { name: 'Express.js', icon: <SiExpress />, color: '#333333' },
        { name: 'Spring Boot', icon: <SiSpringboot />, color: '#6DB33F' },
        { name: 'REST APIs', icon: <FaNodeJs />, color: '#68A063' },
        { name: 'JWT Auth', icon: <SiJsonwebtokens />, color: '#333333' },
        { name: 'OAuth (Basics)', icon: <SiAuth0 />, color: '#EA4335' },
        { name: 'Socket.io', icon: <SiSocketdotio />, color: '#FF9900' },
      ]
    },

    {
      title: 'Databases',
      skills: [
        { name: 'MongoDB', icon: <SiMongodb />, color: '#47A248' },
        { name: 'MySQL', icon: <SiMysql />, color: '#4479A1' }
      ]
    },

    {
      title: 'Programming & CS Fundamentals',
      skills: [
        { name: 'JavaScript (ES6+)', icon: <FaJs />, color: '#F7DF1E' },
        { name: 'Java', icon: <FaJava />, color: '#007396' },
        { name: 'Data Structures & Algorithms', icon: <FaProjectDiagram />, color: '#f89820' },
        { name: 'OOP', icon: <FaCogs />, color: '#5382a1' },
        { name: 'Operating Systems', icon: <FaDatabase />, color: '#6c757d' },
        { name: 'Computer Networks', icon: <FaNetworkWired />, color: '#20c997' }
      ]
    },

    {
      title: 'Tools & Cloud',
      skills: [
        { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },
        { name: 'GitHub', icon: <FaGithub />, color: '#333333' },
        { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },
        { name: 'Vercel', icon: <SiVercel />, color: '#333333' },
        { name: 'Netlify', icon: <SiNetlify />, color: '#00C7B7' },
        { name: 'Docker (Basic)', icon: <FaDocker />, color: '#2496ED' },
        { name: 'MongoDB Compass', icon: <SiMongodb />, color: '#47A248' },
        { name: 'Render', icon: <SiRender />, color: '#333333' }
      ]
    },

    {
      title: 'AI & Integrations',
      skills: [
        { name: 'OpenAI API', icon: <FaReact />, color: '#412991' },
        { name: 'Google Vision API', icon: <SiGooglecloud />, color: '#4285F4' },
        { name: 'Prompt Engineering', icon: <FaReact />, color: '#FF4081' }
      ]
    }

  ];

  const softSkills = [
    'Problem Solving',
    'Team Collaboration',
    'Adaptability',
    'Communication',
    'Quick Learner',
    'Time Management'
  ];

  return (
    <section className="section skills-section" id="skills">
      <div className="container">

        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Skills & Technologies
        </motion.h2>

        <div className="skills-container">
          {skillCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.title}
              className="skill-category"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: categoryIndex * 0.1 }}
            >
              <h3 className="category-title">{category.title}</h3>

              <div className="skills-grid">
                {category.skills.map((skill, skillIndex) => (
                  <motion.div
                    key={skill.name}
                    className="skill-card"
                    whileHover={{ scale: 1.05, y: -5 }}
                    initial={{ opacity: 0, scale: 0.8 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    transition={{
                      delay: categoryIndex * 0.1 + skillIndex * 0.05
                    }}
                  >
                    <div
                      className="skill-icon"
                      style={{ color: skill.color }}
                    >
                      {skill.icon}
                    </div>
                    <span className="skill-name">{skill.name}</span>
                  </motion.div>
                ))}
              </div>

            </motion.div>
          ))}
        </div>

        <motion.div
          className="soft-skills-section"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <h3 className="category-title">Soft Skills</h3>

          <div className="soft-skills-container">
            {softSkills.map((skill, index) => (
              <motion.span
                key={skill}
                className="soft-skill-tag"
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.05 }}
                whileHover={{ scale: 1.05 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

      </div>
    </section>
  );
};

export default Skills;