import React from "react";
import "./teameverest.css";
import BackgroundImg from "../../assets/bg3.jpg";
import SandipRegmi from "../../assets/team-img/img1.JPG";
import AashmaBashyal from "../../assets/team-img/img3.JPG";
import PrakashPant from "../../assets/team-img/img2.JPG";
import AayushSigdel from "../../assets/team-img/img5.JPG";
import SagunKandel from "../../assets/team-img/img6.JPG";
import NehaJoshi from "../../assets/team-img/img4.JPG";
import AdityaGautam from "../../assets/team-img/img7.JPG";
import RadheshShrestha from "../../assets/team-img/img8.JPG";
import SudikshyaBhandari from "../../assets/team-img/img9.JPG";
import SushmitaPhuyal from "../../assets/team-img/img10.JPG";
import GoToTop from "../GoToTop";

const DirectorData = [
  {
    path: SandipRegmi,
    fullname: "Sandip Regmi",
    designation: "Managing Director, Geotechnical Engineer",
  },
  {
    path: AashmaBashyal,
    fullname: "Aashma Bashyal",
    designation: "Director, MBA",
  },
  {
    path: PrakashPant,
    fullname: "Prakash Pant",
    designation: "Construction Director",
  },
];
const MemberData = [
  {
    path: AayushSigdel,
    fullname: "Aayush Sigdel",
    designation: "Engineering Manager , Structural Design Engineer",
  },
  {
    path: SagunKandel,
    fullname: "Sagun Kandel",
    designation: "Team Manager, Structural Design Engineer",
  },
  {
    path: NehaJoshi,
    fullname: "Neha Joshi",
    designation: "Team Manager, Structural Design Engineer",
  },
  {
    path: AdityaGautam,
    fullname: "Aditya Gautam",
    designation: "Team Manager, Structural Design Engineer",
  },
  {
    path: RadheshShrestha,
    fullname: "Radhesh Shrestha",
    designation: "Structural Design Engineer",
  },
  {
    path: SudikshyaBhandari,
    fullname: "Sudikshya Bhandari",
    designation: "Structural Design Engineer",
  },
  {
    path: SushmitaPhuyal,
    fullname: "Sushmita Phuyal",
    designation: "Structural Design Engineer",
  },
  {
    path: NehaJoshi,
    fullname: "Anusha KC",
    designation: "Civil Engineer",
  },
  {
    path: AdityaGautam,
    fullname: "Ujjwal Pant",
    designation: "Civil Engineer",
  },
  {
    path: NehaJoshi,
    fullname: "Shobita Bhattarai",
    designation: "Senior Architect",
  },
];
const TeamEverest = () => {
  return (
    <>
      {/* <div className="managing-director">
        <div className="managing-director-content">
          <img src={Profile1} alt="Sandesh Regmi" />

          <div className="managing-director-text">
            <h1>Sandip Regmi</h1>
            <h4>Managing Director, Geotechnical Engineer</h4>
            <p>
    Aron Engineering is a state-of-the-art design firm composed of a
    vibrant team of structural engineers. Each of our professionals
    are highly skilled to adopt the latest design and detailing
    requirements, international guidelines, as well as the most
    recent advancements in software tools and technology.
  </p>
          </div>
        </div>
        <div className="managing-director-content">
          <img src={Profile1} alt="Sandesh Regmi" />

          <div className="managing-director-text">
            <h1>Aashma Bashyal</h1>
            <h4>Director, MBA</h4>
            <p>
    Aron Engineering is a state-of-the-art design firm composed of a
    vibrant team of structural engineers. Each of our professionals
    are highly skilled to adopt the latest design and detailing
    requirements, international guidelines, as well as the most
    recent advancements in software tools and technology.
  </p>
          </div>
        </div>
        <div className="managing-director-content">
          <img src={Profile1} alt="Sandesh Regmi" />

          <div className="managing-director-text">
            <h1>Prakash Pant</h1>
            <h4>Construction Director, civil Engineer</h4>
            <p>
    Aron Engineering is a state-of-the-art design firm composed of a
    vibrant team of structural engineers. Each of our professionals
    are highly skilled to adopt the latest design and detailing
    requirements, international guidelines, as well as the most
    recent advancements in software tools and technology.
  </p>
          </div>
        </div>
      </div> */}
      <div className="everest-page">
        <div
          className="everest-container"
          style={{
            backgroundImage: `url(${BackgroundImg})`,
            backgroundSize: `cover`,
            backgroundPositionY: `-200px`,
          }}
        >
          <div className="everest-box">
            <div className="everest-title">
              <h1>Welcome to TeamEverest</h1>
            </div>
          </div>
        </div>
        <div className="everest-content">
          <div className="managing-director">
            {DirectorData.map((items, index) => {
              return (
                <>
                  <div key={index}>
                    <div className="managing-director-content">
                      <img src={items.path} alt={items.fullname} />

                      <div className="managing-director-text">
                        <h1>{items.fullname}</h1>
                        <h4>{items.designation}</h4>
                      </div>
                    </div>
                  </div>
                </>
              );
            })}
          </div>

          <div className="team-members">
            <div className="team-header">
              <h1>Team Members</h1>
            </div>
            <div className="members-list">
              {MemberData.map((items, index) => {
                return (
                  <>
                    <div key={index}>
                      <div className="members-list-card">
                        <img src={items.path} alt={items.fullname} />
                        <div className="members-list-card-text">
                          <h4>{items.fullname}</h4>
                          <p>{items.designation}</p>
                        </div>
                      </div>
                    </div>
                  </>
                );
              })}
            </div>
          </div>
        </div>
      </div>
      <GoToTop />
    </>
  );
};

export default TeamEverest;
