import React from "react";
import { Link } from "react-router-dom";
import NavBarStyle from "./NavBar.module.scss";

const NavBar = () => (
  <div className={NavBarStyle.navbarMenu}>
    <ul>
      <li>
        <Link to="/home">Home</Link>
      </li>
      <li>
        <Link to="/facilities">Facilities</Link>
      </li>
      <li>
        <Link to="/rooms">Rooms</Link>
      </li>
      <li>
        <Link to="/contact-us">Contact Us</Link>
      </li>
    </ul>
  </div>
);

export default NavBar;
