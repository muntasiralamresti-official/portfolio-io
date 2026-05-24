import Image from "next/image";
import { FaGithub } from "react-icons/fa";

export default function ProjectCard({ project }) {

  return (

    <div
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
      <div
        className="
          relative

          w-full

          aspect-[16/10]

          overflow-hidden
        "
      >

        <Image
          src={project.image}

          alt={project.title}

          fill

          className="
            object-cover

            group-hover:scale-105

            transition
            duration-500
          "
        />

      </div>

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
        <p className="text-gray-400 mb-5 leading-7">

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

          {/* GitHub */}
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

  );
}