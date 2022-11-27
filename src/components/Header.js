import React from "react";
import { NavLink } from "react-router-dom";
import "./NavButton.js";

function Header() {
  return (
    <div className="nav">
      <NavLink className={({ isActive }) => isActive ? "link-active" : "link-inactive"} to="/">
        {" "}
        Home
      </NavLink>
      <NavLink className={({ isActive }) => isActive ? "link-active" : "link-inactive"} to="/About">
        {" "}
        About
      </NavLink>
      <NavLink className={({ isActive }) => isActive ? "link-active" : "link-inactive"} to="/Contact">
        {" "}
        Contact
      </NavLink>
      <NavLink className={({ isActive }) => isActive ? "link-active" : "link-inactive"} to="/Content">
        {" "}
        Content
      </NavLink>
      <NavLink className={({ isActive }) => isActive ? "link-active" : "link-inactive"} to="/Details">
        {" "}
        Details
      </NavLink>
    </div>
  );
}
export default Header;
