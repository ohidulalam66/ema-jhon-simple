import React from 'react';
import './Cart.css';

const Cart = (props) => {
    const {cart} = props;
    console.log(cart)

    let totalQuantity = 0;
    let total = 0;
    for (const product of cart) {
        if (!product.quantity) {
            product.quantity = 1;
        }
        total = total + product.price * product.quantity;
        totalQuantity = totalQuantity + product.quantity;
    }    

   const shipping = 15;
   const tax = (total + shipping) / 10;
   const grandTotal = (total + shipping + tax);

    return (
        <div>
            <div className= "order-header">
                <h2>Order Summary</h2>
                <h4>Items odered: {totalQuantity}</h4>
            </div >
            <div className= "order-footer">
                <p>Price: ${total.toFixed(2)}</p>
                <p>Shipping & Handling: ${shipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <hr />
                <h3>Total: ${grandTotal.toFixed(2)}</h3>
                <p className= "btn-align">{props.children}</p>
            </div>
        </div>
    );
};

export default Cart;

    /* 
    // Reduce using like loop
    const totalReducer = (previous, product) => previous + product.price;
    const total = cart.reduce(totalReducer, 0);
    */