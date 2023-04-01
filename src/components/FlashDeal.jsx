import React from "react";
import FlashCard from "./FlashSlide";
import "~~/components/FlashDeal.scss";
import Loading from "~/layout/Loading";
import { useState } from "react";
import { useContext } from "react";
import { ProductContext } from "~/context/ProductContext";
import { useEffect } from "react";
const FlashDeal = ({ addToCart }) => {
  const [loading, setLoading] = useState(true);
  const {products} = useContext(ProductContext);
  useEffect(() => {
    products.length >= 1 && setLoading(false);
  }, [products]);
  return (
    <>
      <section
        className="flash-background"
        style={
          loading
            ? {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                minHeight: 300,
              }
            : null
        }
      >
        {loading?<Loading/> : <div className="flash-container">
          <div className="flash-heading">
            <h1>
              F<i className="fa-solid fa-bolt"></i>ash Deals
            </h1>
          </div>
          <FlashCard products={products} addToCart={addToCart} />
        </div>}
      </section>
    </>
  );
};

export default FlashDeal;
