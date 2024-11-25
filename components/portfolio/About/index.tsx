"use client";
import React from "react";

const About = () => {
  const skills = [
    "JavaScript",
    "TypeScript",
    "React",
    "Node.js",
    "Next.js",
    "GraphQL",
    "MongoDB",
    "Docker",
  ];

  return (
    <section className="bg-gray-100 py-12 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">About Me</h1>
        <p className="text-lg text-gray-700 leading-relaxed">
          I am a <span className="font-semibold">Full Stack Developer</span>{" "}
          with over 5 years of experience in web development. I have worked with
          a wide range of technologies to build scalable and efficient web
          applications from scratch. I am passionate about learning new
          technologies and constantly strive to improve my skills and stay
          up-to-date with industry trends.
        </p>
        <div className="mt-8">
          <h2 className="text-2xl font-semibold mb-4">My Skills</h2>
          <ul className="grid grid-cols-2 md:grid-cols-3 gap-4 text-gray-800">
            {skills.map((skill, index) => (
              <li
                key={index}
                className="bg-white p-4 shadow-md rounded-lg text-center hover:shadow-lg transition-shadow"
              >
                {skill}
              </li>
            ))}
          </ul>
        </div>
        <div className="mt-12 text-center">
          <a
            href="/resume.pdf"
            download
            className="inline-block bg-blue-600 text-white px-6 py-3 rounded-lg shadow-md hover:bg-blue-700 transition"
          >
            Download Resume
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
