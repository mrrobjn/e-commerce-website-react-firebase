import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "~/firebase";
import { ProductContext } from "~/context/ProductContext";
const Search = ({ cartItem, setProductFilter }) => {
  const products = useContext(ProductContext);

  const [user] = useAuthState(auth);
  return (
    <div className="search">
      <div className="logo">
        <Link to="/">
          EC<i className="fa-solid fa-cart-shopping"></i>
        </Link>
      </div>
      <div className="search-bar">
        <i className="fa-solid fa-magnifying-glass"></i>
        <input type="text" placeholder="Tìm kiếm sản phẩm..." />
      </div>
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
