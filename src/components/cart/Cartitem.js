import React, { Component } from 'react'

export default function Cartitem({item,value}){
const {id, title,img,price,total,count} = item;
const {increment,decrement, removeItem} = value;
        return (
            <div className="row">
                <div className="col-10 mx-auto">
                    <img src={img} style={{width:"5rem", height:"5rem"}} className="img-fluid" alt="product" />
                </div>
                <div>product:{title}</div>
                <div>price:{price}</div>
                <div>
                <span onClick={() => decrement(id)}>
                    -
                </span>
                <span>{count}</span>
                <span onClick={() => increment(id)}>
                    +
                </span></div>
                <div onClick={() => removeItem(id)}><i className="glyphicon glyphicon-remove"></i> </div>
                <div>item total : ${total}</div>
            </div>
        );
    
}

