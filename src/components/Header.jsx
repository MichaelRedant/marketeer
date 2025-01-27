import React, { useState, useEffect } from "react";
import { NavLink, Link, useLocation } from "react-router-dom";
import "../header.css";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const isWerkPage = location.pathname === "/werk";

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
    <nav
      className={`navbar ${isScrolled ? "scrolled" : ""} ${
        isWerkPage && !isScrolled ? "werk-page" : ""
      }`}
    >
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
          {["/", "/about", "/services", "/werk", "/blog", "/contact"].map((path, index) => (
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
