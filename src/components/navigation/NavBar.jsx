import React from 'react';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';

const NavBar = ({navbarClass}) => (
    <nav className={navbarClass}>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shopMenu">Menu</NavLink>
            <NavLink to="/coffeeBeans">Coffee</NavLink>
            <NavLink to="/ourStory">Our Story</NavLink>
    </nav>
);

NavBar.propTypes = {
    navbarClass: propTypes.string.isRequired,
}

export default NavBar;

