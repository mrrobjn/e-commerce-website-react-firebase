import { useContext, useEffect } from "react";
import {  useNavigate, useParams } from "react-router-dom";
import ProfileMenu from "./ProfileMenu";
import "~~/components/OrderDetail.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { OrderContext } from "~/context/OrderContext";
const OrderDetail = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  const orders=useContext(OrderContext)
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
          <div className="product-list">
            <table>
             <tbody>
               <tr className="title">
                 <td className="img">Ảnh</td>
                 <td className="name">Tên sản phẩm</td>
                 <td className="price">Giá</td>
                 <td className="qty">Số lượng</td>
                 <td className="total">Đơn giá</td>
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
                       <td>
                         <p>{productDetail.title}</p>
                       </td>
                       <td>
                         <p>
                           {productDetail.price.toLocaleString("vi-VN", {
                             style: "currency",
                             currency: "VND",
                           })}
                         </p>
                       </td>
                       <td>
                         <p>{productDetail.qty}</p>
                       </td>
                       <td>
                         <p>
                           {(
                             productDetail.price * productDetail.qty
                           ).toLocaleString("vi-VN", {
                             style: "currency",
                             currency: "VND",
                           })}
                         </p>
                       </td>
                     </tr>
                   );
                 })}
             </tbody>
            </table>
          </div>
          {orderInfo && (
            <div className="order-detail">
              <div className="detail-container">
                <div className="title">
                  <p>Ngày đặt: </p>
                  <p>Giờ đặt: </p>
                  <p>Thành tiền: </p>
                  <p>Trạng thái: </p>
                  <p>Thanh toán:</p>
                  {orderInfo.data.cardOwner ? <p>Chủ thẻ: </p> : ""}
                  {orderInfo.data.cardNumber ? <p>Số thẻ: </p> : ""}
                  <p>Địa chỉ: </p>
                </div>
                <div className="detail">
                  <p>{orderInfo.data.date}</p>
                  <p>{orderInfo.data.time}</p>
                  <p style={{ color: "#ea5867" }}>
                    {orderInfo.data.totalPrice.toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </p>
                  <p
                    className={
                      orderInfo.data.status === false ? "red" : "green"
                    }
                  >
                    {orderInfo.data.status === false
                      ? "Chưa xác nhận"
                      : "Đã xác nhận"}
                  </p>
                  <p>{orderInfo.data.paymentMethod}</p>
                  {orderInfo.data.cardOwner ? (
                    <p>{orderInfo.data.cardOwner}</p>
                  ) : (
                    ""
                  )}
                  {orderInfo.data.cardNumber ? (
                    <p>{orderInfo.data.cardNumber}</p>
                  ) : (
                    ""
                  )}
                  {/* <p>{orderInfo.data.cardNumber}</p> */}
                  <p>{orderInfo.data.address}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </section>
    </>
  );
};

export default OrderDetail;
