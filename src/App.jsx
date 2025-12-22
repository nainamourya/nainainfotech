import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import CTASection from "./components/CTASection";
import BlogSection from "./components/BlogSection";

import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import WebsiteDesign from "./components/Pages/WebsiteDesign";
// (Later you can add more pages like AdvancedSEO, LogoDesign, etc.)

function App() {
  const [count, setCount] = useState(0);

  return (
    <Router>
      <Navbar />

      <Routes>
        {/* ✅ Home page */}
        <Route
          path="/"
          element={
            <>
              <Hero />
              <AboutUs />
              <Services />
              <CTASection />
              <BlogSection />
            </>
          }
        />

        {/* ✅ Service page must match Navbar link */}
        <Route path="/services/website-design" element={<WebsiteDesign />} />
      </Routes>

      <Footer />
    </Router>
  );
}

export default App;
