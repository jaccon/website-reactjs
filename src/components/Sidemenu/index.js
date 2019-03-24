import React from 'react';
import { Link } from 'react-router-dom';

const Sidemenu = () => (
    <>
    <div className="side-menu">

            <div className="inner-wrapper">
                <span className="btn-close" id="btn_sideNavClose"><i></i><i></i></span>
                <nav className="side-nav w-100">
                    <ul className="navbar-nav">
                        <li className="nav-item">
                            <a className="nav-link scroll" href="#home"> Home </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link scroll" href="#about"> Sobre mim </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link scroll" href="https://blog.jaccon.com.br">Blog</a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link scroll" href="https://github.com/jaccon?tab=repositories" > GitHub </a>
                        </li>
                        <li className="nav-item">
                            <a className="nav-link scroll" href="#contact"> Podcast </a>
                        </li>
                        <li className="nav-item">
                            <Link className="nav-link" to="/radio#"> Rádio Online </Link>
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
                        <li><a href="https://github.com/jaccon?tab=repositories" target="_blank" rel="noopener noreferrer"> <i className="fab fa-github"></i> </a></li>
                    </ul>
                    <p className="text-white">&copy; 2019 André Jaccon - Build with ReactJS </p>
                    </div>
                </div>
        </div>

        <a id="close_side_menu" href="/#"> </a>

    </>
);

export default Sidemenu;