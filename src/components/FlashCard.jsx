import React, { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
const FlashCard = ({ discountProduct, addToCart }) => {
  const [productName, setProductName] = useState("");
  const [productImage, setProductImage] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productDiscount, setProductDiscount] = useState("");
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    const { discount, image, title, price } = discountProduct.data;
    setProductName(title);
    setProductImage(image);
    setProductPrice(price);
    setProductDiscount(discount);
  });
  return (
    <>
      <div className="flash-box">
        <div className="product">
          <Link to={`/product/${discountProduct.id}`}>
            <div className="product-img">
              <span className="discount">{productDiscount}% Off</span>
              <img src={productImage} alt="" />
            </div>
          </Link>
          <div className="product-detail">
            <p className="product-title">{productName}</p>
            <div className="rate">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i> (2)
            </div>
            <div className="price">
              {productPrice && (
                <h4>
                  {(
                    (productPrice / 100) *
                    (100 - productDiscount)
                  ).toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}
                </h4>
              )}
              <button
                className="btn"
                onClick={
                  user
                    ? () => addToCart(discountProduct)
                    : () => navigate("/login")
                }
              >
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
