import React from 'react';

const About = () => (
    <section id="about">
        <div className="container">
            <div className="row align-items-center wow fadeIn">
                <div className="col-md-6">
                    <div className="title">
                        <h2> 18 anos se dedicando ao desenvolvimento de software Open Source </h2>
                    </div>
                </div>
                <div className="col-md-6 mb-4">
                    <p> 
                        Atualmente cursando MIT OpenSourceWare de Design Thinking, envolvido com projetos em stack Javascript, BlockChain e AI. Vivência de 18 anos área de desenvolvimento de software utilizando Open Source. <br/><br/>
                        Nas horas vagas gosto de aprofundar meus conhecimentos em desenvolvimento mobile, desenvolvimento web frontend e backend e de vez enquando alguns labs criando alguns gadgets legais. 
                    </p>
                </div>
            </div>

            <div className="row">
                <div className="col-md-4 wow fadeInLeft">
                    <div className="feature-box">
                        <span className="item-number gradient-text1">
                            01.
                        </span>
                        <h6 className="mb-4">FRONTEND</h6>
                        <p>Conhecimento em HTML5, CSS, SASS, ReactJS e Angular </p>
                    </div>
                </div>
                <div className="col-md-4 wow fadeInUp">
                    <div className="feature-box">
                        <span className="item-number gradient-text1">
                            02.
                        </span>
                        <h6 className="mb-4"> BACKEND</h6>
                        <p> Conhecimento em Python, NodeJS, PHP e Shell Script</p>
                    </div>
                </div>
                <div className="col-md-4 wow fadeInRight">
                    <div className="feature-box">
                        <span className="item-number gradient-text1">
                            03.
                        </span>
                        <h6 className="mb-4"> MOBILE</h6>
                        <p> Desenvolvimento de aplicativo híbridos com Cordova, Ionic e mais recentemente React Native </p>
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default  About