import React from "react";
import "./about.css";
import AboutImg from "../../assets/bg3.jpg";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-content">
          <div className="about-content-text">
            <p>
              Kiewit is one of North America’s largest and most respected
              engineering and construction organizations. Kiewit’s commitment to
              safety, quality and environmental stewardship are ingrained in
              everything we do. It’s visible in our core values, the work that
              we build and in our people.
            </p>
            <p>Learn more about Kiewit.</p>
          </div>
          <div className="about-btn">
            <button>Engineering</button>
            <button>Construction</button>
          </div>
        </div>
        <div className="about-img">
          <div className="img-box">
            <img src={AboutImg} alt="aboutimg" />
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
