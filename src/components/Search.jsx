import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "~/firebase";
import { ProductContext } from "~/context/ProductContext";
const Search = ({ cartItem }) => {
  const { products, searchProduct, searchResult,setProductFilter } = useContext(ProductContext);
  const [input, setInput] = useState("");
  const [user] = useAuthState(auth);
  const handleChange = (e) => {
    setInput(e.target.value);
    searchProduct(input);
  };
  return (
    <div className="search">
      <div className="logo">
        <Link to="/">
          EC<i className="fa-solid fa-cart-shopping"></i>
        </Link>
      </div>
      {/* search bar */}
      <div className={input ? "search-container active" : "search-container"}>
        <i className="fa-solid fa-magnifying-glass"></i>
        <input
          type="search"
          className="search-bar"
          value={input}
          placeholder="Tìm kiếm sản phẩm..."
          onChange={(e) => handleChange(e)}
        />
        <div className="search-result">
          {searchResult?.map((product) => {
            return (
              <Link key={product.id} to={`/product/${product.id}`} onClick={()=>setInput("")}>
                <div className="prd-img">
                  <img src={product.data.image} alt="" />
                </div>
                <div className="prd-detail">
                  <p>{product.data.title}</p>
                  {product.data.discount !== 0 ? (
                    <div className="prd-price">
                      <p className="price">
                        {(
                          (product.data.price / 100) *
                          (100 - product.data.discount)
                        ).toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </p>
                      <p className="old-price">
                        {product.data.price.toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </p>
                      <p className="discount">-{product.data.discount}%</p>
                    </div>
                  ) : (
                    <div className="prd-price">
                      <p className="price">
                        {product.data.price.toLocaleString("vi-VN", {
                          style: "currency",
                          currency: "VND",
                        })}
                      </p>
                    </div>
                  )}
                </div>
              </Link>
            );
          })}
        </div>
      </div>
      {/* nav btn */}
      <div className="nav-btn-container">
        <ul>
          <li className="nav-btn">
            <Link to="/">Trang chủ</Link>
          </li>
          <li className="nav-btn">
            <Link to="/product" onClick={() => setProductFilter(products)}>
              Sản phẩm
            </Link>
          </li>
          <li className="nav-btn ">
            <Link to={user ? "/profile/userprofile" : "/login"}>Tài khoản</Link>
          </li>
          <li className="nav-btn cart-btn">
            <Link to="/cart">
              <i className="fa-solid fa-cart-shopping"></i>
            </Link>
            <span>{cartItem.length}</span>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Search;
