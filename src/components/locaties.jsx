import React from "react";
import sectionsData from "../sections.json";
import "../locaties.css";


function Locaties() {
  // Groepeer locaties en hun respectieve diensten
  const groupedLocations = sectionsData.pages.reduce((acc, page) => {
    const existingLocation = acc.find(
      (loc) => loc.location.toLowerCase() === page.location.toLowerCase()
    );
    if (existingLocation) {
      existingLocation.services.push({
        service: page.service,
        slug: `${page.location.toLowerCase()}/${page.service
          .toLowerCase()
          .replace(/\s+/g, "-")}`,
        title: page.title,
      });
    } else {
      acc.push({
        location: page.location.charAt(0).toUpperCase() + page.location.slice(1),
        image: page.image, // Voeg de afbeelding toe voor de locatie
        services: [
          {
            service: page.service,
            slug: `${page.location.toLowerCase()}/${page.service
              .toLowerCase()
              .replace(/\s+/g, "-")}`,
            title: page.title,
          },
        ],
      });
    }
    return acc;
  }, []);

  // Sorteer locaties alfabetisch op basis van `location`
  const sortedLocations = groupedLocations.sort((a, b) =>
    a.location.localeCompare(b.location)
  );

  return (
    <div className="py-16 px-6 bg-background">
      <h1 className="text-4xl font-bold text-primary text-center mb-6">
        Onze Diensten per Locatie
      </h1>
      <p className="text-lg text-center mb-12 text-text">
        Vind de beste marketing- en weboplossingen in jouw regio. Selecteer een
        locatie om meer te ontdekken over onze diensten.
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
        {sortedLocations.map((location) => (
          <div
            key={location.location}
            className="p-6 bg-card shadow-lg rounded-lg text-center hover:shadow-xl transition"
          >
            <img
              src={location.image}
              alt={`Locatie ${location.location}`}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            {/* Dynamische link naar gemeentelijke website */}
            <a
              href={`https://${location.location.toLowerCase()}.be`}
              target="_blank"
              rel="noopener noreferrer"
              className="text-xl font-bold text-primary underline mb-2 block"
            >
              {location.location}
            </a>
            <ul className="text-left">
              {location.services.map((service) => (
                <li key={service.slug} className="mb-2">
                  <a
                    href={`/locaties/${service.slug}`}
                    className="text-secondary hover:underline font-bold"
                  >
                    {service.service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Locaties;
