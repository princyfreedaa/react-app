import React, { Component } from 'react';
import { Badge } from 'react-bootstrap';
import "bootstrap/dist/css/bootstrap.min.css";
import Product from './product';
import {ProductConsumer} from "../context";
class productList extends Component {


    incremen = (test)=> {
        console.log(test);
        this.setState({count:this.state.count++});
    }
      styles={
          fontSize:'20px',
          fontWeight:"bold"
      }
      


    render() {


      

        return (
            <React.Fragment>
               <h3>Our Products</h3>
               <div>
                   <ProductConsumer>
                       {
                           value=>{
                             return value.products.map(product =>{
                                 return <Product key = {product.id} product={product} />
                             })
                           }
                       }
                   </ProductConsumer>
               </div>
            </React.Fragment>
        );
    }


    renertag(){
        if(this.state.tags.length === 0){
            return <p>no tags </p>
        }
        else{
            return <ul>{this.state.tags.map(tag => <li>{tag}</li>)}</ul>;
        }
    }

    badgeChange() {
        var classes = 'badge ';
        if (this.state.count == 0) {
            classes = classes + 'badge-warning';
        }
        else {
            classes = classes + 'badge-primary';
        }
        return classes;
    }
}    

 



export default productList;
