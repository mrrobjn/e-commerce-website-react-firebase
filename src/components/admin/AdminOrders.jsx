import React, { useContext } from "react";
import { OrderContext } from "~/context/OrderContext";
import { UserContext } from "~/context/UserContext";
import "~~/components/admin/AdminOrder.scss";
const AdminOrders = () => {
  const orders = useContext(OrderContext);
  const users = useContext(UserContext);
  const status = ["Đang chờ", "Đã xác nhận", "Đã giao"];
  return (
    <div className="admin-order-container">
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
                <th>Trạng thái</th>
              </tr>
            </thead>
            <tbody>
              {orders?.map((order, index) => {
                const user = users?.find(
                  (user) => user.data.uid === order.data.user_id
                );
                return (
                  <tr key={order.id}>
                    <td>{index + 1}</td>
                    <td className="email">{user.data.email}</td>
                    <td className="address">{order.data.address}</td>
                    <td className="date">{order.data.date}</td>
                    <td className="time">{order.data.time}</td>
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
                      <select>
                        {status.map((e, index) => {
                          return (
                            <option value={e} key={index}>
                              {e}
                            </option>
                          );
                        })}
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
