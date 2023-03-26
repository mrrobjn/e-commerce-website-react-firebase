import "~/assets/scss/pages/ResetPasswordPage.scss";
import { sendPasswordReset } from "../firebase.js";
import { useState } from "react";
import { ToastContainer } from "react-toastify";
import { Link } from "react-router-dom";
import FormCover from "~/components/FormCover";
const ResetPassword = () => {
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
        <FormCover/>
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
      </section>
    </>
  );
};

export default ResetPassword;
