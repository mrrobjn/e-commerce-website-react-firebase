import React, { useState } from "react";
import { db } from "../../firebase";
import { addDoc, collection } from "firebase/firestore";
const Register = ({ users }) => {
  const [useName, setUseName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  async function signUp(event) {
    event.preventDefault();
    const emailDumplicate =
      users && users.find((user) => email === user.data.email);
    if (emailDumplicate) {
      alert("Email đã tồn tại");
    } else if (password !== confirmPassword) {
      alert("Mật khẩu không trùng khớp");
    } else {
      await addDoc(collection(db, "users"), {
        useName: useName,
        email: email,
        phoneNo: phoneNo,
        password: password,
      });
      alert("Đăng kí thành công");
      setUseName("");
      setEmail("");
      setPhoneNo("");
      setPassword("");
      setConfirmPassword("");
    }
  }
  return (
    <>
      <div className="form">
        <form className="form-container" onSubmit={signUp}>
          <h1>Đăng kí</h1>
          <div className="box">
            <label>Họ và tên</label>
            <input
              value={useName}
              type="text"
              placeholder="Nhập họ và tên"
              autoComplete="off"
              onChange={(e) => setUseName(e.target.value)}
              required
            />
          </div>
          <div className="box">
            <label>Địa chỉ email</label>
            <input
              value={email}
              type="email"
              placeholder="Nhập địa chỉ email"
              onChange={(e) => setEmail(e.target.value)}
              autoComplete="off"
              required
            />
          </div>
          <div className="box">
            <label>Số điện thoại (10 số)</label>
            <input
              value={phoneNo}
              type="tel"
              placeholder="Nhập số điện thoại"
              autoComplete="off"
              onChange={(e) => setPhoneNo(e.target.value)}
              required
              pattern="[0]{1}[0-9]{9}"
            />
          </div>
          <div className="box">
            <label>Mật khẩu</label>
            <input
              value={password}
              type="password"
              placeholder="Nhập mật khẩu"
              onChange={(e) => setPassword(e.target.value)}
              autoComplete="new-password"
              required
            />
          </div>
          <div className="box">
            <label>Xác nhận mật khẩu</label>
            <input
              value={confirmPassword}
              type="password"
              placeholder="Xác nhận mật khẩu"
              autoComplete="new-password"
              onChange={(e) => setConfirmPassword(e.target.value)}
              required
            />
          </div>
          <button type="submit">Tạo tài khoản</button>
        </form>
      </div>
    </>
  );
};

export default Register;
