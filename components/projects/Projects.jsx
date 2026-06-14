"use client";

import { useScrollReveal } from "@/hooks/useScrollReveal";
import { projects } from "@/data/projects";
import ProjectCard from "./ProjectCard";
import SectionHeading from "@/components/SectionHeading";

export default function Projects() {
  const headingRef = useScrollReveal();

  return (
    <section id="projects" className="py-24">
      <div className="max-w-5xl mx-auto px-6 md:px-10">

        <SectionHeading label="What I've built" title="Projects" headingRef={headingRef} />

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
