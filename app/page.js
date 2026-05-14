import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import Hero from "@/sections/Hero";
import About from "@/sections/About";
import Skills from "@/sections/Skills";
import Technologies from "@/sections/Technologies";
import Projects from "@/sections/Projects";
import Certificates from "@/sections/Certificates";
import Contact from "@/sections/Contact";

import CursorGlow from "@/components/CursorGlow";
import FloatingParticles from "@/components/FloatingParticles";

export default function Home() {
  
  return (
    <main className="bg-[#050816] text-white overflow-hidden">
      <CursorGlow />
      <FloatingParticles />

      <Navbar />

      <Hero />
      <About />
      <Skills />
      <Technologies />
      <Projects />
      <Certificates />
      <Contact />

      <Footer />
    </main>
  );
}