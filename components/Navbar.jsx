"use client";

import { useState, useEffect } from "react";
import { useActiveSection } from "@/hooks/useActiveSection";
import { useTheme } from "@/components/ThemeProvider";

const NAV_LINKS = [
  { label: "About",      href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Projects",   href: "#projects" },
  { label: "Skills",     href: "#skills" },
  { label: "Education",  href: "#education" },
];

const SECTION_IDS = ["about", "experience", "projects", "skills", "education"];

function SunIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="5" />
      <line x1="12" y1="1" x2="12" y2="3" /><line x1="12" y1="21" x2="12" y2="23" />
      <line x1="4.22" y1="4.22" x2="5.64" y2="5.64" /><line x1="18.36" y1="18.36" x2="19.78" y2="19.78" />
      <line x1="1" y1="12" x2="3" y2="12" /><line x1="21" y1="12" x2="23" y2="12" />
      <line x1="4.22" y1="19.78" x2="5.64" y2="18.36" /><line x1="18.36" y1="5.64" x2="19.78" y2="4.22" />
    </svg>
  );
}

function MoonIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="15" height="15" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z" />
    </svg>
  );
}

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [mounted, setMounted] = useState(false);
  const activeSection = useActiveSection(SECTION_IDS);
  const { theme, toggle } = useTheme();

  useEffect(() => { setMounted(true); }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      style={{
        backgroundColor: scrolled ? "var(--nav-bg)" : "transparent",
        borderBottomColor: scrolled ? "var(--border)" : "transparent",
        backdropFilter: scrolled ? "blur(14px)" : "none",
        WebkitBackdropFilter: scrolled ? "blur(14px)" : "none",
      }}
      className="fixed top-0 left-0 right-0 z-50 border-b"
    >
      <div className="max-w-5xl mx-auto px-6 md:px-10">
        <div className="flex items-center justify-between h-[60px]">

          {/* Logo */}
          <a
            href="#hero"
            className="font-mono text-sm font-semibold tracking-wider"
            style={{ color: "var(--text-2)" }}
            onMouseEnter={e => e.target.style.color = "var(--text-1)"}
            onMouseLeave={e => e.target.style.color = "var(--text-2)"}
          >
            AK<span style={{ color: "var(--border-h)" }}>.</span>
          </a>

          {/* Desktop links + theme toggle */}
          <div className="hidden md:flex items-center gap-8">
            <ul className="flex items-center gap-8">
              {NAV_LINKS.map(({ label, href }) => {
                const id = href.replace("#", "");
                const isActive = activeSection === id;
                return (
                  <li key={label}>
                    <a
                      href={href}
                      className="font-mono text-[11px] tracking-[0.12em] uppercase transition-colors duration-200"
                      style={{ color: isActive ? "var(--text-1)" : "var(--text-3)" }}
                    >
                      {label}
                    </a>
                  </li>
                );
              })}
            </ul>

            {/* Theme toggle */}
            <button
              onClick={toggle}
              aria-label="Toggle theme"
              className="p-1.5 rounded-md transition-colors"
              style={{ color: "var(--text-3)" }}
              onMouseEnter={e => e.currentTarget.style.color = "var(--text-1)"}
              onMouseLeave={e => e.currentTarget.style.color = "var(--text-3)"}
            >
              {mounted && (theme === "dark" ? <SunIcon /> : <MoonIcon />)}
            </button>
          </div>

          {/* Mobile: theme + hamburger */}
          <div className="md:hidden flex items-center gap-3">
            <button onClick={toggle} aria-label="Toggle theme" className="p-1.5" style={{ color: "var(--text-3)" }}>
              {mounted && (theme === "dark" ? <SunIcon /> : <MoonIcon />)}
            </button>
            <button
              onClick={() => setMenuOpen((p) => !p)}
              aria-label="Toggle navigation"
              aria-expanded={menuOpen}
              className="flex flex-col gap-[5px] p-2"
            >
              <span className="block w-5 h-px transition-all duration-200 origin-center"
                style={{ background: "var(--text-2)", transform: menuOpen ? "translateY(6px) rotate(45deg)" : "" }} />
              <span className="block w-5 h-px transition-all duration-200"
                style={{ background: "var(--text-2)", opacity: menuOpen ? 0 : 1 }} />
              <span className="block w-5 h-px transition-all duration-200 origin-center"
                style={{ background: "var(--text-2)", transform: menuOpen ? "translateY(-6px) rotate(-45deg)" : "" }} />
            </button>
          </div>
        </div>
      </div>

      {/* Mobile menu */}
      <div
        className="md:hidden overflow-hidden transition-all duration-300 border-t"
        style={{
          maxHeight: menuOpen ? "260px" : "0",
          backgroundColor: "var(--bg-alt)",
          borderTopColor: "var(--border)",
        }}
      >
        <ul className="max-w-5xl mx-auto px-6 py-5 flex flex-col gap-5">
          {NAV_LINKS.map(({ label, href }) => (
            <li key={label}>
              <a
                href={href}
                onClick={() => setMenuOpen(false)}
                className="font-mono text-xs tracking-[0.12em] uppercase transition-colors"
                style={{ color: "var(--text-2)" }}
              >
                {label}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
