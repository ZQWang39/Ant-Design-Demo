import React from "react";
import About from "../components/home/About";
import Contact from "../components/home/Contact";
import Faq from "../components/home/Faq";
import Feature from "../components/home/Feature";
import Hero from "../components/home/Hero";
import Pricing from "../components/home/Pricing";
import Works from "../components/home/Works";

const Home = () => {
  return (
    <div className="main">
      <Hero />
      <About />
      <Feature />
      <Works />
      <Faq />
      <Pricing />
      <Contact />
    </div>
  );
};

export default Home;
