import React from "react";
import "./servicespage.css";
import BackgroundImg from "../../assets/bg2.jpeg";
import ServiceImg1 from "../../assets/bg1.jpg";

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
              <img src={ServiceImg1} alt="structurald design" />
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
                  <img src={ServiceImg1} alt="deck design" />
                  <h4>Deck Design</h4>
                  <p>
                    We cover an all-inclusive design package for all types of
                    timber and steel deck designs based on international codes.
                  </p>
                </div>
                <div className="list-card">
                  <img src={ServiceImg1} alt="deck design" />
                  <h4>Pergola & Patio/Deck CoverDeck Design</h4>
                  <p>
                    We design multiple kinds of pergolas, gazebo, deck/roof
                    cover and patio cover including mono-slope, gable and hip
                    roof designs.
                  </p>
                </div>
                <div className="list-card">
                  <img src={ServiceImg1} alt="deck design" />
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
                  <img src={ServiceImg1} alt="covered hall" />
                  <h4>Multi-purpose covered hall</h4>
                </div>
                <div className="list-card">
                  <img src={ServiceImg1} alt="stadium" />
                  <h4>Stadium</h4>
                </div>
                <div className="list-card">
                  <img src={ServiceImg1} alt="commercial structure" />
                  <h4>Commercial Structures</h4>
                </div>
                <div className="list-card">
                  <img src={ServiceImg1} alt="residential structure" />
                  <h4>Residential Structures</h4>
                </div>
                <div className="list-card">
                  <img src={ServiceImg1} alt="public building" />
                  <h4>Public Buildings</h4>
                </div>
                <div className="list-card">
                  <img src={ServiceImg1} alt="landscaping" />
                  <h4>Landscaping</h4>
                </div>
              </div>
            </div>
          </div>

          <div className="services-content-third">
            <h1>Other Services</h1>
            <div className="other-services-list">
              <div className="list-card">
                <img src={ServiceImg1} alt="covered hall" />
                <h4>Geotechnical/ Geological Design</h4>
              </div>
              <div className="list-card">
                <img src={ServiceImg1} alt="covered hall" />
                <h4>Urban Planning </h4>
              </div>
              <div className="list-card">
                <img src={ServiceImg1} alt="covered hall" />
                <h4>Transportation</h4>
              </div>

              <div className="list-card">
                <img src={ServiceImg1} alt="covered hall" />
                <h4>Water Supply & Sanitary Design</h4>
              </div>
              <div className="list-card">
                <img src={ServiceImg1} alt="covered hall" />
                <h4>Electrical Works </h4>
              </div>
              <div className="list-card">
                <img src={ServiceImg1} alt="covered hall" />
                <h4>Sewerage & Land-fill Site Design</h4>
              </div>
              <div className="list-card">
                <img src={ServiceImg1} alt="covered hall" />
                <h4>Irrigation</h4>
              </div>
              <div className="list-card">
                <img src={ServiceImg1} alt="covered hall" />
                <h4>Remote Sensing based survey and mapping </h4>
              </div>
              <div className="list-card">
                <img src={ServiceImg1} alt="covered hall" />
                <h4>Valuation </h4>
              </div>
              <div className="list-card">
                <img src={ServiceImg1} alt="covered hall" />
                <h4>Feasibility Study </h4>
              </div>
              <div className="list-card">
                <img src={ServiceImg1} alt="covered hall" />
                <h4>River- training works </h4>
              </div>
              <div className="list-card">
                <img src={ServiceImg1} alt="covered hall" />
                <h4>Software trainings </h4>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ServicesPage;
