import React from "react";
import label from "../../assets/images/LuxuryHotels.png";
import NavBar from "../NavBar/NavBar";
import HeaderStyle from "./Header.module.scss";

const Header = () => (
  <div className={HeaderStyle.container}>
    <div className={HeaderStyle.header}>
      <img src={label} alt="Luxury Hotels" />

      <NavBar />
    </div>
  </div>
);

export default Header;
