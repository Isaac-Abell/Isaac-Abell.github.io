import { motion } from 'framer-motion';
import './Bio.css';
import type { Bio } from '../../types/Bio';

export function Bio({ bioData }: { bioData: Bio }) {
    const containerVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, x: -30 },
        visible: {
            opacity: 1,
            x: 0,
            transition: { duration: 0.5 }
        }
    };

    return (
        <motion.section 
            className="bio-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-100px" }}
            variants={containerVariants}
        >
            <motion.h2 
                className="sub-title"
                initial={{ opacity: 0, y: -30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
            >
                About Me
            </motion.h2>
            <div className="bio-content">
                <motion.div 
                    className="bio-card"
                    whileHover={{ scale: 1.02 }}
                    transition={{ duration: 0.3 }}
                >
                    {bioData.paragraphs.length > 0 && (
                        <div className="bio-text">
                            {bioData.paragraphs.map((paragraph, index) => (
                                <motion.p 
                                    key={index}
                                    variants={itemVariants}
                                >
                                    {paragraph}
                                </motion.p>
                            ))}
                        </div>
                    )}
                    {bioData.highlights.length > 0 && (
                        <div className="bio-highlights">
                            {bioData.highlights.map((highlight, index) => (
                                <motion.div 
                                    key={index} 
                                    className="highlight-item"
                                    variants={itemVariants}
                                    whileHover={{ x: 10 }}
                                >
                                    <h4>{highlight.label}:</h4>
                                    <span>{highlight.value}</span>
                                </motion.div>
                            ))}
                        </div>
                    )}
                </motion.div>
            </div>
        </motion.section>
    );
}