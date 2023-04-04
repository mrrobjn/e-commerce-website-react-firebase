import React, { useContext } from "react";
import { OrderContext } from "~/context/OrderContext";
import { UserContext } from "~/context/UserContext";
import "~~/components/admin/AdminOrder.scss";
import { ToastContainer } from "react-toastify";

const AdminOrders = () => {
  const { orders, updateStatus } = useContext(OrderContext);
  const users = useContext(UserContext);
  return (
    <div className="admin-order-container">
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
      <div className="heading">
        <h1>Quản lý đơn hàng</h1>
      </div>
      <div className="table-container">
        <div className="table-box">
          <table>
            <thead>
              <tr>
                <th>#</th>
                <th>Email</th>
                <th>Địa chỉ</th>
                <th>Ngày</th>
                <th>Giờ</th>
                <th>Thanh toán</th>
                <th>Chủ thẻ</th>
                <th>Số thẻ</th>
                <th>Sản phẩm</th>
                <th>Số lượng</th>
                <th>Tổng tiền (Vnđ)</th>
                <th className="action">Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order, index) => {
                const user = users?.find(
                  (user) => user.data.uid === order.data.user_id
                );
                const date = order.data.timestamp.toDate();
                const formattedDate = `${
                  date.getMonth() + 1
                }/${date.getDate()}/${date.getFullYear()}`;
                const hours = date.getHours();
                const minutes = date.getMinutes();
                const formattedTime = `${hours % 12}:${minutes < 10 ? "0" : ""}${minutes} ${
                  hours >= 12 ? "PM" : "AM"
                }`;
                return (
                  <tr key={order.id}>
                    <td>{index + 1}</td>
                    <td className="email">{user.data.email}</td>
                    <td className="address">{order.data.address}</td>
                    <td className="date">{formattedDate}</td>
                    <td className="time">{formattedTime}</td>
                    <td className="payment">{order.data.paymentMethod}</td>
                    <td className="card-owner">
                      {order.data.cardOwner || "#"}
                    </td>
                    <td className="card-number">
                      {order.data.cardNumber || "#"}
                    </td>
                    <td className="product">
                      {order.data.arrayProducts.map((product, index) => {
                        return <p key={index}>{product.title}</p>;
                      })}
                    </td>
                    <td className="qty">
                      {order.data.arrayProducts.map((product, index) => {
                        return <p key={index}>{product.qty}</p>;
                      })}
                    </td>
                    <td className="total">{order.data.totalPrice}</td>
                    <td className="action">
                      <select
                        defaultValue={order.data.status}
                        onChange={(e) => updateStatus(order.id, e.target.value)}
                      >
                        <option value="false">Đang chờ</option>
                        <option value="true">Đã xác nhận</option>
                      </select>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminOrders;
