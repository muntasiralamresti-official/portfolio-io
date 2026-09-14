"use client";
import { useState } from "react";
import IntroAnimation from "@/components/IntroAnimation";
import WebThreads from "@/components/WebThreads";
import WebCursor from "@/components/WebCursor";
import WebLauncher from "@/components/WebLauncher";
import WebSwing from "@/components/WebSwing";
import CommandPalette from "@/components/CommandPalette";
import ScrollProgress from "@/components/ScrollProgress";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Currently from "@/sections/Currently";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import ActivityFeed from "@/sections/ActivityFeed";
import Certificates from "@/sections/Certificates";
import Contact from "@/sections/Contact";

export default function Home() {
  const [introComplete, setIntroComplete] = useState(false);

  return (
    <main className="relative min-h-screen overflow-hidden bg-[#050507] text-white selection:bg-[#E62429] selection:text-white">
      {!introComplete && <IntroAnimation onComplete={() => setIntroComplete(true)} />}
      <div className={`transition-opacity duration-1000 ${introComplete ? "opacity-100" : "opacity-0"}`}>
        <WebThreads />
        <WebSwing />
        <WebCursor />
        <WebLauncher />
        <ScrollProgress />
        <CommandPalette />
        <div className="relative z-10 flex flex-col gap-16 pb-20 md:gap-24">
          <Hero />
          <About />
          <Currently />
          <Skills />
          <Projects />
          <Experience />
          <ActivityFeed />
          <Certificates />
          <Contact />
        </div>
      </div>
    </main>
  );
}
