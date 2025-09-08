import "./Experience.css"

export function Experience() {
    const experiences = [
        {
            company: "SAP",
            location: "Walldorf, Germany / Toronto, ON",
            role: "iXp Intern - Full Stack Developer",
            date: "May 2024 – Present",
            details: [
                `Developed a real-time computer vision–based engagement tracking system using transfer learning on a pre-trained ResNet model to help designers optimize customer engagement at SAP Experience Centers, with deployment planned for 2026.`,
                `Worked with a team of interns to build SAP Demo Environment 2.0, a platform currently used by 20,000+ internal users and partners to access and present SAP solution demos; developing the front end with TypeScript/React and adding a Node.js REST API layer to organize backend data for seamless integration with the front end.`
            ]
        },
        {
            company: "Intelligent Adaptive Interventions Lab",
            location: "Toronto, ON",
            role: "Research Assistant",
            date: "September 2024 – May 2025",
            details: [
                `Built and deployed a full-stack web app to test the lab’s AI teaching assistant in real-world applications, developing a FastAPI backend, React frontend, and hosting backend services on AWS EC2/S3 with frontend deployment via AWS Amplify.`
            ]
        },
        {
            company: "Appex",
            location: "Boston, MA",
            role: "Software Engineering Intern",
            date: "May 2023 - August 2023",
            details: [
                `Built and deployed an app review summarization tool using the OpenAI API, leveraging prompt engineering and automated AWS services (CloudWatch/Lambda for monthly execution, SES for email notifications) to generate monthly summaries for development and UX teams, enabling them to prioritize app fixes more efficiently.`,
                `Reduced AWS costs by $2,500/month by replacing a macOS EC2 instance used for APNs token signing with a Linux-based implementation using portable credentials.`,
            ]
        },
        {
            company: "Guavy",
            location: "Victoria, BC",
            role: "Software Engineering Intern",
            date: "May 2021 - August 2021",
            details: [
                `Developed Puppeteer scripts to scrape websites, enhancing the volume and quality of data in Guavy’s databases.`,
                `Created Cypress tests to validate website functionality prior to deployment, ensuring a reliable user experience.`
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
                            <p> | </p>
                            <p className="experience-title">{exp.company}</p>
                        </div>
                        <p className="experience-description">{exp.location}</p>
                        <p className="experience-description">{exp.date}</p>
                        <div className="description-container">
                            <ul className="experience-description">
                                {exp.details.map((detail, i) => (
                                    <li key={i}>{detail}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                ))}
            </div>
        </section>
    );
}
