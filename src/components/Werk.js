import React, { useState, useEffect } from "react";
import servicesData from "../services.json";
import NotFoundSection from "../components/NotFoundSection";

function Werk() {
  const [services, setServices] = useState([]);
  const [selectedService, setSelectedService] = useState("All");

  useEffect(() => {
    setServices([{ id: "All", name: "All" }, ...servicesData]);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-bg-light px-6">
      {/* Titel */}
      <h1 className="text-4xl md:text-5xl font-extrabold text-primary mb-12">
        Werk
      </h1>

      {/* Filters */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6 mb-12">
        {services.map((service) => (
          <button
            key={service.id}
            onClick={() => setSelectedService(service.id)}
            className={`flex items-center justify-center px-4 py-3 rounded-md transition duration-300 text-center font-bold text-base ${
              selectedService === service.id
                ? "bg-primary text-on-primary shadow-md scale-105"
                : "bg-card text-on-card hover:bg-hover-card hover:shadow-md"
            }`}
          >
            {service.name}
          </button>
        ))}
      </div>

      {/* 404 Sectie */}
      <NotFoundSection />
    </div>
  );
}

export default Werk;
