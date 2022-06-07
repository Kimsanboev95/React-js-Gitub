import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
// import {Provider} from 'react-redux';
// import store from './store/index';
// import Marvel from './Marvel'

ReactDOM.render(
  // <Provider store ={store}>
  //   <App />
  //   <Browser Router-dom>
  // </Provider>
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
);
 