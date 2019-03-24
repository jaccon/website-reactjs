import React from 'react';
import logotipo from '../../assets/images/logotipo.png';

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
                        <a className="nav-link scroll" href="#home"> Principal </a>
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

        <div className="side-menu">
            <div className="inner-wrapper">
                <span className="btn-close" id="btn_sideNavClose"><i></i><i></i></span>
                <nav className="side-nav w-100">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link scroll" href="#home"> André Jaccon </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link scroll" href="#about"> Sobre mim </a>
                        </li>
                        
                        <li className="nav-item">
                            <a className="nav-link scroll" href="https://blog.jaccon.com.br">Blog</a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link scroll" href="https://github.com/jaccon?tab=repositories"> GitHub </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link scroll" href="#contact"> Podcast </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link" href="/radio"> Rádio Online </a>
                        </li>

                        <li className="nav-item">
                            <a className="nav-link scroll" href="#contact"> Contato </a>
                        </li>
                    </ul>
                </nav>

                <div className="side-footer text-white w-100">
                        <ul className="social-icons-simple">
                            <li><a href="https://www.linkedin.com/in/jaccon/"> <i className="fab fa-linkedin-in"></i> </a></li>
                            <li><a href="https://api.whatsapp.com/send?phone=+5511955696541&text=Ol%C3%A1%20Andr%C3%A9"> <i className="fab fa-whatsapp"></i> </a></li>
                            <li><a href="https://github.com/jaccon?tab=repositories" target="_blank"> <i className="fab fa-github"></i> </a></li>
                        </ul>
                        <p className="text-white">&copy; 2019 André Jaccon - Build with ReactJS </p>
                        </div>
                    </div>
                </div>
                <a id="close_side_menu" href="javascript:void(0);"></a>

    </header>
)

export default Header;