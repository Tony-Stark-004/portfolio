export const experience = [
  {
    id: 1,
    company: "Wasserstoff RJ Innovations",
    role: "Senior Software Engineer",
    period: "Jan 2025 — Present",
    location: "Gurugram, Haryana",
    bullets: [
      {
        text: "Shipped ChaturAI — an AI-powered recruitment SaaS platform with 10,000+ registered users, automating resume screening, candidate ranking, and JD generation using Spring Boot, REST APIs, and AWS.",
        link: { label: "ChaturAI", href: "https://app.aichatur.com/", replaces: "ChaturAI" },
      },
      {
        text: "Designed RBAC authentication with Spring Security and JWT supporting multiple user roles; built automated resume parsing pipeline processing 200+ resumes/day using multithreading, Java Streams, and Kafka for async job queuing and concurrent document processing.",
      },
      {
        text: "Owned end-to-end CI/CD pipeline with Jenkins and Docker, integrating automated unit and integration testing with JUnit; collaborated in Agile/Scrum team with 2-week sprint cycles to streamline build, deployment, and feature delivery.",
      },
    ],
  },
  {
    id: 2,
    company: "Rooba Finance",
    role: "Full Stack Engineer",
    period: "Jun 2023 — Jan 2025",
    location: "Gurugram, Haryana",
    bullets: [
      {
        text: "Delivered full-stack token compliance platform on Polygon blockchain using Spring Boot and React, enabling regulated on-chain token transfers and compliance verification; adopted by enterprise clients in production.",
      },
      {
        text: "Integrated Idefy KYC verification (PAN, Aadhaar, face match) into the user onboarding flow, automating identity checks for 500+ users and eliminating manual document review.",
      },
      {
        text: "Implemented MCA-based corporate verification via Idefy API, enabling instant business identity validation and reducing enterprise compliance verification effort by ~70%.",
      },
    ],
  },
];
