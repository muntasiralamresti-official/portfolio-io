"use client";
import { useMemo, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ExternalLink, X, ArrowUpRight } from "lucide-react";
import { FaGithub } from "react-icons/fa";
import { projects } from "@/data/projects";

export default function Projects() {
  const [active, setActive] = useState(null);
  const [filter, setFilter] = useState("All");
  const filters = useMemo(() => ["All", ...new Set(projects.flatMap((p) => p.tech || []).slice(0, 8))], []);
  const visible = filter === "All" ? projects : projects.filter((p) => (p.tech || []).includes(filter));

  return (
    <section id="projects" className="relative z-10 px-4 py-28 md:px-8 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12 flex flex-col justify-between gap-7 md:flex-row md:items-end">
          <div>
            <div className="mb-4 text-[10px] uppercase tracking-[0.35em] text-[#E62429]">02 // selected transmissions</div>
            <h2 className="text-[clamp(3.5rem,8vw,7rem)] font-black uppercase leading-[0.8] tracking-[-0.06em] text-white">Featured <span className="text-zinc-500">Work</span></h2>
            <p className="mt-5 max-w-2xl text-sm leading-7 text-zinc-400 md:text-base">Projects are treated like missions: clear objective, deliberate interface, measurable outcome, and a polished final experience.</p>
          </div>
          <div className="flex max-w-full gap-2 overflow-x-auto pb-1">
            {filters.map((item) => <button key={item} onClick={() => setFilter(item)} className={`whitespace-nowrap rounded-full border px-4 py-2 text-[11px] uppercase tracking-[0.2em] transition ${filter === item ? "border-[#E62429] bg-[#E62429] text-white" : "border-white/10 bg-white/[0.03] text-zinc-400 hover:border-white/20 hover:text-white"}`}>{item}</button>)}
          </div>
        </div>

        <motion.div layout className="grid gap-5 md:grid-cols-2">
          {visible.map((proj, i) => (
            <motion.button layout key={proj.title || i} onClick={() => setActive(proj)} className="group relative min-h-[300px] overflow-hidden rounded-[30px] border border-white/10 bg-[#0c0c0e] p-7 text-left transition hover:-translate-y-1 hover:border-[#E62429]/60 md:min-h-[360px] md:p-9">
              <div className="absolute right-0 top-0 h-56 w-56 rounded-full bg-[#E62429]/10 blur-3xl transition group-hover:bg-[#E62429]/20" />
              <div className="absolute inset-0 opacity-0 transition duration-500 group-hover:opacity-100 [background-image:linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] [background-size:24px_24px]" />
              <div className="relative flex h-full flex-col justify-between">
                <div className="flex items-center justify-between text-[10px] uppercase tracking-[0.28em] text-zinc-500"><span>Mission {String(i + 1).padStart(2, "0")}</span><ArrowUpRight size={16} className="transition group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#E62429]" /></div>
                <div className="mt-14">
                  <h3 className="text-4xl font-black uppercase tracking-[-0.04em] text-white transition group-hover:text-[#E62429]">{proj.title}</h3>
                  <p className="mt-4 max-w-xl text-sm leading-7 text-zinc-400">{proj.desc}</p>
                  <div className="mt-7 flex flex-wrap gap-2">{(proj.tech || []).map((t) => <span key={t} className="rounded-full border border-white/10 bg-white/[0.04] px-3 py-1.5 text-[10px] uppercase tracking-widest text-zinc-300">{t}</span>)}</div>
                </div>
              </div>
            </motion.button>
          ))}
        </motion.div>
      </div>

      <AnimatePresence>
        {active && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[100] flex items-center justify-center bg-black/80 p-4 backdrop-blur-xl" onClick={() => setActive(null)}>
          <motion.div initial={{ opacity: 0, y: 30, scale: .96 }} animate={{ opacity: 1, y: 0, scale: 1 }} exit={{ opacity: 0, y: 20, scale: .96 }} onClick={(e) => e.stopPropagation()} className="relative max-h-[90vh] w-full max-w-3xl overflow-y-auto rounded-[32px] border border-white/10 bg-[#0b0b0d] p-7 shadow-2xl md:p-10">
            <button onClick={() => setActive(null)} className="absolute right-5 top-5 rounded-full border border-white/10 bg-white/[0.05] p-2 text-zinc-400 hover:text-white" aria-label="Close project details"><X size={18} /></button>
            <div className="pr-12 text-[10px] uppercase tracking-[0.3em] text-[#E62429]">Mission brief</div>
            <h3 className="mt-4 text-5xl font-black uppercase tracking-[-0.05em] text-white md:text-7xl">{active.title}</h3>
            <p className="mt-6 text-base leading-8 text-zinc-300">{active.desc}</p>
            <div className="mt-8 flex flex-wrap gap-2">{(active.tech || []).map((t) => <span key={t} className="rounded-full border border-white/10 px-3 py-2 text-xs text-zinc-300">{t}</span>)}</div>
            <div className="mt-10 flex flex-wrap gap-3">
              {active.live && <a href={active.live} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full bg-[#E62429] px-5 py-3 text-sm font-semibold text-white">Live project <ExternalLink size={15} /></a>}
              {active.github && <a href={active.github} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.04] px-5 py-3 text-sm font-semibold text-white">Source <FaGithub size={15} /></a>}
            </div>
          </motion.div>
        </motion.div>}
      </AnimatePresence>
    </section>
  );
}
