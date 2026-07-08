"use client";

import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { useScrollReveal } from "../hooks/useScrollReveal";

const certificates = [
  {
    title: "Digital Marketing Level 1 & 2",
    desc: "Professional training focused on social media marketing, branding strategies and audience engagement.",
    image: "/de.jpeg",
    certificate: "/de.jpeg",
    issuer: "Professional Training",
    year: "2024",
  },
  {
    title: "UI/UX Design Using Figma",
    desc: "Creative UI/UX design learning focused on modern interfaces, layouts and user experience design.",
    image: "/ui.jpeg",
    certificate: "/ui.jpeg",
    issuer: "Design Learning",
    year: "2025",
  },
];

export default function CertificatesPage() {
  const headerRef = useScrollReveal();
  const gridRef = useScrollReveal();

  return (
    <section className="relative py-24 px-6 overflow-hidden bg-[var(--bg-primary)]">
      <div className="relative z-10 container mx-auto max-w-5xl">
        
        {/* Header */}
        <div ref={headerRef} className="text-center mb-20">
          <h2 className="text-4xl md:text-5xl font-black text-[var(--text-primary)] inline-block relative">
            Learning & <span className="gradient-text">Achievements</span>
            <div className="absolute -bottom-3 left-1/2 -translate-x-1/2 w-20 h-1.5 gradient-bg rounded-full"></div>
          </h2>
          <p className="text-[var(--text-secondary)] max-w-2xl mx-auto mt-8 text-lg leading-relaxed">
            A collection of certifications and creative learning milestones reflecting my journey in digital marketing and UI/UX design.
          </p>
        </div>

        {/* Grid */}
        <div ref={gridRef} className="grid md:grid-cols-2 gap-8">
          {certificates.map((item, index) => (
            <article
              key={index}
              className="group bg-[var(--card-bg)] rounded-[20px] border border-[var(--border-color)] shadow-[0_4px_20px_rgba(0,0,0,0.02)] overflow-hidden hover:shadow-[0_8px_30px_rgba(124,58,237,0.08)] hover:-translate-y-1 transition-all duration-300"
            >
              {/* Image */}
              <div className="relative w-full aspect-[4/3] overflow-hidden rounded-t-[19px]">
                <Image
                  src={item.image}
                  alt={item.title}
                  fill
                  loading="lazy"
                  className="object-cover group-hover:scale-[1.03] transition-transform duration-500 ease-out"
                />
              </div>

              {/* Content */}
              <div className="p-6 md:p-8">
                <div className="flex items-center justify-between mb-4">
                  <span className="px-3 py-1 rounded-full border border-[var(--border-color)] bg-[var(--accent-muted)] text-[var(--accent)] text-[11px] font-bold tracking-wide uppercase">
                    {item.issuer}
                  </span>
                  <span className="text-[var(--text-secondary)] text-sm font-semibold">{item.year}</span>
                </div>

                <h3 className="text-xl font-bold mb-3 text-[var(--text-primary)] transition-colors">
                  {item.title}
                </h3>
                
                <p className="text-[var(--text-secondary)] text-sm leading-relaxed mb-6 transition-colors">
                  {item.desc}
                </p>

                <div className="flex items-center justify-between pt-6 border-t border-[var(--border-color)]">
                  <span className="text-sm font-semibold text-[var(--text-primary)]">Verify Credential</span>
                  <a
                    href={item.certificate}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`View ${item.title} Certificate`}
                    className="w-10 h-10 rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] flex items-center justify-center text-[var(--text-secondary)] hover:text-white hover:bg-[var(--accent)] hover:border-[var(--accent)] transition-all duration-300 hover:shadow-md"
                  >
                    <ExternalLink size={16} />
                  </a>
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}