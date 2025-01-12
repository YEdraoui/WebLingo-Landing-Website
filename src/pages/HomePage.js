import React from "react";
import HeroSection from "../components/HeroSection";
import Testimonials from "../components/Testimonials";
import Pricing from "../components/Pricing";

function HomePage() {
  return (
    <div className="home-page">
      <HeroSection />
      <Testimonials />
      <Pricing />
    </div>
  );
}

export default HomePage;