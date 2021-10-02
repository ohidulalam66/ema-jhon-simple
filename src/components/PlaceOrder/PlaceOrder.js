import React from 'react';
import './PlaceOrder.css'
import img from '../../images/giphy.gif';

const PlaceOrder = () => {
    return (
        <>
            <img className= "img" src={img} alt="" />
            <h1 className= "text">Congratulations</h1>
        </>
    );
};

export default PlaceOrder;