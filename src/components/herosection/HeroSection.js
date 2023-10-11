import React, { useState, useEffect } from "react";
import "./herosection.css";
import "animate.css";
import Img1 from "../../assets/bg1.jpg";
import Img2 from "../../assets/bg2.jpeg";

const images = [
  {
    path: Img1,
    itemName: "Image 1",
    title: "Draft your imagination with us!",
    para: "Our dedicated architects provide the best 3D modelling and rendering services for both commercial and residential structures. Be it interior or exterior, we here at Aron integrate your design ideas with our creative thoughts to make your visions a reality.",
  },
  {
    path: Img2,
    itemName: "Image 2",
    title: "Structural Design",
    para: "With innovative and cost-effective structural solutions, our technical team expertise on design of timber, steel and concrete construction and any other structural material standards throughout the industry.",
  },
  {
    path: Img1,
    itemName: "Image 3",
    title: "Collaboration with DEKAT Engineering LLC",
    para: "Pulling our roots from the other end of the globe, we provide 24/7 hours services with an integrated technical team that can deliver collaborative solutions.",
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
              {/* <div className="hero-cta">
                <button>Learn more about {image.itemName}</button>
              </div> */}
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
