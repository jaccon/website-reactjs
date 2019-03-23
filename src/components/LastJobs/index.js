import React from 'react';
import img01 from '../../assets/images/img-app-01.jpg'; 
import img02 from '../../assets/images/img-app-02.jpg'; 
import img03 from '../../assets/images/img-app-03.jpg'; 
import img04 from '../../assets/images/img-app-04.jpg'; 

const Projects = () => (
    <section id="blog" className="bg-light">
        <div className="container">
        
            <div className="row align-items-center mb-5">
                <div className="col-md-6 order-md-2 wow fadeInRight">
                    <div className="blog-text">
                        <h6 className="third-color mb-3"> Março 2019</h6>
                        <h2>Clube Pão Diário</h2>
                        <p> Aplicativo da instituição Daily Bread. Possui recursos de compartilhamento de notícias, eventos, integração com loja de e-commerce através de API REST e captação de recursos </p>
                        <p> Plataformas: Android / iOS </p>
                        <p> Tecnologias: API RESTFUL / Dashboard PHP / Mobile: Ionic </p>
                        <a href="https://play.google.com/store/apps/details?id=com.donationmobile.clubpaodiario" className="btn btn-large btn-gradient btn-rounded mt-4"> Ver mais </a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="blog-image wow hover-effect fadeInLeft">
                        <img src={img01} alt={`André Jaccon`} />
                    </div>
                </div>
            </div>

            <div className="row align-items-center">
                <div className="col-md-6 wow fadeInLeft">
                    <div className="blog-text">
                        <h6 className="third-color mb-3"> Maio 2018 </h6>
                        <h2>Mais no Mundo </h2>
                        <p> Aplicativo Mais no Mundo. Compartilhamento de notícias, eventos, venda de ingressos, captação de recursos</p>
                        <p> Plataformas: Android / iOS </p>
                        <p> Tecnologias: API RESTFUL / Dashboard PHP / Mobile: Ionic </p>
                        <a href="https://play.google.com/store/apps/details?id=com.donationmobile.maisnomundo" className="btn btn-large btn-gradient btn-rounded mt-4"> Veja mais</a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="blog-image text-right hover-effect wow fadeInRight">
                        <img src={img02} alt={`André Jaccon`} />
                    </div>
                </div>
            </div>


            <div className="row align-items-center mb-5">
                <div className="col-md-6 order-md-2 wow fadeInRight">
                    <div className="blog-text">
                        <h6 className="third-color mb-3"> Outubro 2017 </h6>
                        <h2> Aplicativo Farol </h2>
                        <p> Aplicativo da instituição Farol da igreja da cidade. Compartilhamento de notícias, eventos, boletins, captação de recursos através de eWallet</p>
                        <p> Plataformas: Android / iOS </p>
                        <p> Tecnologias: API RESTFUL / Dashboard PHP / Mobile: Ionic / eWallet </p>
                        <a href="https://play.google.com/store/apps/details?id=com.donationmobile.farol" className="btn btn-large btn-gradient btn-rounded mt-4"> Ver mais </a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="blog-image wow hover-effect fadeInLeft">
                        <img src={img03} alt={`André Jaccon`} />
                    </div>
                </div>
            </div>


            <div className="row align-items-center">
                <div className="col-md-6 wow fadeInLeft">
                    <div className="blog-text">
                        <h6 className="third-color mb-3"> Janeiro 2018 </h6>
                        <h2>Mobifood </h2>
                        <p> Aplicativo de vendas por delivery. Possui classificação por categorias, integração com gateway de pagamento e acompanhamento de pedido via app. Dashboard 100% customizada para dar os feedbacks da entrega para o cliente. </p>
                        <p> Plataformas: Android / iOS </p>
                        <p> Tecnologias: API RESTFUL / Dashboard PHP / Mobile: Ionic </p>
                        <a href="https://play.google.com/store/apps/details?id=com.indieworks.mobifood" className="btn btn-large btn-gradient btn-rounded mt-4"> Veja mais</a>
                    </div>
                </div>
                <div className="col-md-6">
                    <div className="blog-image text-right hover-effect wow fadeInRight">
                        <img src={img04} alt={`André Jaccon`} />
                    </div>
                </div>
            </div>
        </div>
    </section>
);

export default Projects;