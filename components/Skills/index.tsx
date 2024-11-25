"use client";
import React from "react";

const Skills: React.FC = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "GraphQL",
    "MongoDB",
    "TailwindCSS",
    "Docker",
    "Next.js",
    "Python",
  ];

  return (
    <section id="skills" className="py-12 bg-gray-100">
      <div className="container mx-auto px-6 md:px-12">
        <h2 className="text-4xl font-bold text-center mb-8">My Skills</h2>
        <ul className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="bg-white p-4 rounded-lg shadow hover:shadow-md transition-shadow text-center"
            >
              <span className="text-lg font-medium">{skill}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
};

export default Skills;
