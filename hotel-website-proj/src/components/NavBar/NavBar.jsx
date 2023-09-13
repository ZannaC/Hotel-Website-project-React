import React from "react";
import { Link } from "react-router-dom";
import NavBarStyle from "./NavBar.module.scss";

const NavBar = () => (
  <div className={NavBarStyle.navbarMenu}>
    <ul className={NavBarStyle.navList}>
      <li>
        <Link to="/home" activeClassName={NavBarStyle.activeLink}>
          Home
        </Link>
      </li>
      <li>
        <Link to="/facilities" activeClassName={NavBarStyle.activeLink}>
          Facilities
        </Link>
      </li>
      <li>
        <Link to="/rooms" activeClassName={NavBarStyle.activeLink}>
          Rooms
        </Link>
      </li>
      <li>
        <Link to="/contact-us" activeClassName={NavBarStyle.activeLink}>
          Contact Us
        </Link>
      </li>
      <li>
        <Link to="/yoga" activeClassName={NavBarStyle.activeLink}>
          Yoga
        </Link>
      </li>
    </ul>
  </div>
);

export default NavBar;
