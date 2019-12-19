import React from 'react';

/* 
    Component imports
*/
import NavBar from './navigation/NavBar.jsx';

const Header = (props) => (
    <header className="header">
        <span className="header__logo">Logo</span>
        <NavBar navbarClass="header__navbar"/>
    </header>
)

export default Header;