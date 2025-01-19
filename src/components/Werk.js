import React, { useState } from "react";
import projects from "../projects.json";
import Button from "./Button";
import GlassModal from "./GlassModal";

function Werk() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bg-light">
      {/* Titel */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-8">
        Werk
      </h1>

      {/* Filters */}
      <div className="flex flex-wrap justify-center gap-4">
        {["All", "AI", "Content", "SEO"].map((category) => (
          <Button
            key={category}
            onClick={() => setSelectedCategory(category)}
            className={`${
              selectedCategory === category
                ? "bg-primary text-on-primary shadow-md"
                : "bg-card text-on-card hover:bg-hover-card"
            } transition duration-300 px-4 py-2 rounded-lg`}
          >
            {category}
          </Button>
        ))}
      </div>

      {/* Projecten */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-6 max-w-7xl">
        {filteredProjects.map((project) => (
          <div
            key={project.id}
            className="relative p-6 bg-card shadow-lg rounded-lg overflow-hidden transform transition duration-300 group hover:scale-105 cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-80 transition duration-500 rounded-lg"></div>
            <div className="relative z-10">
              <img
                src={project.image}
                alt={project.title}
                className="rounded-lg mb-4"
              />
              <h2 className="text-xl font-bold text-primary group-hover:text-on-accent transition duration-300">
                {project.title}
              </h2>
              <p className="mt-2 text-on-card group-hover:text-on-accent-light transition duration-300">
                {project.description}
              </p>
            </div>
          </div>
        ))}
      </div>

      {/* Modaal voor Projectdetails */}
      {selectedProject && (
        <GlassModal
          isOpen={!!selectedProject}
          onClose={() => setSelectedProject(null)}
          title={selectedProject.title}
        >
          {/* Inhoud van het modaal */}
          <img
            src={selectedProject.image}
            alt={selectedProject.title}
            className="rounded-lg shadow-lg mt-4 w-full"
          />
          <p className="mt-6 text-on-bg leading-relaxed">
            {selectedProject.details}
          </p>

          {/* Technologieën */}
          <div className="mt-8">
            <h3 className="text-lg font-bold text-primary">
              Gebruikte Technologieën
            </h3>
            <div className="flex flex-wrap gap-2 mt-4">
              {selectedProject.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-1 bg-card text-sm text-on-card rounded-lg shadow-sm"
                >
                  {tech}
                </span>
              ))}
            </div>
          </div>

          {/* Links */}
          <div className="mt-8 flex space-x-4">
            {selectedProject.liveLink && (
              <Button
                as="a"
                href={selectedProject.liveLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-primary hover:bg-accent text-on-primary"
              >
                Bekijk Live
              </Button>
            )}
            {selectedProject.githubLink && (
              <Button
                as="a"
                href={selectedProject.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-bg-dark hover:bg-hover-dark text-on-dark"
              >
                Bekijk GitHub
              </Button>
            )}
          </div>
        </GlassModal>
      )}
    </div>
  );
}

export default Werk;
