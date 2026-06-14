export const projects = [
  {
    id: "ecom",
    number: "01",
    title: "E-Commerce Microservices Platform",
    description:
      "A production-grade e-commerce backend decomposed into 8 independent Spring Boot microservices, each owning its own database and deployment lifecycle. Demonstrates end-to-end command of distributed systems, event-driven architecture, security, and full-stack observability.",
    highlights: [
      { icon: "⚡", text: "Async order notifications via RabbitMQ + Spring Cloud Stream with durable queues" },
      { icon: "🔒", text: "OAuth2 / JWT security via Keycloak; API Gateway with Resilience4j circuit breakers and Redis rate limiting" },
      { icon: "📊", text: "Full observability stack — Prometheus metrics, Loki logs, Zipkin tracing, Grafana dashboards" },
      { icon: "🔄", text: "Jenkins CI/CD — parallel Docker builds, Docker Hub push, SSH deploy with immutable image tags" },
    ],
    tech: [
      "Java 21", "Spring Boot", "Spring Cloud", "Eureka", "API Gateway",
      "Keycloak", "RabbitMQ", "Redis", "MongoDB", "PostgreSQL",
      "Prometheus", "Grafana", "Zipkin", "Loki", "Docker", "Jenkins", "Resilience4j",
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=SvC2JqENiGI",
    videoFile: "/ecom-microservice-demo.mp4",
    repos: [
      { icon: "🔧", name: "microservice-ecom-0-deploy", desc: "Deploy & Docker Compose", url: "https://github.com/Tony-Stark-004/microservice-ecom-0-deploy" },
      { icon: "⚙️", name: "microservice-ecom-1-configserver", desc: "Config Server", url: "https://github.com/Tony-Stark-004/microservice-ecom-1-configserver" },
      { icon: "🔍", name: "microservice-ecom-2-servicediscovery", desc: "Service Discovery (Eureka)", url: "https://github.com/Tony-Stark-004/microservice-ecom-2-servicediscovery" },
      { icon: "🌐", name: "microservice-ecom-3-apigateway", desc: "API Gateway", url: "https://github.com/Tony-Stark-004/microservice-ecom-3-apigateway" },
      { icon: "👤", name: "microservice-ecom-4-user", desc: "User Service", url: "https://github.com/Tony-Stark-004/microservice-ecom-4-user" },
      { icon: "📦", name: "microservice-ecom-5-product", desc: "Product Service", url: "https://github.com/Tony-Stark-004/microservice-ecom-5-product" },
      { icon: "🛒", name: "microservice-ecom-6-order", desc: "Order Service", url: "https://github.com/Tony-Stark-004/microservice-ecom-6-order" },
      { icon: "🔔", name: "microservice-ecom-7-notification", desc: "Notification Service", url: "https://github.com/Tony-Stark-004/microservice-ecom-7-notification" },
    ],
  },
  {
    id: "helpdesk",
    number: "02",
    title: "AI Helpdesk Backend",
    description:
      "An AI-powered helpdesk assistant featuring Liza — a conversational agent that handles support end-to-end: answers FAQs from a knowledge base, creates and tracks tickets in PostgreSQL, sends email notifications, and remembers conversation history across sessions.",
    highlights: [
      { icon: "🧠", text: "RAG pipeline — FAQ embeddings in pgvector with cosine similarity search to ground LLM responses and eliminate hallucinations" },
      { icon: "🔧", text: "Spring AI Tool Calling — AI directly invokes Java methods (createTicket, getTicket, sendEmail) to take real actions" },
      { icon: "💬", text: "JDBC-backed persistent chat memory per session — conversations survive app restarts" },
      { icon: "🤖", text: "Dual LLM support — Google Gemini 2.5 Flash (cloud) + Ollama llama3.2 (local inference)" },
    ],
    tech: [
      "Java 21", "Spring Boot 4", "Spring AI", "RAG", "Tool Calling",
      "Google Gemini", "Ollama", "llama3.2", "pgvector", "PostgreSQL", "Docker", "Gmail SMTP",
    ],
    youtubeUrl: "https://www.youtube.com/watch?v=UgYqoJtaIQI",
    videoFile: "/helpdesk-ai-demo.mp4",
    githubUrl: "https://github.com/Tony-Stark-004/helpdesk-ai",
    repos: null,
  },
];
