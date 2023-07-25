import React from "react";
import logo from "../assets/images/LuxuryHotels.png";
import NavBar from "./NavBar";

const Header = () => {
  return (
    <div className="navBar">
      <div className="logo">
        <img src={logo} alt="Luxury Hotels" />
      </div>
      <NavBar />
    </div>
  );
};
export default Header;
