import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "../header.css";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="logo">
          XINUDESIGN
        </Link>
        <div className="hamburger-menu" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <ul className={`nav-links ${isMenuOpen ? "open" : ""}`}>
          {["/", "/about", "/services", "/werk", "/contact"].map((path, index) => (
            <li key={index}>
              <NavLink to={path} onClick={() => setIsMenuOpen(false)}>
                {path === "/"
                  ? "Home"
                  : path.substring(1).charAt(0).toUpperCase() + path.substring(2)}
              </NavLink>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}

export default Header;
