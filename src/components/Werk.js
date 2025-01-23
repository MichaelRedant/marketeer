import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import projectsData from "../projects.json";
import servicesData from "../services.json";
import "../werk.css";

function Werk() {
  const [projects, setProjects] = useState([]);
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState("All");
  const [selectedProject, setSelectedProject] = useState(null);

  useEffect(() => {
    setProjects(projectsData);
    setServices([{ id: "All", name: "All" }, ...servicesData]);
  }, []);

  const filteredProjects =
  selectedService === "All"
    ? projects
    : projects.filter((project) =>
        typeof selectedService === "string" &&
        project.category.toLowerCase() === selectedService.toLowerCase()
      );

      const [currentPage, setCurrentPage] = useState(0);

      const handlePageChange = (pageIndex) => {
        setCurrentPage(pageIndex);
        document
          .querySelectorAll(".pagination-btn")
          .forEach((btn, idx) => btn.classList.toggle("active", idx === pageIndex));
      };
      
      // Filter projecten voor de huidige pagina
      const projectsPerPage = 4;
      const paginatedProjects = filteredProjects.slice(
        currentPage * projectsPerPage,
        (currentPage + 1) * projectsPerPage
      );
      


  return (
    <div className="app bodyWerk">
      {/* SEO */}
      <Helmet>
        <title>Portfolio Werk | Xinudesign</title>
        <meta
          name="description"
          content="Bekijk onze afgeronde projecten en ontdek hoe Xinudesign waarde toevoegt met AI-marketing en webontwikkeling."
        />
        <meta
          name="keywords"
          content="Portfolio, afgeronde projecten, AI-marketing, webontwikkeling, Xinudesign"
        />
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": projects.map((project, index) => ({
              "@type": "ListItem",
              position: index + 1,
              name: project.title,
              url: project.liveLink || "#",
            })),
          })}
        </script>
      </Helmet>

      <div className="layout-container">
        {/* Services Sidebar */}
        <div className="left-side glass-effect">
          <h2 className="side-title">Services</h2>
          <h3 className="sub-title">Categorieën</h3>
          <div className="side-menu">
          {services.map((service) => (
  <button
    key={service.id}
    onClick={() => setSelectedService(service.name)} // Gebruik de naam van de service
    className={`menu-link ${selectedService === service.name ? "is-active" : ""}`}
  >
    {service.name}
  </button>
))}

          </div>
        </div>

        {/* Main Content */}
        <div className="main-container glass-effect">
  <h1 className="content-section-title">Projecten</h1>
  <div className="apps-card">
    {paginatedProjects.length > 0 ? (
      paginatedProjects.map((project) => (
        <div
          className="app-card"
          key={project.id}
          onClick={() => setSelectedProject(project)}
        >
          <div className="app-card-content">
            <img
              src={project.image}
              alt={project.title}
              className="project-thumbnail"
            />
            <div className="app-card-header">
              <h3 className="project-title">{project.title}</h3>
              <span className="click-icon">🔍</span>
            </div>
            <p className="app-card__subtext">{project.description}</p>
            <div className="project-details">
              <p>
                <strong>Opdrachtgever:</strong> {project.opdrachtgever}
              </p>
              <p>
                <strong>Eindklant:</strong> {project.eindklant}
              </p>
            </div>
          </div>
        </div>
      ))
    ) : (
      <p className="text-center text-gray-500">
        Geen projecten gevonden voor de geselecteerde categorie.
      </p>
    )}
  </div>
    <div className="pagination-container">
      {Array.from(
        { length: Math.ceil(filteredProjects.length / projectsPerPage) },
        (_, index) => (
          <button
            key={index}
            className={`pagination-btn ${
              index === currentPage ? "active" : ""
            }`}
            onClick={() => handlePageChange(index)}
          >
            {index + 1}
          </button>
        )
      )}
    </div>
  </div>
</div>
      {/* Modal for Project Details */}
{selectedProject && (
  <div
    className="overlay-app fade-in"
    onClick={() => setSelectedProject(null)} // Sluit modal bij klikken buiten modal
  >
    <div
      className="pop-up glass-effect"
      onClick={(e) => e.stopPropagation()} // Voorkom sluiten bij klikken in modal
    >
      <div className="pop-up__header">
        <h2 className="modal-title">{selectedProject.title}</h2>
        <button
          className="close-button"
          onClick={() => setSelectedProject(null)}
        >
          ✕
        </button>
      </div>
      <p className="modal-details">{selectedProject.details}</p>
      <div className="modal-section">
        <strong>Opdrachtgever:</strong> {selectedProject.opdrachtgever}
      </div>
      <div className="modal-section">
        <strong>Eindklant:</strong> {selectedProject.eindklant}
      </div>
      <div className="modal-section">
        <strong>Technologieën:</strong>
        <div className="pills-container">
          {selectedProject.technologies.map((tech, index) => (
            <span key={index} className="tech-pill">
              {tech}
            </span>
          ))}
        </div>
      </div>
      <div className="pop-up__links centered-icons">
  {selectedProject.liveLink && (
    <a
      href={selectedProject.liveLink}
      target="_blank"
      rel="noopener noreferrer"
      className="text-button"
      title="Bekijk Live"
    >
      Bekijk
    </a>
  )}
  {selectedProject.githubLink && (
    <a
      href={selectedProject.githubLink}
      target="_blank"
      rel="noopener noreferrer"
      className="text-button"
      title="Bekijk GitHub"
    >
      GitHub
    </a>
  )}
</div>
    </div>
  </div>
)}


    </div>
  );
}

export default Werk;
