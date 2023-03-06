import React from "react";
import "./Cartpage.scss";
import CartTotal from "./CartTotal";
const Cartpage = ({
  cartItem,
  addToCart,
  descreaseQty,
  deteteCart,
  setCartItem,
  showDate,
}) => {
  return (
    <>
      <section className="cart-items" style={{ paddingTop: 150 }}>
        <div className="cart-container">
          <div className="cart-detail">
            {/* if there are no item in cart */}
            {cartItem.length === 0 && (
              <h1 className="no-items">Giỏ hàng trống</h1>
            )}
            {/* if at least 1 item in cart */}
            {cartItem.map((item) => {
              const productQty = item.data.price * item.qty;
              return (
                <div className="cart-product" key={item.id}>
                  <div className="img">
                    <img src={item.data.image} alt="" />
                  </div>
                  <div className="cart-details">
                    <h3>{item.data.title}</h3>
                    <p>
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
                      className="item-remove"
                      onClick={() => deteteCart(item)}
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </button>
                    <button
                      className="increase"
                      onClick={() => addToCart(item)}
                    >
                      <i className="fa-solid fa-plus"></i>
                    </button>
                    <button
                      className="descrease"
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
