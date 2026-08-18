import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";
// import Hero from "@/sections/Hero";
import SectionDivider from "@/components/SectionDivider";

import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Skills from "@/sections/Skills";
import Contact from "@/sections/Contact";

import Readme from "@/sections/Readme";
import ActivityFeed from "@/sections/ActivityFeed";

export default function Home() {
  return (
    <main className="relative min-h-screen w-full bg-[var(--bg-primary)]">
      <Navbar />

      {/* <Hero /> */}

      <div className="container mx-auto max-w-[1280px] px-4 pb-12 pt-6 md:px-6">
        <div className="flex flex-col gap-8 lg:flex-row">
          <Sidebar />

          <div className="min-w-0 flex-1">
            <Readme />

            {/* Spiderman "Cooking Projects" Alert */}
            <div className="mb-10 mt-6 p-4 rounded-xl border border-red-500/30 bg-red-950/20 shadow-[0_0_20px_rgba(226,54,54,0.1)] flex flex-col sm:flex-row items-center gap-4 reveal-hidden">
              <div className="relative flex-shrink-0 w-12 h-12 flex items-center justify-center bg-red-500/10 rounded-full border border-red-500/50">
                <div className="absolute inset-0 rounded-full animate-ping bg-red-500/20" style={{ animationDuration: '2s' }}></div>
                <span className="text-2xl">🕸️</span>
              </div>
              <div className="flex-1 text-center sm:text-left">
                <h3 className="text-red-400 font-bold tracking-wide uppercase text-sm mb-1">Spider-Sense Tingling!</h3>
                <p className="text-gray-300 text-sm">I'm currently swinging through the web and cooking up <strong className="text-white">2 new secret projects</strong>. Stay tuned!</p>
              </div>
            </div>

            <SectionDivider label="Projects" />
            <div className="mb-10 pt-2">
              <Projects />
            </div>

            <SectionDivider label="Updates" />
            <div className="mb-10 pt-2">
              <ActivityFeed />
            </div>

            <SectionDivider label="Skills" />
            <div className="mb-10 pt-2">
              <Skills />
            </div>

            <SectionDivider label="Experience" />
            <div className="mb-10 pt-2">
              <Experience />
            </div>

            <SectionDivider label="Contact" />
            <div className="mb-10 pt-2">
              <Contact />
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
