import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Button from "../components/Button";
import AnimatedSection from "../components/AnimatedSection";
import { motion } from "framer-motion";
import faqData from "../faq.json";

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
    className="flex flex-col items-center justify-center min-h-screen bg-cover bg-center"
    style={{
      backgroundImage:
        "url('https://images.pexels.com/photos/8386440/pexels-photo-8386440.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
      color: "var(--text-on-dark)", // Aangepaste variabele voor lichte tekst
      textShadow: "1px 1px 2px rgba(0, 0, 0, 0.8)",
    }}
  >
    <h1 className="text-4xl md:text-5xl lg:text-6xl font-primary font-bold text-on-dark">
      Welkom bij Xinudesign
    </h1>
    <p className="mt-4 text-lg md:text-xl lg:text-2xl text-center font-secondary text-on-dark">
      Transformeer je marketing met AI-gestuurde oplossingen.
    </p>
    <Button
      onClick={() => navigate("/services")}
      className="mt-6 px-8 py-4 text-lg bg-primary hover:bg-hover-primary text-on-primary font-semibold rounded-lg shadow-lg transition duration-300"
    >
      Ontdek de diensten
    </Button>
  </div>

      {/* Introductie Sectie */}
      <AnimatedSection className="py-16 bg-background px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-primary font-bold text-primary">
            Waarom Xinudesign?
          </h2>
          <p className="mt-4 text-text leading-relaxed font-secondary">
            Bij Xinudesign combineren we de kracht van kunstmatige intelligentie
            met menselijke creativiteit. Ons doel is om jouw marketing naar een
            hoger niveau te tillen door middel van op maat gemaakte oplossingen.
          </p>
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
