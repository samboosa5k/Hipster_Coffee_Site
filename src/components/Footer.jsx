import React from 'react';

/* 
    Component imports
*/
import NavBar from './navigation/NavBar.jsx';

const Footer = () => (
    <footer className="footer">
        <div className="footer__container">
            <NavBar navbarClass="footer__navBar"/>
            <h2 className="footer__hashtag">#HIPSTERSMAKECOFFEE</h2>
            <p className="footer__social">Follow us on Twitter and Instagram</p>
        </div>
    </footer>
)

export default Footer;