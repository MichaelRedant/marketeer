import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { fetchServices } from "../api"; // Zorg dat de API-functie correct werkt
import tools from "../tools.json"; // Tools blijven in JSON
import GlassModal from "../components/GlassModal";
import { FaExternalLinkAlt, FaEnvelope } from "react-icons/fa";
import "./Cards.css"; // Voor het nieuwe card design

function Services() {
  const [services, setServices] = useState([]); // Services van backend
  const [selectedTool, setSelectedTool] = useState(null); // Geselecteerde tool
  const [selectedService, setSelectedService] = useState(null); // Geselecteerde service
  const [headerHeight, setHeaderHeight] = useState(0); // Hoogte van de header
  const [error, setError] = useState(null); // Foutmelding
  const navigate = useNavigate();

  // Data ophalen van de backend
  useEffect(() => {
    const loadServices = async () => {
      try {
        const { data } = await fetchServices();
        setServices(data || []);
      } catch (err) {
        console.error("Error fetching services:", err);
        setError("Fout bij het laden van diensten. Probeer het later opnieuw.");
      }
    };
    loadServices();
  }, []);

  // Bereken de hoogte van de header
  useEffect(() => {
    const headerElement = document.querySelector("nav");
    if (headerElement) {
      setHeaderHeight(headerElement.offsetHeight);
    }
  }, []);

  // Sorteer de services alfabetisch op naam
  const sortedServices = [...services].sort((a, b) =>
    a.name.localeCompare(b.name)
  );

  // Error-melding tonen indien aanwezig
  if (error) {
    return <p className="text-red-500 text-center">{error}</p>;
  }

  return (
    <div
      style={{
        marginTop: headerHeight,
      }}
    >
      {/* Services-sectie */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-bg-light to-bg-primary">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-12 text-center">
          Services
        </h1>
        <motion.div className="card-container" initial="hidden" animate="visible">
          {sortedServices.map((service) => (
            <div className={`card`} key={service.id}>
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

      {/* Tools-sectie */}
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

      {/* Modaal voor Service-details */}
      {selectedService && (
        <GlassModal
          isOpen={!!selectedService}
          onClose={() => setSelectedService(null)}
          title={selectedService.name}
        >
          <div className="p-8 space-y-6">
            <h2 className="text-xl font-bold text-primary text-center">
              {selectedService.name}
            </h2>
            <p>{selectedService.details}</p>
            <ul className="list-disc mt-4 space-y-2">
              {selectedService.benefits?.map((benefit, index) => (
                <li key={index}>{benefit}</li>
              ))}
            </ul>
            <button
              className="flex items-center justify-center px-6 py-3 bg-primary hover:bg-accent text-on-primary font-bold rounded-lg transition duration-300 w-full"
              onClick={() =>
                navigate(
                  `/contact?service=${encodeURIComponent(selectedService.name)}`
                )
              }
            >
              <FaEnvelope className="mr-2" />
              Vraag deze dienst aan
            </button>
          </div>
        </GlassModal>
      )}
    </div>
  );
}

export default Services;
