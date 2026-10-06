"use client";
import { motion } from "framer-motion";
import { ArrowUpRight } from "lucide-react";
import portfolio from "@/data/portfolio.json";

export default function About() {
  const p = portfolio.profile;
  return (
    <section id="about" className="neo-section border-y border-black/10">
      <div className="neo-container">
        <div className="grid gap-12 lg:grid-cols-[.4fr_1.6fr]">
          <div><div className="neo-kicker">02 / About</div><div className="mt-8 text-6xl font-black tracking-[-.08em]">ME<span className="neo-lime">.</span></div></div>
          <div>
            <h2 className="neo-title max-w-5xl">I care about the <span className="text-neutral-400">details</span> people feel.</h2>
            <div className="mt-10 grid gap-10 md:grid-cols-2">
              <p className="text-base leading-8 text-neutral-600">{p.secondaryBio}</p>
              <div>
                <p className="text-sm leading-7 text-neutral-600">{p.bio}</p>
                <a href="#contact" className="mt-7 inline-flex items-center gap-2 text-[10px] font-black uppercase tracking-[.15em] underline underline-offset-8">Start a conversation <ArrowUpRight size={13}/></a>
              </div>
            </div>
            <div className="mt-14 grid gap-3 sm:grid-cols-3">
              {portfolio.about.cards.slice(0,6).map((item,i) => <motion.div whileHover={{y:-5}} key={item.title} className="neo-card rounded-2xl p-5"><div className="neo-kicker">{String(i+1).padStart(2,"0")}</div><div className="mt-8 text-lg font-black">{item.title}</div><div className="mt-2 text-xs text-neutral-500">{item.desc}</div></motion.div>)}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}