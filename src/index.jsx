//import react and its dom
import React from 'react';
import ReactDom from 'react-dom';

//import app component
import App from './components/App'

//import general styles
import './index.css'

//root const
const root = document.getElementById('app');

//render react dom
ReactDom.render(<App />, root);
