"use client";

import Link from "next/link";

import {
  ArrowLeft,
  ExternalLink,
} from "lucide-react";

const certificates = [

  {
    title: "Digital Marketing Level 1 & 2",

    desc:
      "Professional training focused on social media marketing, branding strategies and audience engagement.",

    image: "/de.jpeg",

    certificate: "/de.jpeg",

    issuer: "Professional Training",

    year: "2024",
  },

  {
    title: "UI/UX Design Using Figma",

    desc:
      "Creative UI/UX design learning focused on modern interfaces, layouts and user experience design.",

    image: "/ui.jpeg",

    certificate: "/ui.jpeg",

    issuer: "Design Learning",

    year: "2025",
  },

];

export default function CertificatesPage() {

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


      {/* Main */}
      <div className="relative z-10 max-w-7xl mx-auto">

        {/* Header */}
        <div className="text-center mb-20">

          <p className="text-cyan-400 font-mono mb-4">

            {"// Certificates"}

          </p>

          <h1 className="text-5xl md:text-7xl font-black leading-tight">

            Learning &
            <span className="gradient-text">

              {" "}Achievements

            </span>

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

            A collection of certifications and
            creative learning milestones reflecting
            my journey in digital marketing and
            UI/UX design.

          </p>

        </div>

        {/* Grid */}
        <div
          className="
            grid
            md:grid-cols-2

            gap-8
          "
        >

          {certificates.map((item, index) => (

            <div
              key={index}

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
              <div className="relative h-[260px] overflow-hidden">

                <img
                  src={item.image}

                  alt={item.title}

                  className="
                    w-full
                    h-full

                    object-cover

                    group-hover:scale-105

                    transition
                    duration-700
                  "
                />

              </div>

              {/* Content */}
              <div className="p-8">

                {/* Top */}
                <div className="flex items-center justify-between mb-5">

                  <span
                    className="
                      px-4
                      py-2

                      rounded-full

                      border
                      border-cyan-400/30

                      bg-cyan-400/10

                      text-cyan-400

                      text-xs
                      font-mono
                    "
                  >

                    {item.issuer}

                  </span>

                  <span className="text-gray-500 text-sm">

                    {item.year}

                  </span>

                </div>

                {/* Title */}
                <h3 className="text-2xl font-bold mb-4 text-white">

                  {item.title}

                </h3>

                {/* Desc */}
                <p className="text-gray-400 leading-8">

                  {item.desc}

                </p>

                {/* Bottom */}
                <div
                  className="
                    mt-8

                    flex
                    items-center
                    justify-between
                  "
                >

                  <div
                    className="
                      h-[1px]
                      flex-1

                      bg-gradient-to-r
                      from-cyan-400/40
                      via-purple-500/40
                      to-transparent
                    "
                  />

                  {/* View Certificate */}
                  <a
                    href={item.certificate}

                    target="_blank"

                    rel="noopener noreferrer"

                    className="
                      ml-5

                      w-12
                      h-12

                      rounded-2xl

                      border
                      border-white/10

                      bg-white/5

                      flex
                      items-center
                      justify-center

                      text-cyan-400

                      hover:border-cyan-400/40
                      hover:bg-cyan-400/10
                      hover:scale-105

                      transition-all
                      duration-300
                    "
                  >

                    <ExternalLink size={18} />

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