"use client";
import Navbar from "@/components/Navbar";
import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Currently from "@/sections/Currently";
import Click2IT from "@/sections/Click2IT";
import Skills from "@/sections/Skills";
import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import ActivityFeed from "@/sections/ActivityFeed";
import Certificates from "@/sections/Certificates";
import Contact from "@/sections/Contact";

export default function Home() {
  return (
    <main className="neo-site">
      <Navbar />
      <Hero />
      <About />
      <Currently />
      <Click2IT />
      <Skills />
      <Projects />
      <Experience />
      <ActivityFeed />
      <Certificates />
      <Contact />
      <footer className="neo-footer">
        <span>© {new Date().getFullYear()} Muntasir Alam Resti</span>
        <span>Built with intent / shipped with care</span>
      </footer>
    </main>
  );
}