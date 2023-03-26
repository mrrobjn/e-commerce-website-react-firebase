import "~~/pages/SingleProductPage.scss";
import ProductDetail from "~/components/ProductDetail";
import { useEffect } from "react";

const SingleProduct = ({ addToCartQty}) => {
  
  useEffect(() => {
    window.scrollTo(0, 0);
  });
 
  return (
    <>
      <ProductDetail addToCartQty={addToCartQty}/>
    </>
  );
};

export default SingleProduct;
