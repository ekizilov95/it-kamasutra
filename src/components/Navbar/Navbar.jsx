import React from 'react';
import './Navbar.css';
import {NavLink} from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__item"><NavLink to="/profile">Profile</NavLink></li>
            <li className="menu__item"><NavLink to="/dialogs">Message</NavLink></li>
            <li className="menu__item"><NavLink to="#">News</NavLink></li>
            <li className="menu__item"><NavLink to="#">Music</NavLink></li>
            <li className="menu__item"><NavLink to="#">Settings</NavLink></li>
          </ul>
        </nav>
    )
}

export default Navbar;