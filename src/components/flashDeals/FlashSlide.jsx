import React from "react";
import Slider from "react-slick";
import FlashCard from "./FlashCard";
const FlashSlide = ({ products, addToCart }) => {
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
        {products &&
          products.map((product) => {
            return (
              <FlashCard
                product={product}
                addToCart={addToCart}
                key={product.id}
              />
            );
          })}
      </Slider>
    </>
  );
};

export default FlashSlide;
