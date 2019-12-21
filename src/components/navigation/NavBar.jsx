import React from 'react';
import { NavLink } from 'react-router-dom';
import propTypes from 'prop-types';

const NavBar = ({navbarClass}) => (
    <nav className={navbarClass}>
            <NavLink activeClassName={navbarClass + "--active"} to="/">Home</NavLink>
            <NavLink activeClassName={navbarClass + "--active"} to="/shopMenu">Menu</NavLink>
            <NavLink activeClassName={navbarClass + "--active"} to="/coffeeBeans">Coffee</NavLink>
            <NavLink activeClassName={navbarClass + "--active"} to="/ourStory">Our Story</NavLink>
    </nav>
);

NavBar.propTypes = {
    navbarClass: propTypes.string.isRequired,
}

export default NavBar;

