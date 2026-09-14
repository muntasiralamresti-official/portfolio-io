"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import Link from "next/link";
import { ArrowDownRight, Sparkles } from "lucide-react";
import { FaGithub } from "react-icons/fa";

export default function Hero() {
  const { scrollYProgress } = useScroll();
  const imageY = useTransform(scrollYProgress, [0, 0.35], [0, -140]);
  const imageScale = useTransform(scrollYProgress, [0, 0.3], [1, 0.82]);
  const titleY = useTransform(scrollYProgress, [0, 0.3], [0, -80]);
  const titleOpacity = useTransform(scrollYProgress, [0, 0.28], [1, 0]);

  return (
    <section id="overview" className="relative min-h-[100svh] overflow-hidden px-4 pb-14 pt-28 md:px-8 md:pt-32">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_18%_25%,rgba(230,36,41,0.20),transparent_30%),radial-gradient(circle_at_80%_70%,rgba(255,255,255,0.07),transparent_24%)]" />
      <div className="pointer-events-none absolute inset-0 opacity-40 [background-image:linear-gradient(rgba(255,255,255,0.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.025)_1px,transparent_1px)] [background-size:48px_48px]" />
      <div className="pointer-events-none absolute right-[-12%] top-[-8%] h-[480px] w-[480px] rounded-full border border-white/5 md:h-[700px] md:w-[700px]">
        <div className="absolute inset-10 rounded-full border border-[#E62429]/10" />
        <div className="absolute inset-24 rounded-full border border-[#E62429]/10" />
      </div>

      <div className="relative mx-auto grid min-h-[calc(100svh-160px)] max-w-[1400px] items-center gap-10 lg:grid-cols-[1.1fr_.9fr]">
        <motion.div style={{ y: titleY, opacity: titleOpacity }} className="relative z-10 max-w-4xl">
          <div className="mb-7 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-4 py-2 text-[11px] uppercase tracking-[0.28em] text-zinc-400 backdrop-blur-xl">
            <Sparkles size={13} className="text-[#E62429]" /> Interactive portfolio // online
          </div>
          <h1 className="text-[clamp(4rem,10vw,9.5rem)] font-black uppercase leading-[0.82] tracking-[-0.07em] text-white">
            Muntasir<span className="block text-[#E62429]">Alam Resti</span>
          </h1>
          <p className="mt-7 max-w-2xl text-base leading-7 text-zinc-300 md:text-xl md:leading-8">I build fast, expressive digital products where engineering meets motion, interaction, and visual storytelling.</p>
          <div className="mt-9 flex flex-wrap gap-3">
            <Link href="#projects" className="group inline-flex items-center gap-2 rounded-full bg-[#E62429] px-6 py-3 text-sm font-semibold text-white shadow-[0_15px_50px_rgba(230,36,41,0.3)] transition-transform hover:-translate-y-1">Explore the work <ArrowDownRight size={16} className="transition-transform group-hover:translate-x-1 group-hover:translate-y-1" /></Link>
            <a href="https://github.com/muntasiralamresti-official" target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-6 py-3 text-sm font-semibold text-white backdrop-blur-xl transition hover:border-white/20 hover:bg-white/[0.08]"><FaGithub size={16} /> GitHub</a>
          </div>
          <div className="mt-12 grid max-w-2xl grid-cols-3 gap-3 border-t border-white/10 pt-5">
            {[["01", "Build", "React / Next.js"], ["02", "Focus", "Product + UI"], ["03", "Mode", "Motion-driven"]].map(([n, label, value]) => <div key={n}><div className="text-[10px] uppercase tracking-[0.25em] text-zinc-500">{n} · {label}</div><div className="mt-2 text-sm font-medium text-zinc-200">{value}</div></div>)}
          </div>
        </motion.div>

        <motion.div style={{ y: imageY, scale: imageScale }} className="relative mx-auto w-full max-w-[520px] lg:ml-auto">
          <motion.div animate={{ rotate: [0, 1.5, -1.5, 0] }} transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }} className="absolute -inset-8 rounded-[48px] bg-[#E62429]/10 blur-3xl" />
          <div className="relative overflow-hidden rounded-[36px] border border-white/10 bg-[#0c0c0e]/80 p-3 shadow-[0_35px_100px_rgba(0,0,0,0.55)] backdrop-blur-2xl">
            <div className="relative aspect-[4/5] overflow-hidden rounded-[28px] bg-black">
              <img src="/muntasir.png" alt="Muntasir Alam Resti" className="h-full w-full object-cover grayscale transition duration-700 hover:scale-[1.04] hover:grayscale-0" />
              <div className="absolute inset-0 bg-[linear-gradient(135deg,rgba(230,36,41,0.28),transparent_42%,rgba(0,0,0,0.75))]" />
              <div className="absolute inset-x-5 bottom-5 flex items-end justify-between gap-4"><div><div className="text-[10px] uppercase tracking-[0.3em] text-white/60">Your friendly neighborhood</div><div className="mt-1 text-2xl font-bold text-white">Developer.</div></div><div className="rounded-full border border-white/15 bg-black/30 px-3 py-2 text-[10px] uppercase tracking-[0.2em] text-white/80 backdrop-blur-xl">Stay curious</div></div>
            </div>
          </div>
        </motion.div>
      </div>
      <div className="pointer-events-none absolute bottom-7 left-1/2 hidden -translate-x-1/2 items-center gap-3 text-[10px] uppercase tracking-[0.35em] text-zinc-500 md:flex">Scroll to enter the city <span className="h-px w-16 bg-zinc-700" /></div>
    </section>
  );
}
