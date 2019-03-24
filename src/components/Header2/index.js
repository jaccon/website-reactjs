import React from 'react';
import logotipo from '../../assets/images/logotipo.png';
import Sidemenu from '../../components/Sidemenu';

const Header2 = () => (
    <header>
        <nav className="navbar navbar-top-default navbar-expand-lg navbar-gradient nav-icon navbar-dark header2">
            <div className="container"> 
                <a href="/" title="Logo" className="logo">
                    <img src={logotipo} alt="logo" className="logo-dark default" />
                </a>

                <div className="collapse navbar-collapse" id="wexim">
                        <div className="navbar-nav ml-auto">
                        <a className="nav-link " href="/#home"> Home </a>
                        <a className="nav-link " href="/#about"> Sobre mim</a>
                        <a className="nav-link " href="/#projetos"> Projetos </a>
                        <a className="nav-link" href="https://github.com/jaccon?tab=repositories" target="_blank" rel="noopener noreferrer"> Github </a>
                        <a className="nav-link" href="http://blog.jaccon.com.br" target="_blank" rel="noopener noreferrer">Blog</a>
                        <span className="menu-line"><i className="fa fa-angle-down" aria-hidden="true"></i></span>
                    </div>
                </div>

                <a href className="d-inline-block sidemenu_btn" id="sidemenu_toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </a>

            </div>
        </nav>

        <Sidemenu />

    </header>
);

export default Header2;