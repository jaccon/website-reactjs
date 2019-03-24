import React from 'react';
import logotipo from '../../assets/images/logotipo.png';
import { Link } from 'react-router-dom';
import Sidemenu from '../../components/Sidemenu';

const Header = () => (
    <header>
        <nav className="navbar navbar-top-default navbar-expand-lg navbar-gradient nav-icon navbar-dark">
            <div className="container">

                <a href="#home" title="Logo" className="logo scroll">
                    <img src={logotipo} className="logo-dark" alt="logo" />
                    <img src={logotipo} className="logo-light default" alt="logo" />
                </a>

                <div className="collapse navbar-collapse" id="wexim">
                    <div className="navbar-nav ml-auto">
                        <a className="nav-link scroll" href="#home"> Home </a>
                        <a className="nav-link scroll" href="#about"> Sobre mim</a>
                        <a className="nav-link scroll" href="#projetos"> Projetos </a>
                        <a className="nav-link" href="https://github.com/jaccon?tab=repositories" target="_blank"> Github </a>
                        <a className="nav-link" href="http://blog.jaccon.com.br" target="_blank">Blog</a>
                        <a className="nav-link scroll" href="#contato"> Contato </a>
                        <span className="menu-line">
                            <i className="fa fa-angle-down" aria-hidden="true"></i>
                        </span>
                    </div>
                </div>

                <a className="d-inline-block sidemenu_btn" id="sidemenu_toggle">
                    <span></span>
                    <span></span>
                    <span></span>
                </a>
            </div>
        </nav>

        <Sidemenu />

    </header>
)

export default Header;