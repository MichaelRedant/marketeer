import React from "react";
import { Helmet } from "react-helmet";
import { useParams } from "react-router-dom";
import sectionsData from "../sections.json";
import "../landingPage.css";

const LandingPage = () => {
  const { slug } = useParams();
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
    <div className="animated-background"></div> {/* Bewegende achtergrond */}
      <Helmet>
        <title>{metaTitle}</title>
        <meta name="description" content={metaDescription} />
      </Helmet>
      <header className="landing-header">
        <h1 className="landing-title">{title}</h1>
        <p className="landing-intro">{introText}</p>
        <img className="landing-image" src={image} alt={`${title}`} />
      </header>
      <main className="landing-main">
        {sections.map((section, index) => (
          <div key={index} className="landing-section">
            <h2 className="section-heading">{section.heading}</h2>
            <p className="section-content">{section.content}</p>
            
          </div>
        ))}
      </main>
      <footer className="landing-footer">
        <p>{callToAction}</p>
      </footer>
    </div>
  );
};

export default LandingPage;
