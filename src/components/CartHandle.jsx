import { useContext } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "~/context/ProductContext";

const CartHandle = () => {
  const { addToCart, descreaseQty, deleteCart, cartItem } =
    useContext(ProductContext);
  return (
    <div className="cart-detail">
      <div className="cart-header">
        <h1>Giỏ hàng của bạn</h1>
        <p>{cartItem.length} sản phẩm</p>
      </div>
      <div className="handle-product">
        {/* if there are no item in cart */}
        {cartItem.length === 0 && <h1 className="no-items">Giỏ hàng trống</h1>}
        {/* if at least 1 item in cart */}
        {cartItem.map((product) => {
          const productQty = product.data.price * product.qty;
          return (
            <div className="cart-product" key={product.id}>
              <Link className="img">
                <img src={product.data.image} alt="" />
              </Link>
              <div className="cart-details">
                <p className="title">{product.data.title}</p>
                <p className="price">
                  {(
                    (product.data.price / 100) *
                    (100 - product.data.discount)
                  ).toLocaleString("vi-VN", {
                    style: "currency",
                    currency: "VND",
                  })}{" "}
                  * {product.qty}
                  <br />
                  <span>
                    {((productQty/100)*(100-product.data.discount)).toLocaleString("vi-VN", {
                      style: "currency",
                      currency: "VND",
                    })}
                  </span>
                </p>
              </div>
              <div className="cart-items-function">
                <button
                  className="item-remove btn"
                  onClick={() => deleteCart(product)}
                >
                  <i className="fa-solid fa-xmark"></i>
                </button>
                <button
                  className="increase btn"
                  onClick={() => addToCart(product)}
                >
                  <i className="fa-solid fa-plus"></i>
                </button>
                <button
                  className="descrease btn"
                  onClick={() => descreaseQty(product)}
                >
                  <i className="fa-solid fa-minus"></i>
                </button>
              </div>
              <div className="cart-item-price"></div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default CartHandle;
