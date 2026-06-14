"use client";

const LINKS = [
  { label: "GitHub",   href: "https://github.com/Tony-Stark-004" },
  { label: "LinkedIn", href: "https://www.linkedin.com/in/shahaditya292" },
  { label: "LeetCode", href: "https://leetcode.com/u/leetCode-ak/" },
];

export default function Footer() {
  return (
    <footer className="border-t py-10" style={{ borderColor: "var(--border)" }}>
      <div
        className="max-w-5xl mx-auto px-6 md:px-10 flex flex-wrap items-center justify-between gap-4"
      >
        <p className="font-mono text-[13px]" style={{ color: "var(--text-3)" }}>
          Designed &amp; built by{" "}
          <span style={{ color: "var(--text-2)" }}>Aditya Kumar</span>
        </p>

        <div className="flex gap-6">
          {LINKS.map(({ label, href }) => (
            <a
              key={label}
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="font-mono text-[12px] transition-colors"
              style={{ color: "var(--text-3)" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--text-1)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--text-3)"}
            >
              {label}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
}
