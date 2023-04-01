import "~~/pages/SingleProductPage.scss";
import ProductDetail from "~/components/ProductDetail";
import { useEffect } from "react";
import Description from "~/components/Description";
import Footer from "~/layout/Footer";
import Header from "~/layout/Header";

const SingleProduct = ({ addToCartQty,setProductFilter,cartItem }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Header setProductFilter={setProductFilter} cartItem={cartItem} />
      <div className="page-container">
        <ProductDetail addToCartQty={addToCartQty} />
        <Description />
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
