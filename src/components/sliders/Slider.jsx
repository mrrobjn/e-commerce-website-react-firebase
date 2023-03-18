import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Sliders from "react-slick";
import SliderCard from "./SliderCard";
import './Slider.scss'
const Slider = ({ slides }) => {
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
  return (
    <>
      <section className="slide-container">
        <Sliders {...settings}>
          {slides.map((slide) => {
            return <SliderCard slide={slide} key={slide.id} />;
          })}
        </Sliders>
      </section>
    </>
  );
};

export default Slider;
