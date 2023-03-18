import React from "react";
import FlashCard from "./FlashSlide";
import "./FlashDeal.scss";
const FlashDeal = ({ products, addToCart }) => {
  return (
    <>
      <section className="flash-background">
        <div className="flash-container">
          <div className="flash-heading">
            <h1>
              F<i className="fa-solid fa-bolt"></i>ash Deals
            </h1>
          </div>
          <FlashCard products={products} addToCart={addToCart} />
        </div>
      </section>
    </>
  );
};

export default FlashDeal;
