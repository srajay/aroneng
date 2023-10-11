import React from "react";
import "./teamelbert.css";
import Profile1 from "../../assets/bg3.jpg";

const TeamElbert = () => {
  return (
    <>
      <div className="elbert-page">
        <div
          className="elbert-container"
          style={{
            backgroundImage: `url(${Profile1})`,
            backgroundSize: `cover`,
            backgroundPositionY: `-200px`,
          }}
        >
          <div className="elbert-box">
            <div className="elbert-title">
              <h1>Welcome to TeamElbert</h1>
            </div>
          </div>
        </div>
        <div className="elbert-content">
          <div className="ceo">
            <div className="director-img">
              <img src={Profile1} alt="kyle o'Hearn" />
            </div>
            <div className="director-text">
              <h1>Kyle O'Hearn</h1>
              <h4>CEO, Structural Engineer</h4>
              <p>
                Aron Engineering is a state-of-the-art design firm composed of a
                vibrant team of structural engineers. Each of our professionals
                are highly skilled to adopt the latest design and detailing
                requirements, international guidelines, as well as the most
                recent advancements in software tools and technology.
              </p>
            </div>
          </div>
          <div className="president">
            <div className="director-img">
              <img src={Profile1} alt="dinesh raj panta" />
            </div>
            <div className="director-text">
              <h1>Dinesh Raj Panta</h1>
              <h4>President, Structural Engineer</h4>
              <p>
                Aron Engineering is a state-of-the-art design firm composed of a
                vibrant team of structural engineers. Each of our professionals
                are highly skilled to adopt the latest design and detailing
                requirements, international guidelines, as well as the most
                recent advancements in software tools and technology.
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamElbert;
