"use client";

import { BookOpen } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Readme() {
  const containerRef = useScrollReveal();

  return (
    <section id="readme" ref={containerRef} className="mb-8">
      
      <div className="flex items-center justify-between mb-2">
        <span className="text-[12px] text-[var(--text-secondary)]">muntasiralamresti-official / README.md</span>
      </div>

      <div className="gh-card border border-[var(--border-color)] rounded-md overflow-hidden">
        
        {/* Header like GitHub Readme */}
        <div className="px-4 py-2 border-b border-[var(--border-color)] bg-[var(--bg-secondary)] flex items-center gap-2">
          <BookOpen size={16} className="text-[var(--text-secondary)]" />
          <h3 className="text-[14px] font-semibold text-[var(--text-primary)]">
            README.md
          </h3>
        </div>

        {/* Content */}
        <div className="p-6 text-[14px] text-[var(--text-primary)] leading-relaxed space-y-6">
          
          <div>
            <h1 className="text-2xl font-bold border-b border-[var(--border-color)] pb-2 mb-4">
              Hi there, I'm Muntasir 👋
            </h1>
            <p>
              I am a passionate <strong>Frontend Developer</strong> who specializes in building modern, performant, and highly responsive web applications. I love taking complex problems and turning them into beautiful, intuitive interface designs.
            </p>
          </div>

          <div className="space-y-2">
            <p>🔭 <strong>Currently working on:</strong> Expanding my freelance portfolio and building interactive web experiences.</p>
            <p>🌱 <strong>Currently learning:</strong> Full Stack Development (Node.js, Express, MongoDB) & Next.js Advanced Patterns.</p>
            <p>👯 <strong>Looking to collaborate on:</strong> Open-source frontend projects and modern web applications.</p>
            <p>💬 <strong>Ask me about:</strong> React, Next.js, Tailwind CSS, and UI/UX Design principles.</p>
            <p>⚡ <strong>Fun fact:</strong> I obsessed over performance so much that I built this portfolio to perfectly mirror a GitHub profile without using heavy animation libraries!</p>
          </div>

          <div>
            <h3 className="text-[16px] font-semibold mb-3">📫 Reach me at:</h3>
            <div className="flex flex-wrap gap-3">
              {/* Shields.io style badges built with pure CSS */}
              <a href="mailto:contact@muntasiralamresti.dev" className="flex items-center border border-[var(--border-color)] rounded-[4px] overflow-hidden hover:opacity-80 transition-opacity">
                <span className="bg-[#4b5563] text-white px-2 py-0.5 text-[11px] font-semibold">Email</span>
                <span className="bg-[#0969da] text-white px-2 py-0.5 text-[11px] font-semibold">Contact Me</span>
              </a>
              <a href="https://linkedin.com/in/muntasir-alam-resti" target="_blank" rel="noopener noreferrer" className="flex items-center border border-[var(--border-color)] rounded-[4px] overflow-hidden hover:opacity-80 transition-opacity">
                <span className="bg-[#4b5563] text-white px-2 py-0.5 text-[11px] font-semibold">LinkedIn</span>
                <span className="bg-[#0a66c2] text-white px-2 py-0.5 text-[11px] font-semibold">Connect</span>
              </a>
              <a href="https://github.com/muntasiralamresti-official" target="_blank" rel="noopener noreferrer" className="flex items-center border border-[var(--border-color)] rounded-[4px] overflow-hidden hover:opacity-80 transition-opacity">
                <span className="bg-[#4b5563] text-white px-2 py-0.5 text-[11px] font-semibold">GitHub</span>
                <span className="bg-[#2ea043] text-white px-2 py-0.5 text-[11px] font-semibold">Follow</span>
              </a>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
