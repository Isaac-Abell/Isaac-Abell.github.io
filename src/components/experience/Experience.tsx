import { useState } from 'react';
import type { Experience as ExpType } from '../../types/Experience';

export function Experience({ experiences, onFocusItem }: { experiences: ExpType[], onFocusItem?: (index: number) => void }) {
    const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
    return (
        <section className="section-container">
            <h2 className="section-title" style={{
                fontSize: '4rem',
                fontWeight: 600,
                margin: 0,
                letterSpacing: '-0.03em',
                color: '#ffffff',
                borderBottom: '1px solid rgba(255,255,255,0.2)',
                paddingBottom: '1rem',
                marginBottom: '2rem'
            }}>
                Experience
            </h2>

            <div style={{ display: 'flex', flexDirection: 'column', gap: '6rem' }}>
                {experiences.map((exp, index) => (
                    <div key={index}
                        className="experience-item"
                        onClick={() => onFocusItem && onFocusItem(index)}
                        onMouseEnter={() => setHoveredIndex(index)}
                        onMouseLeave={() => setHoveredIndex(null)}
                        style={{
                            cursor: onFocusItem ? 'pointer' : 'default',
                            background: hoveredIndex === index ? 'rgba(255,255,255,0.05)' : 'transparent',
                            border: hoveredIndex === index ? '1px solid rgba(255,255,255,0.1)' : '1px solid transparent'
                        }}>
                        {/* Meta Column */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', opacity: 0.7 }}>
                            <span style={{ fontSize: '1.2rem', fontWeight: 500, letterSpacing: '0.05em' }}>{exp.date}</span>
                            <span style={{ fontSize: '1rem', textTransform: 'uppercase', letterSpacing: '0.1em' }}>{exp.location}</span>
                        </div>

                        {/* Content Column */}
                        <div style={{ display: 'flex', flexDirection: 'column', gap: '1.5rem' }}>
                            <div>
                                <h3 style={{ fontSize: '2.5rem', fontWeight: 700, margin: '0 0 0.5rem 0', letterSpacing: '-0.02em' }}>{exp.role}</h3>
                                <a href={exp.companyUrl} target="_blank" rel="noopener noreferrer" style={{
                                    fontSize: '1.5rem', fontWeight: 400, color: 'rgba(255,255,255,0.7)', textDecoration: 'none'
                                }}>
                                    @ {exp.company}
                                </a>
                            </div>

                            <ul style={{
                                listStyle: 'none',
                                padding: 0,
                                margin: 0,
                                display: 'flex',
                                flexDirection: 'column',
                                gap: '1rem',
                                fontSize: '1.1rem',
                                lineHeight: 1.7,
                                color: 'rgba(255,255,255,0.85)'
                            }}>
                                {exp.details.map((detail, i) => (
                                    <li key={i} style={{ position: 'relative', paddingLeft: '1.5rem' }}>
                                        <span style={{ position: 'absolute', left: 0, color: 'rgba(255,255,255,0.4)' }}>—</span>
                                        {detail}
                                    </li>
                                ))}
                            </ul>

                            {exp.skills && exp.skills.length > 0 && (
                                <div style={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: '0.75rem',
                                    marginTop: '1rem'
                                }}>
                                    {exp.skills.map((skill, i) => (
                                        <span key={i} style={{
                                            fontSize: '0.85rem',
                                            textTransform: 'uppercase',
                                            letterSpacing: '0.1em',
                                            padding: '0.4rem 0.8rem',
                                            border: '1px solid rgba(255,255,255,0.2)',
                                            color: 'rgba(255,255,255,0.6)'
                                        }}>
                                            {skill}
                                        </span>
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