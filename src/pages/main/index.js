import React, { Component } from 'react';

import Header from '../../components/Header';
import Banner from '../../components/Banner';
import About from '../../components/About';
import Counter from '../../components/Counter';
import Project from '../../components/Projects';
import LastJobs from '../../components/LastJobs';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';
import Loader from '../../components/Loader';
import NewsSpot from '../../components/News';

export default class Main extends Component {
    render() {
        return (
            <div>
                <Loader/>
                <Header/>
                <Banner/>
                <About/>
                <Counter/>
                <NewsSpot/>
                <Project/>
                <LastJobs/>
                <Contact/>
                <Footer/>
            </div>
        )
    }
}