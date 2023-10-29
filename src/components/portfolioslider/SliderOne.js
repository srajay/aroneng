import React, { useState, useEffect } from "react";
import "./sliderone.css";
import Img1 from "../../assets/sunroom/sunroom1.png";
import Img2 from "../../assets/sunroom/sunroom2.png";
import Img3 from "../../assets/sunroom/sunroom3.png";
import Img4 from "../../assets/sunroom/sunroom4.png";

const photo = [
  {
    path: Img1,
    itemName: "Image 1",
  },
  {
    path: Img2,
    itemName: "Image 2",
  },
  {
    path: Img3,
    itemName: "Image 3",
  },
  {
    path: Img4,
    itemName: "Image 4",
  },
  // Add more image paths and item names here
];

const SliderOne = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const [presentImage, setPresentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPresentImage((prevImage) => (prevImage + 1) % photo.length);
    }, 4000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="slider-one">
        <div className="slider-cover-img" onClick={toggleModal}>
          <img src={Img1} alt="img1" />
        </div>
        <h1>3D modelling and rendering for Sunroom Design</h1>

        {showModal && (
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={toggleModal}>
                &times;
              </span>
              <div className="carousel-one-container">
                <div className="carousel-one">
                  {photo.map((image, index) => {
                    return (
                      <>
                        <div
                          key={index}
                          className={`carousel-slider-one ${
                            presentImage === index ? "active" : ""
                          }`}
                          style={{
                            backgroundImage: `url(${image.path})`,
                          }}
                        ></div>
                      </>
                    );
                  })}
                </div>
                <div className="portfolio-content-card-text">
                  <h1>3D modelling and rendering for Sunroom Design</h1>
                  <h4>Location: 75 N Sherman St. Denver CO 80203</h4>
                  <p>
                    The scope of this task includes addition of a sunroom to an
                    existing 2-storey building. With a minimal interior design,
                    it integrates with the landscape while sheltering from
                    adverse weather.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
        {/* {photo.map((image, index) => (
          <div
            key={index}
            className={`carousel-slider-one ${
              presentImage === index ? "active" : ""
            }`}
            style={{
              backgroundImage: `url(${image.path})`,
            }}
          ></div>
        ))} */}
      </div>
    </>
  );
};

export default SliderOne;
