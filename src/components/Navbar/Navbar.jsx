import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="menu">
      <ul className="menu__list">
        <li className="menu__item">
          <NavLink to="/profile">Profile</NavLink>
        </li>
        <li className="menu__item">
          <NavLink to="/dialogs">Message</NavLink>
        </li>
        <li className="menu__item">
          <NavLink to="/news">News</NavLink>
        </li>
        <li className="menu__item">
          <NavLink to="/music">Music</NavLink>
        </li>
        <li className="menu__item">
          <NavLink to="/settings">Settings</NavLink>
        </li>
        <li className="menu__item">
          <NavLink to="/users">Users</NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
