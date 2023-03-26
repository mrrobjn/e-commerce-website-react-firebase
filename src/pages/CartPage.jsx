import React, { useEffect } from "react";
import "~~/pages/CartPage.scss";
import CartTotal from "../components/CartTotal";
import { useAuthState } from "react-firebase-hooks/auth";
import { auth } from "../firebase";
import { useNavigate } from "react-router";
import CartHandle from "~/components/CartHandle";
const Cartpage = ({
  cartItem,
  addToCart,
  descreaseQty,
  deteteCart,
  setCartItem,
  showDate,
}) => {
  const [user, loading] = useAuthState(auth);
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [user, loading]);
  if (!user) return navigate("/login");
  return (
    <>
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
    </>
  );
};

export default Cartpage;
