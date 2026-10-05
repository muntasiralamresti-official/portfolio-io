"use client";
import About from "@/sections/About";
import Currently from "@/sections/Currently";
import Click2IT from "@/sections/Click2IT";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import ActivityFeed from "@/sections/ActivityFeed";
import Certificates from "@/sections/Certificates";
import Contact from "@/sections/Contact";
import Hero from "@/sections/Hero";

export default function Home() {
  return (
    <main className="space-app min-h-screen overflow-hidden text-white selection:bg-cyan-300 selection:text-slate-950">
      <div className="space-stars" />
      <div className="space-nebula space-nebula-a" />
      <div className="space-nebula space-nebula-b" />
      <div className="relative z-10">
        <Hero />
        <div className="space-shell">
          <About />
          <Currently />
          <Click2IT />
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