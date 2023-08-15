import React, { useState } from "react";
import "./navsection.css";
import { Link } from "react-router-dom";
import AronLogo from "../../assets/aron-logo.png";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
// import MenuIcon from "@mui/icons-material/Menu";
// import CloseIcon from "@mui/icons-material/Close";

const NavSection = () => {
  const [activeNavItem, setActiveNavItem] = useState();

  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
  };
  return (
    <>
      <div className="navbarsection">
        <div className="logo">
          <Link to="/">
            <img src={AronLogo} alt="aronlogo" />
          </Link>
        </div>
        <div className="navbar">
          <div className="nav-items">
            <Link to="/">
              <p
                className={activeNavItem === "home" ? "active" : ""}
                onClick={() => handleNavItemClick("home")}
              >
                HOME
              </p>
            </Link>
            <Link to="/portfolio">
              <p
                className={activeNavItem === "portfolio" ? "active" : ""}
                onClick={() => handleNavItemClick("portfolio")}
              >
                PORTFOLIO
              </p>
            </Link>

            <Link to="/services">
              <p
                className={activeNavItem === "services" ? "active" : ""}
                onClick={() => handleNavItemClick("services")}
              >
                SERVICES
              </p>
            </Link>
            <div class="dropdown">
              <button class="dropbtn">
                MEET US
                <ArrowDropDownIcon />
              </button>
              <div class="dropdown-content">
                <Link to="/meetus">
                  <p
                    className={activeNavItem === "meetus" ? "active" : ""}
                    onClick={() => handleNavItemClick("meetus")}
                  >
                    MEET US1
                  </p>
                </Link>
                <Link to="/meetus">
                  <p
                    className={activeNavItem === "meetus" ? "active" : ""}
                    onClick={() => handleNavItemClick("meetus")}
                  >
                    MEET US2
                  </p>
                </Link>
              </div>
            </div>

            <Link to="/carrier">
              <p
                className={activeNavItem === "carrier" ? "active" : ""}
                onClick={() => handleNavItemClick("carrier")}
              >
                CARRIERS
              </p>
            </Link>
            <Link to="/contact">
              <button>CONTACT US</button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default NavSection;
