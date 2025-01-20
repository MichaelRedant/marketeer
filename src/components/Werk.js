import React, { useState, useEffect } from "react";
import { fetchProjects, fetchServices } from "../api"; // Importeer API functies
import Button from "./Button";
import GlassModal from "./GlassModal";
import { FaArrowDown } from "react-icons/fa";
import tools from "../tools.json"; // Importeer tools.json

function Werk() {
  const [projects, setProjects] = useState([]);
  const [services, setServices] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);
  const [error, setError] = useState(null);

  // Data ophalen van backend
  useEffect(() => {
    const loadData = async () => {
      try {
        const [projectsData, servicesResponse] = await Promise.all([
          fetchProjects(),
          fetchServices(),
        ]);

        console.log("Fetched Projects:", projectsData); // Controleer ontvangen data
        console.log("Fetched Services:", servicesResponse);

        const servicesData = Array.isArray(servicesResponse)
          ? servicesResponse
          : servicesResponse.data;

        // Vertaal technologie-IDs naar namen
        const translatedProjects = projectsData.map((project) => ({
          ...project,
          opdrachtgever: project.opdrachtgever || "Niet gespecificeerd",
          eindklant: project.eindklant || "Niet gespecificeerd",
          technologies: (project.technologies || []).map(
            (techId) => tools.find((tool) => tool.id === techId)?.name || techId
          ),
        }));

        setProjects(translatedProjects);

        setServices(
          servicesData.map((service) => ({
            id: service.name,
            name: service.name,
          }))
        );
      } catch (err) {
        console.error("Error loading data:", err);
        setError("Fout bij het laden van gegevens. Probeer het later opnieuw.");
      }
    };

    loadData();
  }, []);

  // Dynamische categorieën ophalen en sorteren
  const categories = [
    { id: "All", name: "All" },
    ...services.sort((a, b) => a.name.localeCompare(b.name)),
  ];

  // Filter projecten op basis van geselecteerde categorie
  const filteredProjects =
    selectedCategory === "All"
      ? projects
      : projects.filter((project) => project.category === selectedCategory);

  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bg-light px-6">
      {/* Titel */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-12">
        Werk
      </h1>

      {/* Dynamische Filters in Grid */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {categories.map((category) => (
          <button
            key={category.id}
            onClick={() => setSelectedCategory(category.id)}
            className={`flex items-center justify-center px-4 py-3 rounded-md transition duration-300 text-center font-bold text-base ${
              selectedCategory === category.id
                ? "bg-primary text-on-primary shadow-md scale-105"
                : "bg-card text-on-card hover:bg-hover-card hover:shadow-md"
            }`}
            style={{
              transform: selectedCategory === category.id ? "scale(1.1)" : "scale(1)",
            }}
          >
            {category.name}
          </button>
        ))}
      </div>

      {/* Projecten Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-6 max-w-7xl">
        {filteredProjects.map((project) => (
          <div
            key={project._id}
            className="relative p-8 bg-card shadow-lg rounded-lg overflow-hidden transform transition duration-300 group hover:scale-105 cursor-pointer"
            onClick={() => setSelectedProject(project)}
          >
            {/* Achtergrond Hover Effect */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-80 transition duration-500 rounded-lg"></div>

            {/* Inhoud van de Project Container */}
            <div className="relative z-10 flex flex-col items-center">
              <img
                src={project.image || "https://via.placeholder.com/600x400"}
                alt={project.title}
                className="rounded-lg mb-6"
              />
              <h2 className="text-xl font-bold text-primary group-hover:text-on-accent transition duration-300 text-center">
                {project.title}
              </h2>
              <p className="mt-4 text-on-card group-hover:text-on-accent-light transition duration-300 text-center">
                {project.description || "Geen beschrijving beschikbaar"}
              </p>
              <p className="text-sm mt-2 text-gray-500 text-center">
                Opdrachtgever:{" "}
                <span className="font-medium">{project.opdrachtgever}</span>
              </p>
              <p className="text-sm mt-1 text-gray-500 text-center">
                Eindklant:{" "}
                <span className="font-medium">{project.eindklant}</span>
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
            src={selectedProject.image || "https://via.placeholder.com/600x400"}
            alt={selectedProject.title}
            className="rounded-lg shadow-lg mt-4 w-full"
          />
          <p className="mt-6 text-on-bg leading-relaxed">
            {selectedProject.details || "Geen details beschikbaar"}
          </p>
          <p className="mt-4 text-gray-600">
            <strong>Opdrachtgever:</strong> {selectedProject.opdrachtgever}
          </p>
          <p className="mt-2 text-gray-600">
            <strong>Eindklant:</strong> {selectedProject.eindklant}
          </p>

          {/* Technologieën */}
          <div className="flex flex-wrap gap-2 mt-4">
            {selectedProject.technologies.length > 0 ? (
              selectedProject.technologies.map((tech, index) => (
                <span
                  key={index}
                  className="px-4 py-1 bg-card text-sm text-on-card rounded-lg shadow-sm"
                >
                  {tech}
                </span>
              ))
            ) : (
              <span className="text-gray-500">Geen technologieën gespecificeerd</span>
            )}
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
