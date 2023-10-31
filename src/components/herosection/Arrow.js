import React from "react";
import "./arrow.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const Arrow = ({ direction, onClick }) => {
  return (
    <>
      <div className="arrow-container">
        <button className={`arrow ${direction}`} onClick={onClick}>
          {direction === "prev" ? (
            <ArrowBackIosIcon />
          ) : (
            <ArrowForwardIosIcon />
          )}
        </button>
      </div>
    </>
  );
};

export default Arrow;
