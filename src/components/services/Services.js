import React from "react";
import "animate.css";
import "./services.css";
import { Data } from "./Data";

const Services = () => {
  return (
    <>
      <div className="services">
        <div className="services-content">
          <div className="services-title">
            <h1>Construction and Structural Engineering Services</h1>
          </div>
          <div className="services-cta">
            <button>More Services</button>
          </div>
        </div>
        <div className="card ">
          {Data.map((item, index) => (
            <div key={index} className="services-card">
              <img src={item.img} alt={item.title} />

              <div className="card-text">
                <h3>{item.title}</h3>
                <span>Contact Us</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Services;
