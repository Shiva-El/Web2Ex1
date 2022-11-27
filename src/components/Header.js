import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";
import Box from '@mui/material/Box';

function Header() {
  return (
    <div className="nav">
      <Box className="logo" component="img" sx={{ height: 54 }} alt="Logo" src='https://upload.wikimedia.org/wikipedia/en/thumb/c/c3/Fox_Funny_Logo.png/200px-Fox_Funny_Logo.png' />
      <NavLink
        className={({ isActive }) =>
          isActive ? "link-active" : "link-inactive"
        }
        to="/"
      >
        {" "}
        Home
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "link-active" : "link-inactive"
        }
        to="/About"
      >
        {" "}
        About
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "link-active" : "link-inactive"
        }
        to="/Contact"
      >
        {" "}
        Contact
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "link-active" : "link-inactive"
        }
        to="/Content"
      >
        {" "}
        Content
      </NavLink>
      <NavLink
        className={({ isActive }) =>
          isActive ? "link-active" : "link-inactive"
        }
        to="/Shop"
      >
        {" "}
        [my shopping Bag]
      </NavLink>
    </div>
  );
}
export default Header;
