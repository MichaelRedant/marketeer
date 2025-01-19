import React, { useEffect } from "react";

function Contact() {
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
    <div className="bg-gradient-to-b from-bg-start to-bg-end min-h-screen flex flex-col items-center justify-center px-6">
      {/* Titel en Beschrijving */}
      <h1 className="text-4xl md:text-5xl font-primary font-bold text-primary text-center">
        Contact
      </h1>
      <p className="mt-4 text-lg md:text-xl text-text font-secondary text-center max-w-3xl">
        Neem contact met mij op voor meer informatie of om samen te werken aan jouw project.
      </p>

      {/* Container voor JotForm */}
      <div
        id="jotform-container"
        className="mt-8 w-full max-w-3xl p-6 bg-card-background rounded-lg shadow-lg"
      ></div>
    </div>
  );
}

export default Contact;
