import React from "react";
import "./servicespage.css";
import BackgroundImg from "../../assets/bg2.jpeg";
import ServiceImg1 from "../../assets/bg1.jpg";
import StructuralDesign from "../../assets/services-img/structuraldesign.png";
import DeckDesign from "../../assets/services-img/deckdesign.png";
import PatioCover from "../../assets/services-img/patio-coverdesign.png";
import TinyHouse from "../../assets/services-img/tinyhome.png";
import CoveredHall from "../../assets/services-img/coveredhall.png";
import Stadium from "../../assets/services-img/stadium.jpg";
import CommercialStructure from "../../assets/services-img/commercialstructure.jpg";
import ResidentialSturcture from "../../assets/services-img/residentialstructure.png";
import PublicBuilding from "../../assets/services-img/publicbuilding.jpg";
import Landscaping from "../../assets/services-img/landscaping.jpg";
import GeoTechnical from "../../assets/services-img/geotechnicaldesign.jpg";
import UrbanPlanning from "../../assets/services-img/urbanplanning.jpeg";
import Transportation from "../../assets/services-img/transportation.jpeg";
import WaterSupply from "../../assets/services-img/watersupply.jpeg";
import ElectricalWorks from "../../assets/services-img/electricalworks.jpeg";
import Sewage from "../../assets/services-img/sewage.jpeg";
import Irrigation from "../../assets/services-img/irrigation.jpeg";
import RemoteSensing from "../../assets/services-img/remotesensing.jpeg";
import Valuation from "../../assets/services-img/valuation.jpeg";
import SoftwareTraining from "../../assets/services-img/softwaretraining.jpeg";

import GoToTop from "../GoToTop";

const ServicesPage = () => {
  return (
    <>
      <div className="services-page">
        <div
          className="services-container"
          style={{
            backgroundImage: `url(${BackgroundImg})`,
            backgroundSize: `cover`,
            backgroundPositionY: `-200px`,
          }}
        >
          <div className="services-box">
            <div>
              <p>
                Home / <span>services</span>
              </p>
              <h1>SERVICES PAGE</h1>
            </div>
          </div>
        </div>
        <div className="services-page-content">
          <div className="services-content-first">
            <div className="first-img">
              <img src={StructuralDesign} alt="structurald design" />

              <h1>01</h1>
            </div>
            <div className="first-content">
              <h1>Structural & Architectural Design</h1>
              <p>
                Aron Engineering is a state-of-the-art design firm composed of a
                vibrant team of structural engineers. Each of our professionals
                are highly skilled to adopt the latest design and detailing
                requirements, international guidelines, as well as the most
                recent advancements in software tools and technology.
              </p>
              <p>
                We also provide 2D and 3D architectural services with an
                emphasis on improving structure visualization and assisting our
                customers in communicating their design thoughts through precise
                2D plans and 3D models. We produce photo-realistic 3D models and
                renderings by paying close attention to artistic elements,
                lighting options, and spatial factors. Our walk-through and
                animation services provide better understanding of the project's
                sense of space through multi-perspective views. We also master
                at producing landscaping and master plans for any kind of
                project. We provide by-laws and regulations complaint designs
                and our services are supported by cutting edge technology and
                skilled personnel.
              </p>
              <p>
                We also cater your all-inclusive inclusive structural and
                architectural needs. Contact us for any kind of engineering
                solutions.
              </p>
            </div>
          </div>
          <div className="services-content-second">
            <h3>Services Based On Our Location</h3>
            <div className="united-state">
              <h1>UNITED STATES</h1>
              <div className="united-services-list">
                <div className="list-card">
                  <img src={DeckDesign} alt="deck design" />

                  <h4>Deck Design</h4>
                  <p>
                    We cover an all-inclusive design package for all types of
                    timber and steel deck designs based on international codes.
                  </p>
                </div>
                <div className="list-card">
                  <img src={PatioCover} alt="patio cover" />

                  <h4>Pergola & Patio/Deck CoverDeck Design</h4>
                  <p>
                    We design multiple kinds of pergolas, gazebo, deck/roof
                    cover and patio cover including mono-slope, gable and hip
                    roof designs.
                  </p>
                </div>
                <div className="list-card">
                  <img src={TinyHouse} alt="tinyhouse" />

                  <h4>Design of Tiny Homes </h4>
                  <p>
                    We also design tiny wooden houses inclusive of shear wall
                    and foundation design along with seismic and wind resistance
                    checks.
                  </p>
                </div>
              </div>
            </div>
            <div className="nepal">
              <h1>NEPAL</h1>
              <div className="nepal-services-list">
                <div className="list-card">
                  <img src={CoveredHall} alt="covered hall" />

                  <h4>Multi-purpose covered hall</h4>
                </div>
                <div className="list-card">
                  <img src={Stadium} alt="stadium" />

                  <h4>Stadium</h4>
                </div>
                <div className="list-card">
                  <img src={CommercialStructure} alt="commercial structure" />

                  <h4>Commercial Structures</h4>
                </div>
                <div className="list-card">
                  <img src={ResidentialSturcture} alt="residential structure" />

                  <h4>Residential Structures</h4>
                </div>
                <div className="list-card">
                  <img src={PublicBuilding} alt="public building" />

                  <h4>Public Buildings</h4>
                </div>
                <div className="list-card">
                  <img src={Landscaping} alt="landscaping" />

                  <h4>Landscaping</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="services-content-third">
            <h1>Other Services</h1>
            <div className="other-services-list">
              <div className="list-card">
                <img src={GeoTechnical} alt="geo technical" />
                <h1>02</h1>
                <h4>Geotechnical/ Geological Design</h4>
              </div>
              <div className="list-card">
                <img src={UrbanPlanning} alt="urban planning" />
                <h1>03</h1>
                <h4>Urban Planning </h4>
              </div>
              <div className="list-card">
                <img src={Transportation} alt="transportation" />
                <h1>04</h1>
                <h4>Transportation</h4>
              </div>

              <div className="list-card">
                <img src={WaterSupply} alt="watersupply" />
                <h1>05</h1>
                <h4>Water Supply & Sanitary Design</h4>
              </div>
              <div className="list-card">
                <img src={ElectricalWorks} alt="electrical works" />
                <h1>06</h1>
                <h4>Electrical Works </h4>
              </div>
              <div className="list-card">
                <img src={Sewage} alt="sewage" />
                <h1>07</h1>
                <h4>Sewerage & Land-fill Site Design</h4>
              </div>
              <div className="list-card">
                <img src={Irrigation} alt="irrigation" />
                <h1>08</h1>
                <h4>Irrigation</h4>
              </div>
              <div className="list-card">
                <img src={RemoteSensing} alt="remote sensing" />
                <h1>09</h1>
                <h4>Remote Sensing based survey and mapping </h4>
              </div>
              <div className="list-card">
                <img src={Valuation} alt="valuation" />
                <h1>10</h1>
                <h4>Valuation </h4>
              </div>
              <div className="list-card">
                <img src={ServiceImg1} alt="feasibility study" />
                <h1>11</h1>
                <h4>Feasibility Study </h4>
              </div>
              <div className="list-card">
                <img src={ServiceImg1} alt="river training works" />
                <h1>12</h1>
                <h4>River- training works </h4>
              </div>
              <div className="list-card">
                <img src={SoftwareTraining} alt="software training" />
                <h1>13</h1>
                <h4>Software trainings </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
      <GoToTop />
    </>
  );
};

export default ServicesPage;
