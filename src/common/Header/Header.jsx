import React from "react";
import Head from "./Head";
import Search from "./Search";
import "./Header.scss";
const Header = ({ cartItem, setProductFilter, products }) => {
  return (
    <section id="header">
      <Head />
      <Search cartItem={cartItem} setProductFilter={setProductFilter} products={products}/>
    </section>
  );
};

export default Header;
