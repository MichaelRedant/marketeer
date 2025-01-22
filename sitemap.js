const Sitemap = require('react-router-sitemap').default;
const fs = require('fs'); // Nodig voor file-validatie

// Probeer services.json te laden en controleer of het een geldige array is
let services;
try {
  services = require('./src/services.json');
  if (!Array.isArray(services)) {
    throw new Error('services.json bevat geen geldige array.');
  }
} catch (error) {
  console.error('Fout bij het laden van services.json:', error.message);
  services = []; // Zorg ervoor dat services altijd een array is
}

// Dynamische routes genereren uit services.json
const getDynamicServiceRoutes = () => {
  if (!services || !Array.isArray(services)) {
    console.warn('Services array is niet beschikbaar of leeg.');
    return [];
  }

  return services
    .map((service) => {
      if (!service.id) {
        console.warn(`Service zonder ID gevonden: ${JSON.stringify(service)}`);
        return null;
      }
      return {
        loc: `/services/${service.id}`, // Dynamisch pad voor elke service
        changefreq: 'monthly',
        priority: 0.7,
      };
    })
    .filter(Boolean); // Verwijder null-waarden
};

// Voeg hier statische routes toe
const staticRoutes = [
  { loc: '/', changefreq: 'weekly', priority: 1.0 },
  { loc: '/about', changefreq: 'monthly', priority: 0.8 },
  { loc: '/services', changefreq: 'weekly', priority: 0.9 },
  { loc: '/contact', changefreq: 'monthly', priority: 0.8 },
  { loc: '/werk', changefreq: 'monthly', priority: 0.7 },
];

// Combineer statische en dynamische routes
const allRoutes = [
  ...staticRoutes,
  ...getDynamicServiceRoutes(), // Voeg dynamische routes toe
];

// Dynamische sitemap genereren
const generateSitemap = () => {
  try {
    // Controleer of er routes zijn
    if (!allRoutes || allRoutes.length === 0) {
      throw new Error('Geen routes beschikbaar om een sitemap te genereren.');
    }

    // Genereer de sitemap
    const sitemap = new Sitemap(
      allRoutes.map((route) => ({
        loc: `https://xinudesign.be${route.loc}`, // Correcte volledige URL
        changefreq: route.changefreq,
        priority: route.priority,
      }))
    );

    sitemap.save('./public/sitemap.xml'); // Sla de sitemap op

    console.log('Sitemap succesvol gegenereerd!');
  } catch (error) {
    console.error('Fout bij het genereren van de sitemap:', error.message);
  }
};

// Voer de sitemap-generator uit
generateSitemap();
