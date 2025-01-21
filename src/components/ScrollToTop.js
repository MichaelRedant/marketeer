import React, { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import { FaChevronUp } from "react-icons/fa"; // Zorg ervoor dat je react-icons hebt geïnstalleerd

function ScrollToTop() {
  const { pathname } = useLocation();
  const [isVisible, setIsVisible] = useState(false);

  // Scroll naar boven bij routeverandering
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [pathname]);

  // Controleer scrollpositie
  useEffect(() => {
    const toggleVisibility = () => {
      if (window.scrollY > 100) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibility);
    return () => window.removeEventListener("scroll", toggleVisibility);
  }, []);

  // Scroll naar boven bij knopklik
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      {isVisible && (
        <button
          onClick={scrollToTop}
          className="fixed bottom-8 right-8 p-3 bg-primary text-white rounded-full shadow-lg hover:bg-hover-primary transition duration-300 flex items-center justify-center"
          style={{ zIndex: 1000 }}
        >
          <FaChevronUp size={20} />
        </button>
      )}
    </>
  );
}

export default ScrollToTop;
