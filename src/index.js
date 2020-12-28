import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import {BrowserRouter as Route} from "react-router-dom";
import reportWebVitals from './reportWebVitals';
import {ProductProvider} from './context';
import "bootstrap/dist/css/bootstrap.min.css";

ReactDOM.render(
    <ProductProvider>
    <Route>
    <App />
    </Route>
    </ProductProvider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
