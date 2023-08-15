import React, { useState } from "react";
import "./aronservices.css";
import { AronData } from "./arondata";

const AronServices = () => {
  const [show, setShow] = useState(false);

  return (
    <>
      <div className="aronservices">
        <div className="aron-content">
          <p onClick={() => setShow(!show)}>
            ARON SERVICES {show ? <span>-</span> : <span>+</span>}
          </p>
        </div>
        {show && (
          <div className="aronservices-container">
            {AronData.map((items) => (
              <div key={items.id} className="aron-card">
                <div className="aron-img">
                  <img src={items.img} alt={items.title} />
                </div>
                <div className="aron-title">
                  <h2>{items.title}</h2>
                </div>
                <div className="aron-para">
                  <p>{items.para}</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </>
  );
};

export default AronServices;
