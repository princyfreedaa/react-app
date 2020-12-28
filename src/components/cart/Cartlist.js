import React, { Component } from 'react';
import Cartitem from "./Cartitem";

export default function Cartlist({value}) {
    var {cart} = value;

    console.log(value,cart);

    return (<div className="container-fluid">
        {cart.map(item => {
            return <Cartitem key = {item.id} item={item} value={value}></Cartitem>
        })};
    </div>);
}