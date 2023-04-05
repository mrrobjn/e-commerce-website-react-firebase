import "~~/pages/SingleProductPage.scss";
import ProductDetail from "~/components/ProductDetail";
import { useEffect } from "react";
import Description from "~/components/Description";
import Footer from "~/layout/Footer";
import Header from "~/layout/Header";

const SingleProduct = ({ addToCartQty,cartItem }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <Header />
      <div className="page-container">
        <ProductDetail  />
        <Description />
      </div>
      <Footer />
    </>
  );
};

export default SingleProduct;
