"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { skills } from "@/data/skills";

const positions = [
  { x: 50, y: 50, label: "CORE", sub: "BUILD" },
  { x: 18, y: 25, label: "FRONTEND", sub: "90%" },
  { x: 82, y: 24, label: "FULL STACK", sub: "60%" },
  { x: 20, y: 78, label: "UI / UX", sub: "80%" },
  { x: 80, y: 78, label: "MARKETING", sub: "75%" },
];

export default function Skills() {
  const [active, setActive] = useState(null);

  return (
    <section id="skills" className="relative z-10 px-4 py-28 md:px-8 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 max-w-3xl">
          <div className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#E62429]">03 // spider sense online</div>
          <h2 className="text-[clamp(3.5rem,8vw,7rem)] font-black uppercase leading-[0.8] tracking-[-0.06em] text-white">Combat <span className="text-zinc-500">Abilities</span></h2>
          <p className="mt-5 text-sm leading-7 text-zinc-400 md:text-base">Hover a node. The network reacts like a live system map—skills are connected, not just listed.</p>
        </div>

        <div className="grid gap-8 lg:grid-cols-[1.25fr_.75fr]">
          <div className="relative aspect-square min-h-[420px] overflow-hidden rounded-[32px] border border-white/10 bg-[#08090c] md:aspect-[16/10]">
            <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,0.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.035)_1px,transparent_1px)] [background-size:36px_36px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,36,41,.13),transparent_38%)]" />

            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full" aria-hidden="true">
              {positions.slice(1).map((point, i) => {
                const highlighted = active === null || active === i;
                return (
                  <motion.line
                    key={point.label}
                    x1="50" y1="50" x2={point.x} y2={point.y}
                    stroke="currentColor"
                    className="text-[#E62429]"
                    strokeWidth={highlighted ? "0.35" : "0.12"}
                    initial={{ pathLength: 0, opacity: 0 }}
                    whileInView={{ pathLength: 1, opacity: highlighted ? 0.65 : 0.15 }}
                    viewport={{ once: true }}
                    transition={{ duration: 1, delay: i * 0.12 }}
                  />
                );
              })}
              {positions.slice(1).map((point, i) => (
                <motion.circle
                  key={`pulse-${point.label}`}
                  cx={point.x} cy={point.y} r="2.2"
                  fill="none" stroke="currentColor" className="text-[#E62429]"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: active === null || active === i ? [0.2, 0.8, 0.2] : 0.1, r: [2.2, 4, 2.2] }}
                  transition={{ duration: 2.2, repeat: Infinity, delay: i * 0.25 }}
                />
              ))}
            </svg>

            {positions.map((point, i) => {
              const isCore = i === 0;
              const value = isCore ? null : skills[i - 1];
              return (
                <motion.button
                  key={point.label}
                  onMouseEnter={() => !isCore && setActive(i - 1)}
                  onMouseLeave={() => setActive(null)}
                  onFocus={() => !isCore && setActive(i - 1)}
                  onBlur={() => setActive(null)}
                  data-cursor={isCore ? "" : "skill"}
                  className="absolute -translate-x-1/2 -translate-y-1/2 rounded-full text-center outline-none"
                  style={{ left: `${point.x}%`, top: `${point.y}%` }}
                  whileHover={{ scale: 1.08 }}
                >
                  <span className={`flex h-20 w-20 flex-col items-center justify-center rounded-full border backdrop-blur-xl md:h-24 md:w-24 ${isCore ? "border-[#E62429] bg-[#E62429]/15 shadow-[0_0_45px_rgba(230,36,41,.25)]" : "border-white/10 bg-black/70 hover:border-[#E62429]/70"}`}>
                    <span className="text-[9px] font-bold uppercase tracking-[0.16em] text-white">{point.label}</span>
                    <span className="mt-1 text-[10px] uppercase tracking-widest text-zinc-500">{point.sub}</span>
                  </span>
                  {value && <span className="mt-2 block whitespace-nowrap text-[9px] uppercase tracking-[0.2em] text-zinc-600">{value.title}</span>}
                </motion.button>
              );
            })}
          </div>

          <div className="rounded-[32px] border border-white/10 bg-white/[0.025] p-6 md:p-8">
            <div className="text-[10px] uppercase tracking-[0.3em] text-zinc-500">System readout</div>
            <div className="mt-8 space-y-7">
              {skills.map((skill, i) => (
                <button key={skill.title} onMouseEnter={() => setActive(i)} onMouseLeave={() => setActive(null)} className="group block w-full text-left">
                  <div className="mb-2 flex items-end justify-between gap-4">
                    <span className="text-sm font-semibold text-zinc-200 transition group-hover:text-[#E62429]">{skill.title}</span>
                    <span className="text-xs tabular-nums text-zinc-500">{skill.percentage}%</span>
                  </div>
                  <div className="h-1 overflow-hidden rounded-full bg-white/10">
                    <motion.div
                      className="h-full bg-[#E62429]"
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.percentage}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1.1, delay: i * 0.1 }}
                    />
                  </div>
                </button>
              ))}
            </div>
            <div className="mt-10 border-t border-white/10 pt-5 text-[10px] uppercase tracking-[0.25em] text-zinc-600">Signal strength · adaptive</div>
          </div>
        </div>
      </div>
    </section>
  );
}
