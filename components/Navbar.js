"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { Menu, X, Sun, Moon } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();

  const navItems = ["About", "Skills", "Projects", "Contact"];

  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 w-full z-50"
    >
      <div className="container mx-auto mt-4 px-4 md:px-6 py-3 flex items-center justify-between rounded-full border border-[var(--border-color)] bg-[var(--glass-bg)] backdrop-blur-xl shadow-sm transition-colors">
        
        {/* LEFT */}
        <div className="flex items-center gap-4">
          <div className="relative w-10 h-10">
            <Image
              src="/muntasir-logo.png"
              alt="Muntasir Resti Logo"
              fill
              priority
              className="object-contain hover:scale-105 transition-transform duration-300 drop-shadow-sm"
            />
          </div>
          <div className="hidden sm:block">
            <h2 className="text-base font-bold tracking-wide text-[var(--text-primary)]">
              Muntasir<span className="text-[var(--accent)]"> Alam</span>
            </h2>
            <p className="text-[10px] text-[var(--text-secondary)] font-mono uppercase tracking-wider">
              Frontend Developer
            </p>
          </div>
        </div>

        {/* DESKTOP NAV */}
        <div className="hidden md:flex items-center gap-6 text-sm font-medium">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="relative text-[var(--text-primary)] hover:text-[var(--accent)] transition-colors duration-300 group"
            >
              {item}
              <span className="absolute left-0 bottom-[-4px] w-0 h-[2px] bg-gradient-to-r from-[var(--accent)] to-[var(--accent-secondary)] transition-all duration-300 group-hover:w-full rounded-full"></span>
            </a>
          ))}
        </div>

        {/* RIGHT - ACTIONS */}
        <div className="flex items-center gap-3">
          {/* Theme Toggle */}
          <button
            onClick={toggleTheme}
            className="w-10 h-10 rounded-full border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent-muted)] hover:border-[var(--accent)] transition-all duration-300"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>

          {/* MOBILE MENU BUTTON */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden w-10 h-10 rounded-full border border-[var(--border-color)] flex items-center justify-center text-[var(--text-secondary)] hover:text-[var(--accent)] hover:bg-[var(--accent-muted)] transition-all duration-300"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </div>

      {/* MOBILE MENU */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="md:hidden container mx-auto mt-2 px-4"
          >
            <div className="rounded-3xl border border-[var(--border-color)] bg-[var(--glass-bg)] backdrop-blur-xl overflow-hidden py-2 shadow-lg transition-colors">
              {navItems.map((item, index) => (
                <a
                  key={index}
                  href={`#${item.toLowerCase()}`}
                  onClick={() => setOpen(false)}
                  className="block px-6 py-4 border-b border-[var(--border-color)] last:border-0 text-[var(--text-primary)] hover:text-[var(--accent)] hover:bg-[var(--accent-muted)] transition-colors duration-300 font-medium"
                >
                  {item}
                </a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}