"use client";

import { useEffect, useState, useCallback, useRef } from "react";

const KONAMI = [
  "arrowup", "arrowup",
  "arrowdown", "arrowdown",
  "arrowleft", "arrowright",
  "arrowleft", "arrowright",
  "b", "a"
];

const MATRIX_CHARS = "アイウエオカキクケコサシスセソタチツテトナニヌネノハヒフヘホ01";

export default function KonamiEaster() {
  const [active, setActive] = useState(false);
  const [progress, setProgress] = useState(0);
  const [cols, setCols] = useState([]);
  const sequenceRef = useRef([]);

  /* ── Key listener (fix: case-insensitive matching) ── */
  useEffect(() => {
    const onKey = (e) => {
      const key = e.key.toLowerCase();
      sequenceRef.current.push(key);
      if (sequenceRef.current.length > KONAMI.length) {
        sequenceRef.current.shift();
      }

      const matched = KONAMI.every(
        (k, i) =>
          sequenceRef.current[sequenceRef.current.length - KONAMI.length + i] === k
      );

      if (matched) {
        setActive(true);
        sequenceRef.current = [];
      }
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  /* ── Build matrix rain columns + body scroll lock ── */
  useEffect(() => {
    if (!active) return;

    // fix: lock background scroll while overlay is open
    const originalOverflow = document.body.style.overflow;
    document.body.style.overflow = "hidden";

    // fix: respect prefers-reduced-motion — skip heavy rain animation
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!prefersReducedMotion) {
      const count = Math.floor(window.innerWidth / 18);
      setCols(
        Array.from({ length: count }, (_, i) => ({
          id: i,
          delay: Math.random() * 2,
          duration: 1.5 + Math.random() * 3,
          chars: Array.from({ length: 20 }, () =>
            MATRIX_CHARS[Math.floor(Math.random() * MATRIX_CHARS.length)]
          ).join(""),
          left: i * 18,
        }))
      );
    }

    /* progress bar */
    let p = 0;
    const iv = setInterval(() => {
      p += 1;
      setProgress(p);
      if (p >= 100) clearInterval(iv);
    }, 40);

    return () => {
      clearInterval(iv);
      document.body.style.overflow = originalOverflow;
    };
  }, [active]);

  /* ── Dismiss ── */
  const dismiss = useCallback(() => {
    setActive(false);
    setProgress(0);
    setCols([]);
  }, []);

  useEffect(() => {
    if (!active) return;
    const onEsc = (e) => {
      if (e.key === "Escape") dismiss();
    };
    window.addEventListener("keydown", onEsc);
    return () => window.removeEventListener("keydown", onEsc);
  }, [active, dismiss]);

  if (!active) return null;

  return (
    <div
      role="dialog"
      aria-modal="true"
      aria-label="Konami code easter egg activated"
      className="fixed inset-0 z-[9999] bg-black flex flex-col items-center justify-center overflow-hidden cursor-pointer"
      onClick={dismiss}
    >
      {/* Matrix Rain */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none select-none">
        {cols.map((col) => (
          <div
            key={col.id}
            className="absolute top-0 text-green-400 text-[14px] font-mono leading-tight opacity-70"
            style={{
              left: col.left,
              animation: `matrixFall ${col.duration}s ${col.delay}s linear infinite`,
              writingMode: "vertical-rl",
              letterSpacing: "2px",
            }}
          >
            {col.chars}
          </div>
        ))}
      </div>

      {/* Terminal Card */}
      <div
        className="relative z-10 w-full max-w-[560px] mx-4 rounded-lg border border-green-500 bg-black/90 shadow-[0_0_60px_rgba(0,255,70,0.25)] overflow-hidden"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Title bar */}
        <div className="flex items-center gap-2 px-4 py-2 border-b border-green-900 bg-green-950/60">
          <span className="w-3 h-3 rounded-full bg-red-500"></span>
          <span className="w-3 h-3 rounded-full bg-yellow-400"></span>
          <span className="w-3 h-3 rounded-full bg-green-400"></span>
          <span className="ml-3 text-green-400 font-mono text-[12px]">bash — muntasir@portfolio ~ </span>
        </div>

        {/* Body */}
        <div className="p-6 font-mono text-green-400 text-[14px] space-y-2">
          <p><span className="text-green-600">$</span> sudo unlock --secret-mode</p>
          <p className="text-green-300">Password accepted. Welcome, hacker.</p>
          <br />
          <p className="text-white text-[18px] font-bold">
            🎮 KONAMI CODE ACTIVATED
          </p>
          <br />
          <p>Name    : <span className="text-green-300">Muntasir Alam Resti</span></p>
          <p>Role    : <span className="text-green-300">Frontend Developer</span></p>
          <p>Status  : <span className="text-green-300 animate-pulse">● ONLINE</span></p>
          <p>Stack   : <span className="text-green-300">React · Next.js · Tailwind</span></p>
          <p>Level   : <span className="text-yellow-400">★★★★★  Senior Dev</span></p>
          <br />

          {/* Progress bar */}
          <p>Unlocking achievements...</p>
          <div className="w-full h-2 bg-green-950 rounded-full overflow-hidden mt-1">
            <div
              className="h-full bg-green-400 rounded-full transition-all"
              style={{ width: `${progress}%` }}
            />
          </div>
          <p className="text-[12px] text-green-600">{progress}% — {progress < 100 ? "Loading..." : "Complete ✓"}</p>

          <br />
          <p className="text-green-600 text-[12px]">Press <kbd className="border border-green-600 px-1 rounded">ESC</kbd> or click anywhere to exit.</p>
        </div>
      </div>

      {/* fix: styled-jsx used instead of plain <style>, prevents duplicate tag injection on re-activation */}
      <style jsx global>{`
        @keyframes matrixFall {
          0%   { transform: translateY(-100%); opacity: 1; }
          80%  { opacity: 0.7; }
          100% { transform: translateY(100vh); opacity: 0; }
        }
      `}</style>
    </div>
  );
}