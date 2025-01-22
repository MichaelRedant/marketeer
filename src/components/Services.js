import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import servicesData from "../services.json";
import tools from "../tools.json";
import GlassModal from "../components/GlassModal";
import { FaExternalLinkAlt, FaEnvelope } from "react-icons/fa";
import "./Cards.css";

function Services() {
  const [services, setServices] = useState([]); // Services vanuit JSON
  const [selectedTool, setSelectedTool] = useState(null); // Geselecteerde tool
  const [selectedService, setSelectedService] = useState(null); // Geselecteerde service
  const [headerHeight, setHeaderHeight] = useState(0); // Hoogte van de header

  const navigate = useNavigate();

  useEffect(() => {
    // Laad services vanuit de JSON
    setServices(servicesData);
  }, []);

  useEffect(() => {
    const headerElement = document.querySelector("nav");
    if (headerElement) {
      setHeaderHeight(headerElement.offsetHeight);
    }
  }, []);

  const sortedServices = [...services].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  return (
    <div style={{ marginTop: headerHeight }}>
      <Helmet>
        <title>Diensten | Xinudesign</title>
        <meta
          name="description"
          content="Ontdek onze uitgebreide diensten: van AI-contentcreatie en automatisering tot SEO en webontwikkeling. Perfect voor jouw digitale groei."
        />
        <meta
          name="keywords"
          content="AI-content creatie, automatisering, SEO, webontwikkeling, marketingdiensten"
        />
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ItemList",
            "itemListElement": sortedServices.map((service, index) => ({
              "@type": "ListItem",
              "position": index + 1,
              "name": service.name,
              "description": service.description,
            })),
          })}
        </script>
      </Helmet>

      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-bg-light to-bg-primary">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-12 text-center">
          Services
        </h1>
        <motion.div className="card-container" initial="hidden" animate="visible">
          {sortedServices.map((service) => (
            <div className="card" key={service.id}>
              <a href="#" onClick={() => setSelectedService(service)}>
                <div className="card--display">
                  <i className="material-icons">{service.icon || "⤵️"}</i>
                  <h2>{service.name}</h2>
                </div>
                <div className="card--hover">
                  <h2>{service.name}</h2>
                  <p>{service.description}</p>
                  <p className="link">Klik voor meer informatie</p>
                </div>
              </a>
              <div className="card--border"></div>
            </div>
          ))}
        </motion.div>
      </div>

      <div className="flex flex-col items-center mt-32 py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8">
          Tools
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          initial="hidden"
          animate="visible"
        >
          {tools.map((tool, index) => (
            <motion.div
              key={index}
              className="p-6 bg-card shadow-lg rounded-lg hover:shadow-xl transform transition duration-300 text-center group"
              whileHover={{ scale: 1.1 }}
            >
              <div
                className="flex justify-center cursor-pointer mb-4"
                onClick={() => setSelectedTool(tool)}
              >
                <motion.img
                  src={tool.logo}
                  alt={`${tool.name} logo`}
                  className="tool-logo w-16 h-16 object-contain transition duration-300 hover:scale-110"
                />
              </div>
              <h3 className="text-lg font-bold text-primary">{tool.name}</h3>
              <button
                onClick={() => setSelectedTool(tool)}
                className="mt-4 text-primary underline hover:text-accent transition duration-300"
              >
                Meer Info
              </button>
              <div className="mt-4 flex justify-center">
                <a
                  href={tool.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center text-primary hover:text-accent transition duration-300"
                  title="Bezoek de officiële website"
                >
                  <FaExternalLinkAlt className="text-xl" />
                </a>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {selectedService && (
  <GlassModal
    isOpen={!!selectedService}
    onClose={() => setSelectedService(null)}
    title={selectedService.name}
  >
    {/* Sluitknop als FontAwesome-icoon */}
    <button
      onClick={() => setSelectedService(null)}
      className="absolute top-4 right-4 text-gray-500 hover:text-primary text-2xl transition duration-300"
      aria-label="Sluiten"
    >
      <i className="fas fa-times"></i> {/* FontAwesome sluit-icoon */}
    </button>

    <div className="p-8 space-y-6">
      {/* Titel */}
      <h2 className="text-2xl font-bold text-primary text-center mb-4">
        {selectedService.name}
      </h2>

      {/* Details */}
      <p className="text-lg text-gray-700 text-center leading-relaxed mb-6">
        {selectedService.details}
      </p>

      {/* Voordelen */}
      <div className="bg-gray-100 p-4 rounded-lg shadow-md">
        <h3 className="text-lg font-semibold text-primary mb-3">
          Voordelen:
        </h3>
        <ul className="list-disc pl-6 space-y-2">
          {selectedService.benefits.map((benefit, index) => (
            <li key={index} className="text-gray-600">
              {benefit}
            </li>
          ))}
        </ul>
      </div>

      {/* Actieknop */}
      <div className="text-center mt-6">
        <button
          className="inline-flex items-center justify-center px-6 py-3 bg-primary hover:bg-accent text-on-primary font-bold rounded-lg transition duration-300"
          onClick={() =>
            navigate(
              `/contact?service=${encodeURIComponent(
                selectedService.name
              )}`
            )
          }
        >
          <FaEnvelope className="mr-2" />
          Vraag deze dienst aan
        </button>
      </div>
    </div>
  </GlassModal>
)}

    </div>
  );
}

export default Services;
