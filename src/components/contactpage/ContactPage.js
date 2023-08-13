import React from "react";
import "./contactpage.css";
import BackgroundImg from "../../assets/bg2.jpg";

const ContactPage = () => {
  return (
    <>
      <div className="contact-page">
        <div
          className="contact-container"
          style={{
            backgroundImage: `url(${BackgroundImg})`,
            backgroundSize: `cover`,
            backgroundPositionY: `-200px`,
          }}
        >
          <div className="contact-box">
            <div>
              <p>
                Home / <span>contact</span>
              </p>
              <h1>CONTACT US</h1>
            </div>
          </div>
        </div>
        <div className="contact-content">
          <p>Add more section here . . .</p>
        </div>
      </div>
    </>
  );
};

export default ContactPage;
