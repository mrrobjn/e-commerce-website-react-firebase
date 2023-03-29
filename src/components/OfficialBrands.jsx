import React from "react";
import BrandSlide from "./BrandSlide";
import "~~/components/OfficialBrand.scss";
import { useContext } from "react";
import { BrandsContext } from "~/context/BrandsContext";
import Loading from "~/layout/Loading";
import { useEffect } from "react";
import { useState } from "react";
const OfficialBrands = () => {
  const [loading, setLoading] = useState(true);
  const brands = useContext(BrandsContext);
  useEffect(() => {
    brands.length >= 1 && setLoading(false);
  }, [brands]);
  return (
    <>
      <section
        className="brand-section"
        style={
          loading
            ? {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: 150,
                background: "#fff",
              }
            : null
        }
      >
        {loading ? (
          <Loading />
        ) : (
          <div className="brand-container">
            <div className="brand-header">
              <h1>Thương hiệu chính hãng</h1>
              <div className="brand-logo">
                <img src="/assets/images/officalbrand.png" alt="" />
              </div>
            </div>
            <BrandSlide brands={brands} />
          </div>
        )}
      </section>
    </>
  );
};

export default OfficialBrands;
