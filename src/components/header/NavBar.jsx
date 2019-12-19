import React from 'react';
import { NavLink } from 'react-router-dom';

const NavBar = () => (
    <>
            <NavLink to="/">Home</NavLink>
            <NavLink to="/shopMenu">Menu</NavLink>
            <NavLink to="/coffeeBeans">Coffee</NavLink>
            <NavLink to="/ourStory">Our Story</NavLink>
    </>
);

export default NavBar;

