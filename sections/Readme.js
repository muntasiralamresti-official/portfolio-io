"use client";

import { BookOpen } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

export default function Readme() {
  const containerRef = useScrollReveal();

  const skills = {
    Frontend: [
      "React",
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "JavaScript (ES6+)",
      "HTML5",
      "CSS3",
    ],
    Backend: ["Node.js", "Express.js", "MongoDB", "REST APIs"],
    "Tools & Platforms": ["Git", "GitHub", "Vercel", "Figma", "VS Code"],
  };

  const highlights = [
    {
      title: "Currently building",
      body: "Interactive portfolio experiences and polished freelance products.",
    },
    {
      title: "Learning",
      body: "Full-stack patterns with Node.js, Express, and MongoDB.",
    },
    {
      title: "Open to",
      body: "Client collaborations, product work, and thoughtful frontend challenges.",
    },
  ];

  return (
    <section id="readme" ref={containerRef} className="mb-8">
      <div className="rounded-[24px] border border-[var(--border-color)] bg-[var(--card-bg)] shadow-[var(--shadow-soft)] overflow-hidden">
        <div className="flex items-center gap-2 border-b border-[var(--border-color)] bg-[var(--bg-secondary)] px-4 py-3">
          <BookOpen size={16} className="text-[var(--text-secondary)]" />
          <span className="text-[12px] font-medium text-[var(--text-secondary)]">
            muntasiralamresti-official / README.md
          </span>
        </div>

        <div className="space-y-6 p-6 text-[14px] leading-relaxed text-[var(--text-primary)] md:p-8">
          <div className="rounded-[20px] border border-[var(--border-color)] bg-gradient-to-br from-[var(--accent-muted)] to-transparent p-5">
            <h1 className="mb-3 border-b border-[var(--border-color)] pb-3 text-2xl font-bold">
              Hi there, I&apos;m Muntasir 👋
            </h1>
            <p>
              I am a passionate <strong>Frontend Developer</strong> who
              transforms ideas into modern, responsive web experiences that feel
              thoughtful and effortless to use.
            </p>
          </div>

          <div className="grid gap-3 md:grid-cols-3">
            {highlights.map((item) => (
              <div
                key={item.title}
                className="rounded-2xl border border-[var(--border-color)] bg-[var(--bg-secondary)] p-4"
              >
                <p className="text-[12px] font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                  {item.title}
                </p>
                <p className="mt-1 text-sm text-[var(--text-primary)]">
                  {item.body}
                </p>
              </div>
            ))}
          </div>

          <div>
            <h3 className="mb-4 text-[16px] font-semibold">🛠️ Skills</h3>
            <div className="space-y-4">
              {Object.entries(skills).map(([category, items]) => (
                <div key={category}>
                  <p className="mb-2 text-[13px] font-semibold uppercase tracking-[0.2em] text-[var(--text-secondary)]">
                    {category}
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {items.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] px-3 py-1 text-[12px] font-medium text-[var(--text-primary)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div>
            <h3 className="mb-3 text-[16px] font-semibold">📫 Reach me at</h3>
            <div className="flex flex-wrap gap-3">
              <a
                href="mailto:contact@muntasiralamresti.dev"
                className="flex items-center overflow-hidden rounded-[6px] border border-[var(--border-color)] transition-opacity hover:opacity-80"
              >
                <span className="bg-[#4b5563] px-2 py-0.5 text-[11px] font-semibold text-white">
                  Email
                </span>
                <span className="bg-[#0969da] px-2 py-0.5 text-[11px] font-semibold text-white">
                  Contact Me
                </span>
              </a>
              <a
                href="https://linkedin.com/in/muntasir-alam-resti"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center overflow-hidden rounded-[6px] border border-[var(--border-color)] transition-opacity hover:opacity-80"
              >
                <span className="bg-[#4b5563] px-2 py-0.5 text-[11px] font-semibold text-white">
                  LinkedIn
                </span>
                <span className="bg-[#0a66c2] px-2 py-0.5 text-[11px] font-semibold text-white">
                  Connect
                </span>
              </a>
              <a
                href="https://github.com/muntasiralamresti-official"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center overflow-hidden rounded-[6px] border border-[var(--border-color)] transition-opacity hover:opacity-80"
              >
                <span className="bg-[#4b5563] px-2 py-0.5 text-[11px] font-semibold text-white">
                  GitHub
                </span>
                <span className="bg-[#2ea043] px-2 py-0.5 text-[11px] font-semibold text-white">
                  Follow
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
