import React from 'react';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="menu">
          <ul className="menu__list">
            <li className="menu__item active"><a href="#">Profile</a></li>
            <li className="menu__item"><a href="#">Message</a></li>
            <li className="menu__item"><a href="#">News</a></li>
            <li className="menu__item"><a href="#">Music</a></li>
            <li className="menu__item"><a href="#">Settings</a></li>
          </ul>
        </nav>
    )
}

export default Navbar;