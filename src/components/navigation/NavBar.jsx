import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = (props) => (
    <nav className={props.navbarClass}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shopMenu">Menu</NavLink>
            <NavLink to="/coffeeBeans">Coffee</NavLink>
            <NavLink to="/ourStory">Our Story</NavLink>
    </nav>
);

export default NavBar;

