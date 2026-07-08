"use client";

import { projects } from "@/data/projects";
import ProjectCard from "@/components/ProjectCard";
import { useScrollReveal } from "../hooks/useScrollReveal";
import Link from "next/link";

export default function Projects() {
  const containerRef = useScrollReveal();

  return (
    <section id="projects" ref={containerRef}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[16px] font-semibold text-[var(--text-primary)]">
          Pinned
        </h2>
        <Link href="/projects" className="text-[12px] text-[var(--text-secondary)] hover:text-[var(--accent)] hover:underline">
          View all repositories
        </Link>
      </div>

      <div className="grid md:grid-cols-2 gap-4">
        {projects.slice(0, 4).map((project, i) => (
          <ProjectCard key={project.title || i} project={project} />
        ))}
      </div>
      
      {/* View More Button */}
      <div className="mt-4">
        <Link
          href="/projects"
          className="block w-full gh-btn-secondary py-2 text-[14px] text-center transition-colors"
        >
          View More Projects
        </Link>
      </div>
    </section>
  );
}