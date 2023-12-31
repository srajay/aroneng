import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import YouTubeIcon from "@mui/icons-material/YouTube";

const Footer = () => {
  return (
    <>
      <div className="footer">
        <div className="footer-content">
          <div className="footer-links">
            <div className="footer-left">
              <div className="footer-logo">
                <Link to="/">
                  <h2>ARON ENGINEERING</h2>
                </Link>
              </div>
              <div className="company-info">
                <p>KATHMANDU, NEPAL</p>
                <p>+977 980880022</p>
                <div className="social">
                  <p>
                    <FacebookIcon />
                  </p>
                  <p>
                    <InstagramIcon />
                  </p>
                  <p>
                    <YouTubeIcon />
                  </p>
                </div>
              </div>
            </div>
            <div className="footer-midA">
              <h1>LINKS</h1>
              <hr />
              <p>
                <Link to="/">Home</Link>
              </p>
              <p>
                <Link to="/portfolio">Portfolio</Link>
              </p>
              <p>
                <Link to="/services">Services</Link>
              </p>
              <p>
                <Link to="/contact">Contact Us</Link>
              </p>
            </div>
            <div className="footer-midB">
              <h1>SERVICES</h1>
              <hr />
              <p>
                <a href="Engineering">Engineering</a>
              </p>
              <p>
                <a href="Construction">Construction</a>
              </p>
              <p>
                <a href="Procurement">Procurement</a>
              </p>
              <p>
                <a href="Development">Development</a>
              </p>
            </div>
            <div className="footer-right">
              <h1>CAREERS</h1>
              <hr />
              <p>
                <a href="Professionals">Professionals</a>
              </p>
              <p>
                <a href="Entry Level">Entry Level</a>
              </p>
              <p>
                <a href="Internships">Internships</a>
              </p>
              <p>
                <a href="SkilledCraft">Skilled Craft</a>
              </p>
            </div>
          </div>
          <div className="footer-copyright">
            <p>
              ALL RIGHTS RESERVED 2023 | &#169; ARONENGINEERING | DESIGNED BY
              MarginTech
            </p>
          </div>
        </div>
      </div>
    </>
  );
};

export default Footer;
