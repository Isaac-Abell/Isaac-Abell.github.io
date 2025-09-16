import type { Project } from '../types/Project';

export const projects: Project[] = [
  {
    title: "Rental Listings with Commute Filter",
    description: [
      `Developed a full-stack rental search platform where users must specify a destination (e.g., work or school) and can filter listings based on commute time, with a React front end and serverless backend`,
      `Engineered a hybrid data pipeline that scrapes real estate listings locally to bypass IP address blocks, storing data in AWS S3 for downstream processing.`,
      `Designed and deployed a serverless backend using AWS Lambda and a SQL database, which automatically updates when new data is available in S3 and exposes a REST API for real-time filtering.`
    ],
    technologies: ["Python", "SQL", "JavaScript", "React", "Docker", "GitHub Actions", "AWS"],
    links: {
      live: "https://isaac-abell.github.io/find-commute-rentals-fe/",
      github: "https://github.com/Isaac-Abell/Find-Optimal-Commute-Rentals"
    }
  },
  {
    title: "Algorithm Visualizer",
    description: [
      "Built an interactive web tool to visualize classic algorithms (DFS, BFS, Quicksort, Heapsort, Binary Search) for students and developers.",
      "Implemented real-time animations of algorithm steps with React and Framer Motion, allowing step-by-step tracing of array and graph operations.",
    ],
    technologies: ["React", "TypeScript", "Framer Motion"],
    links: {
      live: "https://isaacabell.com/algo-visualizer/",
      github: "https://github.com/Isaac-Abell/algo-visualizer"
    }
  },
  {
    title: "API & Website Monitoring Tool",
    description: [
      "Developed a Go-based monitoring system that checks website availability and API performance concurrently, reporting results directly to a GitHub README and Actions workflow summary.",
      "Uses headless Chrome to detect console errors, track response times, and run scheduled automated tests via GitHub Actions.",
    ],
    technologies: ["Go", "GitHub Actions", "Chromedp"],
    links: {
      github: "https://github.com/Isaac-Abell/api-and-website-monitor"
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