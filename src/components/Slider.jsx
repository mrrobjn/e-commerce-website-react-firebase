import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sliders from "react-slick";
import SliderCard from "./SliderCard";
import "~~/components/Slider.scss";
import { useContext } from "react";
import { SlideContext } from "~/context/SlideContext";
import { useState } from "react";
import Loading from "~/layout/Loading";
import { useEffect } from "react";
const Slider = () => {
  const [loading, setLoading] = useState(true);
  const slides = useContext(SlideContext);
  const settings = {
    arrow: false,
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    lazyLoad: true,
    // appendDots: (dots) => {
    //   return <ul>{dots}</ul>;
    // },
  };
  useEffect(() => {
    slides.length >= 1 && setLoading(false);
  }, [slides]);
  return (
    <>
      <section
        className="slide-container"
        style={
          loading
            ? {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight:200,
                background: "#fff"
              }
            : null
        }
      >
        {loading ? (
          <Loading />
        ) : (
          <Sliders {...settings}>
            {slides.map((slide) => {
              return <SliderCard slide={slide} key={slide.id} />;
            })}
          </Sliders>
        )}
      </section>
    </>
  );
};

export default Slider;
