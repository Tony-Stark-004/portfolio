export const experience = [
  {
    id: 1,
    company: "Wasserstoff RJ Innovations",
    role: "Software Engineer",
    period: "Jan 2025 — Present",
    location: "Gurugram, Haryana",
    bullets: [
      {
        text: "Shipped ChaturAI, an AI-powered recruitment SaaS with 10,000+ registered users; designed RBAC with Spring Security and JWT, built async resume parsing pipeline processing 200+ resumes/day using multithreading, Kafka, and owned end-to-end CI/CD with Jenkins and Docker.",
        link: { label: "ChaturAI", href: "https://www.youtube.com/watch?v=Dmvqi6xgjbY", replaces: "ChaturAI" },
      },
      {
        text: "Engineered LitLaw, a Git-inspired legal document platform with CAS-based version control (SHA-512 content hashing), real-time collaborative editing via Spring WebSocket, automated PDF/DOCX export pipeline, and multi-cloud storage using AWS S3 and Azure Blob Storage with Redis-backed async job queuing.",
        link: { label: "LitLaw", href: "https://litt.law/", replaces: "LitLaw" },
      },
      {
        text: "Built LitReg, a regulatory intelligence platform for SEBI/RBI regulators; implemented hierarchical document management with RBAC access control, SSO authentication, and a Spring AI-powered RAG ingestion pipeline for intelligent document querying, backed by PostgreSQL and Azure Blob Storage.",
        link: { label: "LitReg", href: "https://reg.lit.law/auth/login", replaces: "LitReg" },
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
        text: "Automated MCA-based corporate verification via Idefy API, enabling instant business identity validation and reducing enterprise compliance verification effort by ~70%.",
      },
    ],
  },
];
