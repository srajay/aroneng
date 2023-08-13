import React from "react";
import "./portfoliopage.css";
import BackgroundImg from "../../assets/bg2.jpg";

const PortfolioPage = () => {
  return (
    <>
      <div className="portfolio-page">
        <div
          className="portfolio-container"
          style={{
            backgroundImage: `url(${BackgroundImg})`,
            backgroundSize: `cover`,
            backgroundPositionY: `-200px`,
          }}
        >
          <div className="portfolio-box">
            <div>
              <p>
                Home / <span>portfolio</span>
              </p>
              <h1>PORTFOLIO</h1>
            </div>
          </div>
        </div>
        <div className="portfolio-content">
          <p>Add more section here . . .</p>
        </div>
      </div>
    </>
  );
};

export default PortfolioPage;
