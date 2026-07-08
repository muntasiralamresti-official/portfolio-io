"use client";

import { projects } from "@/data/projects";
import Link from "next/link";
import ProjectCard from "@/components/ProjectCard";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Projects() {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section id="projects" className="py-24 px-6 overflow-hidden bg-[var(--bg-secondary)]">
      <div className="container mx-auto max-w-5xl">
        
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] inline-block relative">
            Featured <span className="gradient-text">Work</span>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1.5 gradient-bg rounded-full"></div>
          </h2>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 gap-8 lg:gap-10">
          {projects.slice(0, 2).map((project, i) => (
            <ProjectCard key={project.title || i} project={project} />
          ))}
        </div>

        {/* View More */}
        <div className="flex justify-center mt-16">
          <Link
            href="/projects"
            aria-label="View More Projects"
            className="group px-8 py-3.5 rounded-full border-2 border-[var(--border-color)] bg-white hover:bg-[var(--accent-muted)] hover:border-[var(--accent)] transition-all duration-300 flex items-center gap-3 text-[var(--text-primary)] font-semibold text-sm shadow-sm"
          >
            View More Projects
            <span className="text-[var(--accent)] group-hover:translate-x-1 transition-transform duration-300">
              →
            </span>
          </Link>
        </div>
      </div>
    </section>
  );
}