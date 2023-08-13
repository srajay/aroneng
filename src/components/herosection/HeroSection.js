import React, { useState, useEffect } from "react";
import "./herosection.css";
import "animate.css";
import Img1 from "../../assets/bg1.jpg";
import Img2 from "../../assets/bg2.jpg";

const images = [
  {
    path: Img1,
    itemName: "Image 1",
    title:
      "FROM FOOD AND BEEVRAGE TO METALS AND PULP AND PAPER, PROJECT DELIVERY SOLUTIONS ACROSS INDUSTRIAL MARKETS.",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    path: Img2,
    itemName: "Image 2",
    title:
      "The art of medicine consists of amusing the patient while nature cures the disease.",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  {
    path: Img1,
    itemName: "Image 3",
    title: "Empowering Health and Wellness for Your Path to a Vibrant Life.",
    para: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
  },
  // Add more image paths and item names here
];

const FullScreenCarousel = () => {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((prevImage) => (prevImage + 1) % images.length);
    }, 10000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  const handleItemClick = (index) => {
    setCurrentImage(index);
  };

  return (
    <div className="full-screen-carousel">
      {images.map((image, index) => (
        <div
          key={index}
          className={`carousel-slide ${currentImage === index ? "active" : ""}`}
          style={{
            backgroundImage: `url(${image.path})`,
          }}
        >
          <div className="hero-container">
            <div key={index} className="hero-content">
              <div className="hero-title">
                <h1>
                  <mark>{image.title}</mark>
                </h1>
              </div>
              <div className="hero-para">
                <p>{image.para}</p>
              </div>
              <div className="hero-cta">
                <button>Learn more about {image.itemName}</button>
              </div>
            </div>
          </div>
        </div>
      ))}

      {/* Slide show indicator */}

      <ol className="carousel-list">
        {images.map((image, index) => (
          <li
            key={index}
            className={currentImage === index ? "active" : ""}
            onClick={() => handleItemClick(index)}
          >
            {image.itemName}
          </li>
        ))}
      </ol>
    </div>
  );
};

export default FullScreenCarousel;
