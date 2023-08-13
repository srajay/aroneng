import React from "react";
import "./projects.css";
import Img1 from "../../assets/bg1.jpg";
import Img2 from "../../assets/bg2.jpg";

const Projects = () => {
  const carddata = [
    {
      path: Img1,
      itemName: "Image 1",
      location: "kathmandu",
    },
    {
      path: Img2,
      itemName: "Image 2",
      location: "kathmandu",
    },
    {
      path: Img1,
      itemName: "Image 3",
      location: "kathmandu",
    },
    {
      path: Img2,
      itemName: "Image 4",
      location: "kathmandu",
    },
    {
      path: Img1,
      itemName: "Image 5",
      location: "kathmandu",
    },
    {
      path: Img2,
      itemName: "Image 6",
      location: "kathmandu",
    },
  ];
  return (
    <>
      <div className="project-section">
        <div className="project-content">
          <h1>Our Projects</h1>
        </div>
        <div className="project-card">
          {carddata.map((item, index) => (
            <div key={index} className="card-box">
              <img src={item.path} alt={item.itemName} />
              <div className="overlay">
                <h4>{item.itemName}</h4>
                <p>{item.location}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
