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
        <form onSubmit={register}>
          <h1>Đăng kí</h1>
          <div className="box box-2">
            <input
              value={useName}
              type="text"
              placeholder="Họ và tên"
              autoComplete="off"
              onChange={(e) => setUseName(e.target.value)}
              required
            />
            <input
              value={age}
              type="number"
              placeholder="Tuổi"
              autoComplete="off"
              onChange={(e) => setAge(e.target.value)}
              required
            />
          </div>
          <div className="box">
            <input
              value={email}
              type="email"
              placeholder="Địa chỉ email"
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              required
            />
          </div>
          <div className="box">
            <input
              value={phoneNo}
              type="tel"
              placeholder="Số điện thoại"
              autoComplete="off"
              onChange={(e) => setPhoneNo(e.target.value)}
              required
              pattern="[0]{1}[0-9]{9}"
            />
          </div>
          <div className="box">
            <input
              value={password}
              type="password"
              placeholder="Mật khẩu"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              required
            />
          </div>
          <div className="box">
            <input
              value={confirmPassword}
              type="password"
              placeholder="Xác nhận mật khẩu"
              autoComplete="new-password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <div className="form-btn">
            <button type="submit">Tạo tài khoản</button>
            <div className="back-to-login" onClick={() => navigate("/login")}>
              Đã có tài khoản
            </div>
          </div>
        </form>
      </div>
    </>
  );
};

export default Register;
