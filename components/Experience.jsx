"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { experience } from "@/data/experience";

function BulletText({ bullet }) {
  if (!bullet.link) {
    return <span style={{ color: "var(--text-2)" }}>{bullet.text}</span>;
  }
  const { text, link } = bullet;
  const parts = text.split(link.replaces);
  return (
    <span style={{ color: "var(--text-2)" }}>
      {parts[0]}
      <a
        href={link.href}
        target="_blank"
        rel="noopener noreferrer"
        className="border-b transition-colors"
        style={{ color: "var(--text-1)", borderColor: "var(--border-2)" }}
        onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--border-h)"; }}
        onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border-2)"; }}
      >
        {link.replaces}
      </a>
      {parts[1]}
    </span>
  );
}

function TimelineItem({ job, index }) {
  const ref = useScrollReveal({ threshold: 0.08 });
  return (
    <article
      ref={ref}
      className="reveal relative pl-8"
      style={{ transitionDelay: `${index * 0.1}s` }}
    >
      {/* Dot */}
      <span
        className="absolute left-0 top-[7px] w-[7px] h-[7px] rounded-full border"
        style={{ background: "var(--border-2)", borderColor: "var(--border-h)" }}
      />

      {/* Card */}
      <div
        className="rounded-xl p-6 border transition-colors"
        style={{ background: "var(--surface)", borderColor: "var(--border)" }}
        onMouseEnter={e => e.currentTarget.style.borderColor = "var(--border-2)"}
        onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
      >
        <div className="flex flex-wrap justify-between gap-2 mb-4">
          <div>
            <h3 className="font-semibold text-base tracking-tight" style={{ color: "var(--text-1)" }}>
              {job.company}
            </h3>
            <p className="text-sm mt-0.5" style={{ color: "var(--text-2)" }}>{job.role}</p>
          </div>
          <div className="text-right">
            <p className="font-mono text-xs" style={{ color: "var(--text-2)" }}>{job.period}</p>
            <p className="font-mono text-xs mt-0.5" style={{ color: "var(--text-3)" }}>{job.location}</p>
          </div>
        </div>

        <ul className="space-y-2.5">
          {job.bullets.map((bullet, i) => (
            <li key={i} className="flex gap-2.5 text-[14px] leading-relaxed">
              <span className="mt-[3px] shrink-0" style={{ color: "var(--border-h)" }}>▸</span>
              <BulletText bullet={bullet} />
            </li>
          ))}
        </ul>
      </div>
    </article>
  );
}

export default function Experience() {
  const headingRef = useScrollReveal();
  return (
    <section id="experience" className="py-24" style={{ background: "var(--bg-alt)" }}>
      <div className="max-w-5xl mx-auto px-6 md:px-10">

        <div ref={headingRef} className="reveal mb-12">
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase mb-2" style={{ color: "var(--text-3)" }}>
            Where I&apos;ve worked
          </p>
          <h2 className="text-3xl font-bold tracking-tight" style={{ color: "var(--text-1)" }}>Experience</h2>
          <div className="w-7 h-px mt-4" style={{ background: "var(--border-2)" }} />
        </div>

        <div className="relative timeline-track space-y-6">
          {experience.map((job, i) => (
            <TimelineItem key={job.id} job={job} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
