import { sendPasswordReset } from "../firebase.js";
import { useState } from "react";
import { Link } from "react-router-dom";

const ResetPassword = () => {
    const [email, setEmail] = useState("");
    const handleSubmit = (e) => {
      e.preventDefault();
      sendPasswordReset(email);
    };
  return (
    <div className="reset-container">
      <form onSubmit={handleSubmit}>
        <h1>Đặt lại mật khẩu</h1>
        <div className="input-container">
          <input
            type="email"
            required
            onChange={(e) => setEmail(e.target.value)}
            placeholder="eg: abc@gmail.com"
          />
        </div>
        <button type="submit">Gửi yêu cầu đổi mật khẩu</button>
        <p className="back-to-login">
          Quay về <Link to="/login">Đăng nhập</Link>
        </p>
      </form>
    </div>
  );
};

export default ResetPassword;
