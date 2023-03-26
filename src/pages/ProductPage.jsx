import {useEffect} from "react";
import Categories from "../components/Categories";
import ProductCard from "../components/ProductCard";
import '~~/pages/ProductPage.scss'

const Product = ({  addToCart, filterResult, productFilter,setProductFilter }) => {
  useEffect(() => {
    window.scrollTo(0, 0)
  })
  return (
    <>
      <section className="product-page-section" style={{ paddingTop: 140 }}>
        <Categories filterResult={filterResult} setProductFilter={setProductFilter} />
        <ProductCard productFilter={productFilter} addToCart={addToCart} />
      </section>
    </>
  );
};

export default Product;
