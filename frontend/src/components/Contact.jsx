import React from 'react';
import { motion } from 'framer-motion';
import { FaEnvelope, FaPhone, FaMapMarkerAlt } from 'react-icons/fa';
import '../css/Contact.css';

const Contact = () => {
  const services = [
    'Custom Web Application Development',
    'Frontend Development & Modern UI Implementation',
    'AI-Powered Solutions & Automation',
    'E-commerce Platforms & Online Stores',
    'API Development & System Integration',
    'Web Performance Optimization & Enhancement',
    'Technical Consulting & Digital Strategy'
  ];

  const contactInfo = [
    {
      icon: <FaEnvelope />,
      title: 'Email',
      value: 'alapuriya0@gmail.com',
      link: 'mailto:alapuriya0@gmail.com'
    },
    {
      icon: <FaPhone />,
      title: 'Phone',
      value: '+91 8058452975',
      link: 'tel:+918058452975'
    },
    {
      icon: <FaMapMarkerAlt />,
      title: 'Location',
      value: 'Agra, India',
      link: null
    }
  ];

  return (
    <section className="section contact-section" id="contact">
      <div className="bg-gradient-blur bg-gradient-blur-2"></div>
      
      <div className="container">
        <motion.h2 
          className="section-title"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Let's Work Together
        </motion.h2>

        <motion.p
          className="contact-subtitle"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Looking for a developer to bring your ideas to life? I'm available for freelance projects and full-time opportunities.
        </motion.p>

        <div className="contact-container">
          <motion.div
            className="contact-info"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
          >
            <h3 className="contact-info-title">Get In Touch</h3>
            
            <div className="contact-details">
              {contactInfo.map((info, index) => (
                <motion.div
                  key={index}
                  className="contact-detail-item"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: index * 0.1 }}
                >
                  <div className="contact-icon">{info.icon}</div>
                  <div>
                    <h4>{info.title}</h4>
                    {info.link ? (
                      <a href={info.link} className="contact-value">{info.value}</a>
                    ) : (
                      <p className="contact-value">{info.value}</p>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <div className="services-offered">
              <h4>Services I Offer:</h4>
              <ul>
                {services.map((service, index) => (
                  <motion.li
                    key={index}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.05 }}
                  >
                    {service}
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
