import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { useEffect, useState } from "react";
const SliderCard = ({ slide }) => {
  const [slideEmulator, setSlide] = useState("");
  useEffect(() => {
      setSlide(slide.data.url);
  }, []);
  return (
    <>
      <div key={slide.id} className="slide">
        {slideEmulator ? (
          <img src={slideEmulator} alt="" />
        ) : (
          <Skeleton height={400}/>
        )}
      </div>
    </>
  );
};

export default SliderCard;
