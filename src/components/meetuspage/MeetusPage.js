import React from "react";
import "./meetuspage.css";
import BackgroundImg from "../../assets/bg2.jpg";

const MeetusPage = () => {
  return (
    <>
      <div className="meetus-page">
        <div
          className="meetus-container"
          style={{
            backgroundImage: `url(${BackgroundImg})`,
            backgroundSize: `cover`,
            backgroundPositionY: `-200px`,
          }}
        >
          <div className="meetus-box">
            <div>
              <p>
                Home / <span>meetus</span>
              </p>
              <h1>MEETUS</h1>
            </div>
          </div>
        </div>
        <div className="meetus-content">
          <p>Add more section here . . .</p>
        </div>
      </div>
    </>
  );
};

export default MeetusPage;
