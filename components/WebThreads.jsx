"use client";
import { motion, useScroll, useTransform } from "framer-motion";

export default function WebThreads() {
  const { scrollYProgress } = useScroll();

  // We'll draw a few web threads. The pathLength will be tied to scroll progress.
  // The SVG itself covers the whole viewport, fixed behind/in front of content.
  // For a continuous thread down the page, we can animate an absolute SVG that stretches the full document height.
  // Since we don't know the full document height easily, a fixed SVG that draws paths dynamically is better.
  
  // As user scrolls down, path length goes from 0 to 1.
  const pathLength = useTransform(scrollYProgress, [0, 1], [0, 1]);

  return (
    <div className="fixed inset-0 pointer-events-none z-0">
      <svg className="w-full h-full" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Thread 1: Top center to bottom left */}
        <motion.path
          d="M 50,30 Q 30,50 10,100"
          fill="transparent"
          stroke="#E62429"
          strokeWidth="0.2"
          strokeOpacity="0.6"
          style={{ pathLength }}
        />
        {/* Thread 2: Top center straight down */}
        <motion.path
          d="M 50,30 Q 55,60 50,100"
          fill="transparent"
          stroke="#E62429"
          strokeWidth="0.15"
          strokeOpacity="0.4"
          style={{ pathLength }}
        />
        {/* Thread 3: Top center to bottom right */}
        <motion.path
          d="M 50,30 Q 70,70 90,100"
          fill="transparent"
          stroke="#E62429"
          strokeWidth="0.2"
          strokeOpacity="0.5"
          style={{ pathLength }}
        />
        
        {/* Additional side webs */}
        <motion.path
          d="M 0,40 Q 25,60 50,100"
          fill="transparent"
          stroke="#E62429"
          strokeWidth="0.1"
          strokeOpacity="0.3"
          style={{ pathLength: useTransform(scrollYProgress, [0.2, 1], [0, 1]) }}
        />
        <motion.path
          d="M 100,50 Q 75,70 50,100"
          fill="transparent"
          stroke="#E62429"
          strokeWidth="0.1"
          strokeOpacity="0.3"
          style={{ pathLength: useTransform(scrollYProgress, [0.3, 1], [0, 1]) }}
        />
      </svg>
    </div>
  );
}
