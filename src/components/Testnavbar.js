import React, { useState, useEffect, useRef } from "react";
import "./testnavbar.css";
import NavSection from "./navbar/NavSection";

const Testnavbar = () => {
  const [isSticky, setIsSticky] = useState(false);
  const heroRef = useRef(null);
  const navbarRef = useRef(null);

  useEffect(() => {
    const heroObserver = new IntersectionObserver(
      ([entry]) => {
        setIsSticky(!entry.isIntersecting);
      },
      {
        root: null,
        rootMargin: "-100px",
        threshold: 0,
      }
    );
    const currentHeroRef = heroRef.current;

    if (currentHeroRef) {
      heroObserver.observe(currentHeroRef);
    }

    return () => {
      if (currentHeroRef) {
        heroObserver.unobserve(currentHeroRef);
      }
    };
  }, []);
  return (
    <div>
      <nav ref={navbarRef} className={`navbar ${isSticky ? "sticky" : ""}`}>
        {/* <p>home</p>
        <p>about</p>
        <p>work</p>
        <p>services</p>
        <p>contact</p> */}
        <NavSection />
      </nav>
      <div ref={heroRef} className="hero">
        <h1>This is hero section</h1>
      </div>

      <div className="content">
        <h1>this is services</h1>
      </div>
    </div>
  );
};

export default Testnavbar;
