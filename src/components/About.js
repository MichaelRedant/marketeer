import React, { useState } from "react";
import "./ProfileCard.css"; // CSS voor het profielkaart design

function About() {
  const [activeSection, setActiveSection] = useState("#about");

  const sections = [
    {
      id: "#about",
      title: "ABOUT",
      content: (
        <p>
          Bij Xinudesign combineren we innovatieve technologieën met creatieve
          oplossingen om bedrijven te helpen groeien. Met expertise in AI,
          neuromarketing en webontwikkeling brengen we jouw visie tot leven.
        </p>
      ),
    },
    {
      id: "#experience",
      title: "EXPERIENCE",
      content: (
        <div className="card-timeline">
          <div className="card-item" data-year="2018">
            <div className="card-item-title">
              Webdeveloper in bijberoep <span>Xinudesign</span>
            </div>
            <div className="card-item-desc text-sm mb-2">
              dynamische webapplicaties en verbeterde gebruikerservaringen.
            </div>
          </div>
          <div className="card-item" data-year="2020">
            <div className="card-item-title">
              Marketeer in bijberoep <span>Xinudesign</span>
            </div>
            <div className="card-item-desc text-sm mb-2">
              In samenwerking met Pixapop webdesign, marketing related opdrachten
            </div>
          </div>
          <div className="card-item" data-year="2022">
            <div className="card-item-title">
              3D Print specialist <span>X3DPrints</span>
            </div>
            <div className="card-item-desc text-sm mb-2">
              3D geprinte oplossingen voor particulieren en zelfstandigen
            </div>
          </div>
          <div className="card-item" data-year="2022">
            <div className="card-item-title">
              Allround marketing specialist <span>Octopus</span>
            </div>
            <div className="card-item-desc text-sm mb-2">
              Online en offline marketing oplossingen voor Octopus
            </div>
          </div>
        </div>
      ),
    },
    {
      id: "#contact",
      title: "CONTACT",
      content: (
        <div className="card-contact-wrapper">
          <div className="card-contact text-left">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0118 0z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            Provincieweg 34a, 9552 Borsbeke
          </div>
          <div className="card-contact">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-6-6 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" />
            </svg>
            (+32) 496 90 85 03
          </div>
          <div className="card-contact">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" />
              <path d="M22 6l-10 7L2 6" />
            </svg>
            michael@xinudesign.be
          </div>
          
        </div>
      ),
    },
  ];

  return (
    <div className="bg-gradient-to-b from-bg-start to-bg-end min-h-screen flex justify-center items-center">
      <div className="card w-full max-w-lg" data-state={activeSection}>
        <div className="card-header">
          <img
            className="card-avatar"
            src= "/public/assets/img/profile.jpg"
            alt="Profile"
          />
          <h1 className="card-fullname">Michaël Redant</h1>
          <h2 className="card-jobtitle">Marketeer & Webontwikkelaar</h2>
        </div>
        <div className="card-main">
          {sections.map((section) => (
            <div
              key={section.id}
              className={`card-section ${
                activeSection === section.id ? "is-active" : ""
              }`}
            >
              <div className="card-content">
                <div className="card-subtitle">{section.title}</div>
                {section.content}
              </div>
            </div>
          ))}
        </div>
        <div className="card-buttons">
          {sections.map((section) => (
            <button
              key={section.id}
              data-section={section.id}
              className={activeSection === section.id ? "is-active" : ""}
              onClick={() => setActiveSection(section.id)}
            >
              {section.title}
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

export default About;