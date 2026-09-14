"use client";

import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Command, Github, Home, Mail, Sparkles, UserRound, X } from "lucide-react";

const items = [
  { label: "Overview", href: "#overview", icon: Home },
  { label: "About", href: "#about", icon: UserRound },
  { label: "Skills", href: "#skills", icon: Sparkles },
  { label: "Projects", href: "#projects", icon: Command },
  { label: "Contact", href: "#contact", icon: Mail },
  { label: "GitHub", href: "https://github.com/muntasiralamresti-official", icon: Github, external: true },
];

export default function CommandPalette() {
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const filtered = items.filter((item) => item.label.toLowerCase().includes(query.toLowerCase()));

  useEffect(() => {
    const onKeyDown = (event) => {
      if ((event.ctrlKey || event.metaKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  const navigate = (item) => {
    setOpen(false);
    setQuery("");
    if (item.external) window.open(item.href, "_blank", "noopener,noreferrer");
    else document.querySelector(item.href)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <>
      <button
        onClick={() => setOpen(true)}
        className="fixed bottom-5 right-5 z-[70] hidden items-center gap-2 rounded-full border border-white/10 bg-black/60 px-4 py-2 text-[11px] uppercase tracking-[0.2em] text-zinc-300 shadow-2xl backdrop-blur-xl transition hover:border-[#E62429]/60 hover:text-white md:flex"
        aria-label="Open command palette"
      >
        <Command size={14} /> Navigate <kbd className="rounded border border-white/10 px-1.5 py-0.5 text-[9px]">⌘K</kbd>
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            className="fixed inset-0 z-[100] flex items-start justify-center bg-black/75 px-4 pt-[14vh] backdrop-blur-md"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onMouseDown={(event) => event.target === event.currentTarget && setOpen(false)}
          >
            <motion.div
              initial={{ opacity: 0, y: -20, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -20, scale: 0.98 }}
              className="w-full max-w-xl overflow-hidden rounded-3xl border border-white/10 bg-[#0b0c10]/95 shadow-[0_30px_100px_rgba(0,0,0,.65)]"
            >
              <div className="flex items-center gap-3 border-b border-white/10 px-5 py-4">
                <Command size={18} className="text-[#E62429]" />
                <input
                  autoFocus
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Where do you want to go?"
                  className="min-w-0 flex-1 bg-transparent text-sm text-white outline-none placeholder:text-zinc-600"
                />
                <button onClick={() => setOpen(false)} className="rounded-full p-1.5 text-zinc-500 hover:bg-white/5 hover:text-white" aria-label="Close">
                  <X size={16} />
                </button>
              </div>

              <div className="p-2">
                {filtered.map((item) => {
                  const Icon = item.icon;
                  return (
                    <button
                      key={item.label}
                      onClick={() => navigate(item)}
                      className="group flex w-full items-center gap-3 rounded-2xl px-4 py-3 text-left transition hover:bg-white/[0.06]"
                    >
                      <span className="rounded-xl border border-white/10 bg-white/[0.03] p-2 text-zinc-400 transition group-hover:border-[#E62429]/40 group-hover:text-[#E62429]">
                        <Icon size={16} />
                      </span>
                      <span className="text-sm font-medium text-zinc-200">{item.label}</span>
                      <span className="ml-auto text-[10px] uppercase tracking-widest text-zinc-600">{item.external ? "Open" : "Jump"}</span>
                    </button>
                  );
                })}
                {!filtered.length && <div className="px-4 py-8 text-center text-sm text-zinc-600">No destination found.</div>}
              </div>
              <div className="border-t border-white/10 px-5 py-3 text-[10px] uppercase tracking-[0.2em] text-zinc-600">Esc to close · Ctrl/⌘ K to toggle</div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
