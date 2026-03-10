import { useState } from 'react';
import type { Project } from '../../types/Project';

export function Projects({ projects, onFocusItem }: { projects: Project[], onFocusItem?: (index: number) => void }) {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const handleLinkClick = (url: string, event: React.MouseEvent) => {
    event.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="section-container" style={{ maxWidth: '1200px' }}>
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
        Projects
      </h2>
      <div className="projects-grid">
        {projects.map((project, index) => (
          <div key={index}
            onClick={() => onFocusItem && onFocusItem(index)}
            onMouseEnter={() => setHoveredIndex(index)}
            onMouseLeave={() => setHoveredIndex(null)}
            style={{
              display: 'flex',
              flexDirection: 'column',
              gap: '1.5rem',
              padding: '2rem',
              border: hoveredIndex === index ? '1px solid rgba(255,255,255,0.3)' : '1px solid rgba(255,255,255,0.1)',
              background: hoveredIndex === index ? 'rgba(255,255,255,0.05)' : 'rgba(255,255,255,0.02)',
              cursor: onFocusItem ? 'pointer' : 'default',
              transition: 'all 0.3s ease',
              borderRadius: '8px'
            }}>
            <div style={{
              display: 'flex',
              justifyContent: 'space-between',
              alignItems: 'flex-start',
              gap: '1rem'
            }}>
              <h3 style={{ fontSize: '2rem', fontWeight: 600, margin: 0, letterSpacing: '-0.02em' }}>
                {project.title}
              </h3>
              {project.links && (
                <div style={{ display: 'flex', gap: '0.75rem' }}>
                  {project.links.live && (
                    <button
                      onClick={(e) => handleLinkClick(project.links!.live!, e)}
                      style={{
                        background: 'none', border: 'none', color: 'white', cursor: 'pointer',
                        fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = '0.6'}
                    >
                      LIVE ↗
                    </button>
                  )}
                  {project.links.github && (
                    <button
                      onClick={(e) => handleLinkClick(project.links!.github!, e)}
                      style={{
                        background: 'none', border: 'none', color: 'white', cursor: 'pointer',
                        fontSize: '0.8rem', textTransform: 'uppercase', letterSpacing: '0.1em', opacity: 0.6
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.opacity = '1'}
                      onMouseLeave={(e) => e.currentTarget.style.opacity = '0.6'}
                    >
                      GITHUB ↗
                    </button>
                  )}
                </div>
              )}
            </div>

            <ul style={{
              listStyle: 'none',
              padding: 0,
              margin: 0,
              display: 'flex',
              flexDirection: 'column',
              gap: '0.75rem',
              fontSize: '1rem',
              lineHeight: 1.6,
              color: 'rgba(255,255,255,0.7)'
            }}>
              {project.description.map((point, idx) => (
                <li key={idx} style={{ position: 'relative', paddingLeft: '1.25rem' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'rgba(255,255,255,0.3)' }}>›</span>
                  {point}
                </li>
              ))}
            </ul>

            {project.technologies && project.technologies.length > 0 && (
              <div style={{
                display: 'flex',
                flexWrap: 'wrap',
                gap: '0.5rem',
                marginTop: 'auto',
                paddingTop: '1.5rem',
                borderTop: '1px solid rgba(255,255,255,0.1)'
              }}>
                {project.technologies.map((tech, i) => (
                  <span key={i} style={{
                    fontSize: '0.75rem',
                    fontWeight: 500,
                    color: 'rgba(255,255,255,0.5)',
                    background: 'rgba(255,255,255,0.05)',
                    padding: '0.2rem 0.6rem',
                    borderRadius: '2px'
                  }}>
                    {tech}
                  </span>
                ))}
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}