import React, { Component} from 'react';
import Header from '../../components/Header';
import Banner from '../../components/Banner';
import About from '../../components/About';
import Counter from '../../components/Counter';
import Project from '../../components/Projects';
import LastJobs from '../../components/LastJobs';
import Contact from '../../components/Contact';
import Footer from '../../components/Footer';

export default class Main extends Component {
    render() {
      return (
        <div>
            <Header />
            <Banner/>
            <About/>
            <Counter/>
            <Project/>
            <LastJobs/>
            <Contact/>
            <Footer/>
        </div>
      );
    }
  }

