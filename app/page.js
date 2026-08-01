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
import ContributionGraph from "@/components/ContributionGraph";
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

            <SectionDivider label="Activity" />
            <div className="mb-8 pt-2">
              <ContributionGraph />
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