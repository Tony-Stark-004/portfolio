"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { education } from "@/data/education";
import SectionHeading from "@/components/SectionHeading";

function EduCard({ item, index }) {
  const ref = useScrollReveal({ threshold: 0.1 });
  return (
    <article
      ref={ref}
      className="reveal rounded-lg p-6 border transition-colors"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
        transitionDelay: `${index * 0.1}s`,
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = "var(--border-2)"}
      onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
    >
      <div className="flex flex-wrap justify-between gap-2 mb-3">
        <h3 className="font-semibold text-[15px] tracking-tight leading-snug max-w-xs" style={{ color: "var(--text-1)" }}>
          {item.institution}
        </h3>
        <span className="font-mono text-xs shrink-0" style={{ color: "var(--text-3)" }}>{item.period}</span>
      </div>

      <p className="text-sm font-medium mb-1" style={{ color: "var(--text-1)" }}>{item.degree}</p>
      <p className="text-sm mb-4" style={{ color: "var(--text-2)" }}>{item.field}</p>

      <span
        className="inline-block font-mono text-[12px] px-3 py-1 rounded-md border"
        style={{ background: "var(--bg)", borderColor: "var(--border)", color: "var(--text-2)" }}
      >
        {item.grade}
      </span>
    </article>
  );
}

export default function Education() {
  const headingRef = useScrollReveal();
  return (
    <section id="education" className="py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-10">

        <SectionHeading label="Academic background" title="Education" headingRef={headingRef} />

        <div className="grid md:grid-cols-2 gap-4">
          {education.map((item, i) => (
            <EduCard key={item.id} item={item} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
