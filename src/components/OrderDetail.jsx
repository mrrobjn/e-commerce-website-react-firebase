import { useContext, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import "~~/components/OrderDetail.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { OrderContext } from "~/context/OrderContext";
const OrderDetail = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const orders = useContext(OrderContext);
  const { orderId } = useParams();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!user) return navigate("/login");
  }, [user, loading]);
  const orderInfo = orders.find((order) => order.id === orderId);
  // map array trong order
  const arrProducts =
    orderInfo && orderInfo.data.arrayProducts.map((products) => products);
  return (
    <>
      <section className="order-detail-section">
        <ProfileMenu />
        <div className="order-detail-container">
          <div className="heading">
            <h1>Chi tiết đơn hàng</h1>
          </div>
          <div className="product-list">
            <table>
              <tbody>
                <tr className="title">
                  <th className="img">Ảnh</th>
                  <th className="name">Tên sản phẩm</th>
                  <th className="price">Giá</th>
                  <th className="qty">Số lượng</th>
                  <th className="total">Đơn giá</th>
                </tr>
                {arrProducts &&
                  arrProducts.map((productDetail) => {
                    return (
                      <tr
                        key={productDetail.id}
                        onClick={() => navigate(`/product/${productDetail.id}`)}
                        className="product"
                      >
                        <td>
                          <div className="img">
                            <img src={productDetail.image} alt="" />
                          </div>
                        </td>
                        <td className="prd-title">{productDetail.title}</td>
                        <td>
                          {productDetail.price.toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </td>
                        <td>{productDetail.qty}</td>
                        <td>
                          {(
                            productDetail.price * productDetail.qty
                          ).toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </td>
                      </tr>
                    );
                  })}
              </tbody>
            </table>
          </div>
          <div className="detail-container">
            {orderInfo && (
              <table>
                <tbody>
                  <tr>
                    <td className="detail-title">Ngày đặt: </td>
                    <td>{orderInfo.data.date}</td>
                  </tr>
                  <tr>
                    <td className="detail-title">Giờ đặt: </td>
                    <td>{orderInfo.data.time}</td>
                  </tr>
                  <tr>
                    <td className="detail-title">Thành tiền: </td>
                    <td style={{ color: "#ea5867" }}>
                      {orderInfo.data.totalPrice.toLocaleString("vi-VN", {
                        style: "currency",
                        currency: "VND",
                      })}
                    </td>
                  </tr>
                  <tr>
                    <td className="detail-title">Trạng thái: </td>
                    <td
                      className={
                        orderInfo.data.status === false ? "red" : "green"
                      }
                    >
                      {orderInfo.data.status === false
                        ? "Đang chờ"
                        : "Đã xác nhận"}
                    </td>
                  </tr>
                  <tr>
                    <td className="detail-title">Thanh toán:</td>
                    <td>{orderInfo.data.paymentMethod}</td>
                  </tr>
                  {orderInfo.data.cardOwner ? (
                    <tr>
                      <td className="detail-title">Chủ thẻ: </td>
                      <td>{orderInfo.data.cardOwner}</td>
                    </tr>
                  ) : (
                    ""
                  )}
                  {orderInfo.data.cardNumber ? (
                    <tr>
                      <td className="detail-title">Số thẻ: </td>
                      <td>{orderInfo.data.cardNumber}</td>
                    </tr>
                  ) : (
                    ""
                  )}
                  <tr>
                    <td className="detail-title">Địa chỉ: </td>
                    <td>{orderInfo.data.address}</td>
                  </tr>
                </tbody>
              </table>
            )}
          </div>
        </div>
      </section>
    </>
  );
};

export default OrderDetail;
