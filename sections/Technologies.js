"use client";

import {
  FaReact,
  FaNodeJs,
  FaGithub,
  FaFigma,
} from "react-icons/fa";

import {
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  SiFirebase,
  SiMongodb,
} from "react-icons/si";

const tech = [
  FaReact,
  SiNextdotjs,
  SiJavascript,
  SiTailwindcss,
  FaNodeJs,
  SiMongodb,
  SiFirebase,
  FaGithub,
  FaFigma,
];

export default function Technologies() {
  return (
    <section className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold gradient-text mb-12">
          Technologies
        </h2>

        <div className="grid grid-cols-2 md:grid-cols-5 gap-6">
          {tech.map((Icon, i) => (
            <div
              key={i}
              className="glass rounded-2xl p-10 flex justify-center items-center hover:scale-110 transition"
            >
              <Icon size={50} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}