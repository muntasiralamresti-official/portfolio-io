"use client";

import { useState } from "react";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon, BookOpen, User, Star, Briefcase, Mail } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [open, setOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  const base = pathname === "/" ? "" : "/";

  const navItems = [
    { name: "Overview", href: `${base}#`, icon: <User size={16} /> },
    { name: "Projects", href: `${base}#projects`, icon: <BookOpen size={16} /> },
    { name: "Skills", href: `${base}#skills`, icon: <Star size={16} /> },
    { name: "Experience", href: `${base}#experience`, icon: <Briefcase size={16} /> },
    { name: "Contact", href: `${base}#contact`, icon: <Mail size={16} /> },
  ];

  return (
    <nav className="sticky top-0 z-50 border-b border-[var(--border-color)] bg-[var(--bg-primary)]/85 backdrop-blur-xl">
      <div className="mx-auto flex h-[68px] max-w-[1280px] items-center justify-between px-4 md:px-6">
        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen(!open)}
            className="rounded-md p-1.5 text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)] md:hidden"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>

          <div className="flex items-center gap-2">
            <div className="relative hidden h-8 w-8 overflow-hidden rounded-full border border-[var(--border-color)] bg-white md:block">
              <Image src="/muntasir-logo.png" alt="Logo" fill priority className="object-contain p-1" />
            </div>
            <span className="text-[14px] font-semibold text-[var(--text-primary)]">muntasiralamresti-official</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="rounded-full border border-[var(--border-color)] bg-[var(--bg-secondary)] p-2 text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-tertiary)] hover:text-[var(--text-primary)]"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>

      <div className="mx-auto hidden max-w-[1280px] items-center gap-2 overflow-x-auto px-6 pb-3 md:flex">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={`flex items-center gap-2 rounded-full border px-3 py-2 text-[14px] font-medium transition-all ${
              index === 0
                ? "border-[var(--accent)] bg-[var(--accent-muted)] text-[var(--text-primary)]"
                : "border-transparent text-[var(--text-secondary)] hover:border-[var(--border-color)] hover:bg-[var(--bg-secondary)]"
            }`}
          >
            {item.icon}
            {item.name}
          </a>
        ))}
      </div>

      {open && (
        <div className="absolute w-full border-t border-[var(--border-color)] bg-[var(--bg-primary)] px-4 py-2 shadow-lg md:hidden">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 rounded-md px-3 py-3 text-[14px] font-medium text-[var(--text-secondary)] transition-colors hover:bg-[var(--bg-secondary)] hover:text-[var(--text-primary)]"
            >
              {item.icon}
              {item.name}
            </a>
          ))}
        </div>
      )}
    </nav>
  );
}