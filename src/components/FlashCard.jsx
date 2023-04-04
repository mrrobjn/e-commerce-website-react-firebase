import React, { useContext} from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { ProductContext } from "~/context/ProductContext";
const FlashCard = ({ discountProduct }) => {
  const { addToCart } = useContext(ProductContext);
  const [user] = useAuthState(auth);
  const navigate = useNavigate();
  const { discount, image, title, price } = discountProduct.data;
  return (
    <>
      <div className="flash-box">
        <div className="product">
          <Link to={`/product/${discountProduct.id}`}>
            <div className="product-img">
              <span className="discount">{discount}% Off</span>
              <img src={image} alt="" />
            </div>
          </Link>
          <div className="product-detail">
            <p className="product-title">{title}</p>
            <div className="rate">
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i>
              <i className="fa-solid fa-star"></i> (2)
            </div>
            <div className="price">
              <h4>
                {((price / 100) * (100 - discount)).toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </h4>
              <button
                className="btn"
                onClick={
                  user
                    ? () => addToCart(discount)
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
