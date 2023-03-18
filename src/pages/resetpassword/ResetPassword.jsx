import "./ResetPassword.scss";
import { sendPasswordReset } from "../../firebase.js";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { useNavigate } from "react-router";
const ResetPassword = () => {
  const navigate = useNavigate("");
  const [email, setEmail] = useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    sendPasswordReset(email);
  };
  return (
    <>
      <section className="reset-password-section">
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
        <div className="reset-container">
          <div className="background"></div>
          <form onSubmit={handleSubmit}>
            <h1>Đặt lại mật khẩu</h1>
            <div className="input-container">
              <label>
                <i className="fa-solid fa-user"></i> Email
              </label>
              <input
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
                placeholder="eg: abc@gmail.com"
              />
            </div>
            <button type="submit">Gửi yêu cầu đổi mật khẩu</button>
            <p className="back-to-login">
              Quay về <a onClick={() => navigate("/login")}>Đăng nhập</a>
            </p>
          </form>
        </div>
      </section>
    </>
  );
};

export default ResetPassword;
