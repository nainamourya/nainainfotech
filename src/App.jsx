import { useState } from "react";
import "./App.css";

import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import AboutUs from "./components/AboutUs";
import Services from "./components/Services";
import CTASection from "./components/CTASection";
import BlogSection from "./components/BlogSection";
import About from "./components/Pages/About";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import WebsiteDesign from "./components/Pages/WebsiteDesign";
import AdvancedSEO from "./components/Pages/AdvancedSEO";
import LogoDesign from "./components/Pages/LogoDesign";
import PostDesign from "./components/Pages/PostDesign";
import BlogPage from "./components/Pages/BlogPage";
import BlogDetail from "./components/Pages/BlogDetail";
import ContactPage from "./components/Pages/ContactPage";

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

        {/* ✅ About page */}
        <Route path="/about" element={<About />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<BlogDetail />} />
        <Route path="/contact" element={<ContactPage />} />

        {/* ✅ Services pages */}
        <Route path="/services/website-design" element={<WebsiteDesign />} />
        <Route path="/services/advanced-seo" element={<AdvancedSEO />} />
        <Route path="/services/logo-design" element={<LogoDesign />} />
        <Route path="/services/post-design" element={<PostDesign />} />
      </Routes>
      <Footer />
    </Router>
  );
}

export default App;
