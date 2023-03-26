import React, { useEffect } from "react";
import FormCover from "~/components/FormCover";
import Register from "~/components/Register";
import "~~/pages/RegisterPage.scss";
const RegisterPage = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <section className="register-section">
        <div className="register-container">
          <FormCover/>
          <Register />
        </div>
      </section>
    </>
  );
};

export default RegisterPage;
