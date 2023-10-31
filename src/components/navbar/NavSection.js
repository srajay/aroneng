import React, { useState } from "react";
import "./navsection.css";
import { Link } from "react-router-dom";
import AronLogo from "../../assets/aron-logo.png";
// import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const NavSection = () => {
  const [navOpen, setNavOpen] = useState(false);
  const [activeNavItem, setActiveNavItem] = useState();

  const handleNavItemClick = (navItem) => {
    setActiveNavItem(navItem);
  };
  return (
    <>
      <div className="navbarsection">
        <div className="logo">
          <Link to="/">
            <div className="logo-img">
              <img src={AronLogo} alt="aronlogo" />
            </div>

            <p>ARON ENGINEERING PVT.LTD</p>
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

            <Link to="/teameverest">
              <p
                className={activeNavItem === "teameverest" ? "active" : ""}
                onClick={() => handleNavItemClick("teameverest")}
              >
                TEAM EVEREST
              </p>
            </Link>
            {/* <Link to="/teamelbert">
                  <p
                    className={activeNavItem === "teamelbert" ? "active" : ""}
                    onClick={() => handleNavItemClick("teamelbert")}
                  >
                    Team Elbert
                  </p>
                </Link> */}

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
        <div className="navbar-mob">
          {!navOpen ? (
            <div className="nav-close" onClick={() => setNavOpen(true)}>
              <MenuIcon style={{ fontSize: "2.5rem" }} />
            </div>
          ) : (
            <div className="nav-open" onClick={() => setNavOpen(false)}>
              <div className="close-icon">
                <CloseIcon style={{ fontSize: "2.5rem" }} />
              </div>

              <div className="navbar-items">
                <li>
                  <Link to="/">
                    <p
                      className={activeNavItem === "home" ? "active" : ""}
                      onClick={() => handleNavItemClick("home")}
                    >
                      HOME
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio">
                    <p
                      className={activeNavItem === "portfolio" ? "active" : ""}
                      onClick={() => handleNavItemClick("portfolio")}
                    >
                      PORTFOLIO
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/services">
                    <p
                      className={activeNavItem === "services" ? "active" : ""}
                      onClick={() => handleNavItemClick("services")}
                    >
                      SERVICES
                    </p>
                  </Link>
                </li>

                <li>
                  <Link to="/teameverest">
                    <p
                      className={
                        activeNavItem === "teameverest" ? "active" : ""
                      }
                      onClick={() => handleNavItemClick("teameverest")}
                    >
                      TEAM EVEREST
                    </p>
                  </Link>
                </li>

                <li>
                  <Link to="/carrier">
                    <p
                      className={activeNavItem === "carrier" ? "active" : ""}
                      onClick={() => handleNavItemClick("carrier")}
                    >
                      CARRIERS
                    </p>
                  </Link>
                </li>
                <li>
                  <Link to="/contact">
                    <button
                      className={activeNavItem === "contact"}
                      onClick={() => handleNavItemClick("contact")}
                    >
                      CONTACT US
                    </button>
                  </Link>
                </li>
              </div>
            </div>
          )}
        </div>
      </div>
    </>
  );
};

export default NavSection;
