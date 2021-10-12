import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  require("./../styles/navbar.css");
  return (
    <div className="header">
      <div class="navbarContainer">
        <NavLink exact activeClassName="active" className="inactive" to="/">
          Home
        </NavLink>
        <NavLink activeClassName="active" className="inactive" to="/login">
          Login
        </NavLink>
        <NavLink activeClassName="active" className="inactive" to="/dashboard">
          Dashboard
        </NavLink>        
      </div>
    </div>
  );
};

export default Navbar;
