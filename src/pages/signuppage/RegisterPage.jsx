import React, { useEffect } from "react";
import Register from "./Register";
import "./Register.scss";
const RegisterPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="register-section">
        <div className="register-container">
          <div className="register-cover">{/* <img src="" alt=""/> */}</div>
          <Register />
        </div>
      </section>
    </>
  );
};

export default RegisterPage;
