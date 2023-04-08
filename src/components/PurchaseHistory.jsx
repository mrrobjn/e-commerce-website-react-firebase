import "~~/components/PurchaseHistory.scss";
import { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { OrderContext } from "~/context/OrderContext";
const PurchaseHistory = () => {
  const [user, loading] = useAuthState(auth);
  const { orders } = useContext(OrderContext);
  const navigate = useNavigate();
  const orderWithUser = orders?.filter(
    (order) => order.data.user_id === user?.uid
  );
  useEffect(() => {
    window.scrollTo(0, 0);
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
              <th>id đơn hàng</th>
              <th className="date">Ngày đặt</th>
              <th className="total">Tổng tiền</th>
              <th className="payment-method">Thanh toán</th>
              <th className="status">Xác nhận</th>
            </tr>
          </thead>
          <tbody className="order-history">
            {orderWithUser?.map((order, index) => {
              const date = order.data.timestamp.toDate()
              const formattedDate = `${date.getMonth() + 1}/${date.getDate()}/${date.getFullYear()}`;
              return (
                <tr
                  key={order.id}
                  onClick={() =>
                    navigate(`/profile/purchasehistory/${order.id}`)
                  }
                >
                  <td>{order.id}</td>
                  <td className="date">{formattedDate}</td>
                  <td className="total">
                    {order.data.totalPrice.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </td>
                  <td className="payment-method">{order.data.paymentMethod}</td>
                  <td className="status">
                    <span
                      className={
                        order.data.status === "false"
                          ? "not-confirm"
                          : "confirm"
                      }
                    >
                      {order.data.status === "false" ? (
                        <i className="fa-solid fa-xmark"></i>
                      ) : (
                        <i className="fa-solid fa-check"></i>
                      )}{" "}
                      {order.data.status === "false"
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
