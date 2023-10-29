import React from "react";
import "./carrierpage.css";
import BackgroundImg from "../../assets/bg2.jpeg";
import GoToTop from "../GoToTop";

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
          <h1>
            Currently We Are Not Providing Any Type Of Carrers Opportunity. Even
            If You Are Interested Then, Please Fill The Form Below
          </h1>
          <div className="carrer-input-field">
            <input
              type="text"
              name="fullname"
              id="fullname"
              placeholder="Your Name"
              required
            />
            <input
              type="email"
              name="email"
              id="email"
              placeholder="Your Email"
              required
            />
            <div className="file-upload">
              <input type="file" id="myFile" name="filename"></input>
            </div>
          </div>
        </div>
      </div>
      <GoToTop />
    </>
  );
};

export default CarrierPage;
