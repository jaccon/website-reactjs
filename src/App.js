import React, { Component } from 'react';
import Header from './components/Header';
import Banner from './components/Banner';
import About from './components/About';
import Counter from './components/Counter';
import Project from './components/Projects';
import LastJobs from './components/LastJobs';
import Contact from './components/Contact';
import Footer from './components/Footer';
import Loader from './components/Loader';
import jQuery from 'jquery';

// import { findDOMNode } from 'react-dom';

// Import Styles
import './assets/css/animate.min.css';
import './assets/css/style.css';
import './assets/css/bootstrap.min.css';
import './assets/css/cubeportfolio.min.css';
import './assets/css/jquery.fancybox.min.css';
import './assets/css/owl.theme.default.min.css';

// Import third Party JS
window.$ = jQuery

class App extends Component {
  render() {
    return (
      <div className="App">
          <Loader/>
          <Header/>
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

export default App;
