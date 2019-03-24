import React from 'react';

import img01 from '../../assets/images/img-app-01.jpg'; 

const divStyle1 = {
    display: 'none'
};

const Content = () => (
    <section id="home" className="p-0 bg-img12 center-block">
        <h2 className="d-none">hidden</h2>
        <div className="fullscreen">
            <div className="container">
                <div className="row">
                    <div className="col-lg-12 text-left center-col">
                        <div className="personal-box">
                            <h2 className="font-weight-400 text-uppercase"> André Jaccon </h2>
                            <h3> 
                                Self-learning software and computer engineering <br/>
                                through research & development. 
                                <br/> Filming the entire process on YouTube.
                            </h3>
                            <p className="social-icons">
                                <a href="https://www.youtube.com/user/jaccon" target="_blank" rel="noopener noreferrer"> <i className="fab fa-youtube"></i> </a>
                                <a href="https://www.linkedin.com/in/jaccon/" target="_blank" rel="noopener noreferrer"> <i className="fab fa-linkedin-in"></i> </a>
                                <a href="https://api.whatsapp.com/send?phone=+5511955696541&text=Ol%C3%A1%20Andr%C3%A9" target="_blank" rel="noopener noreferrer"> <i className="fab fa-whatsapp"></i> </a>
                                <a href="https://github.com/jaccon?tab=repositories" target="_blank" rel="noopener noreferrer"> <i className="fab fa-github"></i> </a>
                            </p>
                            <img src={img01} alt="Jaccon Website" style={divStyle1} />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Content;
