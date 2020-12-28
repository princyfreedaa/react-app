import React from 'react';
import { Link  } from "react-router-dom";
function CartTotal({value}) {
    var {cartSubTotal,clearCart,
    cartTax,
    cartTotal} = value;

    return (
        <React.Fragment>
<div>
    <Link to="/"><button onClick={()=>clearCart}>clearCart</button></Link>


            
            <h5>subtotal:</h5><strong>${cartSubTotal}</strong>
            <h5>tax:</h5><strong>${cartTax}</strong>
            <h5>subtotal:</h5><strong>${cartTotal}</strong>
            </div>
        </React.Fragment>
        
    );
}

export default CartTotal;