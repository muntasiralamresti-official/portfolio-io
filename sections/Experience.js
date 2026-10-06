"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import portfolio from "@/data/portfolio.json";

export default function Experience() {
  return <section id="experience" className="neo-section border-y border-black/10">
    <div className="neo-container"><div className="grid gap-12 lg:grid-cols-[.5fr_1.5fr]"><div><div className="neo-kicker">07 / Experience</div><h2 className="neo-title mt-6">The<br/><span className="text-neutral-400">path.</span></h2></div>
      <div className="divide-y divide-black/10 border-y border-black/10">{portfolio.experience.map((item,i)=><motion.article whileHover={{x:6}} key={item.id} className="grid gap-5 py-8 md:grid-cols-[110px_1fr_auto]"><div className="neo-kicker">{item.date}</div><div><h3 className="text-2xl font-black">{item.title}</h3><div className="mt-2 text-xs font-bold uppercase tracking-[.14em] text-neutral-500">{item.org}</div><p className="mt-5 max-w-2xl text-sm leading-7 text-neutral-600">{item.desc}</p></div><ArrowUpRight className="text-neutral-400"/></motion.article>)}</div>
    </div></div>
  </section>;
}