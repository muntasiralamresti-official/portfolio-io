"use client";
import { useState } from "react";
import IntroAnimation from "@/components/IntroAnimation";
import WebThreads from "@/components/WebThreads";
import Hero from "@/sections/Hero";
import Currently from "@/sections/Currently";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Contact from "@/sections/Contact";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <main className="relative min-h-screen bg-[#0A0A0A] overflow-hidden">
      {!introComplete && <IntroAnimation onComplete={() => setIntroComplete(true)} />}
      
      <div className={`transition-opacity duration-1000 ${introComplete ? 'opacity-100' : 'opacity-0'}`}>
        {/* The background web threads SVG tied to scroll */}
        <WebThreads />
        
        {/* Main Content Sections */}
        <div className="relative z-10 flex flex-col gap-24 md:gap-32 pb-24">
          <Hero />
          <Currently />
          <Skills />
          <Projects />
          <Experience />
          <Contact />
        </div>
      </div>
    </main>
  );
}
