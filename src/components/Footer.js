import React from "react";
import socials from "../socials.json";
import { FaLinkedin, FaGithub, FaInstagram, FaFacebook } from "react-icons/fa";

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
        <p className="text-lg font-semibold mb-4">© {currentYear} Michaël Redant</p>
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
        <p className="text-sm">Gemaakt met passie voor AI, webdesign, en 3D-printing.</p>
      </div>
    </footer>
  );
}

export default Footer;
