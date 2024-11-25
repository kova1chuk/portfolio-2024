"use client";
import React from "react";

interface Project {
  category: string;
  title: string;
  description: string;
  image: string;
  technologies: string[];
  link: string;
}

const projects: Project[] = [
  // Frontend Projects
  {
    category: "Frontend",
    title: "Portfolio Website",
    description:
      "A personal portfolio built with React, Next.js, and TailwindCSS.",
    image: "file.svg", // Replace with your image path
    technologies: ["React", "Next.js", "TailwindCSS"],
    link: "https://yourportfolio.com",
  },
  {
    category: "Frontend",
    title: "Product Landing Page",
    description:
      "A visually stunning landing page for a product with smooth animations.",
    image: "/landing-page.png", // Replace with your image path
    technologies: ["React", "Next.js", "Framer Motion"],
    link: "https://github.com/yourname/landing-page",
  },
  {
    category: "Frontend",
    title: "Meme Generator",
    description: "An interactive tool for creating and customizing memes.",
    image: "/meme-generator.png", // Replace with your image path
    technologies: ["React", "Canvas API", "TailwindCSS"],
    link: "https://github.com/yourname/meme-generator",
  },

  // Backend Projects
  {
    category: "Backend",
    title: "Task Management API",
    description:
      "A RESTful API for managing tasks with full CRUD functionality.",
    image: "/task-api.png", // Replace with your image path
    technologies: ["Node.js", "Express", "MongoDB", "JWT"],
    link: "https://github.com/yourname/task-api",
  },
  {
    category: "Backend",
    title: "Real-Time Chat Application",
    description:
      "A real-time chat app with WebSocket for instant communication.",
    image: "/chat-app.png", // Replace with your image path
    technologies: ["Node.js", "WebSocket", "MongoDB"],
    link: "https://github.com/yourname/chat-app",
  },
  {
    category: "Backend",
    title: "Blog API",
    description:
      "A backend API for a blogging platform with user authentication.",
    image: "/blog-api.png", // Replace with your image path
    technologies: ["Node.js", "Prisma", "PostgreSQL"],
    link: "https://github.com/yourname/blog-api",
  },

  // Fullstack Projects
  {
    category: "Fullstack",
    title: "Expense Tracker",
    description:
      "A fullstack app for tracking income and expenses with visual charts.",
    image: "/expense-tracker.png", // Replace with your image path
    technologies: ["React", "Node.js", "Chart.js", "MongoDB"],
    link: "https://github.com/yourname/expense-tracker",
  },
  {
    category: "Fullstack",
    title: "Trello Clone",
    description:
      "A project management tool with drag-and-drop task organization.",
    image: "/trello-clone.png", // Replace with your image path
    technologies: ["React", "Next.js", "Firebase"],
    link: "https://github.com/yourname/trello-clone",
  },
  {
    category: "Fullstack",
    title: "E-commerce Platform",
    description:
      "A scalable e-commerce app with product listings and payment integration.",
    image: "/ecommerce.png", // Replace with your image path
    technologies: ["React", "Next.js", "Stripe API", "Node.js"],
    link: "https://github.com/yourname/ecommerce-platform",
  },
];

const Projects: React.FC = () => {
  // Group projects by category
  const groupedProjects = projects.reduce<Record<string, Project[]>>(
    (acc, project) => {
      acc[project.category] = acc[project.category] || [];
      acc[project.category].push(project);
      return acc;
    },
    {}
  );

  return (
    <section className="bg-gray-100 py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        <h1 className="text-4xl font-bold text-center mb-8">My Projects</h1>
        {Object.entries(groupedProjects).map(([category, projects]) => (
          <div key={category} className="mb-12">
            <h2 className="text-2xl font-semibold text-gray-800 mb-6">
              {category} Projects
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {projects.map((project, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow overflow-hidden"
                >
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-48 object-cover"
                  />
                  <div className="p-6">
                    <h3 className="text-xl font-semibold">{project.title}</h3>
                    <p className="text-gray-700 my-4">{project.description}</p>
                    <p className="text-sm text-gray-500 mb-4">
                      <strong>Technologies:</strong>{" "}
                      {project.technologies.join(", ")}
                    </p>
                    <a
                      href={project.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-blue-600 hover:text-blue-800 font-medium"
                    >
                      View Project →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
