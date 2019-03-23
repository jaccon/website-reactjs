import React from 'react';

const Content = () => (
    <section id="home" className="p-0 bg-img12 center-block">
        <h2 className="d-none">hidden</h2>
        <div className="fullscreen">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-left center-col">
                        <div className="personal-box">
                            <h2 className="font-weight-600">Olá, meu nome é <br/> André Jaccon </h2>
                            <h3 id="personal"></h3>
                            <p className="social-icons">
                                <a href="https://www.linkedin.com/in/jaccon/"> <i class="fab fa-linkedin-in"></i> </a>
                                <a href="https://api.whatsapp.com/send?phone=+5511955696541&text=Ol%C3%A1%20Andr%C3%A9"> <i class="fab fa-whatsapp"></i> </a>
                                <a href="https://github.com/jaccon?tab=repositories" target="_blank"> <i class="fab fa-github"></i> </a>
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>

);

export default Content;
