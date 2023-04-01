import { useEffect } from "react";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import "~~/pages/ProductPage.scss";
import Footer from "~/layout/Footer";
import Header from "~/layout/Header";

const Product = ({
  addToCart,
  filterResult,
  productFilter,
  setProductFilter,
  cartItem,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header cartItem={cartItem} setProductFilter={setProductFilter} />
      <div className="page-container">
        <section className="product-page-section">
          <Categories
            filterResult={filterResult}
            setProductFilter={setProductFilter}
          />
          <ProductCard productFilter={productFilter} addToCart={addToCart} />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Product;
