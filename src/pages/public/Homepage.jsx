import React from "react";
import HeroSection from "../sections/HeroSection";
import AboutSection from "../sections/AboutSection";
import WhyChooseUs from "../sections/WhyChooseUs";
import FlexibleStay from "../sections/FlexibleStay";
import HowItWorks from "../sections/HowItWorks";
import ProductEcosystem from "../sections/ProductEcosystem";
import PricingAndFAQ from "../sections/PricingAndFAQ";

function Homepage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <FlexibleStay />
      <ProductEcosystem />
      <HowItWorks />
      <WhyChooseUs />
      <PricingAndFAQ />
    </>
  );
}

export default Homepage;