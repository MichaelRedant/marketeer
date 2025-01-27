import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Locaties from "./components/locaties";
import Werk from "./components/Werk";
import AdminPanel from "./components/Admin"; // Zorg dat dit verwijst naar het AdminPanel-bestand
import ServicePage from "./components/ServicePage";
import TermsAndConditions from "./components/TermsAndConditions";
import CookiePolicy from "./components/CookiePolicy";
import sectionsData from "./sections.json"; 
import LandingPage from "./components/LandingPage";
import NotFound from "./components/notFound";
import BlogPage from "./components/BlogPage";
import BlogPost from "./components/BlogPost";

// Variants for page transitions
const pageVariants = {
  initial: {
    opacity: 0,
    y: 30,
  },
  animate: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
  exit: {
    opacity: 0,
    y: -30,
    transition: { duration: 0.3, ease: "easeIn" },
  },
};

// Dynamische servicepagina toevoegen
function AnimatedRoutes() {
  const location = useLocation();

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        <Route
          path="/"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
            >
              <Home />
            </motion.div>
          }
        />
        <Route
          path="/about"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
            >
              <About />
            </motion.div>
          }
        />
        <Route
          path="/services"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
            >
              <Services />
            </motion.div>
          }
        />
        <Route
          path="/services/:serviceId"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
            >
              <ServicePage />
            </motion.div>
          }
        />
        <Route
          path="/werk"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
            >
              <Werk />
            </motion.div>
          }
        />
        <Route
          path="/contact"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
            >
              <Contact />
            </motion.div>
          }
        />
        <Route
          path="/locaties"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
            >
              <Locaties />
            </motion.div>
          }
        />
        <Route
          path="/admin/*"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
            >
              <AdminPanel />
            </motion.div>
          }
        />
        <Route
          path="/blog"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
            >
              <BlogPage />
            </motion.div>
          }
        />
        <Route
          path="/blog/:slug"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
            >
              <BlogPost />
            </motion.div>
          }
        />
        <Route
          path="/algemene-voorwaarden"
          element={
            <motion.div
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageVariants}
            >
              <TermsAndConditions />
            </motion.div>
          }
        />
       <Route
  path="/:location/:service"
  element={
    <motion.div
      initial="initial"
      animate="animate"
      exit="exit"
      variants={pageVariants}
    >
      <LandingPage />
    </motion.div>
  }
/>


        <Route path="*" element={<NotFound />} />
      </Routes>
    </AnimatePresence>
  );
}

// Main App component
function App() {
  return (
    <Router>
      <ScrollToTop />
      <div className="flex flex-col min-h-screen">
        {/* Header */}
        <Header />

        {/* Main Content */}
        <div className="flex-grow">
          <AnimatedRoutes />
        </div>

        {/* Footer */}
        <Footer />
      </div>
    </Router>
  );
}

export default App;
