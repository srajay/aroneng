import React from "react";
import "./about.css";
// import AboutImg from "../../assets/bg3.jpg";

const About = () => {
  return (
    <>
      <div className="about">
        <div className="about-content">
          <div className="about-content-text">
            <p>
              Aron Engineering is a Nepal based design firm which mainly caters
              to structural design of components, drafting, modelling and
              rendering of structures. Regardless of complexity or scale, our
              dynamic team's professional standards, technical excellence, safe,
              innovative and sustainable engineering solutions are crafted to
              empower your challenging projects.
            </p>
            <p>
              Our collaboration with DEKAT Engineering LLC offers an integrated
              technical team comprised of highly competent engineers and
              architects from both Nepal and the United States ensuring the
              highest-quality, cost-effective products on time which is our
              primary objective.
            </p>
            {/* <p>Learn more about DEKAT.</p> */}
          </div>
          <div className="about-btn">
            <a
              href="https://dekatengineering.com/"
              target="_blank"
              rel="noreferrer noopener"
            >
              <button>Learn more about DEKAT</button>
            </a>

            {/* <button>Construction</button> */}
          </div>
        </div>
        <div className="about-data">
          <div className="data">
            <div className="side-rectangle"></div>
            <div className="data-content">
              <h1>Fast Turnaround</h1>
              <p>
                24/7 working hours with experts from both Nepal and United
                States
              </p>
            </div>
          </div>

          <div className="data">
            <div className="side-rectangle"></div>
            <div className="data-content">
              <h1>Licensed Professionals</h1>
              <p>
                Experts with hands-on experience familiar with world-wide design
                codes
              </p>
            </div>
          </div>
          <div className="data">
            <div className="side-rectangle"></div>
            <div className="data-content">
              <h1>Integrated and cost-effective products</h1>
              <p>
                Delivering a comprehensive answer to all of your structural and
                architectural needs
              </p>
            </div>
          </div>
        </div>
        {/* <div className="about-img">
          <div className="img-box">
            <img src={AboutImg} alt="aboutimg" />
          </div>
        </div> */}
      </div>
    </>
  );
};

export default About;
