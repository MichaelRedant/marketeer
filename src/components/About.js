import React, { useState } from "react";
import AnimatedSection from "../components/AnimatedSection";
import {
  FaLinkedin, FaGithub, FaInstagram, FaFacebook,
  FaPaperPlane,
  FaGamepad,
  FaUsers,
} from "react-icons/fa";
import socials from "../socials.json";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../components/Button";

const icons = {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
};

function About() {
  const [isExpanded, setIsExpanded] = useState(false);

  // Slide animatie-instellingen
  const containerVariants = {
    hidden: { opacity: 0, y: -50 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, ease: "easeInOut" },
    },
    exit: { opacity: 0, y: -50, transition: { duration: 0.4, ease: "easeInOut" } },
  };

  return (
    <div className="bg-gradient-to-b from-bg-start to-bg-end">
      {/* Titel en Introductie */}
      <AnimatedSection className="text-center pt-24 pb-16 px-6">
        <h1 className="text-4xl md:text-5xl font-primary font-bold text-primary">
          Over Mij
        </h1>
        <motion.p
          className="mt-6 text-lg md:text-xl text-text max-w-4xl mx-auto leading-relaxed font-secondary"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          Ik ben Michaël, een gepassioneerde marketeer met expertise in AI en
          digitale marketing. Als marketeer bij Octopus Accountancy Software
          richt ik me op innovatieve marketingstrategieën, boeiende visuele
          content en het ondersteunen van accountants en ondernemers.
        </motion.p>
      </AnimatedSection>

      {/* Professionele Achtergrond */}
<AnimatedSection className="py-24 px-6">
  <div className="max-w-7xl mx-auto">
    <h2 className="text-3xl font-primary font-bold text-primary text-center mb-12">
      Professionele Achtergrond
    </h2>
    <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
      <motion.div
        className="p-8 bg-card-background shadow-lg rounded-lg"
        whileHover={{ scale: 1.05 }}
      >
        <h3 className="text-xl font-primary font-bold text-primary">
          Octopus Accountancy Software
        </h3>
        <p className="mt-6 text-text font-secondary leading-relaxed">
          Bij Octopus ben ik verantwoordelijk voor zowel online als offline
          marketing, waarbij ik creativiteit, innovatie en resultaatgerichtheid
          inzet om accountants en ondernemers te ondersteunen.
        </p>
      </motion.div>
      <motion.div
        className="p-8 bg-card-background shadow-lg rounded-lg"
        whileHover={{ scale: 1.05 }}
      >
        <h3 className="text-xl font-primary font-bold text-primary">
          Xinudesign
        </h3>
        <p className="mt-6 text-text font-secondary leading-relaxed">
          Als freelance webdesigner help ik kleine bedrijven en zelfstandigen
          met op maat gemaakte websites die gebruiksvriendelijk en visueel
          aantrekkelijk zijn.
        </p>
      </motion.div>
      <motion.div
        className="p-8 bg-card-background shadow-lg rounded-lg"
        whileHover={{ scale: 1.05 }}
      >
        <h3 className="text-xl font-primary font-bold text-primary">
          Samenwerking met Pixapop Webdesign
        </h3>
        <p className="mt-6 text-text font-secondary leading-relaxed">
          Als vaste marketingpartner van{" "}
          <a
            href="https://www.pixapop.be"
            target="_blank"
            rel="noopener noreferrer"
            className="text-primary hover:text-hover font-bold"
          >
            Pixapop Webdesign
          </a>{" "}
          ondersteun ik bij het creëren en optimaliseren van online en offline
          marketingcampagnes. Mijn expertise omvat SEO, SEM, en het toepassen
          van AI-oplossingen, waarmee ik klanten help om hun online zichtbaarheid
          en resultaten te verbeteren.
        </p>
      </motion.div>
    </div>
  </div>
</AnimatedSection>


      {/* X3DPrints Sectie */}
      <AnimatedSection className="relative py-24 bg-bg-light">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-3xl md:text-4xl font-primary font-bold text-primary mb-8 text-right">
            3D printen?
          </h2>
        </div>
        <motion.div
          className="relative flex justify-end px-6"
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
        >
          <div
            className="w-2/3 md:w-1/2 bg-primary text-white rounded-l-lg p-8"
            style={{ boxShadow: "0 4px 20px rgba(0, 0, 0, 0.2)" }}
          >
            <h3 className="text-2xl font-primary font-bold mb-6">X3DPrints</h3>
            <p className="text-lg leading-relaxed font-secondary">
              Bij X3DPrints bied ik hoogwaardige 3D-printdiensten aan met een
              Bambu X1C 3D-printer. Ik creëer op maat gemaakte ontwerpen en
              producten die perfect aansluiten bij de wensen van mijn klanten.
            </p>
            <Button
              as="a"
              href="https://www.x3Dprints.be"
              target="_blank"
              rel="noopener noreferrer"
              className="mt-8 text-secondary hover:bg-bg-hover transition duration-300 font-bold px-8 py-3"
            >
              Bezoek X3DPrints
            </Button>
          </div>
        </motion.div>
      </AnimatedSection>

      {/* Andere Interessegebieden */}
      <div className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-primary font-bold text-primary text-center mb-12">
            Andere Interessegebieden
          </h2>
          <AnimatePresence initial={false}>
            {isExpanded && (
              <motion.div
                className="grid grid-cols-1 md:grid-cols-3 gap-12"
                initial="hidden"
                animate="visible"
                exit="exit"
                variants={containerVariants}
              >
                {[
                  {
                    title: "Dronevliegen",
                    icon: <FaPaperPlane />,
                    description:
                      "Mijn passie voor technologie komt tot uiting in dronevliegen, waarbij ik graag nieuwe perspectieven ontdek.",
                  },
                  {
                    title: "Gaming & D&D",
                    icon: <FaGamepad />,
                    description:
                      "Strategisch denken en creativiteit combineer ik in mijn passie voor gaming en Dungeons & Dragons.",
                  },
                  {
                    title: "Gemeenschapsbetrokkenheid",
                    icon: <FaUsers />,
                    description:
                      "Als voorzitter van Ondernemend Herzele zet ik me in voor lokale ondernemers en samenwerkingen.",
                  },
                ].map((interest, index) => (
                  <motion.div
                    key={index}
                    className="p-8 bg-card-background shadow-lg rounded-lg"
                    whileHover={{ scale: 1.05 }}
                  >
                    <h3 className="text-xl font-primary font-bold text-primary flex items-center">
                      {interest.icon}
                      <span className="ml-2">{interest.title}</span>
                    </h3>
                    <p className="mt-6 text-text font-secondary leading-relaxed">
                      {interest.description}
                    </p>
                  </motion.div>
                ))}
              </motion.div>
            )}
          </AnimatePresence>
          <div className="text-center mt-12">
            <button
              onClick={() => setIsExpanded(!isExpanded)}
              className="px-8 py-3 bg-primary text-white rounded-lg hover:bg-hover transition duration-300"
            >
              {isExpanded ? "Verberg Sectie" : "Bekijk Interessegebieden"}
            </button>
          </div>
        </div>
      </div>

       {/* Social Links */}
       <AnimatedSection className="text-center py-24">
        <h3 className="text-2xl font-primary font-bold text-primary">Volg mij op</h3>
        <motion.div
          className="flex justify-center mt-8 space-x-8"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
        >
          {socials.map((social) => {
            const Icon = icons[social.icon];
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--text-color)] hover:text-[var(--hover-color)] text-2xl transition duration-300"
                title={social.name}
              >
                <Icon />
              </a>
            );
          })}
        </motion.div>
      </AnimatedSection>
    </div>
  );
}

export default About;
