import React from "react";
import { Link } from "react-router-dom";
const ProductCard = ({ addToCart, productFilter }) => {
  return (
    <>
      <section className="product-section">
        {productFilter.length === 0 && (
          <h1 className="no-items">Không có sản phẩm</h1>
        )}
        {productFilter.map((product) => {
          return (
            <div className="product-box" key={product.id}>
              <div className="product">
                <Link to={`/product/${product.id}`}>
                  <div className="product-img">
                    <img src={product.data.image} alt=""/>
                  </div>
                </Link>
                <div className="product-detail">
                  <p className="product-title">{product.data.title}</p>
                  <div className="rate">
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i>
                    <i className="fa-solid fa-star"></i> (2)
                  </div>
                  <div className="price">
                    <h4>{(product.data.price).toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}</h4>
                    <button onClick={() => addToCart(product)}>
                      <i className="fa-solid fa-plus"></i>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </section>
    </>
  );
};

export default ProductCard;
