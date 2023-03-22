import React, { useEffect } from "react";
import "./Cartpage.scss";
import CartTotal from "./CartTotal";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth, db } from "../../firebase";
import { useNavigate } from "react-router";
import { Link } from "react-router-dom";
const Cartpage = ({
  cartItem,
  addToCart,
  descreaseQty,
  deteteCart,
  setCartItem,
  showDate,
}) => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!user) return navigate("/login");
  }, [user, loading]);
  return (
    <>
      <section className="cart-items">
        <div className="cart-container">
          <div className="cart-detail">
            <div className="cart-header">
              <h1>Giỏ hàng của bạn</h1>
              <p>{cartItem.length} sản phẩm</p>
            </div>
            <div className="handle-product">
            {/* if there are no item in cart */}
            {cartItem.length === 0 && (
              <h1 className="no-items">Giỏ hàng trống</h1>
            )}
            {/* if at least 1 item in cart */}
              {cartItem.map((item) => {
                const productQty = item.data.price * item.qty;
                return (
                  <div className="cart-product" key={item.id}>
                    <Link className="img">
                      <img src={item.data.image} alt="" />
                    </Link>
                    <div className="cart-details">
                      <p className="title">{item.data.title}</p>
                      <p className="price">
                        {item.data.price.toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })}{" "}
                        * {item.qty}
                        <br />
                        <span>
                          {productQty.toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </span>
                      </p>
                    </div>
                    <div className="cart-items-function">
                      <button
                        className="item-remove btn"
                        onClick={() => deteteCart(item)}
                      >
                        <i className="fa-solid fa-xmark"></i>
                      </button>
                      <button
                        className="increase btn"
                        onClick={() => addToCart(item)}
                      >
                        <i className="fa-solid fa-plus"></i>
                      </button>
                      <button
                        className="descrease btn"
                        onClick={() => descreaseQty(item)}
                      >
                        <i className="fa-solid fa-minus"></i>
                      </button>
                    </div>
                    <div className="cart-item-price"></div>
                  </div>
                );
              })}
            </div>
          </div>
          <CartTotal
            cartItem={cartItem}
            setCartItem={setCartItem}
            showDate={showDate}
          />
        </div>
      </section>
    </>
  );
};

export default Cartpage;
