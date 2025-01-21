import React, { useState, useEffect } from "react";
import { NavLink, Link } from "react-router-dom";
import "../header.css";

function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav className={`navbar ${isScrolled ? "scrolled" : ""}`}>
      <div className="navbar-container">
        <Link to="/" className="logo">
          XINUDESIGN
        </Link>
        <ul className="nav-links">
          {["/", "/about", "/services", "/werk", "/contact"].map((path, index) => (
            <li key={index}>
              <NavLink to={path}>
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
