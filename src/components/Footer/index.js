import React, { Component } from 'react';

const Footer = () => (
    <section className="background-contato text-center text-white">
        <h2 className="d-none">hidden</h2>
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="footer-social">
                        <ul className="list-unstyled">
                            <li><a href="https://www.linkedin.com/in/jaccon/"> <i className="fab fa-linkedin-in"></i> </a></li>
                            <li><a href="https://api.whatsapp.com/send?phone=+5511955696541&text=Ol%C3%A1%20Andr%C3%A9"> <i className="fab fa-whatsapp"></i> </a></li>
                            <li><a href="https://github.com/jaccon?tab=repositories" target="_blank"> <i className="fab fa-github"></i> </a></li>
                        </ul>
                    </div>
                    <p className="company-about fadeIn text-white">© 2019 André Jaccon <br/> Build with ReactJS </p>
                </div>
            </div>
        </div>
    </section>
);

export default Footer;