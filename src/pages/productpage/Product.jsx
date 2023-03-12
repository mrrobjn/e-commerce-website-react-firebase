import {useEffect} from "react";
import Categories from "./Categories";
import ProductCard from "./ProductCard";
import "./Product.scss";

const Product = ({ categories, addToCart, filterResult, productFilter,setProductFilter,products }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <section className="product-page-section" style={{ paddingTop: 140 }}>
        <Categories categories={categories} filterResult={filterResult} setProductFilter={setProductFilter} products={products} />
        <ProductCard productFilter={productFilter} addToCart={addToCart} />
      </section>
    </>
  );
};

export default Product;
