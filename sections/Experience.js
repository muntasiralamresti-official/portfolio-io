"use client";

import { GitCommit, GraduationCap, Code } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const timelineData = [
  {
    type: "education",
    title: "Learning",
    org: "Web Development",
    date: "2025 - Present",
    desc: "Building modern, performant, and responsive websites using React, Next.js, and Tailwind CSS. Bridging the gap between seamless user interfaces and robust logic.",
    icon: <Code size={12} className="text-[var(--text-secondary)]" />,
  },
  {
    type: "cert",
    title: "UI/UX Design Using Figma",
    org: "Design Learning",
    date: "2025",
    desc: "Creative UI/UX design learning focused on modern interfaces, layouts and user experience design.",
    icon: <GraduationCap size={12} className="text-[var(--text-secondary)]" />,
  },
  {
    type: "cert",
    title: "Digital Marketing Level 1 & 2",
    org: "Professional Training",
    date: "2024",
    desc: "Professional training focused on social media marketing, branding strategies and audience engagement.",
    icon: <GraduationCap size={12} className="text-[var(--text-secondary)]" />,
  },
  // {
  //   type: "commit",
  //   title: "Started coding journey",
  //   org: "GitHub",
  //   date: "2023",
  //   desc: "Began learning HTML, CSS, and basic JavaScript.",
  //   icon: <GitCommit size={12} className="text-[var(--text-secondary)]" />,
  // }
];

export default function Experience() {
  const containerRef = useScrollReveal();

  return (
    <section id="experience" ref={containerRef}>
      <h2 className="text-[16px] font-semibold text-[var(--text-primary)] mb-4">
        Experience & Education
      </h2>

      <div className="relative pl-4 mt-2">
        {timelineData.map((item, index) => (
          <div key={index} className="timeline-item relative pb-8 pl-8">
            {/* Timeline Dot */}
            <div className="timeline-dot">
              {item.icon}
            </div>

            {/* Content Card */}
            <div className="gh-card p-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-1">
                <h3 className="text-[14px] font-semibold text-[var(--text-primary)]">
                  {item.title}
                </h3>
                <span className="text-[12px] text-[var(--text-secondary)] bg-[var(--bg-secondary)] px-2 py-0.5 rounded-full gh-border mt-1 sm:mt-0 w-fit">
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
