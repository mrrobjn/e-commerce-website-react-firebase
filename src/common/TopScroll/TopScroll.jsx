import React from "react";
import { useState } from "react";
import "./TopScroll.scss";
const TopScroll = () => {
  const [visible, setVisible] = useState(false);
  const toggleVisible = () => {
    const scroll = document.documentElement.scrollTop;
    if (scroll > 200) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  };
  const scrollTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  window.addEventListener("scroll", toggleVisible);
  return (
    <>
      <button
        className="scroll-top-btn"
        onClick={() => scrollTop()}
        style={{ display: visible ? "block" : "none" }}
      >
        <i className="fa-solid fa-arrow-up"></i>
      </button>
    </>
  );
};

export default TopScroll;
