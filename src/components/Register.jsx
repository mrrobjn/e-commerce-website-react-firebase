import React, { useState } from "react";
import { useNavigate } from "react-router";
import { signUp } from "../firebase";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { Link } from "react-router-dom";
const Register = () => {
  const [useName, setUseName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [dayOfBirth, setDayOfBirth] = useState("");
  const navigate = useNavigate();
  const register = (e) => {
    e.preventDefault();
    if (password !== confirmPassword)
      errorToast("xác nhận mật khẩu không hợp lệ");
    else {
      signUp(useName, email, phoneNo, password, dayOfBirth);
      setUseName("");
      setEmail("");
      setPhoneNo("");
      setPassword("");
      setConfirmPassword("");
      setDayOfBirth("");
      navigate("/");
    }
  };
  const errorToast = (text) => toast.error(`${text}`);
  return (
    <>
      <div className="form-container">
        <ToastContainer
          position="top-right"
          autoClose={3000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <form onSubmit={register}>
          <h1>Đăng kí</h1>
          <div className="box-2"></div>
          <div className="box-1">
            <div className="input-box">
              <label>Họ và tên</label>
              <input
                value={useName}
                type="text"
                placeholder="Họ và tên"
                autoComplete="off"
                onChange={(e) => setUseName(e.target.value)}
                required
              />
            </div>

            <div className="input-box">
              <label>Email</label>
              <input
                value={email}
                type="email"
                placeholder="eg: abc@gmail.com"
                onChange={(e) => setEmail(e.target.value)}
                autoComplete="off"
                required
              />
            </div>
          </div>
          <div className="box-2">
            <div className="input-box">
              <label>Số điện thoại</label>
              <input
                value={phoneNo}
                type="tel"
                placeholder="eg: 099999999"
                autoComplete="off"
                onChange={(e) => setPhoneNo(e.target.value)}
                required
                pattern="[0]{1}[0-9]{9}"
              />
            </div>
            <div className="input-box">
              <label>Ngày sinh</label>
              <input
                value={dayOfBirth}
                type="date"
                placeholder="eg: 21"
                autoComplete="off"
                onChange={(e) => setDayOfBirth(e.target.value)}
                required
              />
            </div>
          </div>
          <div className="box-1">
            <div className="input-box">
              <label>Tạo mật khẩu</label>
              <input
                value={password}
                type="password"
                placeholder="********"
                onChange={(e) => setPassword(e.target.value)}
                autoComplete="new-password"
                required
              />
            </div>
            <div className="input-box">
              <label>Xác nhận mật khẩu</label>
              <input
                value={confirmPassword}
                type="password"
                placeholder="********"
                autoComplete="new-password"
                onChange={(e) => setConfirmPassword(e.target.value)}
                required
              />
            </div>
          </div>
          <button type="submit">Tạo tài khoản</button>
          <div className="to-login">
            <p>
              Đã có tài khoản?{" "}
              <Link className="to-login-btn" to="/login">
                Đăng nhập
              </Link>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
