import React, { useState } from "react";
import { db,auth } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
const CartTotal = ({ cartItem, setCartItem }) => {
  const [user, loading, error] = useAuthState(auth);

  const [paymentMethod, setPaymentMethod] = useState("VNPAY");
  const [cardOwner, setCardOwner] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [address, setAddress] = useState("");
  const status = false;
  const current = new Date();
  //date
  const date = `${current.getDate()}-${
    current.getMonth() + 1
  }-${current.getFullYear()}`;
  //time
  const time =
    current.getHours() +
    ":" +
    current.getMinutes() +
    ":" +
    current.getSeconds();

  var arrayProducts = [];
  cartItem.map((product) => {
    let prd = {
      id: product.id,
      qty: product.qty,
      title: product.data.title,
      price: product.data.price,
      image: product.data.image,
    };
    arrayProducts.push(prd);
    return 0;
  });

  const totalPrice = cartItem.reduce(
    (price, item) => price + item.data.price * item.qty,
    0
  );
  async function checkout(e) {
    e.preventDefault();
    if (cartItem.length === 0) {
      alert("Giỏ hàng trống");
    } else if (!user) {
      alert("Vui lòng đăng nhập");
    } else {
      await addDoc(collection(db, "orders"), {
        user_id: user?.uid,
        paymentMethod: paymentMethod,
        cardOwner: cardOwner,
        cardNumber: cardNumber,
        address: address,
        totalPrice: totalPrice,
        status: status,
        date: date,
        time: time,
        arrayProducts: arrayProducts,
      });
      alert("Đặt hàng thành công");
      setCartItem([]);
      setAddress("");
      setCardNumber("");
      setCardOwner("");
    }
  }
  return (
    <>
      <div className="cart-total">
        <div className="payment">
          <div className="total-box">
            <p>Tổng thanh toán: </p>
            <span>
              {totalPrice.toLocaleString("vi-VN", {
                style: "currency",
                currency: "VND",
              })}
            </span>
          </div>
          <form className="payment-box" onSubmit={checkout}>
            <div className="second-container">
              <p>Chọn phương thức thanh toán:</p>
              <div className="payment-method">
                <label className="payment-input">
                  <input
                    type="radio"
                    name="payment-method"
                    value="VNPAY"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                    defaultChecked="checked"
                  />
                  <i className="fa-solid fa-qrcode"></i>
                  <p>VNPAY</p>
                </label>
                <label className="payment-input">
                  <input
                    type="radio"
                    name="payment-method"
                    value="Thẻ tín dụng"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <i className="fa-solid fa-credit-card"></i>
                  <p>Thẻ tín dụng</p>
                </label>
                <label className="payment-input">
                  <input
                    type="radio"
                    name="payment-method"
                    value="Tiền mặt"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <i className="fa-solid fa-wallet"></i>
                  <p>Tiền mặt</p>
                </label>
              </div>
              {paymentMethod === "Thẻ tín dụng" ? (
                <>
                  <div className="input-holder">
                    <label>Tên chủ thẻ</label>
                    <input
                      value={cardOwner}
                      type="text"
                      onChange={(e) => setCardOwner(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input-holder">
                    <label>Số thẻ</label>
                    <input
                      value={cardNumber}
                      type="text"
                      onChange={(e) => setCardNumber(e.target.value)}
                      required
                    />
                  </div>
                </>
              ) : (
                ""
              )}
              {paymentMethod === "VNPAY" ? (
                <div className="qr-img">
                  <img src="assets/images/qr.jpg" alt="" />
                </div>
              ) : (
                ""
              )}
              <div className="input-holder address-holder">
                <label>Địa chỉ nhận hàng</label>
                <textarea
                  value={address}
                  type="text"
                  rows="3"
                  onChange={(e) => setAddress(e.target.value)}
                  required
                />
              </div>
            </div>
            <button type="submit">Thanh toán</button>
          </form>
        </div>
      </div>
    </>
  );
};

export default CartTotal;
