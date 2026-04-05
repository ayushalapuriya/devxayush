import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { FaCertificate, FaAward, FaGraduationCap, FaCode, FaBrain, FaPalette, FaTimes } from 'react-icons/fa';
import '../css/Certifications.css';

const Certifications = () => {
  const [showCertificate, setShowCertificate] = useState(null);

  const openCertificate = (certificateFile) => {
    setShowCertificate(certificateFile);
  };

  const closeCertificate = () => {
    setShowCertificate(null);
  };
  const certifications = [
    {
      id: 1,
      title: 'W3Elites Full-Stack Internship',
      description: 'Completed comprehensive full-stack development internship with hands-on experience in MERN stack, REST APIs, and modern web development practices.',
      icon: <FaCertificate />,
      color: '#6366f1',
      certificateFile: '/assets/images/w3elites-internship.jpg'
    },
    {
      id: 2,
      title: 'Java Programming Certificate',
      description: 'Advanced Java programming course covering OOP concepts, data structures, algorithms, and enterprise-level Java development.',
      icon: <FaCode />,
      color: '#f59e0b',
      certificateFile: '/assets/images/java-certificate.jpeg'
    },
    {
      id: 3,
      title: 'Data Science Workshop',
      description: 'Intensive workshop on data science fundamentals, machine learning basics, data visualization, and statistical analysis using Python.',
      icon: <FaGraduationCap />,
      color: '#10b981',
      certificateFile: '/assets/images/data-science-workshop.jpeg'
    },
    {
      id: 4,
      title: 'What is GenAI - Introduction Course',
      description: 'Comprehensive Generative AI training covering prompt engineering, LLMs, AI integration, and practical applications in enterprise environments.',
      icon: <FaBrain />,
      color: '#8b5cf6',
      certificateFile: '/assets/images/genai-course.jpeg'
    },
    {
      id: 5,
      title: 'Adobe Creative Hackathon',
      description: 'Participated in Adobe-sponsored hackathon focusing on creative technology solutions, UI/UX design, and innovative digital experiences.',
      icon: <FaPalette />,
      color: '#ef4444',
      certificateFile: '/assets/images/adobe-hackathon.jpeg'
    }
  ];

  return (
    <section className="section certifications-section" id="certifications">
      <div className="container">
        <motion.h2
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Certifications & Learning
        </motion.h2>

        <div className="certifications-container">
          {certifications.map((cert, index) => (
            <motion.div
              key={cert.id}
              className="certification-card"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -5 }}
            >
              <div className="cert-header">
                <div className="cert-icon" style={{ color: cert.color }}>
                  {cert.icon}
                </div>
                <h3 className="cert-title">{cert.title}</h3>
              </div>

              <p className="cert-description">{cert.description}</p>

              <button 
                className="view-cert-btn"
                onClick={() => openCertificate(cert.certificateFile)}
              >
                View Certificate
              </button>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Certificate Modal/Viewer */}
      <AnimatePresence>
        {showCertificate && (
          <motion.div
            className="certificate-modal-overlay"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={closeCertificate}
          >
            <motion.div
              className="certificate-modal"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div className="certificate-header">
                <h3>Certificate</h3>
                <button className="close-btn" onClick={closeCertificate}>
                  <FaTimes />
                </button>
              </div>
              <div className="certificate-content">
                <img 
                  src={showCertificate} 
                  alt="Certificate" 
                  style={{ maxWidth: '100%', maxHeight: '100%' }}
                  onLoad={() => console.log('Certificate loaded successfully:', showCertificate)}
                  onError={(e) => {
                    console.error('Certificate not found:', showCertificate);
                    console.error('Current path attempted:', showCertificate);
                    console.error('Full URL would be:', window.location.origin + showCertificate);
                    alert(`Certificate file not found: ${showCertificate}\n\nPlease check if the file exists in: public/assets/images/`);
                    e.target.style.display = 'none';
                  }}
                />
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};

export default Certifications;
