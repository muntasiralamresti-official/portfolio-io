"use client";

import { useEffect, useRef } from "react";

export default function WebCursor() {
  const cursorRef = useRef(null);
  const dotRef = useRef(null);
  const frameRef = useRef(0);
  const target = useRef({ x: 0, y: 0 });
  const current = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const media = window.matchMedia("(pointer: fine)");
    if (!media.matches) return undefined;

    const move = (event) => {
      target.current = { x: event.clientX, y: event.clientY };
    };

    const hover = (event) => {
      const interactive = event.target.closest("a, button, [data-cursor]");
      document.body.classList.toggle("cursor-hover", Boolean(interactive));
    };

    const render = () => {
      current.current.x += (target.current.x - current.current.x) * 0.16;
      current.current.y += (target.current.y - current.current.y) * 0.16;
      const { x, y } = current.current;
      if (cursorRef.current) cursorRef.current.style.transform = `translate3d(${x}px, ${y}px, 0)`;
      if (dotRef.current) dotRef.current.style.transform = `translate3d(${target.current.x}px, ${target.current.y}px, 0)`;
      frameRef.current = requestAnimationFrame(render);
    };

    window.addEventListener("pointermove", move, { passive: true });
    document.addEventListener("pointerover", hover, { passive: true });
    frameRef.current = requestAnimationFrame(render);

    return () => {
      window.removeEventListener("pointermove", move);
      document.removeEventListener("pointerover", hover);
      document.body.classList.remove("cursor-hover");
      cancelAnimationFrame(frameRef.current);
    };
  }, []);

  return (
    <>
      <div ref={cursorRef} className="web-cursor" aria-hidden="true">
        <span className="web-cursor-ring" />
        <span className="web-cursor-label">SPIDER SENSE</span>
      </div>
      <div ref={dotRef} className="web-cursor-dot" aria-hidden="true" />
    </>
  );
}
