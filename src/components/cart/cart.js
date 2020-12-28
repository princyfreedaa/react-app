import React, { Component } from 'react';
import Cartcolumn from "./cartcolumn";
import EmptyCart  from "./EmptyCart";
import Cartlist from "./Cartlist";
import { ProductConsumer } from "../../context";
import CartTotal from "./CartTotal";
class cart extends Component {
    render() {
        return (
            <div>
               <ProductConsumer>
                   {value => { var {cart} = value;
                    if(cart.length > 0){
                        return  (<React.Fragment>
<Cartcolumn></Cartcolumn>
<Cartlist value={value}></Cartlist>
<CartTotal value={value}></CartTotal>
                        </React.Fragment>  )
                    }
                    else{
                        return   <EmptyCart></EmptyCart>
                    }
                }}
               </ProductConsumer>
               
              
            </div>
        );
            
    }
}

export default cart