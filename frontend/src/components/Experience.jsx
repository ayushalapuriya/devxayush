import React from 'react';
import { motion } from 'framer-motion';
import { FaBriefcase, FaGraduationCap, FaCalendar, FaMapMarkerAlt } from 'react-icons/fa';
import './Experience.css';

const Experience = () => {
  const experiences = [
    {
      type: 'internship',
      title: 'Frontend Developer Intern',
      company: 'GrowIntern',
      location: 'Remote',
      period: 'Mar 2024 - Apr 2024',
      description: [
        'Built responsive web interfaces using HTML, CSS, and JavaScript, improving page load speed by 15%',
        'Managed multiple projects simultaneously, delivering all assignments ahead of deadlines',
        'Adhered to modern coding standards and UI design principles'
      ],
      tech: ['HTML', 'CSS', 'JavaScript']
    },
    {
      type: 'internship',
      title: 'Full-Stack Intern',
      company: 'W3Elites',
      location: 'Remote',
      period: 'Jun 2024 - Jul 2024',
      description: [
        'Developed full-stack applications including an AI-powered chatbot handling 50+ queries/day',
        'Participated in daily scrums and implemented user feedback to enhance features',
        'Gained hands-on experience with MERN stack and modern development practices'
      ],
      tech: ['React', 'Node.js', 'MongoDB', 'Express', 'AI Integration']
    }
  ];

  const education = [
    {
      degree: 'B.Tech in Computer Science',
      institution: 'GLA University, Mathura',
      period: 'Expected June 2026',
      cgpa: '7.8/10',
      highlights: [
        'Specialized in Full-Stack Development and AI Integration',
        'Active member of coding clubs and technical communities',
        'Consistent participation in hackathons and competitive programming'
      ]
    },
    {
      degree: 'Intermediate (Class 12)',
      institution: "Colonel's Brightland Public School, Agra",
      period: 'May 2022',
      cgpa: '76.8%',
      highlights: []
    },
    {
      degree: 'High School (Class 10)',
      institution: "Colonel's Brightland Public School, Agra",
      period: 'May 2020',
      cgpa: '79.6%',
      highlights: []
    }
  ];

  return (
    <section className="section experience-section" id="experience">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Experience & Education
        </motion.h2>

        <div className="timeline-container">
          {/* Experience Timeline */}
          <motion.div
            className="timeline-section"
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="timeline-header">
              <FaBriefcase className="timeline-icon" />
              <h3>Professional Experience</h3>
            </div>

            <div className="timeline">
              {experiences.map((exp, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">{exp.title}</h4>
                    <div className="timeline-meta">
                      <span className="company-name">{exp.company}</span>
                      <span className="timeline-location">
                        <FaMapMarkerAlt /> {exp.location}
                      </span>
                    </div>
                    <p className="timeline-period">
                      <FaCalendar /> {exp.period}
                    </p>
                    <ul className="timeline-description">
                      {exp.description.map((item, idx) => (
                        <li key={idx}>{item}</li>
                      ))}
                    </ul>
                    <div className="timeline-tech">
                      {exp.tech.map((tech) => (
                        <span key={tech} className="tech-badge">{tech}</span>
                      ))}
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* Education Timeline */}
          <motion.div
            className="timeline-section"
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <div className="timeline-header">
              <FaGraduationCap className="timeline-icon" />
              <h3>Education</h3>
            </div>

            <div className="timeline">
              {education.map((edu, index) => (
                <motion.div
                  key={index}
                  className="timeline-item"
                  initial={{ opacity: 0, y: 30 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                >
                  <div className="timeline-marker"></div>
                  <div className="timeline-content">
                    <h4 className="timeline-title">{edu.degree}</h4>
                    <p className="company-name">{edu.institution}</p>
                    <p className="timeline-period">
                      <FaCalendar /> {edu.period}
                    </p>
                    <p className="timeline-cgpa">
                      <strong>Score:</strong> {edu.cgpa}
                    </p>
                    {edu.highlights.length > 0 && (
                      <ul className="timeline-description">
                        {edu.highlights.map((item, idx) => (
                          <li key={idx}>{item}</li>
                        ))}
                      </ul>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Experience;
