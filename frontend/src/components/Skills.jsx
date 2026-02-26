import React from 'react';

import { motion } from 'framer-motion';

import { 

  FaReact, FaNodeJs, FaHtml5, FaCss3Alt, FaJs, FaGitAlt, FaGithub, FaPython, FaJava, FaLaptopCode 

} from 'react-icons/fa';

import { 

  SiExpress, SiMongodb, SiMysql, SiTailwindcss, SiSocketdotio, SiJsonwebtokens, 

  SiPostman, SiGooglecloud, SiVercel 

} from 'react-icons/si';

import './Skills.css';



const Skills = () => {

  const skillCategories = [

    {

      title: 'Frontend',

      skills: [

        { name: 'React.js', icon: <FaReact />, color: '#61DAFB' },

        { name: 'HTML5', icon: <FaHtml5 />, color: '#E34F26' },

        { name: 'CSS3', icon: <FaCss3Alt />, color: '#1572B6' },

        { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' },

        { name: 'Tailwind CSS', icon: <SiTailwindcss />, color: '#06B6D4' }

      ]

    },

    {

      title: 'Backend',

      skills: [

        { name: 'Node.js', icon: <FaNodeJs />, color: '#339933' },

        { name: 'Express.js', icon: <SiExpress />, color: '#000000' },

        { name: 'Socket.io', icon: <SiSocketdotio />, color: '#010101' },

        { name: 'JWT', icon: <SiJsonwebtokens />, color: '#000000' }

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

      title: 'Programming',

      skills: [

        { name: 'Java', icon: <FaJava />, color: '#007396' },

        { name: 'Python', icon: <FaPython />, color: '#3776AB' },

        { name: 'JavaScript', icon: <FaJs />, color: '#F7DF1E' }

      ]

    },

    {

      title: 'Tools & Cloud',

      skills: [

        { name: 'VS Code', icon: <FaLaptopCode />, color: '#007ACC' },

        { name: 'Git', icon: <FaGitAlt />, color: '#F05032' },

        { name: 'GitHub', icon: <FaGithub />, color: '#181717' },

        { name: 'Postman', icon: <SiPostman />, color: '#FF6C37' },

        { name: 'Google Cloud', icon: <SiGooglecloud />, color: '#4285F4' },

        { name: 'Vercel', icon: <SiVercel />, color: '#000000' }

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

                    transition={{ delay: categoryIndex * 0.1 + skillIndex * 0.05 }}

                  >

                    <div className="skill-icon" style={{ color: skill.color }}>

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

