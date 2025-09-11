import type { Experience } from '../../types/Experience';
import './Experience.css';

export function Experience({ experiences }: { experiences: Experience[] }) {
    return (
        <section className="experience-container">
            <h2 className="sub-title">Experience</h2>
            <div className="experience-list">
                {experiences.map((exp, index) => (
                    <div key={index} className="experience-card">
                        <div className="experience-header">
                            <div className="title-section">
                                <h3 className="experience-role">{exp.role}</h3>
                                <a
                                    href={exp.companyUrl}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="experience-company-link"
                                >
                                    <h4 className="experience-company">{exp.company}</h4>
                                </a>
                            </div>
                            <div className="meta-section">
                                <p className="experience-date">{exp.date}</p>
                                <p className="experience-location">{exp.location}</p>
                            </div>
                        </div>
                        <div className="experience-details">
                            <ul>
                                {exp.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                            {exp.skills && exp.skills.length > 0 && (
                                <div className="experience-skills">
                                    {exp.skills.map((skill, i) => (
                                        <span key={i} className="skill-bubble">{skill}</span>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}