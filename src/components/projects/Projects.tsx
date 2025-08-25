import "./Projects.css";

interface Project {
  title: string;
  description: string[];
  link?: string;
}

const projects: Project[] = [
    {
      title: "Commute Rental Listings",
      description:
        [`Developed a full-stack rental search platform where users must specify a destination (e.g., work or school) and can filter listings based on commute time, with a React front end and serverless backend`,
          `Engineered a hybrid data pipeline that scrapes real estate listings locally to bypass IP address blocks, storing data in AWS S3 for downstream processing.`,
          `Designed and deployed a serverless backend using AWS Lambda and a SQL database, which automatically updates when new data is available in S3 and exposes a REST API for real-time filtering.`,
          `Technologies Used: Python, SQL, JavaScript, React, Docker, GitHub Actions, AWS`
        ],
      link: "https://isaac-abell.github.io/find-commute-rentals-fe/"
    },
    {
        title: "TheStudentBase",
        description:
          [
            `Worked with a team of students to develop an online marketplace web app for University of Toronto students.`,
            `Built the majority of the front-end using JavaScript/React, deployed via AWS Amplify.`,
            `Implemented Spring Boot REST APIs for product listings and set up CI/CD pipelines using GitHub Actions for automated testing and deployment.`,
            `Technologies Used: Java, SpringBoot, Javascript, React, Github Actions, AWS`
          ],
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
            <div className="description-container">
              <ul className="project-description">
                {project.description.map((point, idx) => (
                  <li key={idx}>{point}</li>
                ))}
              </ul>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
