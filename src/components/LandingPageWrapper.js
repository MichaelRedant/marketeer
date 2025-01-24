import React from "react";
import { useParams } from "react-router-dom";
import LandingPage from "./LandingPage";
import sectionsData from "../sections.json";

const LandingPageWrapper = () => {
  const { slug } = useParams();
  const pageData = sectionsData.pages.find(
    (page) => page.title.toLowerCase().replace(/ /g, "-") === slug
  );

  if (!pageData) {
    return <div>Pagina niet gevonden</div>; // Toon een foutbericht als de pagina niet bestaat
  }

  return <LandingPage pageData={pageData} />;
};

export default LandingPageWrapper;
