/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}", // Scant alle relevante bestanden
  ],
  theme: {
    extend: {
      // Animaties
      animation: {
        fadeIn: "fadeIn 0.3s ease-in-out", // Bestaande animatie behouden
        hoverGradient: "hoverGradient var(--hover-duration) ease-in-out", // Nieuwe hover animatie
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: 0 },
          "100%": { opacity: 1 },
        },
        hoverGradient: {
          "0%": { backgroundPosition: "left bottom" },
          "100%": { backgroundPosition: "right top" },
        },
      },

      // Kleuren (op basis van CSS-variabelen)
     colors: {
        "primary": "var(--primary-color)",
        "secondary": "var(--secondary-color)",
        "background": "var(--background-color)",
        "text": "var(--text-color)",
        "hover": "var(--hover-color)",
        "on-dark": "var(--text-on-dark)",
        "on-primary": "var(--text-on-primary)",
        "on-primary-light": "var(--text-on-primary-light)",
        "on-card-light": "var(--text-on-card-light)",
      },

      // Lettertypes
      fontFamily: {
        primary: "var(--font-primary)", // Primaire lettertype
        secondary: "var(--font-secondary)", // Secundaire lettertype
      },

      // Font weights
      fontWeight: {
        light: 'var(--font-weight-light)',
        regular: 'var(--font-weight-regular)',
        medium: 'var(--font-weight-medium)',
        semibold: 'var(--font-weight-semibold)',
        bold: 'var(--font-weight-bold)',
      },

      // Gradients voor hover-effecten
      gradientColorStops: {
        hover: {
          start: "var(--hover-gradient-start)",
          end: "var(--hover-gradient-end)",
        },
      },

      // Transitie instellingen
      transitionDuration: {
        hover: "var(--hover-duration)",
      },
    },
  },
  plugins: [], // Plugins kunnen hier worden toegevoegd
};
