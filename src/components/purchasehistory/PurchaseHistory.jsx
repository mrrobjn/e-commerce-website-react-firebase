import "./PurchaseHistory.scss";
import {useEffect} from "react";
import { Link } from "react-router-dom";
const PurchaseHistory = ({ orders }) => {
  const logUser = localStorage.getItem("logUser");
  const isLogin = localStorage.getItem("isLogin");
  const orderWithUser = orders.filter(
    (order) => order.data.user_id === logUser
  );
  useEffect(() => {
    window.scrollTo(0, 0)
  }, [])
  return (
    <>
      <div className="order-history-section">
        {isLogin ? (
          <div className="order-container">
            <ul className="order-title">
              <li className="date">Ngày đặt</li>
              <li className="address">Địa chỉ</li>
              <li className="total">Tổng tiền</li>
              <li className="payment-method">Thanh toán</li>
              <li className="status">Trạng thái</li>
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
                          {order.data.status === false
                            ? "Chưa xác nhận"
                            : "Đã xác nhận"}
                        </p>
                      </li>
                    </Link>
                  );
                })}
            </ul>
          </div>
        ) : (
          <div className="no-login">
            <h1>Vui lòng đăng nhập</h1>
          </div>
        )}
      </div>
    </>
  );
};

export default PurchaseHistory;
