import "~~/components/PurchaseHistory.scss";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { OrderContext } from "~/context/OrderContext";
const PurchaseHistory = () => {
  const [user, loading] = useAuthState(auth);
  const [orderWithUser, setOrderWithUser] = useState([]);
  const navigate = useNavigate();
  const orders = useContext(OrderContext);
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
        <table className="order-container">
          <thead className="order-title">
            <tr>
              <th>#</th>
              <th className="date">Ngày đặt</th>
              <th className="total">Tổng tiền</th>
              <th className="payment-method">Thanh toán</th>
              <th className="status">Xác nhận</th>
            </tr>
          </thead>
          <tbody className="order-history">
            {orderWithUser &&
              orderWithUser.map((order,index) => {
                return (
                  <tr
                    key={order.id}
                    onClick={() => navigate(`/profile/purchasehistory/${order.id}`)}
                  >
                    <td>{index+1}</td>
                    <td className="date">{order.data.date}</td>
                    <td className="total">
                      {order.data.totalPrice.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </td>
                    <td className="payment-method">
                      {order.data.paymentMethod}
                    </td>
                    <td className="status">
                      <span
                        className={
                          order.data.status === false
                            ? "not-confirm"
                            : "confirm"
                        }
                      >
                        {order.data.status === false ? (
                          <i className="fa-solid fa-xmark"></i>
                        ) : (
                          <i className="fa-solid fa-check"></i>
                        )}
                        {" "}
                        {order.data.status === false
                          ? "Đang chờ"
                          : "Đã xác nhận"}
                      </span>
                    </td>
                  </tr>
                );
              })}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default PurchaseHistory;
