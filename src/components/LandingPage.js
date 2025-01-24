import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import sectionsData from "../sections.json";
import servicesData from "../services.json";
import "../landingPage.css";

const LandingPage = () => {
  const { slug } = useParams();
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(servicesData);
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

      {/* Header met Branding */}
      <header id="header">
        <div className="title">
          <h1 className="branding-title">Xinudesign</h1>
          <p className="branding-slogan">Van idee tot realisatie</p>
        </div>
      </header>

      {/* Hero Sectie */}
      <section id="about" className="landing-header">
        <div className="about-content">
          <h1 className="landing-title">{title}</h1>
          <p className="landing-intro">{introText}</p>
        </div>
        <div className="about-image">
          <img className="landing-image" src={image} alt={`${title}`} />
        </div>
      </section>

      {/* Main Sectie */}
      <section id="main-content" className="landing-main">
        {sections.map((section, index) => (
          <div key={index} className="main-section">
            <h2 className="section-heading">{section.heading}</h2>
            <p className="section-content">{section.content}</p>
          </div>
        ))}
      </section>

      {/* Diensten Sectie */}
      <section id="services" className="services-section">
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
