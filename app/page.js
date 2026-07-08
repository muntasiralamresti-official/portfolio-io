import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Sidebar from "@/components/Sidebar";

import Projects from "@/sections/Projects";
import Experience from "@/sections/Experience";
import Skills from "@/sections/Skills";
import Contact from "@/sections/Contact";

import Readme from "@/sections/Readme";
import ContributionGraph from "@/components/ContributionGraph";
import TechStack from "@/sections/TechStack";
import ActivityFeed from "@/sections/ActivityFeed";

export default function Home() {
  return (
    <main className="relative w-full min-h-screen bg-[var(--bg-primary)]">
      
      {/* Top Navbar */}
      <Navbar />

      <div className="container mx-auto px-4 md:px-6 pt-6 pb-12 max-w-[1280px]">
        
        {/* Responsive Grid Layout */}
        <div className="flex flex-col lg:flex-row gap-8">
          
          {/* Left Sidebar (Sticky on Desktop) */}
          <Sidebar />

          {/* Right Main Content Stream */}
          <div className="flex-1 min-w-0">
            
            <Readme />

            <div className="mb-8 border-t border-[var(--border-color)] pt-6">
              <ContributionGraph />
            </div>

            <div className="mb-10 border-t border-[var(--border-color)] pt-6">
              <Projects />
            </div>
            
            <div className="mb-10 border-t border-[var(--border-color)] pt-6">
              <ActivityFeed />
            </div>
            
            <div className="mb-10 border-t border-[var(--border-color)] pt-6">
              <TechStack />
            </div>

            <div className="mb-10 border-t border-[var(--border-color)] pt-6">
              <Skills />
            </div>

            <div className="mb-10 border-t border-[var(--border-color)] pt-6">
              <Experience />
            </div>

            <div className="mb-10 border-t border-[var(--border-color)] pt-6">
              <Contact />
            </div>
            
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}