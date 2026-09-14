"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowDownRight, ArrowUpRight, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, .35], [0, -130]);
  const titleY = useTransform(scrollYProgress, [0, .3], [0, -90]);
  const titleOpacity = useTransform(scrollYProgress, [0, .28], [1, 0]);

  return (
    <section id="overview" className="relative min-h-[100svh] overflow-hidden px-4 pb-10 pt-24 md:px-8 md:pt-28">
      <div className="absolute inset-0 cinematic-grid opacity-20 [mask-image:radial-gradient(ellipse_at_center,black,transparent_78%)]" />
      <div className="absolute left-[42%] top-[22%] h-[520px] w-[520px] rounded-full bg-[#E62429]/10 blur-[150px]" />
      <motion.div animate={{ rotate: 360 }} transition={{ duration: 45, repeat: Infinity, ease: "linear" }} className="absolute right-[-18%] top-[-22%] h-[650px] w-[650px] rounded-full border border-[#E62429]/10 md:h-[900px] md:w-[900px]" />
      <div className="absolute right-[10%] top-[16%] hidden h-[1px] w-28 bg-gradient-to-r from-transparent to-[#E62429]/60 md:block" />

      <div className="relative mx-auto grid min-h-[calc(100svh-120px)] max-w-[1500px] items-center lg:grid-cols-[1.08fr_.92fr]">
        <motion.div style={{ y: titleY, opacity: titleOpacity }} className="relative z-10 lg:-mr-24">
          <div className="mb-6 flex items-center gap-3 text-[9px] uppercase tracking-[.42em] text-zinc-500"><span className="h-px w-10 bg-[#E62429]" /> 001 / portfolio transmission <span className="text-[#E62429]">● online</span></div>
          <h1 className="max-w-5xl text-[clamp(4.6rem,11.5vw,11rem)] font-black uppercase leading-[.73] tracking-[-.09em] text-white">
            Muntasir
            <span className="relative block text-[#E62429]">Alam Resti<span className="absolute -right-1 top-[15%] hidden text-[10px] font-medium tracking-[.3em] text-zinc-600 lg:block">DHAKA · BD</span></span>
          </h1>
          <div className="mt-8 grid max-w-2xl gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <p className="text-sm leading-7 text-zinc-400 md:text-base">I design and engineer digital experiences that feel alive — fast interfaces, deliberate motion, and product thinking underneath.</p>
            <div className="text-right text-[9px] uppercase tracking-[.3em] text-zinc-600">Frontend / UI<br />Full-stack in progress</div>
          </div>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="#projects" className="group inline-flex items-center gap-3 rounded-full bg-[#E62429] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[.12em] text-white shadow-[0_20px_70px_rgba(230,36,41,.25)] transition hover:-translate-y-1">Enter the work <ArrowDownRight size={15} className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" /></Link>
            <a href="https://github.com/muntasiralamresti-official" target="_blank" rel="noreferrer" className="group inline-flex items-center gap-3 rounded-full border border-white/10 bg-white/[.035] px-6 py-3.5 text-[11px] font-bold uppercase tracking-[.12em] text-zinc-300 backdrop-blur-xl transition hover:border-[#E62429]/50 hover:text-white"><FaGithub size={15} /> GitHub <ArrowUpRight size={14} className="opacity-50 transition group-hover:translate-x-1 group-hover:-translate-y-1" /></a>
          </div>
        </motion.div>

        <motion.div style={{ y: imageY }} className="relative mx-auto mt-12 w-full max-w-[500px] lg:ml-auto lg:mt-0">
          <motion.div animate={{ rotate: [0, 2, -2, 0], scale: [1, 1.025, 1] }} transition={{ duration: 9, repeat: Infinity, ease: "easeInOut" }} className="absolute -inset-5 rounded-[44px] border border-[#E62429]/20" />
          <div className="relative overflow-hidden rounded-[34px] border border-white/10 bg-[#09090b] p-2 shadow-[0_40px_120px_rgba(0,0,0,.6)]">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[27px] bg-black">
              <img src="/muntasir.png" alt="Muntasir Alam Resti" className="h-full w-full object-cover grayscale-[.8] transition duration-1000 hover:scale-[1.04] hover:grayscale-0" />
              <div className="absolute inset-0 bg-[linear-gradient(145deg,rgba(230,36,41,.34),transparent_35%,rgba(0,0,0,.8))]" />
              <div className="absolute inset-0 opacity-30 cinematic-grid" />
              <div className="absolute left-5 top-5 text-[8px] uppercase tracking-[.3em] text-white/50">visual identity / 01</div>
              <div className="absolute bottom-5 left-5 right-5 flex items-end justify-between border-t border-white/15 pt-4"><div><div className="text-[8px] uppercase tracking-[.3em] text-white/45">friendly neighborhood</div><div className="mt-1 text-2xl font-black uppercase tracking-[-.04em] text-white">Developer<span className="text-[#E62429]">.</span></div></div><div className="rounded-full border border-white/15 bg-black/30 px-3 py-2 text-[8px] uppercase tracking-[.2em] text-white/70 backdrop-blur-xl"><Sparkles size={11} className="mr-1 inline text-[#E62429]" /> curious</div></div>
            </div>
          </div>
          <div className="absolute -bottom-7 -left-8 hidden rounded-2xl border border-white/10 bg-black/70 px-4 py-3 backdrop-blur-xl md:block"><div className="text-[8px] uppercase tracking-[.3em] text-zinc-600">Current mode</div><div className="mt-1 text-xs font-bold uppercase tracking-wider text-white">Build · Break · Refine</div></div>
        </motion.div>
      </div>

      <div className="absolute bottom-6 left-1/2 hidden -translate-x-1/2 items-center gap-4 text-[8px] uppercase tracking-[.45em] text-zinc-600 md:flex"><span>scroll to explore</span><span className="h-px w-20 bg-gradient-to-r from-[#E62429] to-transparent" /></div>
      <div className="absolute bottom-10 left-5 hidden text-[8px] uppercase tracking-[.3em] text-zinc-700 [writing-mode:vertical-rl] md:block">Interactive / Motion / Digital Craft</div>
    </section>
  );
}
