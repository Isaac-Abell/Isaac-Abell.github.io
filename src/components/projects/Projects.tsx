import { motion } from 'framer-motion';
import './Projects.css';
import type { Project } from '../../types/Project';

export function Projects({ projects }: { projects: Project[] }) {
  const handleLinkClick = (url: string, event: React.MouseEvent) => {
    event.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 50, rotateX: -15 },
    visible: {
      opacity: 1,
      y: 0,
      rotateX: 0,
      transition: {
        duration: 0.6,
        ease: [0.34, 1.56, 0.64, 1]
      }
    }
  };

  return (
    <motion.section 
      className="projects-container"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
    >
      <motion.h2 
        className="sub-title"
        initial={{ opacity: 0, scale: 0.8 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        Projects
      </motion.h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <motion.div
            key={index}
            className="project-card"
            variants={cardVariants}
            whileHover={{ 
              y: -15,
              rotateX: 2,
              transition: { duration: 0.3 }
            }}
          >
            <div className="project-header">
              <motion.h3 
                className="project-title"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.2, duration: 0.5 }}
              >
                {project.title}
              </motion.h3>
              {project.links && (
                <motion.div 
                  className="project-links"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.3, duration: 0.5 }}
                >
                  {project.links.live && (
                    <motion.button
                      className="project-link-btn live-link"
                      onClick={(e) => handleLinkClick(project.links!.live!, e)}
                      title="View Live Site"
                      whileHover={{ scale: 1.05, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="link-text">Live Site</span>
                      <span className="link-icon">↗</span>
                    </motion.button>
                  )}
                  {project.links.github && (
                    <motion.button
                      className="project-link-btn github-link"
                      onClick={(e) => handleLinkClick(project.links!.github!, e)}
                      title="View GitHub Repository"
                      whileHover={{ scale: 1.05, y: -4 }}
                      whileTap={{ scale: 0.95 }}
                    >
                      <span className="link-text">GitHub</span>
                      <span className="link-icon">↗</span>
                    </motion.button>
                  )}
                </motion.div>
              )}
            </div>
           
            <div className="project-details">
              <ul className="project-description">
                {project.description.map((point, idx) => (
                  <motion.li 
                    key={idx}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.4 + (idx * 0.1), duration: 0.5 }}
                  >
                    {point}
                  </motion.li>
                ))}
              </ul>
              
              {project.technologies && project.technologies.length > 0 && (
                <motion.div 
                  className="project-technologies"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: 0.6, duration: 0.5 }}
                >
                  {project.technologies.map((tech, i) => (
                    <motion.span 
                      key={i} 
                      className="tech-bubble"
                      initial={{ opacity: 0, scale: 0 }}
                      whileInView={{ opacity: 1, scale: 1 }}
                      viewport={{ once: true }}
                      transition={{ 
                        delay: 0.7 + (i * 0.05),
                        duration: 0.3,
                        type: "spring",
                        stiffness: 200
                      }}
                      whileHover={{ 
                        y: -4,
                        scale: 1.05,
                        transition: { duration: 0.2 }
                      }}
                    >
                      {tech}
                    </motion.span>
                  ))}
                </motion.div>
              )}
            </div>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}