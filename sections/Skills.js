"use client";

import {
  LazyMotion,
  domAnimation,
  m,
} from "framer-motion";

import {
  FaReact,
  FaWordpress,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiTailwindcss,
  SiJavascript,
  SiGoogleads,
} from "react-icons/si";

const skills = [

  {
    title: "React.js",

    percentage: 90,

    icon: FaReact,

    subtitle: "Interactive UI Library",
  },

  {
    title: "Next.js",

    percentage: 92,

    icon: SiNextdotjs,

    subtitle: "Modern React Framework",
  },

  {
    title: "Tailwind CSS",

    percentage: 95,

    icon: SiTailwindcss,

    subtitle: "Utility First CSS",
  },

  {
    title: "JavaScript",

    percentage: 85,

    icon: SiJavascript,

    subtitle: "Dynamic Web Programming",
  },

  {
    title: "WordPress",

    percentage: 75,

    icon: FaWordpress,

    subtitle: "CMS Website Development",
  },

  {
    title: "UI/UX Design",

    percentage: 75,

    icon: FaFigma,

    subtitle: "Creative Interface Design",
  },

  {
    title: "Digital Marketing",

    percentage: 72,

    icon: SiGoogleads,

    subtitle: "Growth & Branding Strategy",
  },

  {
    title: "Full Stack Learning",

    percentage: 50,

    icon: FaReact,

    subtitle: "Backend Exploration",
  },

];

export default function Skills() {

  return (

    <LazyMotion features={domAnimation}>

      <section
        id="skills"

        className="
          relative

          py-16
          px-6

          overflow-hidden
        "
      >

        {/* Main */}
        <div className="relative z-10 container mx-auto">

          {/* Header */}
          <m.header
            initial={{
              opacity: 0,
              y: 30,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 0.6,
            }}

            className="mb-10 text-center"
          >

            <p className="text-cyan-400 font-mono mb-4">

              {"// Skills"}

            </p>

            <h2
              className="
                text-4xl
                md:text-6xl

                font-black

                leading-tight
              "
            >

              Developer

              <span
                className="
                  bg-gradient-to-r
                  from-cyan-400
                  to-purple-500

                  bg-clip-text
                  text-transparent
                "
              >

                {" "}Power{" "}

              </span>

              Matrix

            </h2>

            <p
              className="
                text-gray-300

                max-w-2xl
                mx-auto

                mt-6

                text-lg
                leading-8
              "
            >

              Combining frontend technologies,
              creative design systems and modern
              digital solutions into immersive web experiences.

            </p>

          </m.header>

          {/* Skills Grid */}
          <div
            className="
              grid
              md:grid-cols-2

              gap-8
            "
          >

            {skills.map((skill, i) => {

              const Icon = skill.icon;

              return (

                <m.article
                  key={i}

                  initial={{
                    opacity: 0,
                    y: 40,
                  }}

                  whileInView={{
                    opacity: 1,
                    y: 0,
                  }}

                  viewport={{
                    once: true,
                  }}

                  transition={{
                    duration: 0.5,
                    delay: i * 0.05,
                  }}

                  whileHover={{
                    y: -4,
                  }}

                  className="
                    group
                    relative

                    overflow-hidden

                    rounded-[32px]

                    border
                    border-white/10

                    bg-white/[0.03]

                    backdrop-blur-sm

                    p-8

                    hover:border-cyan-400/40

                    hover:shadow-[0_0_30px_rgba(34,211,238,0.08)]

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

                      bg-gradient-to-br
                      from-cyan-400/5
                      to-purple-500/5
                    "
                  />

                  {/* Top */}
                  <div
                    className="
                      relative
                      z-10

                      flex
                      items-start
                      justify-between
                    "
                  >

                    {/* Left */}
                    <div className="flex items-center gap-5">

                      {/* Icon */}
                      <div
                        className="
                          relative

                          w-16
                          h-16

                          rounded-2xl

                          border
                          border-white/10

                          bg-white/5

                          flex
                          items-center
                          justify-center

                          text-3xl
                          text-cyan-400
                        "
                      >

                        <Icon />

                      </div>

                      {/* Text */}
                      <div>

                        <h3
                          className="
                            text-2xl
                            font-bold

                            text-white
                          "
                        >

                          {skill.title}

                        </h3>

                        <p
                          className="
                            text-gray-400

                            text-sm

                            font-mono

                            mt-1
                          "
                        >

                          {skill.subtitle}

                        </p>

                      </div>

                    </div>

                    {/* Percentage */}
                    <div className="text-right">

                      <p
                        className="
                          text-cyan-400

                          text-2xl
                          font-black

                          font-mono
                        "
                      >

                        {skill.percentage}%

                      </p>

                      <p
                        className="
                          text-xs
                          text-gray-500

                          font-mono
                        "
                      >

                        POWER

                      </p>

                    </div>

                  </div>

                  {/* Progress */}
                  <div className="relative z-10 mt-8">

                    {/* Bar */}
                    <div
                      className="
                        w-full
                        h-3

                        rounded-full

                        bg-white/5

                        overflow-hidden
                      "
                    >

                      <m.div
                        initial={{
                          width: 0,
                        }}

                        whileInView={{
                          width: `${skill.percentage}%`,
                        }}

                        viewport={{
                          once: true,
                        }}

                        transition={{
                          duration: 1,
                          delay: i * 0.05,
                        }}

                        className="
                          h-full

                          rounded-full

                          bg-gradient-to-r
                          from-cyan-400
                          to-purple-500
                        "
                      />

                    </div>

                    {/* Bottom */}
                    <div
                      className="
                        mt-6

                        flex
                        items-center
                        justify-between
                      "
                    >

                      <p
                        className="
                          text-sm
                          text-gray-400

                          font-mono
                        "
                      >

                        Skill Energy

                      </p>

                      <span
                        className="
                          px-4
                          py-2

                          rounded-2xl

                          border
                          border-white/10

                          bg-white/5

                          text-sm
                          text-white

                          font-medium
                        "
                      >

                        Active

                      </span>

                    </div>

                  </div>

                </m.article>

              );

            })}

          </div>

          {/* Learning Next */}
          <m.section
            initial={{
              opacity: 0,
              y: 50,
            }}

            whileInView={{
              opacity: 1,
              y: 0,
            }}

            viewport={{
              once: true,
            }}

            transition={{
              duration: 0.7,
            }}

            className="
              mt-24

              relative

              overflow-hidden

              rounded-[35px]

              border
              border-purple-500/20

              bg-white/[0.03]

              backdrop-blur-sm

              p-8
              md:p-12
            "
          >

            {/* Glow */}
            <div
              aria-hidden="true"

              className="
                absolute

                -top-20
                right-0

                w-[180px]
                h-[180px]

                bg-purple-500/10

                blur-[80px]
              "
            />

            {/* Header */}
            <div className="relative z-10">

              <p className="text-purple-400 font-mono mb-4">

                {"// Learning Next"}

              </p>

              <h3
                className="
                  text-3xl
                  md:text-5xl

                  font-black
                "
              >

                Full Stack

                <span
                  className="
                    bg-gradient-to-r
                    from-cyan-400
                    to-purple-500

                    bg-clip-text
                    text-transparent
                  "
                >

                  {" "}Journey

                </span>

              </h3>

              <p
                className="
                  text-gray-300

                  mt-6

                  max-w-3xl

                  leading-8
                  text-lg
                "
              >

                Currently exploring backend technologies,
                databases and mobile development to become
                a complete Full Stack Developer.

              </p>

            </div>

            {/* Cards */}
            <div
              className="
                relative
                z-10

                grid
                grid-cols-2
                md:grid-cols-4

                gap-6

                mt-12
              "
            >

              {[
                "Node.js",
                "Express.js",
                "MongoDB",
                "React Native",
              ].map((item, i) => (

                <m.div
                  key={i}

                  whileHover={{
                    y: -4,
                  }}

                  className="
                    group
                    relative

                    overflow-hidden

                    rounded-3xl

                    border
                    border-white/10

                    bg-white/[0.03]

                    backdrop-blur-sm

                    p-8

                    text-center

                    hover:border-purple-400/40

                    hover:shadow-[0_0_20px_rgba(168,85,247,0.10)]

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

                      bg-gradient-to-br
                      from-cyan-400/5
                      to-purple-500/10
                    "
                  />

                  {/* Orb */}
                  <div
                    aria-hidden="true"

                    className="
                      relative
                      z-10

                      w-5
                      h-5

                      rounded-full

                      bg-gradient-to-r
                      from-cyan-400
                      to-purple-500

                      mx-auto
                      mb-5
                    "
                  />

                  <h4
                    className="
                      relative
                      z-10

                      text-lg
                      font-bold
                    "
                  >

                    {item}

                  </h4>

                  <p
                    className="
                      relative
                      z-10

                      text-gray-400

                      text-sm

                      mt-2

                      font-mono
                    "
                  >

                    In Progress

                  </p>

                </m.div>

              ))}

            </div>

          </m.section>

        </div>

      </section>

    </LazyMotion>

  );
}