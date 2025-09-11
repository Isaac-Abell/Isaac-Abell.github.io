import type { Project } from '../types/Project';

export const projects: Project[] = [
    {
      title: "Commute Rental Listings",
      description: [
        `Developed a full-stack rental search platform where users must specify a destination (e.g., work or school) and can filter listings based on commute time, with a React front end and serverless backend`,
        `Engineered a hybrid data pipeline that scrapes real estate listings locally to bypass IP address blocks, storing data in AWS S3 for downstream processing.`,
        `Designed and deployed a serverless backend using AWS Lambda and a SQL database, which automatically updates when new data is available in S3 and exposes a REST API for real-time filtering.`
      ],
      technologies: ["Python", "SQL", "JavaScript", "React", "Docker", "GitHub Actions", "AWS"],
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
        technologies: ["Java", "SpringBoot", "Javascript", "React", "Github Actions", "AWS"]
    }
];