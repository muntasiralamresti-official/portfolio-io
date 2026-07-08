"use client";

import { FaReact, FaFigma, FaWordpress } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiGoogleads } from "react-icons/si";
import { useScrollReveal } from "../hooks/useScrollReveal";

const techCards = [
  { icon: <FaReact />, title: "React.js", desc: "Interactive UI Systems" },
  { icon: <SiNextdotjs />, title: "Next.js", desc: "Modern Web Apps" },
  { icon: <SiTailwindcss />, title: "Tailwind CSS", desc: "Utility First Styling" },
  { icon: <FaWordpress />, title: "WordPress", desc: "CMS Development" },
  { icon: <FaFigma />, title: "UI/UX Design", desc: "Creative Interfaces" },
  { icon: <SiGoogleads />, title: "Marketing", desc: "Digital Growth Strategy" },
];

export default function About() {
  const headerRef = useScrollReveal();
  const leftRef = useScrollReveal();
  const rightRef = useScrollReveal();

  return (
    <section id="about" className="relative py-24 px-6 overflow-hidden bg-[var(--bg-secondary)]">
      <div className="relative z-10 container mx-auto max-w-6xl">
        
        {/* Header */}
        <div ref={headerRef} className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] inline-block relative">
            Who <span className="gradient-text">I Am</span>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1.5 gradient-bg rounded-full"></div>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto mt-8 text-lg leading-relaxed">
            Passionate about crafting immersive interfaces, futuristic web experiences and modern frontend systems.
          </p>
        </div>

        {/* Content */}
        <div className="grid lg:grid-cols-[1fr_1fr] gap-12 items-start">
          
          {/* LEFT SIDE */}
          <div ref={leftRef} className="rounded-[24px] bg-[var(--card-bg)] shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-[var(--border-color)] overflow-hidden">
            <div className="p-8 md:p-10">
              <h3 className="text-2xl font-bold text-[var(--text-primary)] mb-6">
                My Story
              </h3>
              
              <div className="space-y-6 text-[var(--text-secondary)] text-[15px] leading-relaxed">
                <p>
                  I build modern, performant, and responsive websites using React, Next.js, and Tailwind CSS.
                </p>
                <p>
                  While mastering the frontend, my journey continues into Full Stack Development, bridging the gap between seamless user interfaces and robust backend logic.
                </p>
                <p>
                  Along with web development, I hold strong foundations in UI/UX Design and Digital Marketing, ensuring every product is not just functional, but also engaging and market-ready.
                </p>
              </div>

              <div className="mt-8 flex flex-wrap gap-3">
                <span className="px-4 py-2 rounded-full border border-[var(--border-color)] text-xs font-semibold text-[var(--accent)] bg-[var(--accent-muted)]">
                  Performance First
                </span>
                <span className="px-4 py-2 rounded-full border border-[var(--border-color)] text-xs font-semibold text-[var(--accent-secondary)] bg-[var(--accent-muted)]">
                  Pixel Perfect UI
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE */}
          <div ref={rightRef} className="grid grid-cols-2 gap-4">
            {techCards.map((item, index) => (
              <div
                key={index}
                className="group relative rounded-[20px] border border-[var(--border-color)] bg-[var(--card-bg)] shadow-[0_4px_20px_rgba(0,0,0,0.02)] p-6 hover:shadow-[0_8px_30px_rgba(124,58,237,0.08)] hover:-translate-y-1 transition-all duration-300"
              >
                <div className="w-12 h-12 rounded-xl gradient-bg flex items-center justify-center text-xl text-white mb-4 shadow-md">
                  {item.icon}
                </div>
                <h3 className="text-base font-bold text-[var(--text-primary)] mb-1 transition-colors">
                  {item.title}
                </h3>
                <p className="text-[var(--text-secondary)] text-xs leading-relaxed transition-colors">
                  {item.desc}
                </p>
              </div>
            ))}
          </div>

        </div>
      </div>
    </section>
  );
}