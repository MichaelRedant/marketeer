import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';
import { motion } from 'framer-motion';

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detecteer scrollpositie
  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <motion.nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
        isScrolled
          ? 'bg-white/70 backdrop-blur-md text-gray-800 shadow-md'
          : 'bg-blue-600 text-gray-200'
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
                      isScrolled ? 'text-gray-900' : 'text-white'
                    }`
                  : `transition duration-300 ${
                      isScrolled
                        ? 'text-gray-800 hover:text-blue-600'
                        : 'text-gray-200 hover:text-white'
                    }`
              }
            >
              {path === '/' ? 'Home' : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
            </NavLink>
          </li>
        ))}
      </ul>
    </motion.nav>
  );
}

export default Header;
