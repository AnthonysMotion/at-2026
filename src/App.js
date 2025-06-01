import React, { useEffect, useRef } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import { fadeUpAllIndividual } from "./components/gsap";

function App() {
  const appRef = useRef(null);

  useEffect(() => {
    fadeUpAllIndividual(appRef.current);
  }, []);

  return (
    <Router>
      {/* Wrap everything in this container */}
      <div ref={appRef}>
        <Navbar />
        <div style={{ minHeight: "80vh", padding: "2rem" }}>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/contact" element={<Contact />} />
          </Routes>
        </div>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
