import { useEffect } from "react";
import Slider from "~/components/Slider";
import FlashDeal from "~/components/FlashDeal";
import HomeCategories from "~/components/HomeCategories";
import "./Homepage.scss";
import OfficialBrands from "~/components/OfficialBrands";
import { BrandsProvider } from "~/context/BrandsContext";
import Categories from "../productpage/Categories";

const Homepage = ({ addToCart, setProductFilter, filterResult }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <BrandsProvider>
        <section id="homepage">
          <HomeCategories
            setProductFilter={setProductFilter}
            filterResult={filterResult}
          />
          <div className="container">
            <Slider />
            <FlashDeal addToCart={addToCart} />
            <OfficialBrands />
          </div>
        </section>
      </BrandsProvider>
    </>
  );
};

export default Homepage;
