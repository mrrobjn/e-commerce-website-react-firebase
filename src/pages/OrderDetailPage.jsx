import React from "react";
import OrderDetail from "~/components/OrderDetail";
import ProfileMenu from "~/components/ProfileMenu";
import Footer from "~/layout/Footer";
import Header from "~/layout/Header";
import '~~/pages/OrderDetailPage.scss'
const OrderDetailPage = () => {
  return (
    <>
    <Header/>
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

export default OrderDetailPage;
