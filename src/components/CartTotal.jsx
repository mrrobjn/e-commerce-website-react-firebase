import React, { useContext, useState } from "react";
import { db, auth } from "../firebase";
import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { useAuthState } from "react-firebase-hooks/auth";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { ProductContext } from "~/context/ProductContext";
const CartTotal = () => {
  const { cartItem, setCartItem } = useContext(ProductContext);
  const [user] = useAuthState(auth);
  const [paymentMethod, setPaymentMethod] = useState("VNPAY");
  const [dayExpire, setDayExpire] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [address, setAddress] = useState("");
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
      errorToast("Giỏ hàng trống");
    } else {
      await addDoc(collection(db, "orders"), {
        user_id: user?.uid,
        paymentMethod: paymentMethod,
        dayExpire: dayExpire,
        cardNumber: cardNumber,
        address: address,
        totalPrice: totalPrice,
        status: "false",
        arrayProducts: arrayProducts,
        timestamp: serverTimestamp(),
      });
      successToast("Đặt hàng thành công");
      setCartItem([]);
      setAddress("");
      setCardNumber("");
      setDayExpire("");
    }
  }
  const errorToast = (text) => toast.error(`${text}`);
  const successToast = (text) => toast.success(`${text}`);

  return (
    <>
      <div className="cart-total">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div className="payment">
          <div className="total-box">
            <h1>Tổng thanh toán: </h1>
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
                    value="VISA"
                    onChange={(e) => setPaymentMethod(e.target.value)}
                  />
                  <i className="fa-brands fa-cc-visa"></i> <p>VISA</p>
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
              {paymentMethod === "VISA" ? (
                <>
                  <div className="input-holder">
                    <input
                      value={cardNumber}
                      type="text"
                      placeholder="Số thẻ *"
                      onChange={(e) => setCardNumber(e.target.value)}
                      required
                    />
                  </div>
                  <div className="input-holder">
                    <input
                      value={dayExpire}
                      type="text"
                      placeholder="Ngày hết hạn (MM/YY)"
                      onChange={(e) => setDayExpire(e.target.value)}
                      required
                    />
                  </div>
                </>
              ) : (
                ""
              )}
              <div className="input-holder address-holder">
                <input
                  value={address}
                  type="text"
                  onChange={(e) => setAddress(e.target.value)}
                  required
                  placeholder="Địa chỉ nhận hàng"
                  maxLength="50"
                />
              </div>
              {paymentMethod === "VNPAY" ? (
                <div className="qr-img">
                  <img src="assets/images/qr.jpg" alt="" />
                </div>
              ) : (
                ""
              )}
              <button className="cart-btn" type="submit">
                Thanh toán
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default CartTotal;
