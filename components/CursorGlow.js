"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {

  const [position, setPosition] = useState({
    x: -200,
    y: -200,
  });

  useEffect(() => {

    const move = (e) => {

      requestAnimationFrame(() => {

        setPosition({
          x: e.clientX,
          y: e.clientY,
        });

      });

    };

    window.addEventListener("mousemove", move);

    return () => {
      window.removeEventListener("mousemove", move);
    };

  }, []);

  return (
    <div
      className="
        fixed
        w-72
        h-72
        rounded-full
        pointer-events-none
        blur-3xl
        opacity-20
        bg-cyan-400
        z-0
        transition-transform
        duration-150
      "
      style={{
        transform: `translate(${position.x - 150}px, ${position.y - 150}px)`,
      }}
    />
  );
}