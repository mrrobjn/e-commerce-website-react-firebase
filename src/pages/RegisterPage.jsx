import React, { useEffect } from "react";
import FormCover from "~/components/FormCover";
import Register from "~/components/Register";
import Footer from "~/layout/Footer";
import "~~/pages/RegisterPage.scss";
const RegisterPage = ({ setProductFilter, cartItem }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <>
      <div
        className="page-container"
        setProductFilter={setProductFilter}
        cartItem={cartItem}
      >
        <section className="register-section">
          <div className="register-container">
            <FormCover />
            <Register />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default RegisterPage;
