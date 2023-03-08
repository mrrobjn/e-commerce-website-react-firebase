import React from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { Link, useNavigate } from "react-router-dom";
import { logout, auth } from "../../firebase";
const Head = () => {
  const navigate = useNavigate();
  const [user, loading, error] = useAuthState(auth);

  const signOutBtn = () => {
    logout(auth);
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
        {user ? (
          <a onClick={signOutBtn}>Đăng xuất</a>
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
