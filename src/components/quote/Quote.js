import React from "react";
import "./quote.css";
import { Parallax } from "react-parallax";
import BuildingImg from "../../assets/bg2.jpg";

const Quote = () => {
  return (
    <>
      <div className="quote">
        <div className="quote-container">
          <Parallax strength={600} bgImage={BuildingImg}>
            <div className="quote-content">
              <div className="quote-text">
                <h1>
                  When you have a dream, you've got to grab it and never let go.
                </h1>
                <p>Carol Burnett</p>
              </div>
            </div>
          </Parallax>
        </div>
      </div>
    </>
  );
};

export default Quote;
