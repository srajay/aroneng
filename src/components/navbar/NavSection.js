import React, { useState } from "react";
import "./navsection.css";
import { Link } from "react-router-dom";
import AronLogo from "../../assets/aron-logo.png";
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
            <Link to="/meetus">
              <p
                className={activeNavItem === "meetus" ? "active" : ""}
                onClick={() => handleNavItemClick("meetus")}
              >
                MEET US
              </p>
            </Link>
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
        {/* <div className="navbar-menu">
          {toggleMenu ? (
            <CloseIcon
              color="#000"
              size={27}
              onClick={() => setToggleMenu(false)}
            />
          ) : (
            <MenuIcon
              color="#000"
              size={27}
              onClick={() => setToggleMenu(true)}
            />
          )}
          {toggleMenu && (
            <div className="navbar-menu-container">
              <div className="navbar-menu-container-links">
                <p>
                  <a href="#home">Home</a>
                </p>
                <p>
                  <a href="#wgpt3">About US</a>
                </p>
                <p>
                  <a href="#possibility">Contact</a>
                </p>
                <p>
                  <a href="#features">our services</a>
                </p>
                <p>
                  <a href="#blog">Projects</a>
                </p>
              </div>
            </div>
          )}
        </div> */}
      </div>
    </>
  );
};

export default NavSection;
