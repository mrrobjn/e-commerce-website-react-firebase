import { useEffect } from "react";
import Slider from "~/components/Slider";
import FlashDeal from "~/components/FlashDeal";
import HomeCategories from "~/components/HomeCategories";
import "~~/pages/HomePage.scss";
import OfficialBrands from "~/components/OfficialBrands";
import Footer from "~/layout/Footer";
import Header from "~/layout/Header";
const Homepage = ({ addToCart, cartItem }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Header cartItem={cartItem} />
      <div className="page-container">
        <section id="homepage">
          <HomeCategories />
          <div className="container">
            <Slider />
            <FlashDeal addToCart={addToCart} />
            <OfficialBrands />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Homepage;
