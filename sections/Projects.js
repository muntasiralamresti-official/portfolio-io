"use client";

import { projects } from "@/data/projects";
import Link from "next/link";

import {
  FaGithub,
} from "react-icons/fa";

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

      <div className="max-w-7xl mx-auto">

        {/* Heading */}
        <p
          className="
            text-cyan-400
            font-mono

            mb-15

            flex
            justify-center
          "
        >

          {"// Projects"}

        </p>

        {/* Grid */}
        <div
          className="
            grid
            md:grid-cols-2

            gap-10
          "
        >

          {projects.slice(0, 2).map((project, i) => (

            <div
              key={i}

              className="
                glass

                rounded-3xl

                overflow-hidden

                hover:scale-[1.02]

                transition

                flex
                flex-col
              "
            >

              {/* Image */}
              <img
                src={project.image}

                alt={project.title}

                className="
                  w-full
                  h-100

                  object-cover
                "
              />

              {/* Content */}
              <div
                className="
                  p-8

                  flex
                  flex-col

                  flex-1
                "
              >

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4">

                  {project.title}

                </h3>

                {/* Description */}
                <p className="text-gray-400 mb-5">

                  {project.desc}

                </p>

                {/* Tech */}
                <div
                  className="
                    flex
                    gap-3
                    flex-wrap

                    mb-6
                  "
                >

                  {project.tech.map((item, idx) => (

                    <span
                      key={idx}

                      className="
                        px-3
                        py-1

                        bg-cyan-500/10

                        border
                        border-cyan-400

                        rounded-full

                        text-sm
                      "
                    >

                      {item}

                    </span>

                  ))}

                </div>

                {/* Push Bottom */}
                <div className="flex-1" />

                {/* Buttons */}
                <div className="flex items-center gap-4">

                  {/* Live Demo */}
                  {project.live && (

                    <a
                      href={project.live}

                      target="_blank"

                      rel="noopener noreferrer"

                      className="
                        flex-1

                        px-5
                        py-3

                        bg-cyan-500

                        rounded-xl

                        text-black
                        text-center
                        font-semibold

                        hover:scale-105

                        transition
                      "
                    >

                      Live Demo

                    </a>

                  )}

                  {/* GitHub Icon */}
                  {project.github &&
                    project.github !== "#" && (

                    <a
                      href={project.github}

                      target="_blank"

                      rel="noopener noreferrer"

                      className="
                        w-12
                        h-12

                        rounded-xl

                        border
                        border-cyan-400

                        flex
                        items-center
                        justify-center

                        hover:bg-cyan-400/10
                        hover:scale-105

                        transition
                      "
                    >

                      <FaGithub size={18} />

                    </a>

                  )}

                </div>

              </div>

            </div>

          ))}

        </div>

      </div>

      {/* View More Button */}
      <div className="flex justify-center mt-16">

        <Link
          href="/projects"

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

            backdrop-blur-xl

            hover:border-cyan-400/40

            hover:shadow-[0_0_40px_rgba(34,211,238,0.15)]

            transition-all
            duration-500
          "
        >

          {/* Glow */}
          <div
            className="
              absolute
              inset-0

              opacity-0

              group-hover:opacity-100

              transition
              duration-700

              bg-gradient-to-r
              from-cyan-400/10
              to-purple-500/10
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