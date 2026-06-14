"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import SectionHeading from "@/components/SectionHeading";

const STATS = [
  { value: "3",    label: "Years Experience" },
  { value: "10K+", label: "Users Served" },
  { value: "2",    label: "Startups" },
  { value: "200+", label: "Resumes / Day Pipeline" },
];

export default function About() {
  const headingRef = useScrollReveal();
  const textRef    = useScrollReveal();
  const statsRef   = useScrollReveal();

  return (
    <section id="about" className="py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-10">

        <SectionHeading label="Who I am" title="About" headingRef={headingRef} />

        <div className="grid md:grid-cols-2 gap-12 items-start">

          {/* Text */}
          <div ref={textRef} className="reveal space-y-4">
            <p className="leading-relaxed text-[15px]" style={{ color: "var(--text-2)" }}>
              Full-Stack Software Engineer with{" "}
              <span className="font-medium" style={{ color: "var(--text-1)" }}>3 years of experience</span>{" "}
              building AI-powered products and distributed systems using Java, Spring Boot, and React.
              Experienced in designing microservices, integrating LLMs and RAG pipelines, and shipping
              features end-to-end with CI/CD and Docker.
            </p>
            <p className="leading-relaxed text-[15px]" style={{ color: "var(--text-2)" }}>
              I care about system design, clean architecture, and writing code that actually ships to
              production. Delivered systems serving{" "}
              <span className="font-medium" style={{ color: "var(--text-1)" }}>10,000+ users</span>{" "}
              across two startups — from zero to production, end-to-end.
            </p>
          </div>

          {/* Stats */}
          <div ref={statsRef} className="reveal grid grid-cols-2 gap-3">
            {STATS.map(({ value, label }) => (
              <div
                key={label}
                className="rounded-lg p-5 border transition-colors"
                style={{ background: "var(--surface)", borderColor: "var(--border)" }}
                onMouseEnter={e => e.currentTarget.style.borderColor = "var(--border-2)"}
                onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
              >
                <p className="text-2xl font-bold tracking-tight mb-1" style={{ color: "var(--text-1)" }}>
                  {value}
                </p>
                <p className="text-xs font-mono leading-snug" style={{ color: "var(--text-3)" }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
