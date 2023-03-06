import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const FlashCard = ({ product, addToCart }) => {
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDiscount, setProductDiscount] = useState("");
  useEffect(() => {
    const { discount, image, title, price } = product.data;
    setTimeout(() => {
      setProductName(title);
      setProductImage(image);
      setProductPrice(price);
      setProductDiscount(discount);
    }, 1000);
  }, []);
  return (
    <>
      <div className="product-box" key={product.id}>
        <div className="product">
          <Link to={`/product/${product.id}`}>
            <div className="product-img">
              {productImage ? (
                <span className="discount">{productDiscount}% Off</span>
              ) : (
                ""
              )}
              {productImage ? (
                <img src={productImage} alt="" />
              ) : (
                <Skeleton height={173}>
                  <img src={productImage} alt="" />
                </Skeleton>
              )}
            </div>
          </Link>
          <div className="product-detail">
            <p className="product-title">{productName || <Skeleton />}</p>
            <div className="rate">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i> (2)
            </div>
            <div className="price">
                <h4>
                  {productPrice.toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })  ||<Skeleton/>}
                </h4>
              <button onClick={() => addToCart(product)}>
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FlashCard;
