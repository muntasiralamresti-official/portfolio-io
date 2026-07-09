"use client";

import { GitCommit, GraduationCap, Code2, Megaphone } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const timelineData = [
  {
    type: "learning",
    title: "Web Development",
    org: "Self-Directed Learning",
    date: "2025 — Present",
    desc: "Building modern, performant, and responsive web applications using React, Next.js, and Tailwind CSS — focused on writing clean, maintainable code and delivering seamless user experiences.",
    icon: <Code2 size={13} className="text-blue-500" />,
    iconBg: "bg-blue-500/10",
  },
  {
    type: "cert",
    title: "UI/UX Design with Figma",
    org: "Design Certification",
    date: "2025",
    desc: "Completed structured training in UI/UX design principles, covering wireframing, prototyping, design systems, and user-centered interface design in Figma.",
    icon: <GraduationCap size={13} className="text-purple-500" />,
    iconBg: "bg-purple-500/10",
  },
  {
    type: "cert",
    title: "Digital Marketing Level 1 & 2",
    org: "Professional Training",
    date: "2024",
    desc: "Completed professional-level training in digital marketing, covering social media strategy, brand positioning, and audience growth and engagement techniques.",
    icon: <Megaphone size={13} className="text-emerald-500" />,
    iconBg: "bg-emerald-500/10",
  },
  // {
  //   type: "commit",
  //   title: "Started coding journey",
  //   org: "GitHub",
  //   date: "2023",
  //   desc: "Began learning HTML, CSS, and basic JavaScript.",
  //   icon: <GitCommit size={13} className="text-[var(--text-secondary)]" />,
  // }
];

export default function Experience() {
  const containerRef = useScrollReveal();

  return (
    <section id="experience" ref={containerRef}>
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-[16px] font-semibold text-[var(--text-primary)]">
          Experience & Education
        </h2>
        <span className="text-[12px] text-[var(--text-secondary)]">
          {timelineData.length} entries
        </span>
      </div>

      <div className="relative pl-4 mt-2">
        {/* Connecting vertical line */}
        <div className="absolute left-[23px] top-2 bottom-2 w-px bg-[var(--border-color)]" />

        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item relative pb-8 pl-8 last:pb-0 group">
            {/* Timeline Dot */}
            <div
              className={`timeline-dot ${item.iconBg} border-2 border-[var(--border-color)] group-hover:border-[var(--text-secondary)] transition-colors duration-200`}
            >
              {item.icon}
            </div>

            {/* Content Card */}
            <div className="gh-card p-4 transition-all duration-200 hover:border-[var(--text-secondary)] hover:shadow-sm">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-1 mb-1">
                <h3 className="text-[14px] font-semibold text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <span className="text-[11px] font-medium text-[var(--text-secondary)] bg-[var(--bg-secondary)] px-2 py-0.5 rounded-full gh-border w-fit whitespace-nowrap">
                  {item.date}
                </span>
              </div>
              <p className="text-[12px] font-medium text-[var(--text-secondary)] mb-3">
                {item.org}
              </p>
              <p className="text-[14px] text-[var(--text-primary)] leading-relaxed">
                {item.desc}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}