import React, { useState } from "react";
import projects from "../projects.json";
import services from "../services.json"; // Importeer de services
import Button from "./Button";
import GlassModal from "./GlassModal";
import { FaArrowDown } from "react-icons/fa"; // Geüpdatet icoon

function Werk() {
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  // Dynamisch categorieën ophalen en sorteren
  const categories = [
    "All",
    ...services
      .map((service) => service.name)
      .sort((a, b) => a.localeCompare(b)), // Alfabetisch sorteren
  ];

  // Filter projecten op basis van geselecteerde categorie
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bg-light px-6">
      {/* Titel */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-12">
        Werk
      </h1>

      {/* Dynamische Filters in Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {categories.map((category, index) => (
          <button
            key={index}
            onClick={() => setSelectedCategory(category)}
            className={`flex items-center justify-center px-4 py-3 rounded-md transition duration-300 text-center font-bold text-base ${
              selectedCategory === category
                ? "bg-primary text-on-primary shadow-md scale-105"
                : "bg-card text-on-card hover:bg-hover-card hover:shadow-md"
            }`}
            style={{
              transform: selectedCategory === category ? "scale(1.1)" : "scale(1)",
            }}
          >
            {category}
          </button>
        ))}
      </div>

      {/* Projecten Grid */}
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-6 max-w-7xl">
  {filteredProjects.map((project) => (
    <div
      key={project.id}
      className="relative p-8 bg-card shadow-lg rounded-lg overflow-hidden transform transition duration-300 group hover:scale-105 cursor-pointer"
      onClick={() => setSelectedProject(project)}
    >
      {/* Achtergrond Hover Effect */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-80 transition duration-500 rounded-lg"></div>

      {/* Inhoud van de Project Container */}
      <div className="relative z-10 flex flex-col items-center">
        <img
          src={project.image}
          alt={project.title}
          className="rounded-lg mb-6"
        />
        <h2 className="text-xl font-bold text-primary group-hover:text-on-accent transition duration-300 text-center">
          {project.title}
        </h2>
        <p className="mt-4 text-on-card group-hover:text-on-accent-light transition duration-300 text-center">
          {project.description}
        </p>
        <p className="text-sm mt-2 text-gray-500 text-center">
          Opdrachtgever: <span className="font-medium">{project.opdrachtgever}</span>
        </p>
        <p className="text-sm mt-1 text-gray-500 text-center">
          Eindklant: <span className="font-medium">{project.eindklant}</span>
        </p>
      </div>

      {/* Klikbaar Icoon */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 text-primary group-hover:text-on-accent transition duration-300">
        <FaArrowDown className="text-2xl pt-2" />
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
    <p className="mt-4 text-gray-600">
      <strong>Opdrachtgever:</strong> {selectedProject.opdrachtgever}
    </p>
    <p className="mt-2 text-gray-600">
      <strong>Eindklant:</strong> {selectedProject.eindklant}
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
