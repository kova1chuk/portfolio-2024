"use client";
import React from "react";

interface ExperienceItem {
  title: string;
  company: string;
  duration: string;
  description: string;
}

const experiences: ExperienceItem[] = [
  {
    title: "Full Stack Developer",
    company: "Tech Solutions Inc.",
    duration: "Jan 2020 - Present",
    description:
      "Developed and maintained scalable web applications using React, Node.js, and MongoDB. Collaborated with designers and backend developers to enhance user experience and optimize performance.",
  },
  {
    title: "Frontend Developer",
    company: "Creative Agency",
    duration: "Jun 2017 - Dec 2019",
    description:
      "Designed and implemented responsive UI components using React and TailwindCSS. Improved application accessibility and usability based on user feedback.",
  },
  {
    title: "Junior Developer",
    company: "Startup Hub",
    duration: "Jan 2015 - May 2017",
    description:
      "Built and tested RESTful APIs for internal tools. Assisted in debugging and improving legacy code, increasing efficiency by 15%.",
  },
];

const Experience: React.FC = () => {
  return (
    <section className="bg-gray-100 py-12 px-6 md:px-12">
      <div className="max-w-4xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-6">My Experience</h1>
        <div className="space-y-6">
          {experiences.map((exp, index) => (
            <div
              key={index}
              className="bg-white p-6 shadow-md rounded-lg hover:shadow-lg transition-shadow"
            >
              <h2 className="text-2xl font-semibold">{exp.title}</h2>
              <p className="text-gray-600 italic">{exp.company}</p>
              <p className="text-gray-500 text-sm mb-4">{exp.duration}</p>
              <p className="text-gray-700">{exp.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
