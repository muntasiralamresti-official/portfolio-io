"use client";

import Link from "next/link";
import Image from "next/image";
import dynamic from "next/dynamic";
import { FaGithub, FaLinkedin, FaDribbble } from "react-icons/fa";
import { useScrollReveal } from "../hooks/useScrollReveal";

const TypeAnimation = dynamic(
  () => import("react-type-animation").then((mod) => mod.TypeAnimation),
  { ssr: false }
);

export default function Hero() {
  const containerRef = useScrollReveal();
  
  const socials = [
    { icon: <FaGithub size={16} />, link: "https://github.com/muntasiralamresti-official", label: "GitHub" },
    { icon: <FaLinkedin size={16} />, link: "https://www.linkedin.com/in/muntasir-alam-resti", label: "LinkedIn" },
    { icon: <FaDribbble size={16} />, link: "https://dribbble.com/muntasir-alam-resti-", label: "Dribbble" },
  ];

  return (
    <section className="relative min-h-screen flex items-center justify-center px-6 pt-24 pb-12 overflow-hidden bg-[var(--bg-primary)]">
      
      <div ref={containerRef} className="relative z-10 w-full max-w-6xl mx-auto grid lg:grid-cols-[1.2fr_0.8fr] gap-12 items-center">
        
        {/* LEFT SIDE */}
        <div className="relative p-8 md:p-12 lg:p-16 rounded-[24px] bg-[var(--card-bg)] shadow-[0_4px_30px_rgba(0,0,0,0.03)] border border-[var(--border-color)]">
          {/* Decorative Blob */}
          <div className="absolute -top-20 -left-20 w-64 h-64 bg-gradient-to-tr from-[var(--accent)] to-[var(--accent-secondary)] rounded-full blur-[100px] opacity-[0.15] pointer-events-none"></div>

          <div className="space-y-4">
            <p className="text-[var(--text-secondary)] font-mono text-sm uppercase tracking-widest font-semibold">
              <span className="gradient-text">Welcome</span>
            </p>
            
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black tracking-tight text-[var(--text-primary)] leading-[1.1]">
              Hi, I'm <br />
              <span className="gradient-text">Muntasir</span> Resti
            </h1>

            <div className="text-[var(--text-secondary)] text-lg md:text-xl h-[60px] flex items-center mt-4 font-medium">
              <TypeAnimation
                sequence={[
                  "Frontend Developer", 2000,
                  "UI/UX Designer", 2000,
                  "Full Stack Learner", 2000,
                ]}
                speed={50}
                repeat={Infinity}
                wrapper="span"
                cursor={true}
                className="gradient-text"
              />
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-4 mt-10">
            <Link
              href="#projects"
              className="px-6 py-3 rounded-full gradient-bg text-white font-bold text-sm shadow-md shadow-[var(--accent-muted)] hover:shadow-lg hover:-translate-y-0.5 transition-all"
            >
              View Projects
            </Link>
            <Link
              href="#contact"
              className="px-6 py-3 rounded-full border-2 border-[var(--border-color)] text-[var(--accent)] bg-white font-semibold text-sm hover:bg-[var(--accent-muted)] hover:border-[var(--accent)] hover:-translate-y-0.5 transition-all"
            >
              Contact Me
            </Link>
          </div>

          <div className="flex items-center gap-3 mt-10 pt-6 border-t border-[var(--border-color)]">
            <span className="text-xs text-[var(--text-secondary)] font-semibold uppercase tracking-wider mr-2">Connect:</span>
            {socials.map((item, index) => (
              <a
                key={index}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={item.label}
                className="w-10 h-10 rounded-full border border-[var(--border-color)] bg-[var(--card-bg)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:border-[var(--accent)] hover:bg-[var(--accent-muted)] hover:-translate-y-0.5 transition-all shadow-sm"
              >
                {item.icon}
              </a>
            ))}
          </div>
        </div>

        {/* RIGHT SIDE */}
        <div className="relative flex justify-center lg:justify-end">
          <div className="relative w-[280px] md:w-[340px] aspect-[4/5] rounded-[24px] overflow-hidden border border-[var(--border-color)] bg-[var(--card-bg)] shadow-[0_8px_40px_rgba(0,0,0,0.04)]">
            <Image
              src="/muntasir.png"
              alt="Muntasir Alam Resti"
              fill
              priority
              className="object-cover relative z-10 p-2 rounded-[24px]"
            />
          </div>
        </div>
      </div>
    </section>
  );
}