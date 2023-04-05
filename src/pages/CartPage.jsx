import React, { useEffect } from "react";
import "~~/pages/CartPage.scss";
import CartTotal from "../components/CartTotal";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router";
import CartHandle from "~/components/CartHandle";
import Header from "~/layout/Header";
import Footer from "~/layout/Footer";
const Cartpage = ({}) => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!user) return navigate("/login");
  }, [user, loading]);
  return (
    <>
      <Header />
      <div className="page-container">
        <section className="cart-items">
          <div className="cart-container">
            <CartHandle />
            <CartTotal />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Cartpage;
