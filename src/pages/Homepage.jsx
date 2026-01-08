import React from "react";
import HeroSection from "./pagesSection/HeroSection";
import AboutSection from "./pagesSection/AboutSection";
import WhyChooseUs from "./pagesSection/WhyChooseUs";
import FlexibleStay from "./pagesSection/FlexibleStay";
import HowItWorks from "./pagesSection/HowItWorks";
import ProductEcosystem from "./pagesSection/ProductEcosystem";
import PricingAndFAQ from "./pagesSection/PricingAndFAQ";

function Homepage() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <WhyChooseUs />
      <FlexibleStay />
      <HowItWorks />
      <ProductEcosystem />
      <PricingAndFAQ />
    </>
  );
}

export default Homepage;