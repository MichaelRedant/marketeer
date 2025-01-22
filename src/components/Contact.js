import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchServices } from "../api"; // Zorg ervoor dat de API functie correct werkt
import "../contact.css"; // Voeg stijlen toe voor confetti-effect

function Contact() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const [services, setServices] = useState([]); // Dynamische services uit de backend
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
    services: [],
  });
  const [successMessage, setSuccessMessage] = useState("");
  const [errorMessage, setErrorMessage] = useState("");
  const [searchParams] = useSearchParams();

  useEffect(() => {
    const loadServices = async () => {
      try {
        const servicesData = await fetchServices();
        if (Array.isArray(servicesData)) {
          setServices(servicesData);
        } else if (servicesData.data && Array.isArray(servicesData.data)) {
          setServices(servicesData.data);
        } else {
          console.error("Unexpected API response format:", servicesData);
          setErrorMessage(
            "Fout bij het laden van diensten. Probeer het later opnieuw."
          );
        }
      } catch (err) {
        console.error("Error fetching services:", err);
        setErrorMessage("Fout bij het laden van diensten. Probeer het later opnieuw.");
      }
    };

    loadServices();
  }, []);

  useEffect(() => {
    const headerElement = document.querySelector("nav");
    if (headerElement) {
      setHeaderHeight(headerElement.offsetHeight);
    }

    const preselectedService = searchParams.get("service");
    if (preselectedService) {
      setFormData((prevData) => ({
        ...prevData,
        services: [...prevData.services, preselectedService],
      }));
    }
  }, [searchParams]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch("http://localhost:5000/api/messages", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (response.ok) {
        setSuccessMessage("Bericht succesvol verzonden!");
        setFormData({ name: "", email: "", message: "", services: [] });
        setErrorMessage("");
        triggerConfetti(); // Start confetti
      } else {
        const data = await response.json();
        setErrorMessage(data.error || "Er is een fout opgetreden.");
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setErrorMessage("Kan geen verbinding maken met de server.");
    }
  };

  const handleCheckboxChange = (serviceName) => {
    setFormData((prevData) => {
      const updatedServices = prevData.services.includes(serviceName)
        ? prevData.services.filter((service) => service !== serviceName)
        : [...prevData.services, serviceName];

      return { ...prevData, services: updatedServices };
    });
  };

  const triggerConfetti = () => {
    const canvas = document.getElementById("confetti-canvas");
    const ctx = canvas.getContext("2d");
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;

    const confettiCount = 50;
    const confettiColors = ["#0362c8", "#5c86ff", "#b3c7ff"];
    const confetti = [];

    for (let i = 0; i < confettiCount; i++) {
      confetti.push({
        x: Math.random() * canvas.width,
        y: canvas.height,
        size: Math.random() * 7 + 3,
        color: confettiColors[Math.floor(Math.random() * confettiColors.length)],
        speedX: Math.random() * 4 - 2,
        speedY: Math.random() * -10 - 10,
      });
    }

    const render = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      confetti.forEach((particle) => {
        ctx.fillStyle = particle.color;
        ctx.beginPath();
        ctx.arc(particle.x, particle.y, particle.size, 0, 2 * Math.PI);
        ctx.fill();
        particle.x += particle.speedX;
        particle.y += particle.speedY;
        particle.speedY += 0.3; // Gravity effect
      });

      confetti.forEach((particle, index) => {
        if (particle.y > canvas.height) confetti.splice(index, 1);
      });

      if (confetti.length > 0) {
        requestAnimationFrame(render);
      }
    };

    render();
  };

  return (
    <div
      className="bg-gradient-to-b from-bg-start to-bg-end min-h-screen mb-10 flex flex-col items-center justify-center px-6"
      style={{
        marginTop: headerHeight,
      }}
    >
      <h1 className="text-4xl md:text-5xl font-primary font-bold text-primary text-center">
        Contact
      </h1>
      <p className="mt-4 text-lg md:text-xl text-text font-secondary text-center max-w-3xl">
        Neem contact op voor meer informatie of om samen te werken aan
        jouw project.
      </p>

      <form
        onSubmit={handleSubmit}
        className="mt-8 w-full max-w-3xl p-6 bg-card-background rounded-lg shadow-lg space-y-6"
      >
        <div>
          <label htmlFor="name" className="block text-sm font-bold text-primary">
            Naam
          </label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={(e) =>
              setFormData({ ...formData, name: e.target.value })
            }
            required
            className="w-full mt-2 p-3 border rounded-lg"
          />
        </div>

        <div>
          <label htmlFor="email" className="block text-sm font-bold text-primary">
            E-mail
          </label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={(e) =>
              setFormData({ ...formData, email: e.target.value })
            }
            required
            className="w-full mt-2 p-3 border rounded-lg"
          />
        </div>

        <div>
          <label htmlFor="message" className="block text-sm font-bold text-primary">
            Bericht
          </label>
          <textarea
            id="message"
            name="message"
            rows="5"
            value={formData.message}
            onChange={(e) =>
              setFormData({ ...formData, message: e.target.value })
            }
            required
            className="w-full mt-2 p-3 border rounded-lg"
          ></textarea>
        </div>

        <div>
          <h3 className="text-lg font-bold text-primary">Kies diensten</h3>
          {services.length > 0 ? (
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-4">
              {services.map((service) => (
                <label
                  key={service.id || service._id}
                  className="flex items-center space-x-2 cursor-pointer"
                >
                  <input
                    type="checkbox"
                    value={service.name}
                    checked={formData.services.includes(service.name)}
                    onChange={() => handleCheckboxChange(service.name)}
                    className="form-checkbox h-5 w-5 text-primary"
                  />
                  <span className="text-text">{service.name}</span>
                </label>
              ))}
            </div>
          ) : (
            <p className="text-sm text-red-500">Geen beschikbare diensten.</p>
          )}
        </div>

        <button
          id="submit-button"
          type="submit"
          className="w-full bg-primary hover:bg-hover-primary text-on-primary font-bold py-3 rounded-lg transition duration-300"
        >
          Verzenden
        </button>

        {successMessage && (
          <p className="mt-4 text-green-500 text-center">{successMessage}</p>
        )}
        {errorMessage && (
          <p className="mt-4 text-red-500 text-center">{errorMessage}</p>
        )}
      </form>
      <canvas id="confetti-canvas"></canvas>
    </div>
  );
}

export default Contact;
