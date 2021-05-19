// if use shared lib between host-app and modal-app
// must use async import 
// import('./bootstrap');
// original index
import React from 'react';
import ReactDom from 'react-dom';
import App from './App';

ReactDom.render(<App />, document.getElementById("root"));

