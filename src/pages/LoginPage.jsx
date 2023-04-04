import { useEffect } from "react";
import Login from "../components/Login";
import "~~/pages/LoginPage.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import { auth } from "../firebase";
import FormCover from "../components/FormCover";
import Footer from "~/layout/Footer";
import Header from "~/layout/Header";

const LoginPage = ({ cartItem }) => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (user) navigate("/");
  }, [user, loading]);
  return (
    <>
      <Header  cartItem={cartItem} />
      <div className="page-container">
        <section className="login-section">
          <div className="login-container">
            <FormCover />
            <Login />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default LoginPage;
