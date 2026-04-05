import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaGithub, FaExternalLinkAlt } from 'react-icons/fa';
import '../css/Projects.css';

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
        'Real-time MERN-based platform delivering travel alerts, lost-and-found tracking, and live crowd monitoring',
        'Implemented emergency alert system with sub-5-second response time using REST APIs and WebSockets',
        'Live seat availability alerts and lost item tracking',
        'Community forum for traveler collaboration',
        'Crowd monitoring for unreserved coaches',
        'Real-time notifications and updates'
      ],
      tech: ['React.js', 'Node.js', 'Express.js', 'MongoDB', 'REST APIs', 'WebSockets'],
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
        'Developed intelligent note digitization system using Google Cloud Vision API and MERN stack for accurate handwriting recognition',
        'Integrated ChatGPT API to generate automated summaries, enabling searchable and structured digital notes',
        'Handwritten note digitization with 90%+ accuracy',
        'Searchable note database with advanced filtering',
        'Personal user feedback system for continuous improvement',
        'Export notes in multiple formats (PDF, DOCX, TXT)'
      ],
      tech: ['MERN Stack', 'OpenAI API', 'Google Cloud Vision', 'Express'],
      impact: '90%+ OCR accuracy with intelligent summarization',
    },
    {
      id: 3,
      title: 'ProjectHub',
      category: 'web-app',
      period: 'Jun 2025 - Aug 2025',
      description: 'Real-time project collaboration with live task updates, status tracking, and secure role-based access.',
      features: [
        'Built full-featured collaboration platform with real-time updates powered by Socket.io for seamless team synchronization',
        'Implemented secure JWT authentication and interactive analytics dashboards using Chart.js',
        'Advanced task filtering and status tracking',
        'Real-time task updates and notifications',
        'Responsive dashboards with interactive visualizations',
        'File upload and sharing capabilities'
      ],
      tech: ['React.js', 'Node.js', 'MongoDB', 'Socket.io', 'JWT', 'Chart.js'],
      impact: 'Streamlined project management for distributed teams',
      github: 'https://github.com/ayushalapuriya/projecthub',
      live: '#'
    },
    {
    id: 4,
    title: 'ReferGrow',
    category: 'web-app',
    period: 'Jan 2026 - March 2026',
    description: 'Enterprise-level referral marketing platform with binary tree structure, automated Business Volume (BV) distribution, and comprehensive service marketplace for multi-level marketing businesses.',
    features: [
      'Binary tree referral system with automatic left/right placement and circular reference prevention',
      'Multi-level Business Volume (BV) income distribution with configurable decay rules (default: 5% base, 50% decay per level)',
      'Transaction-safe MongoDB operations with session-based consistency and fallback for non-transactional environments',
      'Comprehensive service marketplace with categories, pricing, BV assignment, and gallery support',
      'Complete KYC verification system with PAN/Aadhaar document upload and bank detail collection',
      'Multi-role admin panel (super_admin, admin, moderator, user) with granular permissions',
      'Real-time referral tree visualization with depth-limited viewing (max 10 levels for safety)',
      'Service approval workflow, distribution rule configuration, and analytics dashboard',
      'Mobile-first authentication with OTP verification and session management',
      'Cart system with instant purchase processing and automatic commission distribution'
    ],
    tech: ['Next.js 15+', 'React 19', 'Node.js', 'Express.js', 'MongoDB', 'TypeScript', 'Redux Toolkit', 'Tailwind CSS', 'JWT Authentication'],
    impact: 'Scalable platform supporting unlimited referral depth with automated commission distribution for multi-level marketing businesses',
    github: 'https://github.com/ayushalapuriya/ReferGrow',
    live: 'https://sambhariyamarketing.com/'
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

        <motion.div
          className="more-projects-container"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a 
            href="https://github.com/ayushalapuriya"
            target="_blank"
            rel="noopener noreferrer"
            className="more-projects-btn"
          >
            <FaGithub className="github-icon" />
            More Projects Click Here
            <FaExternalLinkAlt className="external-icon" />
          </a>
        </motion.div>
      </div>
    </section>
  );
};

export default Projects;
