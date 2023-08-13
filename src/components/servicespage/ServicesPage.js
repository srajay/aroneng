import React from "react";
import "./servicespage.css";
import BackgroundImg from "../../assets/bg2.jpg";

const ServicesPage = () => {
  return (
    <>
      <div className="services-page">
        <div
          className="services-container"
          style={{
            backgroundImage: `url(${BackgroundImg})`,
            backgroundSize: `cover`,
            backgroundPositionY: `-200px`,
          }}
        >
          <div className="services-box">
            <div>
              <p>
                Home / <span>services</span>
              </p>
              <h1>SERVICES PAGE</h1>
            </div>
          </div>
        </div>
        <div className="services-content">
          <p>Add more section here . . .</p>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
