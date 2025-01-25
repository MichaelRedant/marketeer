import React, { useState, useEffect } from "react";
import { Helmet } from "react-helmet";
import { useParams} from "react-router-dom";
import sectionsData from "../sections.json";
import servicesData from "../services.json";
import AnimatedSection from "../components/AnimatedSection";
import { motion } from "framer-motion";
import tools from "../tools.json";
import "../landingPage.css";
import "../index.css"

const hoverAnimation = {
  hidden: { backgroundPosition: "left bottom" },
  visible: {
    backgroundPosition: "right top",
    transition: {
      duration: 0.8,
      ease: "easeInOut",
    },
  },
};

const LandingPage = () => {
  const { location, service } = useParams(); // Dynamic slug params
  const [services, setServices] = useState([]);

  useEffect(() => {
    setServices(servicesData);
  }, []);

  // Controleer of `location` en `service` bestaan, en zorg ervoor dat ze strings zijn
  const pageData = sectionsData.pages.find(
    (page) =>
      page.location?.toLowerCase() === location?.toLowerCase() &&
      page.service?.toLowerCase().replace(/\s+/g, "-") === service?.toLowerCase()
  );
  

  if (!pageData) {
    return (
      <div className="landing-page-container">
        <div className="landing-page-error">
          <h1>Pagina niet gevonden</h1>
          <p>De landingspagina voor deze locatie en dienst is niet beschikbaar.</p>
        </div>
      </div>
    );
  }

  const { title, metaTitle, metaDescription, introText, image, sections, callToAction } = pageData;

  const parseContent = (content) => {
    if (/^\d+\./.test(content) || /\n/.test(content)) {
      const listItems = content.split(/\n|(?=\d+\.)/).filter((item) => item.trim() !== "");
      return (
        <ul className="section-list">
          {listItems.map((item, index) => (
            <li key={index} className="list-item">
              {item.trim()}
            </li>
          ))}
        </ul>
      );
    }
    return <p className="section-content">{content}</p>;
  };

  return (
    <div className="landing-page">
      <div className="animated-background"></div>
      <Helmet>
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Service",
      "name": title,
      "description": metaDescription,
      "provider": {
        "@type": "Organization",
        "name": "Xinudesign",
        "url": "https://xinudesign.be"
      },
      "areaServed": {
        "@type": "Place",
        "name": pageData.title
      },
      "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Diensten",
        "itemListElement": services.map((service, index) => ({
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": service.name,
            "description": service.description
          },
          "position": index + 1
        }))
      }
    })}
  </script>
</Helmet>


      {/* Header met Branding */}
<header id="header">
  <div className="title">
    <h1 className="branding-title">Xinudesign</h1>
    <p className="branding-slogan">Van idee tot realisatie</p>
    <p className="branding-location-service">
  {`${service
    .split('-')
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(' ')} in ${location.charAt(0).toUpperCase() + location.slice(1)}`}
</p>

  </div>
  <div className="scroll-downs" onClick={() => document.getElementById('about').scrollIntoView({ behavior: 'smooth' })}>
    <div className="mousey">
      <div className="scroller"></div>
    </div>
  </div>
</header>

      {/* Hero Sectie */}
      <section id="about" className="landing-header">
        <div className="about-content">
          <h1 className="landing-title">{title}</h1>
          <p className="landing-intro">{introText}</p>
         
        </div>
        <div className="about-image">
        <img
  className="landing-image"
  src={image}
  alt={`Online diensten, ${title}`}
  title={`Professioneel ${title}`}
   loading="lazy"
/>
        </div>
      </section>

      {/* CTA Sectie */}
<section id="cta-section" className="cta-section">
  <p className="cta-text">{callToAction}</p>
  <a href="/contact" className="cta-button">
    Neem contact op
  </a>
</section>

      {/* Main Sectie */}
        <section className="landing-main">
        {sections.map((section, index) => (
          <div key={index} className="main-section">
            <h2 className="section-heading">{section.heading}</h2>
            <span className="section-content">{parseContent(section.content)}</span>
          </div>
        ))}
      </section>

      {/* Waarom Xinudesign Sectie */}
      <AnimatedSection
        className="py-16 px-6 relative"
        style={{
          background: "linear-gradient(180deg, #0362c8 0%, #ffffff 100%)",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          width: "100%",
        }}
      >
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center relative">
          {/* Video Sectie */}
          <div className="video-container">
            <video
              className="video"
              autoPlay
              loop
              muted
              playsInline
              poster="/assets/img/video-thumbnail.jpg" // Voor fallback thumbnail
            >
              <source src="/assets/video/ai_video.mp4" type="video/mp4" />
              <source src="/assets/video/ai_video.webm" type="video/webm" />
              Je browser ondersteunt geen video.
            </video>
          </div>
          {/* Tekst Sectie */}
          <div className="text-section text-center md:text-left relative">
            <h2 className="text-3xl md:text-4xl font-primary font-bold text-primary mb-4">
              Waarom Xinudesign?
            </h2>
            <p className="text-lg md:text-xl leading-relaxed font-secondary text-text">
              Bij Xinudesign combineren we de kracht van kunstmatige
              intelligentie met menselijke creativiteit. Ons doel is om jouw
              marketing naar een hoger niveau te tillen door middel van op maat
              gemaakte oplossingen.
            </p>
          </div>
        </div>
      </AnimatedSection>

      

      {/* Diensten Sectie */}
      <section id="services" className="services-section">
      <section className="benefits">
        {/* Voordelen Sectie */}
      <Helmet>
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Efficiëntie: Bespaar tijd en middelen met geautomatiseerde processen en geoptimaliseerde workflows.",
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Creativiteit: Creëer unieke, op maat gemaakte content die jouw merk laat opvallen.",
        },
        {
          "@type": "ListItem",
          "position": 3,
          "name": "Resultaatgericht: Bereik jouw doelen met datagedreven strategieën en meetbare resultaten.",
        },
      ],
    })}
  </script>
</Helmet>
  <AnimatedSection className="py-16 px-6">
    <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
      {[
        {
          title: "Efficiëntie",
          description:
            "Bespaar tijd en middelen met geautomatiseerde processen en geoptimaliseerde workflows.",
        },
        {
          title: "Creativiteit",
          description:
            "Creëer unieke, op maat gemaakte content die jouw merk laat opvallen.",
        },
        {
          title: "Resultaatgericht",
          description:
            "Bereik jouw doelen met datagedreven strategieën en meetbare resultaten.",
        },
      ].map((item, index) => (
        <motion.div
          key={index}
          className="p-6 bg-card shadow-lg rounded-lg text-center relative group overflow-hidden"
          whileHover="visible"
          initial="hidden"
          animate="hidden"
          variants={hoverAnimation}
          style={{
            backgroundImage:
              "linear-gradient(135deg, var(--hover-gradient-start), var(--hover-gradient-end))",
            backgroundSize: "200%",
            backgroundPosition: "left bottom",
          }}
        >
          <h3 className="text-xl font-bold text-on-card-light group-hover:text-on-primary transition duration-300">
            {item.title}
          </h3>
          <p className="mt-4 text-on-card-light group-hover:text-on-primary-light transition duration-300">
            {item.description}
          </p>
          
        </motion.div>
      ))}
      
    </div>
  </AnimatedSection>

  {/* Tools Carousel Sectie */}
<Helmet>
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "ItemList",
      "itemListElement": tools.map((tool, index) => ({
        "@type": "Product",
        "name": tool.name,
        "image": tool.logo,
        "position": index + 1,
      })),
    })}
  </script>
</Helmet>
<section className="relative py-16 bg-bg-light">
  <div className="container brandsCarousel mx-auto">
    <div className="d-flex carouselTrack">
      {tools.map((tool, index) => (
        <motion.div
          className="brandLogo"
          key={index}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
           <img
  src={`/${tool.logo}`} // Zorg ervoor dat het pad absoluut is
  alt={`Logo van ${tool.name}`}
  className="logo-image grayscale"
/>

        </motion.div>
      ))}
      {tools.map((tool, index) => (
        <motion.div
          className="brandLogo"
          key={`clone-${index}`}
          whileHover={{ scale: 1.1 }}
          transition={{ duration: 0.3 }}
        >
         <img
  src={`/${tool.logo}`} // Zorg ervoor dat het pad absoluut is
  alt={`Logo van ${tool.name}`}
  className="logo-image grayscale"
/>

        </motion.div>
      ))}
    </div>
  </div>
</section>



      </section>

      <h2 className="services-title">Onze Diensten</h2>
<a href="/services" className="text-primary hover:underline">
  Ontdek meer over onze diensten
</a>
<div className="services-list mt-4">
  {services.map((service, index) => (
    <div key={index} className="service-card">
      <h3 className="service-name">{service.name}</h3>
      <p className="service-description">{service.description}</p>
      <a href={`/contact?service=${encodeURIComponent(service.name)}`} className="cta-button-services">
        Meer info
      </a>
    </div>
  ))}
</div>

      </section>
    </div>
    
  );
};


export default LandingPage;
