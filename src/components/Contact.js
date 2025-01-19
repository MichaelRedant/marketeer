import React, { useEffect, useState } from "react";

function Contact() {
  const [headerHeight, setHeaderHeight] = useState(0);

  // Haal de hoogte van de header op en stel de marge in
  useEffect(() => {
    const headerElement = document.querySelector("nav");
    if (headerElement) {
      setHeaderHeight(headerElement.offsetHeight);
    }
  }, []);

  useEffect(() => {
    // Controleer of het script al bestaat
    const existingScript = document.querySelector(
      'script[src="https://form.jotform.com/jsform/250173607622351"]'
    );
    if (!existingScript) {
      // Dynamisch script laden
      const script = document.createElement("script");
      script.src = "https://form.jotform.com/jsform/250173607622351"; // Jouw JotForm URL
      script.async = true;
      document.getElementById("jotform-container").appendChild(script);
    }
  }, []); // Lege afhankelijkheden zorgen ervoor dat het script alleen eenmaal wordt toegevoegd

  return (
    <div
      className="bg-gradient-to-b from-bg-start to-bg-end min-h-screen flex flex-col items-center justify-center px-6"
      style={{
        marginTop: headerHeight, // Dynamische marge om overlap te voorkomen
      }}
    >
      {/* Titel en Beschrijving */}
      <h1 className="text-4xl md:text-5xl font-primary font-bold text-primary text-center">
        Contact
      </h1>
      <p className="mt-4 text-lg md:text-xl text-text font-secondary text-center max-w-3xl">
        Neem contact met mij op voor meer informatie of om samen te werken aan
        jouw project.
      </p>

      {/* Adresgegevens */}
      <div className="mt-12 bg-card-background p-6 rounded-lg shadow-lg w-full max-w-3xl">
        <h2 className="text-2xl font-bold text-primary text-center mb-4">
          Adresgegevens
        </h2>
        <p className="text-lg text-text font-secondary text-center">
          Provincieweg 34a <br />
          9552 Borsbeke
        </p>
        <p className="text-lg text-text font-secondary text-center mt-2">
          E-mail:{" "}
          <a
            href="mailto:michael@xinudesign.be"
            className="text-primary underline hover:text-accent transition duration-300"
          >
            michael@xinudesign.be
          </a>
        </p>
        <p className="text-lg text-text font-secondary text-center mt-4">
          <strong>Beschikbaar:</strong> Enkel via remote samenwerking
        </p>
      </div>

      {/* Container voor JotForm */}
      <div
        id="jotform-container"
        className="mt-8 w-full max-w-3xl p-6 bg-card-background rounded-lg shadow-lg"
      ></div>
    </div>
  );
}

export default Contact;
