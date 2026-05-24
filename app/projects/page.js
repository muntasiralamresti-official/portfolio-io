import Link from "next/link";

import { ArrowLeft } from "lucide-react";

import { projects } from "@/data/projects";

import ProjectCard from "@/components/ProjectCard";

export default function ProjectsPage() {

  return (

    <section
      className="
        relative
        min-h-screen
        overflow-hidden

        py-16
        px-6
      "
    >

      {/* Glow Effects */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-cyan-500/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-purple-500/10 blur-[140px] rounded-full" />

      {/* Back Button */}
      <div className="relative z-20 container mx-auto mb-14">

        <Link
          href="/"

          className="
            group
            inline-flex
            items-center
            gap-3

            px-6
            py-3

            rounded-2xl

            border
            border-white/10

            bg-white/[0.03]

            backdrop-blur-xl

            hover:border-cyan-400/40

            hover:shadow-[0_0_30px_rgba(34,211,238,0.12)]

            transition-all
            duration-500
          "
        >

          <ArrowLeft
            size={18}

            className="
              text-cyan-400

              group-hover:-translate-x-1

              transition
              duration-300
            "
          />

          <span className="font-medium text-white">

            Back To Home

          </span>

        </Link>

      </div>

      {/* Main */}
      <div className="relative z-10 container mx-auto">

        {/* Header */}
        <div className="text-center mb-20">

          <p className="text-cyan-400 font-mono mb-4">

            {"// All Projects"}

          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">

            Frontend

            <span className="gradient-text">

              {" "} & {" "}

            </span>

            UI/UX Lab

          </h1>

          <p
            className="
              text-gray-400

              max-w-3xl
              mx-auto

              mt-6

              text-lg
              leading-8
            "
          >

            A collection of modern frontend systems,
            cinematic interfaces and futuristic web
            experiences crafted using React, Next.js
            and Tailwind CSS.

          </p>

        </div>

        {/* Grid */}
        <div
          className="
            grid
            md:grid-cols-2
            lg:grid-cols-3

            gap-8
          "
        >

          {projects.map((project, i) => (

            <ProjectCard
              key={i}
              project={project}
            />

          ))}

        </div>

      </div>

    </section>
  );
}