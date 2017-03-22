/*
    ./client/index.js
    which is the webpack entry file
*/

console.log('Hello it works!!');
import React from 'react';
import ReactDom from 'react-dom';
import style from './style.scss';
import App from './components/App.jsx';



ReactDom.render(<App />, document.getElementById('root'));
