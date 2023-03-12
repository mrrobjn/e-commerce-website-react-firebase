import React, { useState } from "react";
import { useNavigate } from "react-router";
import { signUp } from "../../firebase";
const Register = () => {
  const [useName, setUseName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [age, setAge] = useState("");
  const navigate = useNavigate();
  const register = (e) => {
    e.preventDefault();
    if (password !== confirmPassword) alert("xác nhận mật khẩu không hợp lệ");
    else {
      signUp(useName, email, phoneNo, password, age);
      setUseName("");
      setEmail("");
      setPhoneNo("");
      setPassword("");
      setConfirmPassword("");
      setAge("");
    }
  };
  return (
    <>
      <div className="form-container">
        <div className="background"></div>
        <form onSubmit={register}>
          <h1>Đăng kí</h1>
          <div className="box-2">
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
            <label>Tuổi</label>
            <input
              value={age}
              type="number"
              placeholder="eg: 21"
              autoComplete="off"
              onChange={(e) => setAge(e.target.value)}
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
              <a className="to-login-btn" onClick={() => navigate("/login")}>
                Đăng nhập
              </a>
            </p>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
