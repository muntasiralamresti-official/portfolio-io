"use client";

import { useScrollReveal } from "../hooks/useScrollReveal";

const languageStats = [
  { name: "React", percentage: 40, color: "#61dafb" },
  { name: "Next.js", percentage: 25, color: "#000000" },
  { name: "Tailwind CSS", percentage: 20, color: "#38bdf8" },
  { name: "JavaScript", percentage: 10, color: "#f7df1e" },
  { name: "Other", percentage: 5, color: "#ededed" },
];

export default function Skills() {
  const containerRef = useScrollReveal();

  return (
    <section id="skills" ref={containerRef}>
      <h2 className="text-[16px] font-semibold text-[var(--text-primary)] mb-4">
        Languages & Tools
      </h2>

      <div className="gh-card p-4 lg:p-6">
        
        {/* Progress Bar Container */}
        <div className="w-full h-2 flex rounded-full overflow-hidden mb-4 bg-[var(--bg-secondary)]">
          {languageStats.map((lang, index) => (
            <div
              key={index}
              style={{ width: `${lang.percentage}%`, backgroundColor: lang.color }}
              className="h-full hover:brightness-90 transition-all cursor-pointer"
              title={`${lang.name}: ${lang.percentage}%`}
            />
          ))}
        </div>

        {/* Legend */}
        <div className="flex flex-wrap gap-x-6 gap-y-2 mt-4">
          {languageStats.map((lang, index) => (
            <div key={index} className="flex items-center gap-2 group cursor-pointer">
              <span
                className="w-2 h-2 rounded-full shadow-[inset_0_0_0_1px_rgba(27,31,36,0.1)]"
                style={{ backgroundColor: lang.color }}
              />
              <span className="text-[12px] font-semibold text-[var(--text-primary)] group-hover:text-[var(--accent)] transition-colors">
                {lang.name}
              </span>
              <span className="text-[12px] text-[var(--text-secondary)]">
                {lang.percentage}%
              </span>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}