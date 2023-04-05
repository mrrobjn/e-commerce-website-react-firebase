import { useEffect } from "react";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import "~~/pages/ProductPage.scss";
import Footer from "~/layout/Footer";
import Header from "~/layout/Header";

const Product = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header />
      <div className="page-container">
        <section className="product-page-section">
          <Categories />
          <ProductCard />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Product;
