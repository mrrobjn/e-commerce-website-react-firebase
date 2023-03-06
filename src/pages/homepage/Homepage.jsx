import {useEffect} from "react";
import Slider from "../../components/sliders/Slider";
import FlashDeal from "../../components/flashDeals/FlashDeal";
import HomeCategories from "../../components/homecategories/HomeCategories";
import "./Homepage.scss";
import OfficialBrands from "../../components/officialbrands/OfficialBrands";

const Homepage = ({
  products,
  categories,
  slides,
  brands,
  addToCart,
  setProductFilter,
  filterResult,
  categoriesLoading
}) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <section id="homepage">
      <div className="container">
        <HomeCategories
          categories={categories}
          products={products}
          setProductFilter={setProductFilter}
          filterResult={filterResult}
          categoriesLoading={categoriesLoading}
        />
        <Slider slides={slides} />
      </div>
      <FlashDeal products={products} addToCart={addToCart} />
      <OfficialBrands brands={brands} />
    </section>
  );
};

export default Homepage;
