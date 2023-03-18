import { useEffect, useState } from "react";
const SliderCard = ({ slide }) => {
  const [slideEmulator, setSlide] = useState("");
  useEffect(() => {
    setSlide(slide.data.url);
  }, []);
  return (
    <>
      <div key={slide.id} className="slide">
        {slideEmulator && <img src={slideEmulator} alt="" />}
      </div>
    </>
  );
};

export default SliderCard;
