//import react and its dom
import React from 'react';
import ReactDom from 'react-dom';

//import app component
import App from './components/App'

const root = document.getElementById('app');

ReactDom.render(<App />, root);
