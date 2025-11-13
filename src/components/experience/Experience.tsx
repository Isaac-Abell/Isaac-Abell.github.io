import { motion } from 'framer-motion';
import type { Experience } from '../../types/Experience';
import './Experience.css';

export function Experience({ experiences }: { experiences: Experience[] }) {
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
            className="experience-container"
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
                Experience
            </motion.h2>
            <div className="experience-list">
                {experiences.map((exp, index) => (
                    <motion.div 
                        key={index} 
                        className="experience-card"
                        variants={cardVariants}
                        whileHover={{ 
                            y: -15,
                            rotateX: 2,
                            transition: { duration: 0.3 }
                        }}
                    >
                        <div className="experience-header">
                            <div className="title-section">
                                <motion.h3 
                                    className="experience-role"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.2, duration: 0.5 }}
                                >
                                    {exp.role}
                                </motion.h3>
                                <motion.a
                                    href={exp.companyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="experience-company-link"
                                    initial={{ opacity: 0, x: -20 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.3, duration: 0.5 }}
                                >
                                    <h4 className="experience-company">{exp.company}</h4>
                                </motion.a>
                            </div>
                            <motion.div 
                                className="meta-section"
                                initial={{ opacity: 0, x: 20 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: 0.2, duration: 0.5 }}
                            >
                                <p className="experience-date">{exp.date}</p>
                                <p className="experience-location">{exp.location}</p>
                            </motion.div>
                        </div>
                        <div className="experience-details">
                            <ul>
                                {exp.details.map((detail, i) => (
                                    <motion.li 
                                        key={i}
                                        initial={{ opacity: 0, x: -20 }}
                                        whileInView={{ opacity: 1, x: 0 }}
                                        viewport={{ once: true }}
                                        transition={{ delay: 0.4 + (i * 0.1), duration: 0.5 }}
                                    >
                                        {detail}
                                    </motion.li>
                                ))}
                            </ul>
                            {exp.skills && exp.skills.length > 0 && (
                                <motion.div 
                                    className="experience-skills"
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.6, duration: 0.5 }}
                                >
                                    {exp.skills.map((skill, i) => (
                                        <motion.span 
                                            key={i} 
                                            className="skill-bubble"
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
                                            {skill}
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