"use client";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ArrowUpRight, Crosshair } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";

export default function Projects() {
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState("All");
  const filters = useMemo(() => ["All", ...new Set(projects.flatMap((p) => p.tech || []).slice(0, 8))], []);
  const visible = filter === "All" ? projects : projects.filter((p) => (p.tech || []).includes(filter));

  return (
    <section id="projects" className="relative z-10 overflow-hidden px-4 py-28 md:px-8 md:py-40">
      <div className="pointer-events-none absolute inset-x-0 top-1/2 h-px bg-gradient-to-r from-transparent via-[#E62429]/20 to-transparent" />
      <div className="mx-auto max-w-[1500px]">
        <div className="mb-14 grid gap-8 lg:grid-cols-[1fr_auto] lg:items-end">
          <div>
            <div className="mb-5 flex items-center gap-3 text-[9px] uppercase tracking-[.4em] text-zinc-600"><Crosshair size={12} className="text-[#E62429]" /> 002 / city operations</div>
            <h2 className="text-[clamp(4rem,9vw,8rem)] font-black uppercase leading-[.74] tracking-[-.08em] text-white">The <span className="text-[#E62429]">Work</span><br /><span className="text-zinc-700">Files.</span></h2>
            <p className="mt-7 max-w-2xl border-l border-[#E62429]/40 pl-5 text-sm leading-7 text-zinc-400 md:text-base">Every project is a field operation: identify the problem, build the system, ship the experience. Open a file to inspect the mission.</p>
          </div>
          <div className="flex max-w-full gap-2 overflow-x-auto pb-1 lg:max-w-xl lg:justify-end">
            {filters.map((item) => <button key={item} onClick={() => setFilter(item)} className={`whitespace-nowrap rounded-full border px-4 py-2 text-[10px] uppercase tracking-[.2em] transition ${filter === item ? "border-[#E62429] bg-[#E62429] text-white shadow-[0_0_30px_rgba(230,36,41,.18)]" : "border-white/10 bg-white/[.025] text-zinc-500 hover:border-white/25 hover:text-white"}`}>{item}</button>)}
          </div>
        </div>

        <motion.div layout className="grid gap-4 md:grid-cols-2">
          {visible.map((proj, i) => (
            <motion.button layout key={proj.title || i} onClick={() => setActive(proj)} className="group relative min-h-[360px] overflow-hidden rounded-[4px] border border-white/10 bg-[#07080b] p-7 text-left transition duration-500 hover:-translate-y-2 hover:border-[#E62429]/60 hover:shadow-[0_35px_100px_rgba(0,0,0,.55)] md:min-h-[430px] md:p-10">
              <div className="absolute inset-0 bg-[radial-gradient(circle_at_85%_15%,rgba(230,36,41,.16),transparent_28%)] opacity-70 transition duration-700 group-hover:opacity-100" />
              <div className="absolute inset-0 opacity-0 transition duration-700 group-hover:opacity-100 [background-image:linear-gradient(rgba(255,255,255,.025)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.025)_1px,transparent_1px)] [background-size:30px_30px]" />
              <div className="absolute right-7 top-7 text-[48px] font-black leading-none tracking-[-.08em] text-white/[.035] transition group-hover:text-[#E62429]/10 md:text-[76px]">{String(i + 1).padStart(2, "0")}</div>
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between text-[9px] uppercase tracking-[.3em] text-zinc-600"><span>Case file / {String(i + 1).padStart(2, "0")}</span><ArrowUpRight size={17} className="transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#E62429]" /></div>
                <div className="mt-20">
                  <div className="mb-4 flex items-center gap-2"><span className="h-1.5 w-1.5 rounded-full bg-[#E62429] shadow-[0_0_12px_#E62429]" /><span className="text-[8px] uppercase tracking-[.32em] text-zinc-600">operation complete</span></div>
                  <h3 className="max-w-xl text-[clamp(2.2rem,5vw,4.2rem)] font-black uppercase leading-[.8] tracking-[-.06em] text-white transition duration-500 group-hover:translate-x-2 group-hover:text-[#E62429]">{proj.title}</h3>
                  <p className="mt-5 max-w-xl text-sm leading-7 text-zinc-500">{proj.desc}</p>
                  <div className="mt-7 flex flex-wrap gap-2">{(proj.tech || []).map((t) => <span key={t} className="border border-white/10 bg-white/[.025] px-3 py-1.5 text-[9px] uppercase tracking-[.18em] text-zinc-400">{t}</span>)}</div>
                </div>
              </div>
              <span className="absolute bottom-0 left-0 h-px w-0 bg-[#E62429] transition-all duration-700 group-hover:w-full" />
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {active && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-[#010102]/90 p-4 backdrop-blur-2xl" onClick={() => setActive(null)}>
          <motion.div initial={{ opacity: 0, y: 45, scale: .94, rotateX: 5 }} animate={{ opacity: 1, y: 0, scale: 1, rotateX: 0 }} exit={{ opacity: 0, y: 25, scale: .96 }} transition={{ type: "spring", damping: 24 }} onClick={(e) => e.stopPropagation()} className="relative max-h-[90vh] w-full max-w-4xl overflow-y-auto border border-white/10 bg-[#07080b] p-7 shadow-[0_50px_160px_rgba(0,0,0,.8)] md:p-12">
            <div className="pointer-events-none absolute right-0 top-0 h-72 w-72 bg-[#E62429]/10 blur-[100px]" />
            <button onClick={() => setActive(null)} className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/[.04] p-2 text-zinc-500 transition hover:border-[#E62429]/50 hover:text-white" aria-label="Close project details"><X size={18} /></button>
            <div className="relative"><div className="flex items-center gap-3 text-[9px] uppercase tracking-[.35em] text-[#E62429]"><span className="h-px w-8 bg-[#E62429]" /> case file / mission brief</div><h3 className="mt-5 max-w-3xl text-[clamp(3rem,8vw,7rem)] font-black uppercase leading-[.76] tracking-[-.07em] text-white">{active.title}</h3><p className="mt-8 max-w-3xl text-base leading-8 text-zinc-300">{active.desc}</p><div className="mt-8 flex flex-wrap gap-2">{(active.tech || []).map((t) => <span key={t} className="border border-white/10 px-3 py-2 text-[10px] uppercase tracking-widest text-zinc-400">{t}</span>)}</div><div className="mt-10 flex flex-wrap gap-3">{active.live && <a href={active.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#E62429] px-5 py-3 text-sm font-semibold text-white">Launch operation <ExternalLink size={15} /></a>}{active.github && <a href={active.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[.04] px-5 py-3 text-sm font-semibold text-white">Inspect source <FaGithub size={15} /></a>}</div></div>
          </motion.div>
        </motion.div>}
      </AnimatePresence>
    </section>
  );
}
