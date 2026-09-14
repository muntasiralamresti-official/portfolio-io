"use client";

import { motion } from "framer-motion";
import { Code2, GraduationCap, Megaphone, Radio } from "lucide-react";

const timelineData = [
  { title: "Web Development", org: "Self-Directed Learning", date: "2025 — Present", desc: "Building modern, performant, responsive web applications with React, Next.js and Tailwind CSS.", icon: Code2 },
  { title: "UI/UX Design with Figma", org: "Design Certification", date: "2025", desc: "Studied wireframing, prototyping, design systems and user-centered interface design in Figma.", icon: GraduationCap },
  { title: "Digital Marketing Level 1 & 2", org: "Professional Training", date: "2024", desc: "Training across social strategy, brand positioning, audience growth and engagement.", icon: Megaphone },
];

export default function Experience() {
  return (
    <section id="experience" className="relative z-10 overflow-hidden px-4 py-28 md:px-8 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-14 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3 text-[9px] uppercase tracking-[.4em] text-zinc-600"><Radio size={12} className="text-[#E62429]" /> 004 / origin route</div>
            <h2 className="text-[clamp(4rem,9vw,8rem)] font-black uppercase leading-[.74] tracking-[-.08em] text-white">Origin <span className="text-[#E62429]">Story.</span></h2>
          </div>
          <div className="max-w-sm text-right text-[9px] uppercase tracking-[.3em] text-zinc-600">Learning path / signal acquired / keep moving</div>
        </div>

        <div className="relative">
          <div className="absolute left-[18px] top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-[#E62429]/60 to-transparent md:left-1/2 md:-translate-x-1/2" />
          {timelineData.map((item, i) => {
            const Icon = item.icon;
            const left = i % 2 === 0;
            return (
              <motion.article key={item.title} initial={{ opacity: 0, x: left ? -40 : 40 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true, margin: "-100px" }} transition={{ duration: .7, delay: i * .08 }} className={`relative mb-12 pl-12 md:mb-20 md:w-1/2 md:pl-0 ${left ? "md:pr-16" : "md:ml-auto md:pl-16"}`}>
                <div className={`absolute top-8 left-[11px] h-4 w-4 rounded-full border-2 border-[#E62429] bg-[#050507] shadow-[0_0_24px_rgba(230,36,41,.45)] md:left-auto ${left ? "md:-right-[8px]" : "md:-left-[8px]"}`} />
                <div className="group relative overflow-hidden border border-white/10 bg-[#08090c]/90 p-7 backdrop-blur-xl transition duration-500 hover:-translate-y-2 hover:border-[#E62429]/50 md:p-9">
                  <div className="absolute inset-0 bg-[radial-gradient(circle_at_90%_10%,rgba(230,36,41,.14),transparent_32%)] opacity-70 transition group-hover:opacity-100" />
                  <div className="relative flex items-start justify-between gap-5">
                    <div><div className="mb-2 text-[9px] uppercase tracking-[.28em] text-[#E62429]">{item.date}</div><h3 className="text-2xl font-black uppercase tracking-[-.04em] text-white md:text-3xl">{item.title}</h3><p className="mt-2 text-[9px] uppercase tracking-[.24em] text-zinc-600">{item.org}</p></div>
                    <span className="rounded-full border border-white/10 bg-white/[.03] p-3 text-[#E62429]"><Icon size={17} /></span>
                  </div>
                  <p className="relative mt-6 max-w-xl text-sm leading-7 text-zinc-400">{item.desc}</p>
                  <div className="relative mt-7 h-px bg-gradient-to-r from-[#E62429]/50 to-transparent" />
                  <div className="relative mt-4 text-[8px] uppercase tracking-[.3em] text-zinc-700">mission {String(i + 1).padStart(2, "0")} / complete</div>
                </div>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
