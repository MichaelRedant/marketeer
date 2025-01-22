import React, { useState } from "react";
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

  // Hover-animatie instellingen
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
     {/* Hero Sectie */}
<div
  className="relative text-on-dark flex items-center justify-center overflow-hidden"
  style={{
    minHeight: "100vh",
    background: `linear-gradient(0deg, #8BC6EC 0%, #0362c8 100%)`, // Nieuwe gradient
  }}
>
  {/* SVG Afbeelding */}
  <div
    className="absolute inset-0"
    style={{
      backgroundImage: "url('/public/assets/img/hero.svg')",
      backgroundSize: "cover",
      backgroundPosition: "center",
      zIndex: 1,
    }}
  ></div>

  {/* Content */}
  <div className="container mx-auto flex flex-col lg:flex-row items-center px-6 relative z-10">
    {/* Tekstsectie */}
    <div className="text-center lg:text-left lg:w-1/2">
      <h1 className="text-5xl md:text-6xl font-primary font-bold uppercase tracking-wide mb-4 text-on-dark">
        Xinudesign
      </h1>
      <p className="text-lg md:text-xl font-secondary text-on-dark mb-6">
        Van idee tot realisatie
      </p>
      <Button
        onClick={() => navigate("/services")}
        className="px-6 py-3 bg-primary hover:bg-hover-primary text-on-primary font-bold rounded-lg transition duration-300"
      >
        Get Started
      </Button>
    </div>
  </div>

  {/* Scheidingslijn of Golf */}
  <div className="absolute bottom-0 left-0 right-0">
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 1440 320"
      className="w-full h-auto"
      fill="currentColor"
      style={{ color: "#8BC6EC" }}
    >
      <path
        fill="currentColor"
        d="M0,128L60,122.7C120,117,240,107,360,106.7C480,107,600,117,720,128C840,139,960,149,1080,154.7C1200,160,1320,160,1380,160L1440,160L1440,320L1380,320C1320,320,1200,320,1080,320C960,320,840,320,720,320C600,320,480,320,360,320C240,320,120,320,60,320L0,320Z"
      ></path>
    </svg>
  </div>
</div>

{/* Services Sectie */}
<AnimatedSection
  className="py-16 px-6"
  style={{
    background: "linear-gradient(0deg, #8BC6EC 0%, #0362c8 100%)", // Nieuwe gradient
  }}
>
  <div className="max-w-7xl mx-auto text-center">
    <h2 className="text-3xl md:text-4xl font-primary font-bold text-primary mb-8">
      Onze Diensten
    </h2>
    <p className="text-lg md:text-xl font-secondary -light mb-12">
      Ontdek hoe Xinudesign jouw bedrijf kan versterken met onze unieke en
      innovatieve oplossingen.
    </p>
    <motion.div
      className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
      }}
    >
      {[
        {
          name: "AI-gestuurde Content Creatie",
          description:
            "Creëer efficiënte en creatieve inhoud met behulp van AI-tools zoals GPT en DALL-E.",
        },
        {
          name: "Marketing Automatisering",
          description:
            "Automatiseer je campagnes en workflows met slimme AI-integraties.",
        },
        {
          name: "SEO en SEM",
          description:
            "Boost je online zichtbaarheid met AI-gestuurde analyses en optimalisaties.",
        },
        {
          name: "Workshops en Trainingen",
          description:
            "Leer hoe je AI-tools kunt inzetten voor marketing en contentcreatie.",
        },
        {
          name: "Webdesign met CMS",
          description:
            "Beheer eenvoudig je website met een krachtig Content Management Systeem.",
        },
        {
          name: "Webdevelopment",
          description:
            "Bouw krachtige, schaalbare webapplicaties met moderne technologieën.",
        },
      ].map((service, index) => (
        <motion.div
          key={index}
          className="relative p-6 bg-card shadow-lg rounded-lg overflow-hidden transform transition duration-300 group"
        >
          {/* Hover Animatie Achtergrond */}
          <div className="absolute inset-0 bg-gradient-to-br from-primary to-accent opacity-0 group-hover:opacity-80 transition duration-500 rounded-lg"></div>

          {/* Service Content */}
          <div className="relative z-10">
            <h3 className="text-xl font-bold text-primary group-hover:text-on-accent transition duration-300 text-center">
              {service.name}
            </h3>
            <p className="mt-4 text-on-card group-hover:text-on-accent-light transition duration-300 text-center">
              {service.description}
            </p>
          </div>
        </motion.div>
      ))}
    </motion.div>
    {/* Button naar alle services */}
    <div className="mt-12">
    <Button
  onClick={() => {
    navigate("/services");
    window.scrollTo({ top: 0, behavior: "smooth" }); // Scroll naar de top
  }}
  className="px-6 py-3 bg-primary hover:bg-hover-primary text-on-primary font-bold rounded-lg transition duration-300"
>
  Bekijk Alle Diensten
</Button>

    </div>
  </div>
</AnimatedSection>


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
        Bij Xinudesign combineren we de kracht van kunstmatige intelligentie
        met menselijke creativiteit. Ons doel is om jouw marketing naar een
        hoger niveau te tillen door middel van op maat gemaakte oplossingen.
      </p>
    </div>
  </div>
</AnimatedSection>



      {/* Voordelen Sectie */}
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
                  alt={tool.name}
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
                  alt={tool.name}
                  className="logo-image grayscale"
                />
              </motion.div>
            ))}
          </div>
        </div>
      </section>

{/* X3DPrints Reclame Sectie */}
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
      <AnimatedSection className="py-16 px-6 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl md:text-4xl font-primary font-bold text-primary text-center">
            Veelgestelde Vragen
          </h2>
          <div className="mt-10">
            {faqData.map((faq, index) => (
              <div key={index} className="border-b border-border-light pb-4 mb-4">
                <button
                  className="w-full text-left text-lg font-primary font-bold text-primary focus:outline-none flex justify-between items-center"
                  onClick={() => toggleAnswer(index)}
                >
                  {faq.question}
                  <span
                    className={`transform transition-transform duration-300 ${
                      activeIndex === index ? "rotate-180" : ""
                    }`}
                  >
                    ▼
                  </span>
                </button>
                {activeIndex === index && (
                  <motion.p
                    className="mt-2 text-text font-secondary"
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                  >
                    {faq.answer}
                  </motion.p>
                )}
              </div>
            ))}
          </div>
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
