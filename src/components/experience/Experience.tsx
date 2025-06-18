import "./Experience.css"

export function Experience() {
    const experiences = [
        {
            company: "SAP",
            location: "Walldorf, Germany / Toronto, ON",
            role: "iXp Intern - Full Stack Developer",
            date: "May 2024 – Present",
            details: [
                "Developed SAP Demo Environment 2.0, a web app that provides easy access to the entire SAP solution demo portfolio.",
                "Built the frontend using React and the backend with Spring Boot.",
                "The application is currently used by 20,000+ internal users and partners of SAP."
            ]
        },
        {
            company: "Intelligent Adaptive Interventions Lab",
            location: "Toronto, ON",
            role: "Research Assistant",
            date: "September 2024 – May 2025",
            details: [
                "Developed a webapp for the lab to facilitate testing of a teaching assistant AI.",
                "Developed a backend using FastAPI to integrate the AI model with the system.",
                "Built a React-based frontend and deployed the full-stack application on AWS."
            ]
        },
        {
            company: "Appex",
            location: "Boston, MA",
            role: "Software Engineering Intern",
            date: "May 2023 - August 2023",
            details: [
                "Helped optimize AWS usage, cutting company costs by $2500/month.",
                "Created an app review summarization tool to identify common complaints and requested changes from user reviews on the app store.",
                "Developed the website for BonsAI: AI ChatBot Assistant askbons.ai."
            ]
        },
        {
            company: "Guavy",
            location: "Victoria, BC",
            role: "Software Engineering Intern",
            date: "June 2021 - August 2021",
            details: [
                "Developed server load tests to determine the limit of server operating parameters.",
                "Used Cypress to simulate a user’s activity on Guavy’s website in order to identify possible bugs.",
                "Developed web scraping tools using Puppeteer to maintain current information for Guavy’s database."
            ]
        }
    ];

    return (
        <section className="experience-container">
            <h2 className="sub-title">Experience</h2>
            <div className="experience-list">
                {experiences.map((exp, index) => (
                    <div key={index} className="experience-card">
                        <div className="experience-header">
                            <h3 className="experience-title">{exp.role}</h3>
                            <p className="experience-title">{exp.company}</p>
                        </div>
                        <p className="experience-description">{exp.location}</p>
                        <p className="experience-description">{exp.date}</p>
                        <ul className="experience-description">
                            {exp.details.map((detail, i) => (
                                <li key={i}>{detail}</li>
                            ))}
                        </ul>
                    </div>
                ))}
            </div>
        </section>
    );
}
