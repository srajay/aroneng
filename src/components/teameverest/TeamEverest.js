import React from "react";
import "./teameverest.css";
import BackgroundImg from "../../assets/bg3.jpg";
import Profile1 from "../../assets/bg3.jpg";

const TeamEverest = () => {
  return (
    <>
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
            <div className="managing-director-img">
              <img src={Profile1} alt="Sandesh Regmi" />
            </div>
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
          <div className="team-members">
            <div className="team-header">
              <h1>Team Members</h1>
            </div>
            <div className="members-list">
              <div className="members-list-card">
                <img src={Profile1} alt="prakash panta" />
                <div className="members-list-card-text">
                  <h4>Prakash Panta</h4>
                  <p>Manager, Civil Engineer</p>
                </div>
              </div>
              <div className="members-list-card">
                <img src={Profile1} alt="prakash panta" />
                <div className="members-list-card-text">
                  <h4>Aayush Sigdel</h4>
                  <p>Engineering Manager , Structural Design Engineer</p>
                </div>
              </div>
              <div className="members-list-card">
                <img src={Profile1} alt="prakash panta" />
                <div className="members-list-card-text">
                  <h4>Sagun Kandel</h4>
                  <p>Team Manager, Structural Design Engineer</p>
                </div>
              </div>
              <div className="members-list-card">
                <img src={Profile1} alt="prakash panta" />
                <div className="members-list-card-text">
                  <h4>Neha Joshi</h4>
                  <p>Team Manager, Structural Design Engineer</p>
                </div>
              </div>
              <div className="members-list-card">
                <img src={Profile1} alt="prakash panta" />
                <div className="members-list-card-text">
                  <h4>Aditya Gautam</h4>
                  <p>Team Manager, Structural Design Engineer</p>
                </div>
              </div>
              <div className="members-list-card">
                <img src={Profile1} alt="prakash panta" />
                <div className="members-list-card-text">
                  <h4>Radhesh Shrestha</h4>
                  <p>Structural Design Engineer</p>
                </div>
              </div>
              <div className="members-list-card">
                <img src={Profile1} alt="prakash panta" />
                <div className="members-list-card-text">
                  <h4>Sudikshya Bhandari</h4>
                  <p>Structural Design Engineer</p>
                </div>
              </div>
              <div className="members-list-card">
                <img src={Profile1} alt="prakash panta" />
                <div className="members-list-card-text">
                  <h4>Sushmita Phuyal</h4>
                  <p>Structural Design Engineer</p>
                </div>
              </div>
              <div className="members-list-card">
                <img src={Profile1} alt="prakash panta" />
                <div className="members-list-card-text">
                  <h4>Anusha KC</h4>
                  <p>Civil Engineer</p>
                </div>
              </div>
              <div className="members-list-card">
                <img src={Profile1} alt="prakash panta" />
                <div className="members-list-card-text">
                  <h4>Ujjwal Pant</h4>
                  <p>Civil Engineer</p>
                </div>
              </div>
              <div className="members-list-card">
                <img src={Profile1} alt="prakash panta" />
                <div className="members-list-card-text">
                  <h4>Shobita Bhattarai</h4>
                  <p>Senior Architect </p>
                </div>
              </div>
              <div className="members-list-card">
                <img src={Profile1} alt="prakash panta" />
                <div className="members-list-card-text">
                  <h4>Sudhan Paudel</h4>
                  <p> Architect </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TeamEverest;
