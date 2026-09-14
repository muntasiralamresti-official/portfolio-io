"use client";

import { motion } from "framer-motion";
import { FaReact, FaFigma, FaWordpress } from "react-icons/fa";
import { SiNextdotjs, SiTailwindcss, SiGoogleads } from "react-icons/si";

const techCards = [
  { icon: <FaReact />, title: "React.js", desc: "Interactive UI systems" },
  { icon: <SiNextdotjs />, title: "Next.js", desc: "Modern web apps" },
  { icon: <SiTailwindcss />, title: "Tailwind", desc: "Precision styling" },
  { icon: <FaWordpress />, title: "WordPress", desc: "CMS experiences" },
  { icon: <FaFigma />, title: "UI / UX", desc: "Visual direction" },
  { icon: <SiGoogleads />, title: "Marketing", desc: "Digital growth" },
];

export default function About() {
  return (
    <section id="about" className="relative overflow-hidden px-4 py-28 md:px-8 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-16 flex items-end justify-between gap-8 border-b border-white/10 pb-6">
          <div>
            <div className="mb-4 text-[10px] uppercase tracking-[0.4em] text-[#E62429]">02 // origin story</div>
            <h2 className="text-[clamp(3.5rem,8vw,7.5rem)] font-black uppercase leading-[.8] tracking-[-.07em] text-white">The <span className="text-zinc-600">Human</span><br />Behind The Code</h2>
          </div>
          <div className="hidden max-w-xs text-right text-xs uppercase leading-6 tracking-[.2em] text-zinc-600 md:block">Not a template.<br />Not a theme.<br /><span className="text-zinc-400">A personal system.</span></div>
        </div>

        <div className="grid gap-5 lg:grid-cols-[.9fr_1.1fr]">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true, margin: "-100px" }} className="cinematic-card relative overflow-hidden rounded-[32px] p-7 md:p-10">
            <div className="absolute -right-20 -top-20 h-60 w-60 rounded-full bg-[#E62429]/10 blur-3xl" />
            <div className="relative flex h-full min-h-[430px] flex-col justify-between">
              <div className="flex items-center justify-between text-[9px] uppercase tracking-[.3em] text-zinc-600"><span>FILE / MUNTASIR_ALAM</span><span>01—06</span></div>
              <div>
                <div className="mb-6 text-6xl font-black tracking-[-.07em] text-white md:text-8xl">MA<span className="text-[#E62429]">.</span></div>
                <p className="max-w-xl text-base leading-8 text-zinc-300">I build modern, performant digital products where engineering meets motion, interaction, and visual storytelling.</p>
                <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-500">Frontend is my core. Full-stack development is the direction. UI/UX and marketing give me the wider product perspective.</p>
              </div>
              <div className="grid grid-cols-3 gap-3 border-t border-white/10 pt-5 text-[9px] uppercase tracking-[.2em] text-zinc-600"><span>React / Next</span><span>Motion / UI</span><span>Product Mindset</span></div>
            </div>
          </motion.div>

          <div className="grid grid-cols-2 gap-3 md:gap-4">
            {techCards.map((item, index) => (
              <motion.div key={item.title} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .06 }} whileHover={{ y: -7, scale: 1.015 }} className="group relative overflow-hidden rounded-[26px] border border-white/10 bg-white/[.025] p-5 md:p-7">
                <div className="absolute inset-x-0 bottom-0 h-px origin-left scale-x-0 bg-[#E62429] transition-transform duration-500 group-hover:scale-x-100" />
                <div className="mb-7 flex h-11 w-11 items-center justify-center rounded-2xl border border-white/10 bg-black/40 text-lg text-zinc-300 transition-colors group-hover:border-[#E62429]/50 group-hover:text-[#E62429]">{item.icon}</div>
                <div className="text-sm font-bold uppercase tracking-wide text-white">{item.title}</div>
                <div className="mt-2 text-xs text-zinc-600">{item.desc}</div>
                <div className="mt-8 text-[8px] uppercase tracking-[.25em] text-zinc-700">0{index + 1} / capability</div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
