import './Projects.css';

interface Project {
  title: string;
  description: string[];
  links?: {
    live?: string;
    github?: string;
  };
  technologies?: string;
}

const projects: Project[] = [
    {
      title: "Commute Rental Listings",
      description: [
        `Developed a full-stack rental search platform where users must specify a destination (e.g., work or school) and can filter listings based on commute time, with a React front end and serverless backend`,
        `Engineered a hybrid data pipeline that scrapes real estate listings locally to bypass IP address blocks, storing data in AWS S3 for downstream processing.`,
        `Designed and deployed a serverless backend using AWS Lambda and a SQL database, which automatically updates when new data is available in S3 and exposes a REST API for real-time filtering.`
      ],
      technologies: "Python, SQL, JavaScript, React, Docker, GitHub Actions, AWS",
      links: {
        live:"https://isaac-abell.github.io/find-commute-rentals-fe/",
        github: "https://github.com/Isaac-Abell/Find-Optimal-Commute-Rentals"
      }
    },
    {
        title: "TheStudentBase",
        description: [
          `Worked with a team of students to develop an online marketplace web app for University of Toronto students.`,
          `Built the majority of the front-end using JavaScript/React, deployed via AWS Amplify.`,
          `Implemented Spring Boot REST APIs for product listings and set up CI/CD pipelines using GitHub Actions for automated testing and deployment.`
        ],
        technologies: "Java, SpringBoot, Javascript, React, Github Actions, AWS"
    }
];
export function Projects() {
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
            </div>
            
            {project.technologies && (
              <div className="technologies-section">
                <span className="technologies-label">Technologies:</span>
                <span className="technologies-list">{project.technologies}</span>
              </div>
            )}
          </div>
        ))}
      </div>
    </section>
  );
}