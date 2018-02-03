import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { injectGlobal } from 'styled-components';

const root = document.getElementById('root');
console.log("hey hey hey");

ReactDOM.render(<App />, root);

injectGlobal`
  body {
    background-color: black;
    padding: 0;
    margin: 0;
    font-family: Raleway;
  }
`
