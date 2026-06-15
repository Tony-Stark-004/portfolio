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
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        {/*
          Inline script runs synchronously before paint — reads saved theme
          from localStorage and sets data-theme on <html> BEFORE React hydrates.
          This prevents any flash of wrong theme (FOUC).
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var saved = localStorage.getItem('portfolio-theme-v2');
                  if (saved === 'light' || saved === 'dark') {
                    document.documentElement.setAttribute('data-theme', saved);
                  } else {
                    document.documentElement.setAttribute('data-theme', 'dark');
                  }
                } catch(e) {
                  document.documentElement.setAttribute('data-theme', 'dark');
                }
              })();
            `,
          }}
        />
      </head>
      <body>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
