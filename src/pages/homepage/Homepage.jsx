import { useEffect, useState } from "react";
import Slider from "../../components/sliders/Slider";
import FlashDeal from "../../components/flashDeals/FlashDeal";
import HomeCategories from "../../components/homecategories/HomeCategories";
import "./Homepage.scss";
import OfficialBrands from "../../components/officialbrands/OfficialBrands";
import { useNavigate } from "react-router";

const Homepage = ({
  products,
  categories,
  slides,
  brands,
  addToCart,
  setProductFilter,
  filterResult,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  },[]);

  return (
    <>
      <section id="homepage">
        <HomeCategories
          categories={categories}
          products={products}
          setProductFilter={setProductFilter}
          filterResult={filterResult}
        />
        <div className="container">
          <Slider slides={slides} />
          <FlashDeal products={products} addToCart={addToCart} />
          <OfficialBrands brands={brands} />
        </div>
      </section>
    </>
  );
};

export default Homepage;
