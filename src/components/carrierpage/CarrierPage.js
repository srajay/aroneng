import React from "react";
import "./carrierpage.css";
import BackgroundImg from "../../assets/bg2.jpg";

const CarrierPage = () => {
  return (
    <>
      <div className="carrier-page">
        <div
          className="carrier-container"
          style={{
            backgroundImage: `url(${BackgroundImg})`,
            backgroundSize: `cover`,
            backgroundPositionY: `-200px`,
          }}
        >
          <div className="carrier-box">
            <div>
              <p>
                Home / <span>carrier</span>
              </p>
              <h1>CARRIER</h1>
            </div>
          </div>
        </div>
        <div className="carrier-content">
          <p>Add more section here . . .</p>
        </div>
      </div>
    </>
  );
};

export default CarrierPage;
