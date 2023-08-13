import React from "react";
import FullScreenCarousel from "./herosection/HeroSection";
import Services from "./services/Services";
import Projects from "./project/Projects";
import About from "./about/About";
import Quote from "./quote/Quote";

const Home = () => {
  return (
    <>
      <FullScreenCarousel />
      <About />
      <Services />
      <Quote />
      <Projects />
    </>
  );
};

export default Home;
