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

  // When on homepage, use bare anchors. On any other page, use full path so
  // the browser navigates back to the homepage and then scrolls to the section.
  const base = pathname === "/" ? "" : "/";

  const navItems = [
    { name: "Overview",   href: `${base}#`,          icon: <User size={16} /> },
    { name: "Projects",   href: `${base}#projects`,  icon: <BookOpen size={16} /> },
    { name: "Skills",     href: `${base}#skills`,    icon: <Star size={16} /> },
    { name: "Experience", href: `${base}#experience`,icon: <Briefcase size={16} /> },
    { name: "Contact",    href: `${base}#contact`,   icon: <Mail size={16} /> },
  ];

  return (
    <nav className="sticky top-0 w-full z-50 bg-[var(--bg-secondary)] border-b border-[var(--border-color)]">
      {/* Top Banner Area (Optional, mimics GitHub global nav bar if needed, but we'll merge it) */}
      <div className="px-4 md:px-6 h-[60px] flex items-center justify-between">
        
        {/* LEFT */}
        <div className="flex items-center gap-3">
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-[var(--text-secondary)] hover:text-[var(--text-primary)] transition-colors p-1"
          >
            {open ? <X size={20} /> : <Menu size={20} />}
          </button>
          
          <div className="flex items-center gap-2">
            <div className="relative w-8 h-8 rounded-full overflow-hidden border border-[var(--border-color)] bg-white hidden md:block">
              <Image
                src="/muntasir-logo.png"
                alt="Logo"
                fill
                priority
                className="object-contain p-1"
              />
            </div>
            <span className="font-semibold text-[14px] text-[var(--text-primary)]">
              muntasiralamresti-official
            </span>
          </div>
        </div>

        {/* RIGHT - ACTIONS */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleTheme}
            className="p-1.5 rounded-md border border-[var(--border-color)] text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-tertiary)] transition-colors"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? <Sun size={16} /> : <Moon size={16} />}
          </button>
        </div>
      </div>

      {/* TABS MENU (Desktop) */}
      <div className="hidden md:flex px-6 items-center gap-2 overflow-x-auto mt-2">
        {navItems.map((item, index) => (
          <a
            key={index}
            href={item.href}
            className={`flex items-center gap-2 px-3 py-2 text-[14px] font-medium transition-colors border-b-2 ${
              index === 0 
                ? "border-[#fd8c73] text-[var(--text-primary)] font-semibold" 
                : "border-transparent text-[var(--text-secondary)] hover:bg-[var(--bg-tertiary)] hover:rounded-t-md"
            }`}
          >
            {item.icon}
            {item.name}
            {index === 1 && (
              <span className="ml-1 inline-flex items-center justify-center bg-[var(--bg-tertiary)] border border-[var(--border-color)] rounded-full px-2 py-0.5 text-[12px] font-medium leading-none">
                4
              </span>
            )}
          </a>
        ))}
      </div>

      {/* MOBILE MENU */}
      {open && (
        <div className="md:hidden border-t border-[var(--border-color)] bg-[var(--bg-primary)] px-4 py-2 shadow-lg absolute w-full">
          {navItems.map((item, index) => (
            <a
              key={index}
              href={item.href}
              onClick={() => setOpen(false)}
              className="flex items-center gap-3 px-3 py-3 text-[14px] font-medium text-[var(--text-secondary)] hover:text-[var(--text-primary)] hover:bg-[var(--bg-secondary)] rounded-md transition-colors"
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