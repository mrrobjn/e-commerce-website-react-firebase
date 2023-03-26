import { useEffect } from "react";
import Slider from "~/components/Slider";
import FlashDeal from "~/components/FlashDeal";
import HomeCategories from "~/components/HomeCategories";
import "~~/pages/HomePage.scss";
import OfficialBrands from "~/components/OfficialBrands";
const Homepage = ({ addToCart, setProductFilter, filterResult }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
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
    </>
  );
};

export default Homepage;
