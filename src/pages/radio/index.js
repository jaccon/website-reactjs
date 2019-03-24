import React from 'react';
import Header2 from '../../components/Header2';
import Footer from '../../components/Footer';

const divStyle1 = {
    // marginTop: 01em;
};

const Radio = () => (
    <>
        <Header2 />
        <section id="portfolio" className="boxPlayer">
            <div className="container"> 
                <div className="row align-items-center mt-5"> 
                    <div className="col-md-6 wow fadeInLeft" style={divStyle1}>
                            <div className="title">
                                <h2 class="text-white">Rádio Online</h2>
                            </div>
                        </div>
                        <div className="col-md-6 mb-4 wow fadeInRight" style={divStyle1}>
                                <h3 class="text-white"> Vou compartilhar com vocês o que eu geralmente escuto quando codifico. <br /><br />
                                Espero que inspire você também ... </h3>
                        </div>
                </div>

                <div className="row align-items-center">  
                    <div className="col-md-12 wow fadeInRight">
                    <audio controls autoplay>
                        <source src="http://cloud2.cdnseguro.com:23538/stream/1/" type="audio/ogg" />
                        <source src="http://cloud2.cdnseguro.com:23538/stream/1/" type="audio/mpeg" />
                        Your browser does not support the audio element.
                    </audio>
                    </div>
                </div>

            </div>
        </section>
        <Footer />
    </>
);

export default Radio;