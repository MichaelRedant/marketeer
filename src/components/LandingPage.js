import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import sectionsData from "../sections.json";
import servicesData from "../services.json"; // Import de services.json
import "../landingPage.css";

const LandingPage = () => {
  const { slug } = useParams();
  const [services, setServices] = useState([]); // Gebruik useState voor dynamische services

  useEffect(() => {
    setServices(servicesData); // Zet services uit de JSON file
  }, []);

  const pageData = sectionsData.pages.find((page) =>
    page.title.toLowerCase().includes(slug.toLowerCase())
  );

  if (!pageData) {
    return (
      <div className="landing-page-container">
        <div className="landing-page-error">
          <h1>Pagina niet gevonden</h1>
          <p>De landingspagina voor deze locatie is niet beschikbaar.</p>
        </div>
      </div>
    );
  }

  const { title, metaTitle, metaDescription, introText, image, sections, callToAction } = pageData;

  return (
    <div className="landing-page">
      <div className="animated-background"></div>
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>

      {/* Branding Sectie */}
      <section className="branding-section">
        <h1 className="branding-title">Xinudesign</h1>
        <p className="branding-slogan">Van idee tot realisatie</p>
      </section>

      {/* Landing Header */}
      <header className="landing-header">
        <h1 className="landing-title">{title}</h1>
        <p className="landing-intro">{introText}</p>
        <img className="landing-image" src={image} alt={`${title}`} />
      </header>

      {/* Main Content */}
      <main className="landing-main">
        {sections.map((section, index) => (
          <div key={index} className="landing-section">
            <h2 className="section-heading">{section.heading}</h2>
            <p className="section-content">{section.content}</p>
          </div>
        ))}
      </main>

      {/* Footer */}
      <footer className="landing-footer">
        <p>{callToAction}</p>
      </footer>

      {/* Services Sectie */}
      <section className="services-section">
        <h2 className="services-title">Onze Diensten</h2>
        <div className="services-list">
          {services.map((service, index) => (
            <div key={index} className="service-card">
              <h3 className="service-name">{service.name}</h3>
              <p className="service-description">{service.description}</p>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default LandingPage;
