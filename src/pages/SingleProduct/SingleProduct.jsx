import { useParams } from "react-router-dom";
import "./SingleProduct.scss";
import React, { useEffect, useState } from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const SingleProduct = ({ products, addToCartQty, categories, brands }) => {
  const [quantity, setQuantity] = useState(1);
  const [productName, setProductName] = useState("");
  const [productImg, setProductImg] = useState("");
  const [productPrice, setProductPrice] = useState("");
  const [productCategory, setProductCategory] = useState("");
  const [productBrand, setProductBrand] = useState("");
  useEffect(() => {
    window.scrollTo(0, 0);
    brand &&
      setTimeout(() => {
        setProductName(product.data.title);
        setProductImg(product.data.image);
        setProductPrice(product.data.price);
        setProductCategory(category.data.name);
        setProductBrand(brand.data.name);
      }, 1000);
  });
  // change quantity
  const increaseQty = () => {
    setQuantity(quantity + 1);
  };
  const decreaseQty = () => {
    if (quantity >= 2) {
      setQuantity(quantity - 1);
    }
  };
  // get product id from url
  const { productId } = useParams();
  // get product
  const product = products.find((product) => product.id === productId);
  // get category
  const category =
    product &&
    categories.find((category) => category.id === product.data.category_id);
  // get brand
  const brand =
    product && brands.find((brand) => brand.id === product.data.brand_id);

  return (
    <>
      <section className="single-product-section" style={{ paddingTop: 150 }}>
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
                {productBrand ? (
                  <p>
                    Thương hiệu: <span>{productBrand}</span>
                  </p>
                ) : (
                  <Skeleton height={17}>
                    <p>
                      Thương hiệu: <span>{productBrand}</span>
                    </p>
                  </Skeleton>
                )}
                {productCategory ? (
                  <p>
                    Loại <span>{productCategory}</span>
                  </p>
                ) : (
                  <Skeleton height={17}>
                    <p>
                      Loại <span>{productCategory}</span>
                    </p>
                  </Skeleton>
                )}
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
                  }) || <Skeleton height={34} width={200} />}
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
      </section>
    </>
  );
};

export default SingleProduct;
