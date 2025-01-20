import React, { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";
import { fetchServices } from "../api"; // Zorg ervoor dat de API functie correct werkt

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

  // Haal de diensten uit de backend
  useEffect(() => {
    const loadServices = async () => {
      try {
        const servicesData = await fetchServices();
        console.log("Fetched Services:", servicesData); // Controleer de API-respons
        if (Array.isArray(servicesData)) {
          setServices(servicesData); // Stel de services in als het een array is
        } else if (servicesData.data && Array.isArray(servicesData.data)) {
          setServices(servicesData.data); // Haal data op als het genest is
        } else {
          console.error("Unexpected API response format:", servicesData);
          setErrorMessage(
            "Fout bij het laden van diensten. Probeer het later opnieuw."
          );
        }
      } catch (err) {
        console.error("Error fetching services:", err);
        setErrorMessage(
          "Fout bij het laden van diensten. Probeer het later opnieuw."
        );
      }
    };

    loadServices();
  }, []);

  // Haal de hoogte van de header op en stel de marge in
  useEffect(() => {
    const headerElement = document.querySelector("nav");
    if (headerElement) {
      setHeaderHeight(headerElement.offsetHeight);
    }

    // Haal de geselecteerde service uit de URL
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

    // Log de formData voor debugging
    console.log("Submitting form data:", formData);

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

  return (
    <div
      className="bg-gradient-to-b from-bg-start to-bg-end min-h-screen flex flex-col items-center justify-center px-6"
      style={{
        marginTop: headerHeight,
      }}
    >
      <h1 className="text-4xl md:text-5xl font-primary font-bold text-primary text-center">
        Contact
      </h1>
      <p className="mt-4 text-lg md:text-xl text-text font-secondary text-center max-w-3xl">
        Neem contact met mij op voor meer informatie of om samen te werken aan
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
          <label
            htmlFor="email"
            className="block text-sm font-bold text-primary"
          >
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
          <label
            htmlFor="message"
            className="block text-sm font-bold text-primary"
          >
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
                  key={service.id || service._id} // Unieke key voor elke checkbox
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
    </div>
  );
}

export default Contact;
