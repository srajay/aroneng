import React, { useState, useEffect } from "react";
import "./sliderone.css";
import Arrow from "./SliderArrow";
import Img1 from "../../assets/adu/adu1.png";
import Img2 from "../../assets/adu/adu2.png";
import Img3 from "../../assets/adu/adu3.png";
import Img4 from "../../assets/adu/adu4.png";
import Img5 from "../../assets/adu/adu5.png";
import Img6 from "../../assets/adu/adu6.png";

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
  {
    path: Img5,
    itemName: "Image 5",
  },
  {
    path: Img6,
    itemName: "Image 6",
  },
  // Add more image paths and item names here
];

const SliderTwo = () => {
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
        <h1>Accessory Dwelling Unit (ADU) Design</h1>
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
                  {/* <h1>Accessory Dwelling Unit (ADU) Design</h1> */}
                  <h4>Location: 2241 Florence St. Aurora CO</h4>
                  <p>
                    The scope of the task included an addition of ADU. The
                    requirement of the client was a family room, kitchen along
                    with a bedroom and wash closet with the proposed opening.
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

export default SliderTwo;
