"use client";

import { useEffect, useRef } from "react";

export function useScrollReveal(threshold = 0.1) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    if (!element) return;

    // Apply the initial hidden state
    element.classList.add("reveal-hidden");

    const observer = new IntersectionObserver(
      (entries, obs) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            // Element has entered viewport
            entry.target.classList.remove("reveal-hidden");
            entry.target.classList.add("reveal-visible");
            
            // Stop observing to save performance
            obs.unobserve(entry.target);
          }
        });
      },
      {
        root: null,
        rootMargin: "0px",
        threshold,
      }
    );

    observer.observe(element);

    return () => {
      if (element) {
        observer.unobserve(element);
      }
    };
  }, [threshold]);

  return ref;
}
