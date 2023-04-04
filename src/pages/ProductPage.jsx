import { useEffect } from "react";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import "~~/pages/ProductPage.scss";
import Footer from "~/layout/Footer";
import Header from "~/layout/Header";

const Product = ({
  addToCart,
  cartItem,
}) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header cartItem={cartItem}/>
      <div className="page-container">
        <section className="product-page-section">
          <Categories
          />
          <ProductCard  addToCart={addToCart} />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Product;
