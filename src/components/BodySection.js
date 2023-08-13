import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./Home";
import PortfolioPage from "./portfoliopage/PortfolioPage";
import ServicesPage from "./servicespage/ServicesPage";
import ContactPage from "./contactpage/ContactPage";
import MeetusPage from "./meetuspage/MeetusPage";
import CarrierPage from "./carrierpage/CarrierPage";

const BodySection = () => {
  return (
    <>
      <div className="bodysection">
        <Routes>
          <Route path="/" exact element={<Home />}></Route>
          <Route path="/portfolio" exact element={<PortfolioPage />}></Route>
          <Route path="/services" exact element={<ServicesPage />}></Route>
          <Route path="/meetus" exact element={<MeetusPage />}></Route>
          <Route path="/carrier" exact element={<CarrierPage />}></Route>
          <Route path="/contact" exact element={<ContactPage />}></Route>
        </Routes>
      </div>
    </>
  );
};

export default BodySection;
