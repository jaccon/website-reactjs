/* eslint-disable no-unused-expressions */
import React, { Component} from 'react';
import Header2 from '../../components/Header2';
import Footer from '../../components/Footer';
import radio_api from '../../services/radio_api';

const divStyle1 = {
    // marginTop: 01em;
};

export default class Radio extends Component {

    constructor(props) {
        super(props);
        this.state = {
            title: [],
            listener: []
        };
      }

    componentDidMount() {
        this.loadMusicData();
    }

    loadMusicData = async () => {
        const response = await radio_api.get();
        const raw = response.data;
        const parser = new DOMParser();
        const xml = parser.parseFromString(raw, 'application/xml');

        // console.log(xml);

        const songURL = xml.querySelector('SHOUTCASTSERVER').getElementsByTagName('SERVERURL')[0].childNodes[0].textContent;
        const songListeners = xml.querySelector('SHOUTCASTSERVER').getElementsByTagName('CURRENTLISTENERS')[0].childNodes[0].textContent;

        console.log(songURL);
        console.log(songListeners);

        this.setState({ title: songURL, listener:  songListeners });

    }

    render(){

        return (
            <>
            <Header2 />
            <section id="portfolio" className="boxPlayer">
                <div className="container"> 
                    <div className="row align-items-center mt-5"> 
                        <div className="col-md-6 wow fadeInLeft" style={divStyle1}>
                                <div className="title">
                                    <h2 className="text-white">Rádio Online</h2>
                                    <h3 className="text-white"> Vou compartilhar com vocês o que eu geralmente escuto quando codifico. </h3>
                                </div>
                            </div>
                            <div className="col-md-6 mb-4 wow fadeInRight" style={divStyle1}>
                                    <h4 className="text-white text-right">  
                                        Você está ouvindo <br/> 
                                        {this.state.title}
                                        <br /><br />
                                        Total de ouvintes <br />
                                        {this.state.listener}
                                    </h4>
                            </div> 
                    </div>

                    <div className="row align-items-center">  
                        <div className="col-md-12 wow fadeInRight">
                        <audio controls autoPlay>
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
        )
    }
}