import React, { useState, useEffect } from "react";
import "./sliderone.css";
import Img1 from "../../assets/padampokhariviewtower/ViewTower.jpg";
import Arrow from "./SliderArrow";

const photo = [
  {
    path: Img1,
    itemName: "Image 1",
  },

  // Add more image paths and item names here
];

const SliderEight = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };
  const [presentImage, setPresentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPresentImage((prevImage) => (prevImage + 1) % photo.length);
    }, 10000); // Change slide every 2 seconds

    return () => clearInterval(interval);
  }, []);

  const nextSlide = () => {
    setPresentImage((presentImage + 1) % photo.length);
  };

  const prevSlide = () => {
    setPresentImage((presentImage - 1 + photo.length) % photo.length);
  };

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      toggleModal();
    }
  };

  return (
    <>
      <div className="slider-one">
        <div className="slider-cover-img" onClick={toggleModal}>
          <img src={Img1} alt="img1" />
        </div>
        <h1>Padam Pokhari View Tower</h1>
        {showModal && (
          <div className="modal" onClick={handleOverlayClick}>
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
                  <div className="slider-arrow-symbol">
                    <Arrow direction="prev" onClick={prevSlide} />
                    <Arrow direction="next" onClick={nextSlide} />
                  </div>
                </div>
                <div className="portfolio-content-card-text">
                  {/* <h1>Padam Pokhari View Tower</h1> */}
                  <h4>Location: Hetauda, Nepal</h4>
                  <p>
                    The scope of this task included the design of a view tower
                    to capture the breathtaking view of Padam Pokhari.
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

export default SliderEight;
