import React, { Component } from 'react';
import Routes from './routes';
import jQuery from 'jquery';

// Import Styles
import './assets/css/animate.min.css';
import './assets/css/style.css';
import './assets/css/bootstrap.min.css';
import './assets/css/cubeportfolio.min.css';
import './assets/css/jquery.fancybox.min.css';
import './assets/css/owl.theme.default.min.css';

// Import third Party JS
window.$ = jQuery

const App = () => (
  <div className="App">
          <Routes />
      </div>
);

export default App;
