"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";

export default function Projects() {
  const headingRef = useScrollReveal();

  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-10">

        {/* Heading */}
        <div ref={headingRef} className="reveal mb-12">
          <p className="font-mono text-[11px] tracking-[0.14em] uppercase text-neutral-600 mb-2">
            What I&apos;ve built
          </p>
          <h2 className="text-3xl font-bold tracking-tight text-white">Projects</h2>
          <div className="w-7 h-px bg-neutral-700 mt-4" />
        </div>

        {/* Cards */}
        <div className="space-y-6">
          {projects.map((project, i) => (
            <ProjectCard key={project.id} project={project} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
