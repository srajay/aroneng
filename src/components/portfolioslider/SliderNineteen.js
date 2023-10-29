import React, { useState, useEffect } from "react";
import "./sliderone.css";
import Img1 from "../../assets/Hyper-mart and Cafe/shop1.jpg";
import Img2 from "../../assets/Hyper-mart and Cafe/shop2.jpg";
import Img3 from "../../assets/Hyper-mart and Cafe/shop3.jpg";

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

  // Add more image paths and item names here
];

const SliderNineteen = () => {
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
        <h1>Hyper-mart & Café</h1>
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
                  <h1>Hyper-mart & Café</h1>
                  <h4>Location: Kavre</h4>
                  <p>
                    Design of a hyper-mart with various shop outlets and a café.
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

export default SliderNineteen;
