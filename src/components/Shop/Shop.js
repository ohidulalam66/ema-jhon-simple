import React, { useEffect, useState } from 'react';
import { addToDb, getStoredCart } from '../../utilities/fakedb';
import Cart from '../Cart/Cart';
import Product from '../Product/Product';
import './Shop.css'

const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    // products tp be rendered UI
    const [UIProducts, setUIProducts] = useState([]);

    useEffect(() => {
        fetch('./products.JSON')
        .then(res => res.json())
        .then(data => {
            setProducts(data);
            setUIProducts(data);
        })
    }, [])

    // side-effect save Cart add to local storage
    useEffect(() => {
        if (products.length) {
            const saveCart = getStoredCart();
            const storedCart = [];
            for (const key in saveCart) {
                const addedProduct = products.find(product => product.key === key);
                if(addedProduct) {
                    const quantity = saveCart[key];
                    addedProduct.quantity =quantity;
                    storedCart.push(addedProduct);
                }
            }
            setCart(storedCart);
        }
    }, [products])
    
    const handleAddToCart = product => {
        const newCount = [...cart, product];
        setCart(newCount);
        // save to local storage (for now)
        addToDb(product.key)
    }

    const handleSearch = event => {
        const searchText = event.target.value;

        const macthedProducts = products.filter(product => product.name.toLowerCase().includes(searchText.toLowerCase()));

        setUIProducts(macthedProducts);
    }

    return (
        <>
            <div className="search-container">
                <input 
                type="text" 
                onChange= {handleSearch}
                placeholder= "Search products"/>
            </div>
            <div>
                <div className="shop-container">
                    <div className="product-container">
                        {
                        UIProducts.map(product => <Product 
                        key= {product.key}
                        product= {product}
                        handleAddToCart= {handleAddToCart}
                        ></Product>)
                        }
                    </div>
                    <div className="cart-container">
                        <Cart cart= {cart}></Cart>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Shop;