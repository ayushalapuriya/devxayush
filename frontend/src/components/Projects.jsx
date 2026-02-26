import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import './Projects.css';

const Projects = () => {
  const [filter, setFilter] = useState('all');
  const [expandedProjects, setExpandedProjects] = useState({});

  const toggleReadMore = (projectId) => {
    setExpandedProjects(prev => ({
      ...prev,
      [projectId]: !prev[projectId]
    }));
  };

  const projects = [
    {
      id: 1,
      title: 'Rail Vista',
      category: 'web-app',
      period: 'Oct 2024 - Jan 2025',
      description: 'Solved the lack of real-time assistance for train travelers by providing seat availability alerts, lost-and-found tracking, and crowd monitoring for unreserved coaches.',
      features: [
        'Real-time MERN stack platform for train travel assistance',
        'Live seat availability alerts and lost item tracking',
        'Emergency alert system with geolocation support',
        'Community forum for traveler collaboration',
        'Crowd monitoring for unreserved coaches',
        'Twitter API integration for social sharing'
      ],
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Twitter API', 'Socket.io'],
      impact: 'Enhanced travel experience for thousands of daily commuters',
      live: 'https://railvista.netlify.app/'
    },
    {
      id: 2,
      title: 'Wisebook - AI Note Platform',
      category: 'ai-powered',
      period: 'Jan 2025 - Feb 2025',
      description: 'Converts handwritten notes into searchable, well-structured digital content using OCR and AI-powered summarization.',
      features: [
        'Handwritten note digitization using MERN stack',
        'Google Cloud Vision API for OCR processing',
        'ChatGPT API for intelligent content summarization',
        'Searchable note database with 90%+ accuracy',
        'Personal user feedback system for continuous improvement',
        'Export notes in multiple formats (PDF, DOCX, TXT)'
      ],
      tech: ['React', 'Node.js', 'MongoDB', 'Google Cloud Vision', 'ChatGPT API', 'Express'],
      impact: '90%+ OCR accuracy with intelligent summarization',
      github: 'https://github.com/ayushalapuriya/wisebook',
      live: '#'
    },
    {
      id: 3,
      title: 'ProjectHub',
      category: 'web-app',
      period: 'Jun 2025 - Aug 2025',
      description: 'Real-time project collaboration with live task updates, status tracking, and secure role-based access.',
      features: [
        'MERN-based team collaboration platform',
        'Real-time task updates via Socket.io',
        'Advanced task filtering and status tracking',
        'JWT authentication with secure role-based access',
        'Responsive dashboards with Chart.js visualization',
        'File upload and sharing capabilities'
      ],
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'Socket.io', 'Chart.js', 'JWT'],
      impact: 'Streamlined project management for distributed teams',
      github: 'https://github.com/ayushalapuriya/projecthub',
      live: '#'
    }
  ];

  const categories = [
    { id: 'all', label: 'All Projects' },
    { id: 'web-app', label: 'Web Applications' },
    { id: 'ai-powered', label: 'AI-Powered' }
  ];

  const filteredProjects = filter === 'all' 
    ? projects 
    : projects.filter(project => project.category === filter);

  return (
    <section className="section projects-section" id="projects">
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Featured Projects
        </motion.h2>

        <motion.div 
          className="project-filters"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          {categories.map((category) => (
            <button
              key={category.id}
              className={`filter-btn ${filter === category.id ? 'active' : ''}`}
              onClick={() => setFilter(category.id)}
            >
              {category.label}
            </button>
          ))}
        </motion.div>

        <div className="projects-grid">
          {filteredProjects.map((project, index) => (
            <motion.div
              key={project.id}
              className="project-card"
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10 }}
            >
              <div className="project-header">
                <div>
                  <h3 className="project-title">{project.title}</h3>
                  <p className="project-period">{project.period}</p>
                </div>
                <div className="project-links">
                  <motion.a
                    href={project.github}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="project-link"
                    whileHover={{ scale: 1.1 }}
                    whileTap={{ scale: 0.9 }}
                    aria-label="GitHub"
                  >
                    <FaGithub />
                  </motion.a>
                  {project.live !== '#' && (
                    <motion.a
                      href={project.live}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="project-link"
                      whileHover={{ scale: 1.1 }}
                      whileTap={{ scale: 0.9 }}
                      aria-label="Live Demo"
                    >
                      <FaExternalLinkAlt />
                    </motion.a>
                  )}
                </div>
              </div>

              <p className="project-description">{project.description}</p>

              <div className="project-tech">
                {project.tech.map((tech) => (
                  <span key={tech} className="tech-tag">{tech}</span>
                ))}
              </div>

              <motion.div
                initial={false}
                animate={{ 
                  height: expandedProjects[project.id] ? 'auto' : 0,
                  opacity: expandedProjects[project.id] ? 1 : 0
                }}
                transition={{ duration: 0.3, ease: "easeInOut" }}
                style={{ overflow: 'hidden' }}
              >
                {expandedProjects[project.id] && (
                  <>
                    <div className="project-features">
                      <h4>Key Features:</h4>
                      <ul>
                        {project.features.map((feature, idx) => (
                          <li key={idx}>{feature}</li>
                        ))}
                      </ul>
                    </div>

                    <div className="project-impact">
                      <strong>Impact:</strong> {project.impact}
                    </div>
                  </>
                )}
              </motion.div>

              <button 
                className="read-more-btn"
                onClick={() => toggleReadMore(project.id)}
              >
                {expandedProjects[project.id] ? 'Show Less ▲' : 'Read More ▼'}
              </button>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
