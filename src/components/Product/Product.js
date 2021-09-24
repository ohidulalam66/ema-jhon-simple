import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
import './Product.css';
import Rating from 'react-rating';

const Product = props => {
    console.log(props)
    const {img, name, price, stock, seller, star}= props.product;
    const cartIcon = <FontAwesomeIcon icon={faShoppingCart} />
    return (
        <div className= "product">
            <div className= "product-img">
                <img src={img} alt="" />
            </div>
            <div>
                <h4 className= "product-name">{name}</h4>
                <p><small>by: {seller}</small></p>
                <p>${price}</p>
                <p>only {stock} left in stock - order soon</p>
                <Rating
                emptySymbol="far fa-star"
                fullSymbol="fas fa-star"
                initialRating={star}
                readonly
                ></Rating>
                <br />
                <button onClick= {() => props.handleAddToCart(props.product)} className= "purchase-btn">{cartIcon} add to cart</button>
            </div>
        </div>
    );
};

export default Product;