import React, { useState } from "react";
import { Link } from "react-router-dom";
import { signIn, auth,signInWithGoogle } from "../firebase";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(auth, email, password);
  };
  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1>Đăng nhập</h1>
          <button className="google-login" type="button" onClick={signInWithGoogle}>
            <div className="google-logo">
              <img
                src="assets\images\logo\google-logo-png-webinar-optimizing-for-success-google-business-webinar-13.png"
                alt=""
              />
            </div>
            <p>Đăng nhập với Google</p>
          </button>
          <div className="option-label">
            <div className="login-line"></div>
            <p>Hoặc</p>
            <div className="login-line"></div>
          </div>
          <div className="box">
            {/* <label>
              <i className="fa-solid fa-user"></i> Email
            </label> */}
            <input
              type="email"
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              placeholder="eg: abc@gmail.com"
            />
          </div>
          <div className="box">
            {/* <label>
              <i className="fa-solid fa-lock"></i> Mật khẩu
            </label> */}
            <input
              type="password"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
              placeholder="************"
            />
          </div>
          <div className="save-forgot-password">
            <label className="save-password">
              <input type="checkbox" /> Nhớ mật khẩu
            </label>
            <Link
              className="forgot-password"
              to="/resetpassword"
            >
              Quên mật khẩu?
            </Link>
          </div>
          <button className="login-btn" type="submit">
            Đăng nhập
          </button>
          <div className="to-sign-up">
            <p>
              Chưa có tài khoản?{" "}
              <Link
                className="to-sign-up-btn"
                to="/register"
              >
                Đăng ký
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
