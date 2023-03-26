import { useEffect } from "react";
import Login from "../components/Login";
import "~~/pages/LoginPage.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import { auth } from "../firebase";
import FormCover from "../components/FormCover";

const LoginPage = () => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (user) navigate("/");
  }, [user, loading]);
  return (
    <>
      <section className="login-section">
        <div className="login-container">
          <FormCover />
          <Login />
        </div>
      </section>
    </>
  );
};

export default LoginPage;
