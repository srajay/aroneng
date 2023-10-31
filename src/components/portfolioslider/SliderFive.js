import React, { useState, useEffect } from "react";
import "./sliderone.css";
import Arrow from "./SliderArrow";
import Img1 from "../../assets/deckdesign/deskdesign1.jpg";
import Img2 from "../../assets/deckdesign/deckdesign2.png";
import Img3 from "../../assets/deckdesign/deckdesign3.jpg";
import Img4 from "../../assets/deckdesign/deckdesign4.png";

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

const SliderFive = () => {
  const [showModal, setShowModal] = useState(false);
  const toggleModal = () => {
    setShowModal(!showModal);
  };

  const [presentImage, setPresentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setPresentImage((prevImage) => (prevImage + 1) % photo.length);
    }, 4000); // Change slide every 5 seconds

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
        <h1>Deck Design</h1>
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
                  {/* <h1>Deck Design</h1> */}
                  <h4>
                    Location: Multiple locations for different states in the
                    United States
                  </h4>
                  <p>
                    An entire deck design includes engineering of all the
                    structural components in a deck with additional accessories
                    such as fire-place, hot-tub designed with applicable loads
                    and code regulations with proper 2D detailing and 3D
                    rendering for the client.
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

export default SliderFive;
