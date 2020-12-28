import React, {Component} from 'react';
import {Switch,Route} from "react-router-dom";
import './App.css';
import "bootstrap/dist/css/bootstrap.min.css"
import Product from "./components/product";
import NavBar from "./components/NavBar";   
import Default from "./components/Default";
import details from "./components/details";
import productList from "./components/productList";
import cart from "./components/cart/cart";




class App extends Component{
  render(){
    return(
        <React.Fragment>
          <NavBar />
          <Switch>
            <Route path="/details" component={details} />
            <Route path="/Product" component={Product} />
            <Route path="/cart" component={cart} />
            <Route exact path="/productList" component={productList} />
            <Route component={Default} />
          </Switch>
        </React.Fragment>
    );
  }
}


export default App;
