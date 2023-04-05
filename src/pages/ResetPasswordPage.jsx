import "~~/pages/ResetPasswordPage.scss";
import { ToastContainer } from "react-toastify";
import FormCover from "~/components/FormCover";
import ResetPassword from "~/components/ResetPassword";
import Footer from "~/layout/Footer";
import { useEffect } from "react";
import Header from "~/layout/Header";
const ResetPasswordPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <Header  />
      <div className="page-container">
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
          <FormCover />
          <ResetPassword />
        </section>
      </div>
      <Footer />
    </>
  );
};

export default ResetPasswordPage;
