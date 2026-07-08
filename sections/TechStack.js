"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";

const techStack = [
  { name: "React", type: "Frontend", color: "#61dafb" },
  { name: "Next.js", type: "Full Stack", color: "#000000" },
  { name: "Tailwind CSS", type: "Styling", color: "#38bdf8" },
  { name: "JavaScript", type: "Language", color: "#f7df1e" },
  { name: "TypeScript", type: "Language", color: "#3178c6" },
  { name: "Figma", type: "Design", color: "#f24e1e" },
  { name: "Node.js", type: "Backend", color: "#339933" },
  { name: "Git", type: "Version Control", color: "#f05032" },
  { name: "Vercel", type: "Deployment", color: "#000000" },
];

export default function TechStack() {
  const containerRef = useScrollReveal();

  return (
    <section id="tech-stack" ref={containerRef}>
      <h2 className="text-[16px] font-semibold text-[var(--text-primary)] mb-4">
        Tech Stack
      </h2>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
        {techStack.map((tech, index) => (
          <div 
            key={index} 
            className="gh-card p-3 flex items-center gap-3 hover:border-[var(--text-secondary)] transition-colors group"
          >
            <div 
              className="w-8 h-8 rounded-full flex flex-shrink-0 items-center justify-center opacity-90 group-hover:opacity-100 shadow-sm"
              style={{ backgroundColor: `${tech.color}15`, border: `1px solid ${tech.color}30` }}
            >
              {/* Fallback to simple colored dot if no icon is imported to keep it lightweight */}
              <div className="w-3 h-3 rounded-full" style={{ backgroundColor: tech.color }}></div>
            </div>
            
            <div className="min-w-0">
              <h3 className="text-[14px] font-semibold text-[var(--text-primary)] truncate">
                {tech.name}
              </h3>
              <p className="text-[12px] text-[var(--text-secondary)] truncate">
                {tech.type}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
