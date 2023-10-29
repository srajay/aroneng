import React, { useState, useEffect } from "react";
import "./sliderone.css";
import Img1 from "../../assets/Shiva Statue/ShivaStatue1.jpg";

const photo = [
  {
    path: Img1,
    itemName: "Image 1",
  },

  // Add more image paths and item names here
];

const SliderTwenty = () => {
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
        <h1>Shiva Statue</h1>
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
                  <h1>Shiva Statue</h1>
                  <h4>Location: Baglung</h4>
                  <p>
                    Design of Shiva and Ganesh statue as part of the park
                    landscaping project.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </div>
    </>
  );
};

export default SliderTwenty;
