import React from "react";
import "./header.css";
import DraftsIcon from "@mui/icons-material/Drafts";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";

const Header = () => {
  return (
    <>
      <div className="header">
        <div className="header-content">
          <div className="header-left">
            <a href="info@aronengineering.com">
              <p>
                <DraftsIcon />
              </p>
              <p>info@aronengineering.com</p>
            </a>
          </div>
          <div className="header-right">
            <div className="header-links">
              <a href="https://facebook.com/aronengineering">
                <FacebookIcon />
              </a>
              <a href="https://linkedin.com/aronengineering">
                <LinkedInIcon />
              </a>
              <a href="https://youtube.com/aronengineering">
                <YouTubeIcon />
              </a>
              <a href="https://instagram.com/aronengineering">
                <InstagramIcon />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Header;
