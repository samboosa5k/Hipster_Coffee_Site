import React from 'react';

/* 
    Component imports
*/
import NavBar from './navigation/NavBar.jsx';

/* 
    Image import
*/
import logo from '../img/logo.svg';

const Header = () => (
    <header className="header">
        <div className="header__container">
            <img className="header__logo" src={logo} alt="logo"/>
            <NavBar navbarClass="header__navbar"/>
        </div>
    </header>
)

export default Header;