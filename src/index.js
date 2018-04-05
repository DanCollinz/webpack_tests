//import React from 'react';
//import ReactDOM from 'react-dom';
//import './index.css';
//import App from './App';
//import registerServiceWorker from './registerServiceWorker';
//import 'lodash';
//import './test.css';

  function component() {
    var element = document.createElement('div');
    var heading = document.createElement('h1',{className: 'bestHeading'});

  // Lodash, currently included via a script, is required for this line to work
  // Lodash, now imported by this script
    element.innerHTML = _.join(['Hello', 'webpack'], ' ');
    heading.className += 'bestHeading';
    heading.innerHTML = 'it works'
    element.appendChild(heading);
    return element;
  }

  document.body.appendChild(component());
