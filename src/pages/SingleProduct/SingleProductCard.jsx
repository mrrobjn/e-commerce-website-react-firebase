import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
const SingleProductCard = ({ product, brand, category,addToCartQty }) => {
  const [quantity, setQuantity] = useState(1);
  const [productName, setProductName] = useState("");
  const [productImg, setProductImg] = useState("");
  const [productPrice, setProductPrice] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
    const { image, title, price } = product.data;
      setProductName(title);
      setProductImg(image);
      setProductPrice(price);
  }, []);
  // change quantity
  const increaseQty = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQty = () => {
    if (quantity >= 2) {
      setQuantity(quantity - 1);
    }
  };
  return (
    <>
      {brand && (
        <div className="single-product-container">
          <div className="single-product-left">
            <div className="img">
              {productImg ? (
                <img src={productImg} alt="" />
              ) : (
                <Skeleton height={390}>
                  <img src={productImg} alt="" />
                </Skeleton>
              )}
            </div>
          </div>
          <div className="single-product-right">
            <h3>{productName || <Skeleton count={2} height={23} />}</h3>
            <div className="detail-box">
              <p>
                Thương hiệu: <span>{brand && brand.data.name}</span>
              </p>
              <p>
                Loại: <span>{category.data.name}</span>
              </p>
              <div className="rate">
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i>
                <i className="fa-solid fa-star"></i> (0 đánh giá)
              </div>
              <h5 className="price">
                {productPrice.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                }) || <Skeleton height={34} />}
              </h5>
            </div>
            <div className="quantity-box">
              <button
                className="descrease-value-btn"
                onClick={() => decreaseQty()}
              >
                <i className="fa-solid fa-minus"></i>
              </button>
              <div className="quantity-value">{quantity}</div>
              <button
                className="increase-value-btn"
                onClick={() => increaseQty()}
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
            <button
              className="add-to-cart-btn"
              onClick={() => addToCartQty(product, quantity)}
            >
              Chọn mua
            </button>
          </div>
        </div>
      )}
    </>
  );
};

export default SingleProductCard;
