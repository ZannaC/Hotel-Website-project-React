import React from "react";
import { Link } from "react-router-dom";

const NavBar = () => {
  return (
    <div className="navbar-menu">
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
          <Link to="/contact-us">Contact-us</Link>
        </li>
      </ul>
    </div>
  );
};
export default NavBar;
