import React from "react";
import socials from "../socials.json";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";
import { Link } from "react-router-dom"; // Zorg dat je Link gebruikt voor interne navigatie

const icons = {
  FaLinkedin,
  FaGithub,
  FaInstagram,
  FaFacebook,
};

function Footer() {
  const currentYear = new Date().getFullYear(); // Automatisch het huidige jaar

  return (
    <footer className="bg-primary text-white py-8">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Titel en jaartal */}
        <p className="text-lg font-semibold text-white mb-4">
          © {currentYear} Michaël Redant
        </p>

        {/* Social Media Links */}
        <div className="flex justify-center space-x-6 mb-4">
          {socials.map((social) => {
            const Icon = icons[social.icon];
            return (
              <a
                key={social.name}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[var(--background-color)] hover:text-[var(--text-color)] text-2xl transition duration-300"
                title={social.name}
              >
                <Icon />
              </a>
            );
          })}
        </div>

        {/* Links naar pagina's */}
        <div className="text-sm space-y-2">
          {/* Toegevoegde link naar locaties */}
          <p>
            <Link
              to="/locaties"
              className="underline hover:text-gray-300 transition duration-300"
            >
              Bekijk onze diensten per locatie
            </Link>
          </p>

          <p className="text-white">Gemaakt met passie voor AI, webdesign, en 3D-printing.</p>

          <div className="text-white">
            <Link
              to="/algemene-voorwaarden"
              className="underline hover:text-gray-300 transition duration-300"
            >
              Algemene Voorwaarden
            </Link>
            {" | "}
            <Link
              to="/cookiebeleid"
              className="underline hover:text-gray-300 transition duration-300"
            >
              Cookiebeleid
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
