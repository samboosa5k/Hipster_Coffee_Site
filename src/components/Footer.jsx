import React from 'react';

/* 
    Component imports
*/
import NavBar from './navigation/NavBar.jsx';

const Footer = () => (
    <footer className="footer">
        <NavBar navbarClass="footer__navbar"/>
        <h2 className="footer__hashtag">#HIPSTERSMAKECOFFEE</h2>
        <p className="footer__social">Follow us on Twitter and Instagram</p>
    </footer>
)

export default Footer;