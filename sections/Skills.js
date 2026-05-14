"use client";

import { skills } from "@/data/skills";

export default function Skills() {
  return (
    <section id="skills" className="py-28 px-6">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold gradient-text mb-12">
          Skills
        </h2>

        <div className="grid md:grid-cols-2 gap-8">
          {skills.map((skill, i) => (
            <div
              key={i}
              className="glass p-6 rounded-2xl hover:scale-105 transition"
            >
              <div className="flex justify-between mb-4">
                <h3>{skill.title}</h3>
                <span>{skill.percentage}%</span>
              </div>

              <div className="w-full h-3 bg-gray-700 rounded-full">
                <div
                  className="h-3 rounded-full bg-gradient-to-r from-cyan-400 to-purple-500"
                  style={{ width: `${skill.percentage}%` }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}