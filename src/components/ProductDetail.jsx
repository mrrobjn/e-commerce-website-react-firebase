import React, { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import { ProductContext } from "~/context/ProductContext";
import { CategoriesContext } from "~/context/CategoriesContext";
import { BrandsContext } from "~/context/BrandsContext";
import Loading from "~/layout/Loading";
const ProductDetail = ({ addToCartQty }) => {
  const [quantity, setQuantity] = useState(1);
  const [loading, setLoading] = useState(true);
  const {products} = useContext(ProductContext);
  const {categories} = useContext(CategoriesContext);
  const {brands} = useContext(BrandsContext);
  useEffect (()=>{
    products.length >= 1 && setLoading(false);
  },[products])
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
    <section className="single-product-section" 
    style={
      loading
        ? {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            background: "#fff",
            height:430
          }
        : null
    }
    >
      {loading ? (
        <Loading />
      ) : (
        <div className="single-product-container">
          <div className="single-product-left">
            <div className="img">
              <img src={product.data.image} alt="" />
            </div>
          </div>
          <div className="single-product-right">
            <h3>{product.data.title}</h3>
            <div className="detail-box">
              <p>
                Thương hiệu: <span>{brand.data.name}</span>
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
                {product.data.price.toLocaleString("vi-VN", {
                  style: "currency",
                  currency: "VND",
                })}
              </h5>
            </div>
            <div className="quantity-box">
              <button
                className="descrease-value-btn btn"
                onClick={() => decreaseQty()}
              >
                <i className="fa-solid fa-minus"></i>
              </button>
              <div className="quantity-value">{quantity}</div>
              <button
                className="increase-value-btn btn"
                onClick={() => increaseQty()}
              >
                <i className="fa-solid fa-plus"></i>
              </button>
            </div>
            <button
              className="add-to-cart-btn btn"
              onClick={() => addToCartQty(product, quantity)}
            >
              Chọn mua
            </button>
          </div>
        </div>
      )}
    </section>
  );
};

export default ProductDetail;
