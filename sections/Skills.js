"use client";

import { motion } from "framer-motion";
import { Crosshair, Cpu } from "lucide-react";

const nodes = [
  { name: "React", value: 90, x: 50, y: 50 },
  { name: "Next.js", value: 82, x: 18, y: 24 },
  { name: "Tailwind", value: 88, x: 82, y: 24 },
  { name: "UI / UX", value: 80, x: 20, y: 78 },
  { name: "Marketing", value: 75, x: 80, y: 78 },
];

export default function Skills() {
  return (
    <section id="skills" className="relative z-10 px-4 py-28 md:px-8 md:py-40">
      <div className="mx-auto max-w-[1400px]">
        <div className="mb-12"><div className="mb-5 flex items-center gap-3 text-[9px] uppercase tracking-[.4em] text-zinc-600"><Crosshair size={12} className="text-[#E62429]" /> 003 / spider sense online</div><h2 className="text-[clamp(4rem,9vw,8rem)] font-black uppercase leading-[.74] tracking-[-.08em] text-white">Combat <span className="text-[#E62429]">Abilities.</span></h2><p className="mt-6 max-w-2xl border-l border-[#E62429]/40 pl-5 text-sm leading-7 text-zinc-400">A live skill network. Hover a node to wake the system and see where the signal is strongest.</p></div>
        <div className="grid gap-8 lg:grid-cols-[1.3fr_.7fr]">
          <div className="relative aspect-square overflow-hidden border border-white/10 bg-[#07080b] md:aspect-[16/10]">
            <div className="absolute inset-0 opacity-30 [background-image:linear-gradient(rgba(255,255,255,.035)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,.035)_1px,transparent_1px)] [background-size:38px_38px]" />
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(230,36,41,.16),transparent_38%)]" />
            <svg viewBox="0 0 100 100" className="absolute inset-0 h-full w-full"><defs><radialGradient id="skillCore"><stop stopColor="#E62429" stopOpacity=".4"/><stop offset="1" stopColor="#E62429" stopOpacity="0"/></radialGradient></defs><circle cx="50" cy="50" r="18" fill="url(#skillCore)" />{nodes.slice(1).map((n, i) => <g key={n.name}><line x1="50" y1="50" x2={n.x} y2={n.y} stroke="#E62429" strokeOpacity=".32" strokeWidth=".3" /><motion.circle cx={n.x} cy={n.y} r="2.5" fill="none" stroke="#E62429" strokeWidth=".4" animate={{ r: [2.5, 5, 2.5], opacity: [.25, .9, .25] }} transition={{ duration: 2.2, repeat: Infinity, delay: i * .25 }} /></g>)}</svg>
            {nodes.map((n, i) => <motion.div key={n.name} whileHover={{ scale: 1.12 }} className="absolute -translate-x-1/2 -translate-y-1/2" style={{ left: `${n.x}%`, top: `${n.y}%` }}><div className={`flex h-20 w-20 flex-col items-center justify-center rounded-full border ${i === 0 ? "border-[#E62429] bg-[#E62429]/15 shadow-[0_0_50px_rgba(230,36,41,.25)]" : "border-white/10 bg-black/75 backdrop-blur-xl hover:border-[#E62429]/70"}`}><span className="text-[9px] font-black uppercase tracking-[.12em] text-white">{n.name}</span><span className="mt-1 text-[9px] text-zinc-500">{n.value}%</span></div></motion.div>)}
            <div className="absolute bottom-5 left-5 flex items-center gap-2 text-[8px] uppercase tracking-[.3em] text-zinc-600"><Cpu size={12} className="text-[#E62429]" /> adaptive network / live</div>
          </div>
          <div className="border border-white/10 bg-white/[.025] p-7 md:p-9"><div className="text-[9px] uppercase tracking-[.35em] text-zinc-600">Signal strength</div><div className="mt-8 space-y-7">{nodes.slice(1).map((n, i) => <div key={n.name}><div className="mb-2 flex justify-between text-[10px] uppercase tracking-[.18em]"><span className="text-zinc-300">{n.name}</span><span className="text-zinc-600">{n.value}%</span></div><div className="h-px bg-white/10"><motion.div initial={{ width: 0 }} whileInView={{ width: `${n.value}%` }} viewport={{ once: true }} transition={{ duration: 1, delay: i * .1 }} className="h-full bg-[#E62429] shadow-[0_0_12px_rgba(230,36,41,.45)]" /></div></div>)}</div><div className="mt-10 border-t border-white/10 pt-5 text-[8px] uppercase tracking-[.3em] text-zinc-700">adapt / learn / ship / repeat</div></div>
        </div>
      </div>
    </section>
  );
}
