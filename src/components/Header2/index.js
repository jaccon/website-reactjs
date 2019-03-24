import React from 'react';
import logotipo from '../../assets/images/logotipo.png';

const Header2 = () => (
    <header className="header2">
        <nav className="navbar navbar-top-default navbar-expand-lg gradient-bg1 navbar-gradient nav-icon header2">
            <div className="container">
                <a title="Logo" className="logo">
                    <img src={logotipo} alt="logo" className="logo-dark default" />
                </a>
            </div>
        </nav>
    </header>
);

export default Header2;