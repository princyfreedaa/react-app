import React, { Component } from 'react';
import { ProductConsumer } from "../context";
import {Link } from 'react-router-dom';
class details extends Component {
    render() {
        return (
            <ProductConsumer>
                {value => {
                    const {id,company,img,title,info,inCart,total} = value.detailProducts;
                    return(
                        
                        <div><h1>{company}</h1>
                            <h1>{id}</h1>
                            <div> <img src={img} alt="image" /> </div>
                            <h1>{company}</h1>
                            <h6>{info}</h6>
                            <div>
                                <Link to="/productList">BackTOPRodunct</Link>
                            </div>
                            <div  onClick={()=>{
                                value.addToCart(id)
                            }}  disabled={inCart?true:false}>{inCart?"inCart":"addtoCart"}</div>
                        </div>
                    )
                }}
            </ProductConsumer>
        );
    }
}

export default details;