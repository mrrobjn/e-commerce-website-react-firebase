import React, {  useState } from "react";
import { useNavigate } from "react-router";
const Login = ({ users }) => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const signIn = (e) => {
    e.preventDefault();
    const user =users&& users.find((user) => user.data.email === email);
    if (user && user.data.password === password) {
      navigate("/");
      localStorage.setItem("logUser", user.id);
      localStorage.setItem("isLogin", true);
    } else {
      alert("Tài khoản hoặc mật khẩu không đúng");
    }
  };

  return (
    <>
      <div className="form">
        <form className="form-container" onSubmit={signIn}>
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
          <button>Đăng nhập</button>
        </form>
      </div>
    </>
  );
};

export default Login;
