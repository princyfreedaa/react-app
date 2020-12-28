import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import {ProductConsumer} from "../context";
class Product extends Component {
    render() {
        var {id,title,img, price, inCart} = this.props.product;
        return (
            <ProductConsumer>

                {(value) => (
                    <div className="col-9 product-wrapper">



                    <div className = "img-container" onClick={()=>value.handleDetail(id)}>
                        <Link to="/details">
                            <img src = {img} alt="product" />
                        </Link>
                        
                        <button onClick={()=>value.addToCart(id)} className="cart-btn" disabled={inCart?true:false}>
                        {inCart?(<p>InCart</p>):<i className="glyphicon glyphicon-shopping-cart"/>}</button>
                    </div>
                    
                    <div className="card-footer">${price}</div>
                    <div>{title}</div>
                </div>
                )}
               
                    
              

              
            
            </ProductConsumer>
              
        );
    }
}

export default Product;