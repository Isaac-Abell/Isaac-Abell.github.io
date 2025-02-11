import "./Projects.css";

interface Project {
  title: string;
  description: string[];
  link?: string;
}

const projects: Project[] = [
    {
      title: "Cheap Rentals near UTSG",
      description:
        ["Finds cheap apartment rentals near The University of Toronto, St. George Campus.", "Uses Selenium to scrape rental data and Google’s Distance Matrix API to find properties with the best price/distance ratio."],
      link: "https://github.com/Isaac-Abell/Finding-cheap-rent-near-UTSG"
    },
    {
      title: "Signal Trader",
      description:
        ["Autonomous stock trading program using the Ameritrade API.", "Day-trades equities based on EMA, RSI, MACD, and momentum."],
      link: "https://github.com/Isaac-Abell/trader"
    },
    {
        title: "TheStudentBase.com (Down for maintenance)",
        description:
          ["Online marketplace for University of Toronto Students.", "Uses Springboot for the backend and JavaScript for the front end."],
    }
  ]

export function Projects() {
  return (
    <div className="projects-container">
      <h2 className="sub-title">Projects</h2>
      <div className="projects-list">
        {projects.map((project, index) => (
            <div key={index} className="project-card" onClick={() => project.link && window.open(project.link)}>
            <h3 className="project-title">{project.title}</h3>
            <ul className="project-description">
              {project.description.map((point, idx) => (
                <li key={idx}>{point}</li>
              ))}
            </ul>
            {project.link && <a className="project-link" href={project.link} target="_blank" rel="noopener noreferrer">
              View Project
            </a>}
          </div>
        ))}
      </div>
    </div>
  );
}
