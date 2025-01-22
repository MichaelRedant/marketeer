import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Helmet } from "react-helmet";
import services from "../services.json"; // Voorlopig lokaal, later uitbreidbaar naar API

function ServicePage() {
  const { serviceId } = useParams(); // Haalt de ID op uit de URL
  const navigate = useNavigate();
  const [service, setService] = useState(null);
  const [loading, setLoading] = useState(true); // Laadstatus
  const [error, setError] = useState(null); // Errorstatus

  useEffect(() => {
    const fetchService = async () => {
      try {
        // Simuleer een API-call of haal lokaal de service op
        const foundService = services.find(
          (item) => item.id.toString() === serviceId
        );

        if (!foundService) {
          throw new Error("Service niet gevonden");
        }

        setService(foundService);
        setError(null);
      } catch (err) {
        setError(err.message);
        setService(null);
      } finally {
        setLoading(false);
      }
    };

    fetchService();
  }, [serviceId]);

  // Fallback als er een fout optreedt
  if (loading) {
    return (
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold">Laden...</h1>
        <p>Even geduld terwijl we de gegevens ophalen.</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="text-center py-16">
        <h1 className="text-4xl font-bold">Fout</h1>
        <p>{error}</p>
        <button
          className="mt-6 px-6 py-3 bg-primary text-on-primary font-bold rounded-lg"
          onClick={() => navigate("/services")}
        >
          Ga Terug naar Diensten
        </button>
      </div>
    );
  }

  return (
    <div className="container mx-auto px-6 py-16">
      {/* Dynamische Meta-tags */}
      <Helmet>
        <title>{service.name} | Xinudesign</title>
        <meta name="description" content={service.details} />
        <meta name="keywords" content={service.benefits.join(", ")} />
        {/* Structured Data */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "name": service.name,
            "description": service.details,
            "provider": {
              "@type": "Organization",
              "name": "Xinudesign",
              "url": "https://xinudesign.be",
            },
            "offers": {
              "@type": "Offer",
              "price": "Op aanvraag",
              "priceCurrency": "EUR",
            },
          })}
        </script>
      </Helmet>

      {/* Inhoud van de Service */}
      <h1 className="text-4xl font-bold mb-4">{service.name}</h1>
      <p className="text-lg mb-6">{service.details}</p>
      <h2 className="text-2xl font-semibold mb-4">Voordelen:</h2>
      <ul className="list-disc pl-6">
        {service.benefits.map((benefit, index) => (
          <li key={index} className="mb-2">
            {benefit}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ServicePage;
