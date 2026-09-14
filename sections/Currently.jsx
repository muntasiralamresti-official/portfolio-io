"use client";

import { motion } from "framer-motion";

const items = [
  { code: "01", title: "BUILDING", text: "Next-generation web applications with Next.js, Framer Motion and interaction-first thinking.", signal: "ACTIVE" },
  { code: "02", title: "LEARNING", text: "Going deeper into WebGL, Three.js and scalable frontend architecture without losing the human layer.", signal: "EVOLVING" },
  { code: "03", title: "OPEN TO", text: "Full-time roles, freelance projects and collaborations where design and engineering can push each other.", signal: "RECEIVING" },
];

export default function Currently() {
  return (
    <section className="relative px-4 py-24 md:px-8 md:py-32">
      <div className="mx-auto max-w-[1400px]">
        <motion.div initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }} className="mb-10 flex items-end justify-between border-b border-white/10 pb-5">
          <div><div className="mb-3 text-[10px] uppercase tracking-[.4em] text-[#E62429]">LIVE FEED // 03</div><h2 className="text-4xl font-black uppercase tracking-[-.05em] text-white md:text-6xl">Right <span className="text-zinc-600">Now</span></h2></div>
          <div className="hidden items-center gap-2 text-[9px] uppercase tracking-[.25em] text-zinc-600 md:flex"><span className="h-1.5 w-1.5 animate-pulse rounded-full bg-[#E62429]" /> signal stable</div>
        </motion.div>

        <div className="grid gap-3 md:grid-cols-3">
          {items.map((item, index) => (
            <motion.article key={item.code} initial={{ opacity: 0, y: 25 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * .1 }} whileHover={{ y: -6 }} className="group relative overflow-hidden rounded-[28px] border border-white/10 bg-[#09090c] p-7 md:p-8">
              <div className="absolute right-0 top-0 h-32 w-32 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#E62429]/10 blur-2xl transition-transform duration-700 group-hover:scale-150" />
              <div className="relative flex min-h-[270px] flex-col justify-between">
                <div className="flex items-center justify-between text-[9px] uppercase tracking-[.25em] text-zinc-600"><span>{item.code} / STATUS</span><span className="flex items-center gap-2 text-zinc-500"><i className="h-1.5 w-1.5 rounded-full bg-[#E62429]" />{item.signal}</span></div>
                <div><h3 className="text-3xl font-black tracking-[-.04em] text-white transition-colors group-hover:text-[#E62429]">{item.title}</h3><p className="mt-4 text-sm leading-7 text-zinc-500">{item.text}</p></div>
                <div className="flex items-center gap-2 text-[8px] uppercase tracking-[.3em] text-zinc-700"><span className="h-px w-10 bg-zinc-800 transition-all duration-500 group-hover:w-16 group-hover:bg-[#E62429]" /> incoming transmission</div>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
