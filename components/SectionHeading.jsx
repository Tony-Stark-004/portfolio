"use client";

/**
 * SectionHeading — consistent heading block used across all sections.
 * Explicitly sets colors via inline style to avoid any CSS cascade issues.
 */
export default function SectionHeading({ label, title, headingRef }) {
  return (
    <div ref={headingRef} className="reveal mb-12">
      <p
        className="font-mono text-[11px] tracking-[0.14em] uppercase mb-2"
        style={{ color: "var(--text-3)" }}
      >
        {label}
      </p>
      <h2
        className="text-3xl font-bold tracking-tight"
        style={{ color: "var(--text-1)" }}
      >
        {title}
      </h2>
      <div
        className="w-7 h-px mt-4"
        style={{ background: "var(--border-2)" }}
      />
    </div>
  );
}
