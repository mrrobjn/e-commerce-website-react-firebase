import { useEffect } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import ProfileMenu from "../profilemenu/ProfileMenu";
import "./OrderDetail.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../../firebase";
const OrderDetail = ({ orders }) => {
  const [user, loading, error] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!user) return navigate("/login");
  }, [user, loading]);

  const { orderId } = useParams();
  const orderInfo = orders.find((order) => order.id === orderId);
  // map array trong order
  const arrProducts =
    orderInfo && orderInfo.data.arrayProducts.map((products) => products);
  return (
    <>
      <section className="order-detail-section" style={{ paddingTop: 140 }}>
        <ProfileMenu />
        <div className="order-detail-container">
          <div className="product-list">
            {arrProducts &&
              arrProducts.map((productDetail) => {
                return (
                  <Link
                    to={`/product/${productDetail.id}`}
                    className="order-product"
                    key={productDetail.id}
                  >
                    <div className="product-img">
                      <img src={productDetail.image} alt="" />
                    </div>
                    <div className="product-detail">
                      <h3>{productDetail.title}</h3>
                      <div className="detail-container">
                        <div className="left-detail">
                          <p>Số lượng:</p>
                          <p>Giá:</p>
                          <p>Tổng:</p>
                        </div>
                        <div className="right-detail">
                          <p>{productDetail.qty}</p>
                          <p>
                            {productDetail.price.toLocaleString("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            })}
                          </p>
                          <p>
                            {(
                              productDetail.price * productDetail.qty
                            ).toLocaleString("vi-VN", {
                              style: "currency",
                              currency: "VND",
                            })}
                          </p>
                        </div>
                      </div>
                    </div>
                  </Link>
                );
              })}
          </div>
          {orderInfo && (
            <div className="order-detail">
              <div className="detail-container">
                <div className="title">
                  <p>Ngày đặt: </p>
                  <p>Giờ đặt: </p>
                  <p>Thành tiền: </p>
                  <p>Trạng thái: </p>
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
                </div>
              </div>
              <div className="detail-container">
                <div className="title">
                  <p>Thanh toán:</p>
                  {orderInfo.data.cardOwner ? <p>Chủ thẻ: </p> : ""}
                  {orderInfo.data.cardNumber ? <p>Số thẻ: </p> : ""}
                  <p>Địa chỉ: </p>
                </div>
                <div className="detail">
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
