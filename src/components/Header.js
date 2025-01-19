import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [headerHeight, setHeaderHeight] = useState(0);

  // Detecteer scrollpositie
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50); // Stel in op true als er gescrold is
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Stel headerhoogte in voor de marges
  useEffect(() => {
    const headerElement = document.querySelector('nav');
    if (headerElement) {
      setHeaderHeight(headerElement.offsetHeight);
    }
  }, []);

  // Bereken dynamische margin alleen als er gescrold is of op andere pagina's
  const dynamicMargin = isScrolled ? `${headerHeight}px` : '0';

  return (
    <>
      <motion.nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          isScrolled
            ? 'bg-white/90 backdrop-blur-md text-black shadow-md' // Bij scrollen
            : 'bg-transparent text-black' // Zonder scroll
        }`}
      >
        <ul className="flex justify-center space-x-6 p-4">
          {['/', '/about', '/services', '/werk', '/contact'].map((path, index) => (
            <li key={index}>
              <NavLink
                to={path}
                className={({ isActive }) =>
                  isActive
                    ? `font-bold underline transition duration-300 ${
                        isScrolled ? 'text-gray-900' : 'text-black'
                      }`
                    : `transition duration-300 ${
                        isScrolled
                          ? 'text-gray-800 hover:text-blue-600'
                          : 'text-black hover:text-gray-600'
                      }`
                }
              >
                {path === '/'
                  ? 'Home'
                  : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
              </NavLink>
            </li>
          ))}
        </ul>
      </motion.nav>

      {/* Dynamische margin afhankelijk van scrollen */}
      <div style={{ marginTop: dynamicMargin }} />
    </>
  );
}

export default Header;
