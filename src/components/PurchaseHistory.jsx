import "../assets/scss/components/PurchaseHistory.scss";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import {auth}from '../firebase'
import { OrderContext } from "~/context/OrderContext";
const PurchaseHistory = () => {
  const [user, loading] = useAuthState(auth);
  const [orderWithUser, setOrderWithUser] = useState([]);
  const navigate = useNavigate();
  const orders =useContext(OrderContext)
  const getOrderByUser = () => {
    const orderRef = orders.filter((order) => order.data.user_id === user?.uid);
    setOrderWithUser(orderRef);
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    getOrderByUser();
    if (!user) return navigate("/login");
  }, [user, loading]);
  return (
    <>
      <div className="order-history-section">
        <div className="heading">
          <h1>Lịch sử mua</h1>
        </div>
        <div className="order-container">
          <ul className="order-title">
            <li className="date">Ngày đặt</li>
            <li className="address">Địa chỉ</li>
            <li className="total">Tổng tiền</li>
            <li className="payment-method">Thanh toán</li>
            <li className="status">Xác nhận</li>
          </ul>
          <ul className="order-history">
            {orderWithUser &&
              orderWithUser.map((order) => {
                return (
                  <Link to={`/purchasehistory/${order.id}`} key={order.id}>
                    <li>
                      <p className="date">{order.data.date}</p>
                      <p className="address">{order.data.address}</p>
                      <p className="total">
                        {order.data.totalPrice.toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </p>
                      <p className="payment-method">
                        {order.data.paymentMethod}
                      </p>
                      <p
                        className={
                          order.data.status === false
                            ? "status not-confirm"
                            : "status confirm"
                        }
                      >
                        {order.data.status === false ? (
                            <i className="fa-solid fa-xmark"></i> 
                        ) : (
                          <i className="fa-solid fa-check"></i>
                        )}
                      </p>
                    </li>
                  </Link>
                );
              })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default PurchaseHistory;
