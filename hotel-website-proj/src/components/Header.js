import React from "react";
import label from "../assets/images/LuxuryHotels.png";
import NavBar from "./NavBar";
import HeaderStyle from "./Header.module.scss";

const Header = () => {
  return (
    <div className={HeaderStyle.header}>
      <img src={label} alt="Luxury Hotels" />

      <NavBar />
    </div>
  );
};
export default Header;
