import { projects } from "@/data/projects";

import Link from "next/link";

import ProjectCard from "@/components/ProjectCard";

export default function Projects() {

  return (

    <section
      id="projects"

      className="
        pb-20
        pt-10
        px-6
      "
    >

      <div className="container mx-auto">

        {/* Header */}
        <header className="mb-16 text-center">

          <p
            className="
              text-cyan-400
              font-mono

              mb-4
            "
          >

            {"// Projects"}

          </p>

          <h2 className="sr-only">

            Featured Projects

          </h2>

        </header>

        {/* Grid */}
        <div
          className="
            grid
            md:grid-cols-2

            gap-8
          "
        >

          {projects.slice(0, 2).map((project, i) => (

            <ProjectCard
              key={project.title || i}

              project={project}
            />

          ))}

        </div>

      </div>

      {/* View More */}
      <div className="flex justify-center mt-16">

        <Link
          href="/projects"

          aria-label="View More Projects"

          className="
            group
            relative

            overflow-hidden

            px-8
            py-4

            rounded-2xl

            border
            border-white/10

            bg-white/[0.03]

            backdrop-blur-sm

            hover:border-cyan-400/40

            hover:shadow-[0_0_20px_rgba(34,211,238,0.10)]

            transition-all
            duration-300
          "
        >

          {/* Glow */}
          <div
            aria-hidden="true"

            className="
              absolute
              inset-0

              opacity-0

              group-hover:opacity-100

              transition
              duration-300

              bg-gradient-to-r
              from-cyan-400/5
              to-purple-500/5
            "
          />

          {/* Text */}
          <span
            className="
              relative
              z-10

              flex
              items-center
              gap-3

              text-white
              font-semibold
              tracking-wide
            "
          >

            View More Projects

            <span
              aria-hidden="true"

              className="
                text-cyan-400

                group-hover:translate-x-1

                transition
                duration-300
              "
            >

              →

            </span>

          </span>

        </Link>

      </div>

    </section>
  );
}