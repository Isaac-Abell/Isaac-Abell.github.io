import './Projects.css';
import type { Project } from '../../types/Project';

export function Projects({ projects }: { projects: Project[] }) {
  const handleLinkClick = (url: string, event: React.MouseEvent) => {
    event.stopPropagation();
    window.open(url, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="projects-container">
      <h2 className="sub-title">Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
          <div
            key={index}
            className="project-card"
          >
            <div className="project-header">
              <h3 className="project-title">
                {project.title}
              </h3>
              {project.links && (
                <div className="project-links">
                  {project.links.live && (
                    <button
                      className="project-link-btn live-link"
                      onClick={(e) => handleLinkClick(project.links!.live!, e)}
                      title="View Live Site"
                    >
                      <span className="link-text">Live Site</span>
                      <span className="link-icon">↗</span>
                    </button>
                  )}
                  {project.links.github && (
                    <button
                      className="project-link-btn github-link"
                      onClick={(e) => handleLinkClick(project.links!.github!, e)}
                      title="View GitHub Repository"
                    >
                      <span className="link-text">GitHub</span>
                      <span className="link-icon">↗</span>
                    </button>
                  )}
                </div>
              )}
            </div>
           
            <div className="project-details">
              <ul className="project-description">
                {project.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
              
              {project.technologies && project.technologies.length > 0 && (
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-bubble">{tech}</span>
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