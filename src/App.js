import React from "react";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import ScrollToTop from "./components/ScrollToTop";
import Header from "./components/Header";
import Footer from "./components/Footer";
import routes from "./routes.json";
import Home from "./components/Home";
import About from "./components/About";
import Services from "./components/Services";
import Contact from "./components/Contact";
import Werk from "./components/Werk";
import AdminPanel from "./components/Admin"; // Zorg dat dit verwijst naar het AdminPanel-bestand

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

// Component for animated routes
function AnimatedRoutes() {
  const location = useLocation();

  const routeComponents = {
    "/": Home,
    "/about": About,
    "/services": Services,
    "/werk": Werk,
    "/contact": Contact,
  };

  return (
    <AnimatePresence mode="wait">
      <Routes key={location.pathname} location={location}>
        {routes.map((path) => {
          const Component = routeComponents[path];
          return (
            <Route
              key={path}
              path={path}
              element={
                <motion.div
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={pageVariants}
                >
                  <Component />
                </motion.div>
              }
            />
          );
        })}
        {/* Admin Dashboard Route */}
        <Route
          path="/admin/*" // Gebruik * zodat nested routes binnen AdminPanel werken
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
