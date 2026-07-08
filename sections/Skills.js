"use client";

import { FaReact, FaWordpress, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiJavascript, SiGoogleads } from "react-icons/si";
import { useScrollReveal } from "../hooks/useScrollReveal";

const skills = [
  { title: "React.js", percentage: 90, icon: FaReact, subtitle: "Interactive UI Library" },
  { title: "Next.js", percentage: 92, icon: SiNextdotjs, subtitle: "Modern React Framework" },
  { title: "Tailwind CSS", percentage: 95, icon: SiTailwindcss, subtitle: "Utility First CSS" },
  { title: "JavaScript", percentage: 85, icon: SiJavascript, subtitle: "Dynamic Web Programming" },
  { title: "WordPress", percentage: 75, icon: FaWordpress, subtitle: "CMS Website Development" },
  { title: "UI/UX Design", percentage: 75, icon: FaFigma, subtitle: "Creative Interface Design" },
  { title: "Digital Marketing", percentage: 72, icon: SiGoogleads, subtitle: "Growth & Branding Strategy" },
  { title: "Full Stack Learning", percentage: 50, icon: FaReact, subtitle: "Backend Exploration" },
];

export default function Skills() {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal();
  const learningRef = useScrollReveal();

  return (
    <section id="skills" className="relative py-24 px-6 overflow-hidden bg-[var(--bg-primary)]">
      {/* Main */}
      <div className="relative z-10 container mx-auto max-w-5xl">
        
        {/* Header */}
        <div ref={headerRef} className="mb-20 text-center">
          <h2 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] inline-block relative">
            Developer <span className="gradient-text">Matrix</span>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1.5 gradient-bg rounded-full"></div>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto mt-8 text-lg leading-relaxed">
            Combining frontend technologies, creative design systems and modern digital solutions into immersive web experiences.
          </p>
        </div>

        {/* Skills Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 gap-6">
          {skills.map((skill, i) => {
            const Icon = skill.icon;
            return (
              <article
                key={i}
                className="group relative overflow-hidden rounded-[20px] border border-[var(--border-color)] bg-[var(--card-bg)] shadow-[0_4px_20px_rgba(0,0,0,0.02)] p-6 hover:shadow-[0_8px_30px_rgba(124,58,237,0.08)] transition-all duration-300 hover:-translate-y-1"
              >
                {/* Top */}
                <div className="relative z-10 flex items-center justify-between mb-6">
                  <div className="flex items-center gap-4">
                    <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-xl text-white shadow-md">
                      <Icon />
                    </div>
                    <div>
                      <h3 className="text-lg font-bold text-[var(--text-primary)] transition-colors">
                        {skill.title}
                      </h3>
                      <p className="text-[var(--text-secondary)] text-xs font-semibold transition-colors uppercase tracking-wider">
                        {skill.subtitle}
                      </p>
                    </div>
                  </div>
                  <div className="text-right">
                    <p className="gradient-text text-xl font-black">
                      {skill.percentage}%
                    </p>
                  </div>
                </div>

                {/* Progress */}
                <div className="relative z-10">
                  <div className="w-full h-2.5 rounded-full bg-[var(--border-color)] overflow-hidden">
                    <div
                      className="h-full rounded-full gradient-bg transition-all duration-1000 ease-out"
                      style={{ width: `${skill.percentage}%` }}
                    />
                  </div>
                </div>
              </article>
            );
          })}
        </div>

        {/* Learning Next */}
        <div ref={learningRef} className="mt-24 relative overflow-hidden rounded-[24px] border border-[var(--border-color)] bg-[var(--card-bg)] shadow-[0_4px_30px_rgba(0,0,0,0.03)] p-8 md:p-12 text-center transition-colors">
          
          <div className="absolute -top-20 -right-20 w-64 h-64 bg-gradient-to-tr from-[var(--accent)] to-[var(--accent-secondary)] rounded-full blur-[80px] opacity-[0.1] pointer-events-none"></div>

          <div className="relative z-10">
            <h3 className="text-3xl md:text-4xl font-black text-[var(--text-primary)] inline-block relative mb-4">
              Full Stack <span className="gradient-text">Journey</span>
            </h3>
            <p className="text-[var(--text-secondary)] mt-4 max-w-2xl mx-auto leading-relaxed text-[15px]">
              Currently exploring backend technologies, databases and mobile development to become a complete Full Stack Developer.
            </p>
          </div>

          <div className="relative z-10 flex flex-wrap justify-center gap-4 mt-8">
            {["Node.js", "Express.js", "MongoDB", "React Native"].map((item, i) => (
              <div
                key={i}
                className="px-5 py-2.5 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] text-[var(--text-primary)] text-sm font-medium hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors duration-300"
              >
                {item}
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}