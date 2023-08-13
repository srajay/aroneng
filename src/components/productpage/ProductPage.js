import React from "react";
import "./productpage.css";
import BackgroundImg from "../../assets/bg2.jpg";

const ProductPage = () => {
  return (
    <>
      <div className="product-page">
        <div
          className="product-container"
          style={{
            backgroundImage: `url(${BackgroundImg})`,
            backgroundSize: `cover`,
            backgroundPositionY: `-100px`,
          }}
        >
          <div className="product-box">
            <div>
              <p>
                Home / <span>product</span>
              </p>
              <h1>OUR PRODUCTS</h1>
            </div>
          </div>
        </div>
        <div className="product-content">
          <p>Add more section here . . .</p>
        </div>
      </div>
    </>
  );
};

export default ProductPage;
