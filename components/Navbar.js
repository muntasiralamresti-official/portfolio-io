"use client";
import { useState } from "react";
import Link from "next/link";
import { Menu, X, ArrowUpRight } from "lucide-react";
import portfolio from "@/data/portfolio.json";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const items = [
    ["About", "#about"], ["Work", "#projects"], ["Skills", "#skills"],
    ["Experience", "#experience"], ["Contact", "#contact"]
  ];
  return (
    <nav className="neo-nav">
      <div className="neo-container flex h-[74px] items-center justify-between">
        <Link href="/" className="flex items-center gap-3 text-sm font-black tracking-[-.03em]">
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-black text-[11px] text-white">MA</span>
          <span className="hidden sm:block">MUNTASIR ALAM</span>
        </Link>
        <div className="hidden items-center gap-7 md:flex">
          {items.map(([name, href]) => <a key={name} href={href} className="text-[10px] font-bold uppercase tracking-[.15em] text-neutral-500 transition hover:text-black">{name}</a>)}
        </div>
        <div className="hidden md:block">
          <a href={portfolio.socials.github} target="_blank" rel="noreferrer" className="neo-button neo-button-primary">GitHub <ArrowUpRight size={13}/></a>
        </div>
        <button className="md:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">{open ? <X/> : <Menu/>}</button>
      </div>
      {open && <div className="border-t border-black/10 bg-[#f4f3ef] p-4 md:hidden">
        {items.map(([name, href]) => <a key={name} href={href} onClick={() => setOpen(false)} className="block border-b border-black/10 py-4 text-xs font-bold uppercase tracking-[.15em]">{name}</a>)}
      </div>}
    </nav>
  );
}