import "./Experience.css"

export function Experience() {
    const experiences = [
        {
            company: "SAP",
            location: "Walldorf, Germany / Toronto, ON",
            role: "iXp Intern - Full Stack Developer",
            date: "May 2024 – Present",
            details: [
                `Built a real-time user engagement tracking system by fine-tuning a pre-trained ResNet model using transfer learning in PyTorch. Deployment is planned for SAP Experience Centers.`,
                `Led a team of interns to build SAP Demo Environment 2.0, a web app used by 20,000+ internal users and partners to access and present SAP solution demos in a unified, interactive platform.`,
                `Developed the front-end of SAP Demo Environment 2.0 using TypeScript/React.`,
                `Developed a Node.js REST API layer to refactor poorly structured backend data, enabling smoother integration with the front-end.`
            ]
        },
        {
            company: "Intelligent Adaptive Interventions Lab",
            location: "Toronto, ON",
            role: "Research Assistant",
            date: "September 2024 – May 2025",
            details: [
                `Built and deployed a full-stack web app to test the lab’s AI teaching assistant, developing the FastAPI back-end, React front-end deployed via AWS Amplify, and hosting backend services on AWS EC2/S3 to enable experiments.`
            ]
        },
        {
            company: "Appex",
            location: "Boston, MA",
            role: "Software Engineering Intern",
            date: "May 2023 - August 2023",
            details: [
                `Built and deployed an app review summarization tool using the OpenAI API, leveraging prompt engineering for high-quality summaries, with automated monthly execution via AWS CloudWatch and Lambda, and notifications through Slack and AWS SES.`,
                `Reduced AWS costs by $2,500/month by replacing a macOS EC2 instance used for APNs token signing with a Linux-based implementation using portable credentials.`
            ]
        },
        {
            company: "Guavy",
            location: "Victoria, BC",
            role: "Software Engineering Intern",
            date: "May 2021 - August 2021",
            details: [
                `Created Puppeteer scripts to scrape websites and update Guavy’s database automatically.`,
                `Built automated tests using Cypress to verify website functionality.`
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
