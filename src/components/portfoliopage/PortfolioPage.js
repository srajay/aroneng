import React from "react";
import "./portfoliopage.css";
import BackgroundImg from "../../assets/bg2.jpeg";
import { Data } from "./PortfolioData";
// import SliderOne from "../portfolioslider/SliderOne";
import GoToTop from "../GoToTop";

const PortfolioPage = () => {
  return (
    <>
      <div className="portfolio-page">
        <div
          className="portfolio-container"
          style={{
            backgroundImage: `url(${BackgroundImg})`,
            backgroundSize: `cover`,
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
          {/* <div className="hr-line"></div> */}
          {/* {Data.map((items, index) => {
            return (
              <>
                <div key={index} className="content-card-container">
                  <div className="content-card">
                    <div className="content-card-img">
                      <img
                        src={items.images}
                        alt="3D modelling and rendering"
                      />
                    </div>
                    <div className="content-card-text">
                      <h1>{items.title}</h1>
                      <h4>{items.location}</h4>
                      <p>{items.para}</p>
                    </div>
                  </div>
                  <div className="hr-line"></div>
                </div>
              </>
            );
          })}  */}

          {Data.map((items, index) => {
            return (
              <>
                <div key={index} className="portfolio-content-card">
                  <div className="portfolio-content-card-img">
                    {/* <img src={items.images} alt={items.title} /> */}
                    {items.slider}
                  </div>
                  {/* <div className="portfolio-content-card-text">
                    <h1>{items.title}</h1>
                    <h4>{items.location}</h4>
                    <p>{items.para}</p>
                  </div> */}
                </div>
              </>
            );
          })}
        </div>
      </div>
      <GoToTop />
    </>
  );
};

export default PortfolioPage;
