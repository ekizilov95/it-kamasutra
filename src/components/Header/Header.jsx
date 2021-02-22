import React from "react";
import { NavLink } from "react-router-dom";
import "./Header.css";

const Header = (props) => {
  return (
    <header className="header">
      <img
        src="https://it-kamasutra.com/images/tild3137-3939-4833-b730-313332653232__it-kamasutra-logo-on.png"
        className="header__logo"
        alt="logo"
      />
      {props.isAuth ? (
        <div className="header__login">User name: {props.login}</div>
      ) : (
        <NavLink to="/login" className="header__login">
          Login
        </NavLink>
      )}
    </header>
  );
};

export default Header;
