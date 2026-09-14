"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Radio, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";

const cityBlocks = Array.from({ length: 13 }, (_, i) => ({
  left: `${i * 8.5 - 3}%`,
  width: `${7 + (i % 4) * 1.8}%`,
  height: `${18 + ((i * 17) % 35)}%`,
}));

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const titleY = useTransform(scrollYProgress, [0, .24], [0, -130]);
  const titleScale = useTransform(scrollYProgress, [0, .28], [1, .9]);
  const titleOpacity = useTransform(scrollYProgress, [0, .3], [1, .12]);
  const portraitY = useTransform(scrollYProgress, [0, .5], [0, -220]);
  const portraitRotate = useTransform(scrollYProgress, [0, .35], [0, -4]);
  const skylineY = useTransform(scrollYProgress, [0, 1], [0, -80]);

  return (
    <section id="overview" className="relative min-h-[100svh] overflow-hidden px-4 pb-10 pt-24 md:px-8 md:pt-28">
      {/* Rooftop cinematic environment */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_62%_32%,rgba(230,36,41,.16),transparent_24%),radial-gradient(circle_at_25%_75%,rgba(24,45,74,.18),transparent_35%)]" />
      <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,.35),transparent_28%,transparent_62%,rgba(0,0,0,.8))]" />

      {/* Distant skyline inside the hero */}
      <motion.div style={{ y: skylineY }} className="pointer-events-none absolute inset-x-0 bottom-0 h-[40%] opacity-70">
        {cityBlocks.map((building, i) => (
          <div key={i} className="absolute bottom-0 border-x border-white/[.025] bg-[#05060a]" style={{ left: building.left, width: building.width, height: building.height }}>
            {Array.from({ length: 5 + (i % 4) }, (_, j) => <span key={j} className="absolute h-[2px] w-[4px] bg-[#E62429]/20" style={{ left: `${18 + ((j * 29) % 65)}%`, top: `${10 + j * 12}%` }} />)}
          </div>
        ))}
        <div className="absolute inset-x-0 bottom-0 h-24 bg-gradient-to-t from-[#020203] to-transparent" />
      </motion.div>

      {/* Hero web cables */}
      <svg className="pointer-events-none absolute inset-0 h-full w-full opacity-60" viewBox="0 0 1440 900" preserveAspectRatio="none" aria-hidden="true">
        <motion.path d="M-80 80 C 300 160, 430 40, 760 170 S 1160 350, 1510 160" fill="none" stroke="#fff" strokeOpacity=".07" strokeWidth="1" />
        <motion.path d="M-120 190 C 250 90, 510 300, 820 110 S 1240 100, 1540 300" fill="none" stroke="#E62429" strokeOpacity=".16" strokeWidth="1" />
        <path d="M720 -40 C 650 170, 610 330, 720 540" fill="none" stroke="#fff" strokeOpacity=".055" strokeWidth="1" strokeDasharray="2 10" />
        <motion.circle cx="720" cy="170" r="5" fill="#E62429" animate={{ r: [3, 9, 3], opacity: [0.25, .75, .25] }} transition={{ duration: 2.8, repeat: Infinity }} />
      </svg>

      <div className="relative mx-auto grid min-h-[calc(100svh-120px)] max-w-[1500px] items-center lg:grid-cols-[1.15fr_.85fr]">
        <motion.div style={{ y: titleY, scale: titleScale, opacity: titleOpacity }} className="relative z-20 lg:-mr-28">
          <div className="mb-6 flex items-center gap-3 text-[9px] uppercase tracking-[.42em] text-zinc-500"><Radio size={11} className="text-[#E62429]" /> 001 / rooftop transmission <span className="text-[#E62429]">● live</span></div>
          <h1 className="max-w-6xl text-[clamp(4.4rem,11.5vw,11.5rem)] font-black uppercase leading-[.7] tracking-[-.095em] text-white">
            Muntasir
            <span className="relative block text-[#E62429]">Alam Resti<span className="absolute -right-1 top-[12%] hidden text-[9px] font-medium tracking-[.35em] text-zinc-600 lg:block">23.8103° N / 90.4125° E</span></span>
          </h1>
          <div className="mt-8 max-w-2xl border-l border-[#E62429]/50 pl-5">
            <p className="text-sm leading-7 text-zinc-300 md:text-base">Digital experiences built with code, motion, and a little cinematic chaos. Scroll deeper — the city is waiting.</p>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#projects" className="group inline-flex items-center gap-3 rounded-full bg-[#E62429] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[.12em] text-white shadow-[0_20px_80px_rgba(230,36,41,.3)] transition hover:-translate-y-1">Enter the work <ArrowDownRight size={15} className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" /></Link>
            <a href="https://github.com/muntasiralamresti-official" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-black/35 px-6 py-3.5 text-[11px] font-bold uppercase tracking-[.12em] text-zinc-300 backdrop-blur-xl transition hover:border-[#E62429]/60 hover:text-white"><FaGithub size={15} /> GitHub <ArrowUpRight size={14} className="opacity-50 transition group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
          </div>
        </motion.div>

        <motion.div style={{ y: portraitY, rotate: portraitRotate }} className="relative z-10 mx-auto mt-10 w-full max-w-[500px] lg:ml-auto lg:mt-0">
          {/* Spider-sense halo */}
          <motion.div animate={{ scale: [1, 1.08, 1], opacity: [.2, .42, .2] }} transition={{ duration: 4.5, repeat: Infinity }} className="absolute -inset-12 rounded-full bg-[#E62429]/15 blur-[70px]" />
          <motion.div animate={{ rotate: 360 }} transition={{ duration: 32, repeat: Infinity, ease: "linear" }} className="absolute -inset-8 rounded-[50px] border border-[#E62429]/25 border-dashed" />
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-black/75 p-2 shadow-[0_50px_140px_rgba(0,0,0,.72)] backdrop-blur-xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[29px] bg-[#050507]">
              <img src="/muntasir.png" alt="Muntasir Alam Resti" className="h-full w-full object-cover grayscale-[.8] transition duration-1000 hover:scale-[1.05] hover:grayscale-0" />
              <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(230,36,41,.38),transparent_34%,rgba(0,0,0,.86))]" />
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_55%_35%,transparent_5%,rgba(0,0,0,.35)_75%)]" />
              <div className="absolute inset-0 opacity-20 [background-image:linear-gradient(rgba(255,255,255,.07)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.07)_1px,transparent_1px)] [background-size:36px_36px]" />
              <div className="absolute left-5 top-5 flex items-center gap-2 text-[8px] uppercase tracking-[.3em] text-white/55"><span className="h-1.5 w-1.5 rounded-full bg-[#E62429] shadow-[0_0_12px_#E62429]" /> signal detected</div>
              <div className="absolute bottom-5 left-5 right-5 border-t border-white/15 pt-4"><div className="text-[8px] uppercase tracking-[.3em] text-white/45">friendly neighborhood</div><div className="mt-1 flex items-end justify-between"><div className="text-3xl font-black uppercase tracking-[-.05em] text-white">Developer<span className="text-[#E62429]">.</span></div><Sparkles size={17} className="text-[#E62429]" /></div></div>
            </div>
          </div>
          <div className="absolute -bottom-6 -left-7 hidden rounded-2xl border border-white/10 bg-black/75 px-4 py-3 backdrop-blur-xl md:block"><div className="text-[8px] uppercase tracking-[.3em] text-zinc-600">Current mode</div><div className="mt-1 text-xs font-bold uppercase tracking-wider text-white">Build · Break · Refine</div></div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-4 text-[8px] uppercase tracking-[.45em] text-zinc-600 md:flex"><span>scroll to enter the city</span><span className="h-px w-20 bg-gradient-to-r from-[#E62429] to-transparent" /></div>
      <div className="absolute bottom-10 left-5 hidden text-[8px] uppercase tracking-[.3em] text-zinc-700 [writing-mode:vertical-rl] md:block">Interactive / Motion / Digital Craft</div>
    </section>
  );
}
