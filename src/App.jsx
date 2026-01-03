import React from "react";
import Hero from "./Hero"
import StatsSection from "./StatsSection";
import ServicesSection from "./ServiceSection";
import TestimonialsSection from "./TestimonialSection";
import FormSection from "./FormSection";
import Footer from "./Footer";
import FunActivities from "./FunActivities";
import QnASection from "./QnASection";
import AboutFounder from "./AboutFounder";
import Pricing from "./Pricing";
import "./index.css"; // ✅ correct

function App() {
 

  return (
    <>
      <Hero />
      <StatsSection/>
       <FunActivities />
      <ServicesSection />
      <AboutFounder/>
      <TestimonialsSection />
      <Pricing />
      <FormSection />
      <QnASection />
      <Footer />
      
    </>
  )
}

export default App
