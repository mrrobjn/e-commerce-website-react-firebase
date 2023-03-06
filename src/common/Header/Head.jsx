import React from "react";
import { Link, useNavigate } from "react-router-dom";

const Head = () => {
  const navigate = useNavigate();
  const isLogin = localStorage.getItem("isLogin");
  const signOut = () => {
    localStorage.clear();
    window.location.reload();
  };

  return (
    <div className="head">
      <div className="left-head">
        <a href="#">
          <i className="fa-solid fa-phone"></i>
          +84 905 109 563
        </a>
        <a href="#">
          <i className="fa-solid fa-envelope"></i>
          ECW@gmail.com
        </a>
      </div>
      <div className="right-head">
        {isLogin === "true" ? (
          <a onClick={signOut}>Đăng xuất</a>
        ) : (
          <a onClick={() => navigate("/login")}>Đăng nhập</a>
        )}
        <a>🇻🇳 VN</a>
        <a>🇬🇧 UK</a>
      </div>
    </div>
  );
};

export default Head;
