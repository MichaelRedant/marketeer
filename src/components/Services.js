import React, { useState } from "react";
import { motion } from "framer-motion";
import services from "../services.json";
import tools from "../tools.json";
import GlassModal from "../components/GlassModal";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FaInfoCircle } from "react-icons/fa";

function Services() {
  const [selectedTool, setSelectedTool] = useState(null);
  const [selectedService, setSelectedService] = useState(null);

  // Animatie-instellingen
  const fadeInVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div>
      {/* Services Sectie */}
      <div className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-b from-bg-light to-bg-primary">
        <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-12 text-center">
          Diensten
        </h1>
        <p className="text-center text-on-bg max-w-3xl leading-relaxed">
          Ontdek hoe mijn expertise in AI en marketing jouw bedrijf kan helpen groeien. Klik op een dienst om meer te leren.
        </p>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-10 px-6 max-w-7xl"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
        >
          {services.map((service) => (
            <motion.div
              key={service.id}
              className="relative p-6 bg-card shadow-lg rounded-lg overflow-hidden transform transition duration-300 group cursor-pointer"
              whileHover={{ scale: 1.05 }}
              onClick={() => setSelectedService(service)}
            >
              {/* Hover Animatie Achtergrond */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-80 transition duration-500 rounded-lg"></div>

              {/* Inhoud van de Service */}
              <div className="relative z-10">
                <h2 className="text-xl font-bold text-primary mt-4 group-hover:text-on-accent transition duration-300 text-center">
                  {service.name}
                </h2>
                <p className="mt-4 text-on-card group-hover:text-on-accent-light transition duration-300 text-center">
                  {service.description}
                </p>
                {/* Klein Icoon */}
                <div className="flex justify-center items-center mt-6">
                  <FaInfoCircle className="text-primary group-hover:text-on-accent text-lg transition duration-300" />
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* Tools Sectie */}
      <div className="mt-16 py-16 px-6">
        <h2 className="text-3xl md:text-4xl font-bold text-primary text-center mb-8">
          Tools
        </h2>
        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto"
          initial="hidden"
          animate="visible"
          variants={fadeInVariants}
        >
          {tools.map((tool) => (
            <motion.div
              key={tool.name}
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

      {/* Modal voor Tool Details */}
      {selectedTool && (
        <GlassModal
          isOpen={!!selectedTool}
          onClose={() => setSelectedTool(null)}
          title={selectedTool.name}
        >
          <div className="flex flex-col items-center text-center p-8 space-y-6">
            <img
              src={selectedTool.logo}
              alt={`${selectedTool.name} logo`}
              className="w-20 h-20 object-contain"
            />
            <p className="text-on-bg">{selectedTool.description}</p>
            <a
              href={selectedTool.link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center mt-4 text-primary hover:text-accent transition duration-300"
            >
              <FaExternalLinkAlt className="text-xl mr-2" />
              Officiële Website
            </a>
          </div>
        </GlassModal>
      )}

      {/* Modal voor Dienst Details */}
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
            <p className="text-on-bg">{selectedService.details}</p>
            <ul className="list-disc mt-4 space-y-2">
              {selectedService.benefits?.map((benefit, index) => (
                <li key={index} className="text-on-bg">
                  {benefit}
                </li>
              ))}
            </ul>
          </div>
        </GlassModal>
      )}
    </div>
  );
}

export default Services;
