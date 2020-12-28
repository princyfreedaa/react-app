import React, { Component } from 'react';
import { detailProduct, storeProducts} from "./data";

var productContext = React.createContext();

class ProductProvider extends Component {
state = {
    products:[],
    detailProducts:detailProduct,
    cart: [],
    cartSubTotal:10,
    cartTax:20,
    cartTotal:30
};

componentDidMount(){
   this.setProducts();
}


setProducts = () =>{
    let tempProducts = [];
    storeProducts.forEach(item =>{
        const singleItem = {...item};
        tempProducts = [...tempProducts, singleItem];
    });
    this.setState(() => {
        return {products: tempProducts};
    });
};

getItem = (id) => {
    var productName = this.state.products.find(item => item.id === id);
    return productName;
}

handleDetail = (id) => {
   var productName = this.getItem(id);
   this.setState( ()=> {
       return {detailProducts:productName};
   });
};
addToCart = (id) =>{
   let tempProducts = [...this.state.products];
   var index = tempProducts.indexOf(this.getItem(id));
   var p = tempProducts[index];
   p.inCart = true;
   p.count = 1;
   var price = p.price;
   p.total = price;
   this.setState(()=> {
       return {products:tempProducts,cart:[...this.state.cart,p]};
    },() => {
        this.addTotal();
       }
   );
};

increment = (id) => {
   var tempcart = [...this.state.cart];
   var selectedProduct =  tempcart.find(item => item.id === id);
   var index = tempcart.indexOf(selectedProduct);
   var product = tempcart[index];
   product.count = product.count + 1;
   product.total = product.count * product.price;

   this.setState(() => {return {cart:[...tempcart]}}, ()=>{
       this.addTotal();
   });
}

decrement = (id) => {
    var tempcart = [...this.state.cart];
   var selectedProduct =  tempcart.find(item => item.id === id);
   var index = tempcart.indexOf(selectedProduct);
   var product = tempcart[index];
   product.count = product.count - 1;

   if(product.count === 0){
       this.removeItem(id);
   }
   else{
       product.total = product.count * product.price;
       this.setState(() => {return {cart:[...tempcart]}}, ()=>{
        this.addTotal();
    });
   }


   
}


removeItem = (id) => {
    var tempProducts = [...this.state.products];
    var tempcart = [...this.state.cart];
    tempcart =   tempcart.filter(item => item.id !== id);
    var index = tempProducts.indexOf(this.getItem(id));
    var removedProducts = tempProducts[index];
    removedProducts.inCart = false;
    removedProducts.count = 0;
    removedProducts.total = 0;

    this.setState(() => {
        return {
            cart:[...tempcart],
            products:[...tempProducts]
        }
    },() => {
        this.addTotal();
    })

}
clearCart = () => {
   this.setState(() =>{
   },() => {
       this.setProducts();
   });
   
}

addTotal = () =>{
    var subTotal = 0;
    this.state.cart.map(item => (subTotal += item.total));
    var tempTax = subTotal * 0.1;
    var tax = parseFloat(tempTax.toFixed(2));
    var total = subTotal + tax;
    this.setState(()=> {
        return {
            cartSubTotal : subTotal,
            cartTax: tax,
            cartTotal: total
        }
    })
}
 render() {
        return (
           <productContext.Provider value={{
               ...this.state,
               handleDetail:this.handleDetail,
               addToCart:this.addToCart,
               increment:this.increment,
               decrement:this.decrement,
               removeItem:this.removeItem,
               clearCarts: this.clearCarts


           }}>
           {this.props.children}
           </productContext.Provider>
        );
    }
}
var ProductConsumer = productContext.Consumer;
export {ProductProvider,ProductConsumer};