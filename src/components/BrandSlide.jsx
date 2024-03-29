import Slider from "react-slick";
const BrandSlide = ({brands}) => {
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
    slidesToShow: 6,
    slidesToScroll: 1,
    lazyLoad: true,
    autoplay: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
  };
  return (
    <>
      <Slider {...settings}>
        {brands.map((brand) => {
          return (
            <div className="brand-slide" key={brand.id}>
              <div className="brand-img">
                <img src={brand.data.image} alt="" />
              </div>
              <p>{brand.data.name}</p>
            </div>
          );
        })}
      </Slider>
    </>
  );
};

export default BrandSlide;
