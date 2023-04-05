import React from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";
import { ProductContext } from "~/context/ProductContext";
import Loading from "~/layout/Loading";
const ProductCard = () => {
  const [loading, setLoading] = useState(true);
  const { products,productFilter,addToCart } = useContext(ProductContext);
  useEffect(() => {
    products.length >= 1 && setLoading(false);
  }, [products]);
  return (
    <>
      <section
        className="product-section"
        style={
          loading
            ? {
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                background: "#fff",
                marginLeft: 5,
              }
            : null
        }
      >
        {loading ? (
          <Loading />
        ) : (
          <>
            {productFilter.length === 0 && (
              <h1 className="no-items">Không có sản phẩm</h1>
            )}
            {productFilter.map((product) => {
              return (
                <div className="product-box" key={product.id}>
                  <div className="product">
                    <Link to={`/product/${product.id}`}>
                      <div className="product-img">
                        {product.data.discount !== 0 ? (
                          <span className="discount">
                            {product.data.discount}% Off
                          </span>
                        ) : (
                          ""
                        )}
                        <img src={product.data.image} alt="" />
                      </div>
                    </Link>
                    <div className="product-detail">
                      <p className="product-title">{product.data.title}</p>
                      <div className="rate">
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i>
                        <i className="fa-solid fa-star"></i> (2)
                      </div>
                      <div className="price">
                        <h4>
                          {((product.data.price/100)*(100-product.data.discount)).toLocaleString("vi-VN", {
                            style: "currency",
                            currency: "VND",
                          })}
                        </h4>
                        <button
                          className="btn"
                          onClick={() => addToCart(product)}
                        >
                          <i className="fa-solid fa-plus"></i>
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              );
            })}
          </>
        )}
      </section>
    </>
  );
};

export default ProductCard;
