import React from "react";
import "./sliderarrow.css";
import ArrowForwardIosIcon from "@mui/icons-material/ArrowForwardIos";
import ArrowBackIosIcon from "@mui/icons-material/ArrowBackIos";

const SliderArrow = ({ direction, onClick }) => {
  return (
    <>
      <div className="slider-arrow">
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

export default SliderArrow;
