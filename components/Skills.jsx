"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { skillGroups } from "@/data/skills";

function SkillGroup({ group, index }) {
  const ref = useScrollReveal({ threshold: 0.1 });
  return (
    <div
      ref={ref}
      className="reveal rounded-lg p-5 border transition-colors"
      style={{
        background: "var(--surface)",
        borderColor: "var(--border)",
        transitionDelay: `${index * 0.06}s`,
      }}
      onMouseEnter={e => e.currentTarget.style.borderColor = "var(--border-2)"}
      onMouseLeave={e => e.currentTarget.style.borderColor = "var(--border)"}
    >
      <h4 className="font-mono text-[11px] tracking-[0.12em] uppercase mb-3" style={{ color: "var(--text-3)" }}>
        {group.label}
      </h4>
      <div className="flex flex-wrap gap-1.5">
        {group.skills.map((skill) => (
          <span
            key={skill}
            className="text-[12px] px-2.5 py-1 rounded-md border cursor-default transition-colors"
            style={{ background: "var(--bg)", borderColor: "var(--border)", color: "var(--text-2)" }}
            onMouseEnter={e => { e.currentTarget.style.borderColor = "var(--border-h)"; e.currentTarget.style.color = "var(--text-1)"; }}
            onMouseLeave={e => { e.currentTarget.style.borderColor = "var(--border)"; e.currentTarget.style.color = "var(--text-2)"; }}
          >
            {skill}
          </span>
        ))}
      </div>
    </div>
  );
}

export default function Skills() {
  const headingRef = useScrollReveal();
  return (
    <section id="skills" className="py-24" style={{ background: "var(--bg-alt)" }}>
      <div className="max-w-5xl mx-auto px-6 md:px-10">

        <div ref={headingRef} className="reveal mb-12">
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase mb-2" style={{ color: "var(--text-3)" }}>
            What I work with
          </p>
          <h2 className="text-3xl font-bold tracking-tight" style={{ color: "var(--text-1)" }}>Skills</h2>
          <div className="w-7 h-px mt-4" style={{ background: "var(--border-2)" }} />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {skillGroups.map((group, i) => (
            <SkillGroup key={group.label} group={group} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
