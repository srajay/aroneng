import React from "react";
import "./contactpage.css";
import BackgroundImg from "../../assets/bg2.jpeg";
import GoToTop from "../GoToTop";

const ContactPage = () => {
  return (
    <>
      <div className="contact-page">
        <div
          className="contact-container"
          style={{
            backgroundImage: `url(${BackgroundImg})`,
            backgroundSize: `cover`,
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
          <div className="map-container">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d14129.360227896104!2d85.33366!3d27.706785!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x39eb194eb0dd4203%3A0x9f9d486a258772a7!2sARON%20Engineering%20Pvt.%20Ltd.!5e0!3m2!1sen!2snp!4v1698564257439!5m2!1sen!2snp"
              width="600"
              height="500"
              allowFullScreen=""
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Ilami agro and tech"
            ></iframe>
          </div>
          <div className="input-container">
            <h1>If You Have Any Query, Please Contact Us</h1>
            <div className="input-field">
              <input
                type="text"
                name="fullname"
                id="fullname"
                placeholder="Your Name"
                required
              />
              <input
                type="email"
                name="email"
                id="email"
                placeholder="Your Email"
                required
              />
              <input
                type="text"
                name="subject"
                id="subject"
                placeholder="Subject"
              />
              <textarea
                name="message"
                id="message"
                cols="30"
                rows="10"
                placeholder="Message"
                required
              ></textarea>
              <button>Send Message</button>
            </div>
          </div>
        </div>
      </div>
      <GoToTop />
    </>
  );
};

export default ContactPage;
