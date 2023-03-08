import React, { useState, useEffect } from "react";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import { signIn, auth } from "../../firebase";
const Login = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading, error] = useAuthState(auth);
  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(auth, email, password);
  };
  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) navigate("/");
  }, [user, loading]);

  return (
    <>
      <div className="form-container">
        <form onSubmit={handleSubmit}>
          <h1>Đăng nhập</h1>
          <div className="box">
            <label>Địa chỉ email</label>
            <input
              type="email"
              placeholder="Nhập địa chỉ email"
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="box">
            <label>Mật khẩu</label>
            <input
              type="password"
              placeholder="Nhập mật khẩu"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="off"
            />
          </div>
          <div className="save-forgot-password">
            <div className="save-password">
              <input type="checkbox" /> Nhớ mật khẩu
            </div>
            <a
              className="forgot-password"
              onClick={() => {
                navigate("/resetpassword");
              }}
            >
              Quên mật khẩu?
            </a>
          </div>
          <div className="form-btn">
            <button>Đăng nhập</button>
            <div
              className="to-sign-up-btn"
              onClick={() => navigate("/register")}
            >
              Đăng ký
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Login;
