import React, { useState } from "react";
import { Helmet } from "react-helmet";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import AnimatedSection from "../components/AnimatedSection";
import { useTransform, useScroll, motion } from "framer-motion";
import faqData from "../faq.json";
import tools from "../tools.json";

function Home() {
  const navigate = useNavigate();
  const [activeIndex, setActiveIndex] = useState(null);

  const toggleAnswer = (index) => {
    setActiveIndex(activeIndex === index ? null : index);
  };

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

  return (
    <div>
      {/* Meta-tags toevoegen */}
      <Helmet>
        <title>Xinudesign | AI-Marketing en Webdesign</title>
        <meta
          name="description"
          content="Boost je online zichtbaarheid en bereik jouw doelen met AI-gestuurde marketingstrategieën en op maat gemaakte content van Xinudesign."
        />
        <meta
          name="keywords"
          content="AI-marketing, content creatie, SEO, digitale marketing, goedkope website maken, Xinudesign"
        />
        <meta name="author" content="Michaël Redant" />
        {/* Structured Data voor Video */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "VideoObject",
            "name": "AI-Marketing Video | Xinudesign",
            "description":
              "Ontdek hoe Xinudesign AI-tools gebruikt om marketing naar een hoger niveau te tillen.",
            "thumbnailUrl":
              "https://xinudesign.be/assets/img/video-thumbnail.jpg",
            "uploadDate": "2025-01-22",
            "contentUrl": "https://xinudesign.be/assets/video/ai_video.mp4",
            "embedUrl": "https://xinudesign.be",
            "duration": "PT2M30S",
            "publisher": {
              "@type": "Organization",
              "name": "Xinudesign",
              "logo": {
                "@type": "ImageObject",
                "url": "https://xinudesign.be/assets/img/logo.png",
              },
            },
          })}
        </script>
        {/* Structured Data voor FAQ */}
        <script type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": faqData.map((faq) => ({
              "@type": "Question",
              "name": faq.question,
              "acceptedAnswer": {
                "@type": "Answer",
                "text": faq.answer,
              },
            })),
          })}
        </script>
      </Helmet>

      {/* Hero Sectie */}
<div className="relative hero-section">
  {/* Geanimeerde achtergrond */}
  <div className="animated-background"></div>

  {/* Hero Content */}
  <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 relative z-10">
    <div className="text-center lg:text-left lg:w-1/2">
      <h1 className="hero-title text-5xl md:text-6xl font-primary font-bold uppercase tracking-wide mb-4">
        Xinudesign
      </h1>
      <p className="hero-subtitle text-lg md:text-xl font-secondary mb-6">
        Van idee tot realisatie
      </p>
      <Button
        onClick={() => navigate("/services")}
        className="hero-button px-6 py-3 font-bold rounded-lg transition duration-300"
      >
        Get Started
      </Button>
    </div>
  </div>

  
</div>


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
                  src={tool.logo}
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
                  src={tool.logo}
                  alt={`Logo van ${tool.name}`}
                  className="logo-image grayscale"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* X3DPrints Reclame Sectie */}
<Helmet>
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Offer",
      "name": "X3DPrints Reclame",
      "description": "Hoogwaardige 3D-prints van X3DPrints.",
      "url": "https://www.x3Dprints.be",
      "price": "Op aanvraag",
      "priceCurrency": "EUR",
    })}
  </script>
</Helmet>
<div className="relative py-12 bg-bg-light">
  <div className="relative h-[100px] overflow-hidden">
    <motion.a
      href="https://www.x3Dprints.be"
      target="_blank"
      rel="noopener noreferrer"
      className="absolute top-0 right-0 w-1/3 h-full rounded-lg shadow-lg px-4 py-3 flex flex-col justify-center items-start cursor-pointer"
      style={{
        background: `linear-gradient(90deg, #0362c8 0%, #8BC6EC  100%)`, // Horizontale gradient
        x: useTransform(
          useScroll({
            target: document.body,
            offset: ["start end", "center center", "end start"],
          }).scrollYProgress,
          [0.2, 0.5, 0.8], // Scroll triggers
          ["100%", "40%", "0%"] // Maximaal 50% van de breedte in het midden
        ),
      }}
      whileHover={{ scale: 1.05 }} // Hover-animatie
      whileTap={{ scale: 0.95 }} // Tap-animatie
      transition={{ duration: 0.3 }}
    >
      <h3 className="text-lg  font-primary font-bold mb-1 text-white text-left">X3DPrints</h3>
      <p className="text-xs leading-relaxed font-secondary text-white text-left">
        Hoogwaardige 3D-prints
      </p>
    </motion.a>
  </div>
</div>



      {/* FAQ Sectie */}
<Helmet>
  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": "FAQPage",
      "mainEntity": faqData.map((faq) => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
          "@type": "Answer",
          "text": faq.answer,
        },
      })),
    })}
  </script>
</Helmet>

<AnimatedSection className="faq-section py-16 px-6 bg-background">
  <div className="faq-title text-center">
    <h2 className="text-3xl md:text-4xl font-primary font-bold text-primary">
      Veelgestelde Vragen
    </h2>
    <p className="mt-4 text-text font-secondary">
      Hier vind je de antwoorden op de meest gestelde vragen.
    </p>
  </div>
  <div className="faq mt-10" id="accordion">
    {faqData.map((faq, index) => (
      <div key={index} className="card">
        <div
          className="card-header"
          id={`faqHeading-${index}`}
          onClick={() => toggleAnswer(index)}
        >
          <h5 className="faq-title">
            <span className="badge">{index + 1}</span>
            {faq.question}
          </h5>
        </div>
        {activeIndex === index && (
          <motion.div
            id={`faqCollapse-${index}`}
            className="card-body"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
          >
            <p>{faq.answer}</p>
          </motion.div>
        )}
      </div>
    ))}
  </div>
</AnimatedSection>


      {/* Call-to-Action Sectie */}
  <AnimatedSection className="flex flex-col items-center justify-center py-16 bg-primary text-on-primary px-6">
    <h2 className="text-3xl md:text-4xl font-primary font-bold text-on-primary">
      Klaar om te starten?
    </h2>
    <p className="mt-4 max-w-3xl text-center font-secondary text-on-primary-light">
      Neem contact op en ontdek hoe we samen jouw marketing kunnen transformeren.
    </p>
    <Button
      onClick={() => navigate("/contact")}
      className="mt-6 px-6 py-3 text-lg bg-secondary hover:bg-hover-secondary text-on-secondary font-semibold rounded-lg shadow-lg transition duration-300"
    >
      Neem contact op
    </Button>
  </AnimatedSection>
    </div>
  );
}

export default Home;
