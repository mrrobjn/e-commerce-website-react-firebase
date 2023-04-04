import React, { useContext } from "react";
import Slider from "react-slick";
import { ProductContext } from "~/context/ProductContext";
import FlashCard from "./FlashCard";
const FlashSlide = ({ addToCart, products }) => {
  const discountProducts = products?.filter(
    (prd) => prd.data.discount !== 0
  );
  const NextArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="next">
          <i className="fa-solid fa-arrow-right"></i>
        </button>
      </div>
    );
  };
  const PrevArrow = (props) => {
    const { onClick } = props;
    return (
      <div className="control-btn" onClick={onClick}>
        <button className="prev">
          <i className="fa-solid fa-arrow-left"></i>
        </button>
      </div>
    );
  };
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 5,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <Slider {...settings}>
        {discountProducts?.map((discountProduct) => {
          return (
            <FlashCard
              discountProduct={discountProduct}
              addToCart={addToCart}
              key={discountProduct.id}
            />
          );
        })}
      </Slider>
    </>
  );
};

export default FlashSlide;
