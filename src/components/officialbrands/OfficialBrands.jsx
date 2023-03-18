import React from "react";
import BrandSlide from "./BrandSlide";
import "./OfficialBrand.scss";
const OfficialBrands = ({brands}) => {
  return (
    <>
      <section className="brand-section">
        <div className="brand-container">
          <div className="brand-header">
            <h1>Thương hiệu chính hãng</h1>
            <div className="brand-logo">

            <img src="/assets/images/officalbrand.png" alt="" />
            </div>
          </div>
          <BrandSlide brands={brands}/>
        </div>
      </section>
    </>
  );
};

export default OfficialBrands;
