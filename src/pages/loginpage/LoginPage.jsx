import { useEffect } from "react";
import Login from "./Login";
import "./LoginPage.scss";
import { useAuthState } from "react-firebase-hooks/auth";
import { useNavigate } from "react-router";
import { auth } from "../../firebase";

const LoginPage = ({ users }) => {
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
          <div className="login-cover">
          </div>
          <Login users={users} />
        </div>
      </section>
    </>
  );
};

export default LoginPage;
