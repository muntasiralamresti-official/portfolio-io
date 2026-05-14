"use client";

import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [position, setPosition] = useState({
    x: 0,
    y: 0,
  });

  useEffect(() => {
    const move = (e) => {
      setPosition({
        x: e.clientX,
        y: e.clientY,
      });
    };

    window.addEventListener("mousemove", move);

    return () =>
      window.removeEventListener("mousemove", move);
  }, []);

  return (
    <div
      className="fixed w-72 h-72 rounded-full pointer-events-none blur-3xl opacity-20 bg-cyan-400 z-0"
      style={{
        left: position.x - 150,
        top: position.y - 150,
      }}
    />
  );
}