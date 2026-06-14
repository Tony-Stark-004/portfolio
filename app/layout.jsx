import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

export const metadata = {
  title: "Aditya Kumar — Full-Stack Engineer",
  description:
    "Full-Stack Software Engineer with 3 years of experience building AI-powered products and distributed systems using Java, Spring Boot, and React.",
  keywords: [
    "Full-Stack Engineer", "Java", "Spring Boot", "Microservices",
    "Distributed Systems", "AI", "Spring AI", "RAG", "React", "Portfolio",
  ],
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" data-theme="dark" className="scroll-smooth">
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
