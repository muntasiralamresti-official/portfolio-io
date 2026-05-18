import Link from "next/link";

// import Image from "next/image";

import { ArrowLeft } from "lucide-react";

import {
  FaGithub,
} from "react-icons/fa";

import { projects } from "@/data/projects";

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

      {/* Glow */}
      <div className="absolute top-0 left-0 w-[350px] h-[350px] bg-cyan-500/10 blur-[140px] rounded-full" />

      <div className="absolute bottom-0 right-0 w-[350px] h-[350px] bg-purple-500/10 blur-[140px] rounded-full" />

      {/* Back Button */}
      <div className="relative z-20 max-w-7xl mx-auto mb-14">

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
      <div className="relative z-10 max-w-7xl mx-auto">

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

            <div
              key={i}

              className="
                group
                relative

                overflow-hidden

                rounded-[30px]

                border
                border-white/10

                bg-white/[0.03]

                backdrop-blur-2xl

                hover:border-cyan-400/40

                hover:-translate-y-2

                hover:shadow-[0_0_60px_rgba(34,211,238,0.12)]

                transition-all
                duration-500
              "
            >

              {/* Image */}
              <div className="relative h-[230px] overflow-hidden">

                <img
                  src={project.image}

                  alt={project.title}

                  

                  className="
                    object-cover

                    group-hover:scale-105

                    transition
                    duration-700
                  "
                />

              </div>

              {/* Content */}
              <div className="p-7">

                <h3 className="text-2xl font-bold mb-4 text-white">

                  {project.title}

                </h3>

                <p className="text-gray-400 leading-7 text-sm">

                  {project.desc}

                </p>

                {/* Tech */}
                <div className="flex flex-wrap gap-3 mt-6">

                  {project.tech.map((tech, index) => (

                    <span
                      key={index}

                      className="
                        px-4
                        py-2

                        rounded-full

                        border
                        border-white/10

                        bg-white/5

                        text-xs
                        font-mono

                        text-cyan-400
                      "
                    >

                      {tech}

                    </span>

                  ))}

                </div>

                {/* Buttons */}
                <div className="flex gap-4 mt-8">

                  <a
                    href={project.live}

                    target="_blank"

                    rel="noopener noreferrer"

                    className="
                      flex-1

                      py-3

                      rounded-2xl

                      bg-cyan-400

                      text-black
                      font-semibold

                      hover:scale-105

                      transition
                      duration-300

                      text-center
                    "
                  >

                    Live Demo

                  </a>

                  <a
                    href={project.github}

                    target="_blank"

                    rel="noopener noreferrer"

                    className="
                      w-14

                      rounded-2xl

                      border
                      border-white/10

                      bg-white/5

                      flex
                      items-center
                      justify-center

                      hover:border-cyan-400/40

                      transition
                      duration-300
                    "
                  >

                    <FaGithub />

                  </a>

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

    </section>
  );
}