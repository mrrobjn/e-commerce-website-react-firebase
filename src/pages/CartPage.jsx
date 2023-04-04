import React, { useEffect } from "react";
import "~~/pages/CartPage.scss";
import CartTotal from "../components/CartTotal";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router";
import CartHandle from "~/components/CartHandle";
import Header from "~/layout/Header";
import Footer from "~/layout/Footer";
const Cartpage = ({
  cartItem,
  addToCart,
  descreaseQty,
  deteteCart,
  setCartItem,
  showDate,
  setProductFilter,
}) => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
    if (!user) return navigate("/login");
  }, [user, loading]);
  return (
    <>
      <Header cartItem={cartItem} setProductFilter={setProductFilter} />
      <div className="page-container">
        <section className="cart-items">
          <div className="cart-container">
            <CartHandle
              addToCart={addToCart}
              descreaseQty={descreaseQty}
              deteteCart={deteteCart}
              cartItem={cartItem}
            />
            <CartTotal
              cartItem={cartItem}
              setCartItem={setCartItem}
              showDate={showDate}
            />
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
};

export default Cartpage;
