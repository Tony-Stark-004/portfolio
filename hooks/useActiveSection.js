"use client";

import { useEffect, useState } from "react";

/**
 * Tracks which section id is currently visible in the viewport.
 * Returns the id string of the active section.
 */
export function useActiveSection(sectionIds) {
  const [active, setActive] = useState("");

  useEffect(() => {
    const observers = [];

    sectionIds.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;

      const observer = new IntersectionObserver(
        ([entry]) => {
          if (entry.isIntersecting) setActive(id);
        },
        { threshold: 0.3 }
      );

      observer.observe(el);
      observers.push(observer);
    });

    return () => observers.forEach((o) => o.disconnect());
  }, [sectionIds]);

  return active;
}
