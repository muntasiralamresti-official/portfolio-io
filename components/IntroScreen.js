"use client";

import { useEffect, useState } from "react";

export default function IntroScreen() {
  const [show, setShow] = useState(true);
  const [helloState, setHelloState] = useState(0); // 0: hidden, 1: visible, 2: fading out

  useEffect(() => {
    // Phase 1: Show "Hello"
    const t1 = setTimeout(() => {
      setHelloState(1);
    }, 300);

    // Phase 2: Fade out "Hello"
    const t2 = setTimeout(() => {
      setHelloState(2);
    }, 2000);

    // Phase 3: Hide entire intro screen
    const t3 = setTimeout(() => {
      setShow(false);
    }, 2800);

    return () => {
      clearTimeout(t1);
      clearTimeout(t2);
      clearTimeout(t3);
    };
  }, []);

  if (!show) return null;

  return (
    <div className={`fixed inset-0 z-[99999] flex items-center justify-center bg-black transition-opacity duration-700 ${helloState === 2 ? "opacity-0" : "opacity-100"}`}>
      <div 
        className={`text-white text-4xl md:text-6xl font-medium tracking-tight transition-all duration-700 transform 
        ${helloState === 1 ? "opacity-100 scale-100" : "opacity-0 scale-95"}`}
        style={{ fontFamily: "system-ui, -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif" }}
      >
        Hello.
      </div>
    </div>
  );
}
