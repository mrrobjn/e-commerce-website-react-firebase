import React from "react";
import OrderDetail from "~/components/OrderDetail";
import ProfileMenu from "~/components/ProfileMenu";
import Footer from "~/layout/Footer";
import Header from "~/layout/Header";

const OrderHistory = ({cartItem,setProductFilter}) => {
  return (
    <>
    <Header cartItem={cartItem} setProductFilter={setProductFilter}/>
     <div className="page-container">
         <section className="order-detail-section">
           <ProfileMenu />
           <OrderDetail />
         </section>
     </div>
      <Footer/>
    </>
  );
};

export default OrderHistory;
