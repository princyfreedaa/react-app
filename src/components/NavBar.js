import React, { Component } from 'react';
import {Link} from "react-router-dom";
import logo from '../logo.svg';

class NavBar extends Component {
    render() {
        return (
            <nav className = "navbar navbar-expand-lg navbar-light bg-light">
            <Link className="logo-container" to="/productList">
              <img className="nabarBrand" src={logo} alt="logo"></img>
            </Link>
            <ul className="navbar-nav">
                <li class="nav-item" >
                <Link className="logo-container2" to="/productList">
                    Products
                </Link>
                </li>
                <li className="nav-item" >
                <Link className="logo-container1" to="/cart">
                <i class="bi bi-cart"></i>AddtoCart
                </Link>
                </li>
            </ul>
          
            </nav>
        );
    }
}

export default NavBar;