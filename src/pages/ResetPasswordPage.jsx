import "~~/pages/ResetPasswordPage.scss";
import { ToastContainer } from "react-toastify";
import FormCover from "~/components/FormCover";
import ResetPassword from "~/components/ResetPassword";
const ResetPasswordPage = () => {
 
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
        <ResetPassword/>
      </section>
    </>
  );
};

export default ResetPasswordPage;
