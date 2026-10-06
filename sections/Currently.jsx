"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import portfolio from "@/data/portfolio.json";

export default function Currently() {
  return (
    <section className="neo-section">
      <div className="neo-container">
        <div className="mb-12 flex items-end justify-between gap-5 border-b border-black/10 pb-5">
          <div><div className="neo-kicker">03 / Now</div><h2 className="neo-title mt-5">In progress.</h2></div>
          <span className="neo-pill hidden md:block">Live status / 2026</span>
        </div>
        <div className="grid gap-3 md:grid-cols-3">
          {portfolio.currently.map((item,i) => <motion.article whileHover={{y:-7}} key={item.code} className="neo-dark group rounded-[26px] p-7 md:p-9">
            <div className="flex items-center justify-between"><span className="neo-pill border-white/20 text-neutral-300">{item.code}</span><ArrowUpRight size={17} className="text-[#c7ff32] transition group-hover:rotate-45"/></div>
            <div className="mt-20"><div className="neo-kicker text-neutral-500">{item.signal}</div><h3 className="mt-3 text-3xl font-black">{item.title}</h3><p className="mt-4 text-sm leading-7 text-neutral-400">{item.text}</p></div>
          </motion.article>)}
        </div>
      </div>
    </section>
  );
}