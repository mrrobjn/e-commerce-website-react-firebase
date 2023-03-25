import "../assets/scss/UpdatePassword.scss";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { auth, sendPasswordReset } from "../firebase";
const UpdatePassword = () => {
  const user = auth.currentUser;
  const handleSubmit = (e) => {
    e.preventDefault();
    sendPasswordReset(user.email);
  };

  return (
    <section className="update-password-section">
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
      <div className="container">
        <h1>Cập nhật mật khẩu</h1>
        <form onSubmit={handleSubmit}>
          <div className="input-field">
            <label>Email</label>
            <input type="email" defaultValue={user.email} disabled/>
          </div>
          <button type="submit">Gởi yêu cầu đổi mật khẩu</button>
        </form>
      </div>
    </section>
  );
};

export default UpdatePassword;
