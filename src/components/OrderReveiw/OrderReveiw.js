import React from 'react';
import useCart from '../../hooks/useCart';
import useProducts from '../../hooks/useProducts';
import ReveiwProducts from '../ReveiwProducts/ReveiwProducts';
import Cart from '../Cart/Cart';
import { clearTheCart, removeFromDb } from '../../utilities/fakedb';
import { useHistory } from 'react-router-dom';

const OrderReveiw = () => {
    const [products] = useProducts();
    const [cart, setCart] = useCart(products);

    const handleRemove = key => {
        const newCart = cart.filter(product => product.key !== key);
        setCart(newCart);
        removeFromDb(key);
    }

    const history = useHistory();
    const handlePlaceOrder = () => {
        history.push("/placeorder");
        setCart([]);
        clearTheCart();
    }
    return (
        <>
            <div className="shop-container">
                    <div className="product-container">
                        {
                            cart.map(product => <ReveiwProducts 
                            key= {product.key}
                            product= {product}
                            handleRemove= {handleRemove}
                            ></ReveiwProducts>)
                        }
                    </div>
                    <div className="cart-container">
                        <Cart cart= {cart}>
                        <button onClick= {handlePlaceOrder} 
                        className= "purchase-btn">Place order</button>
                        </Cart>
                    </div>
                </div>
        </>
    );
};

export default OrderReveiw;

/* 
<h2>This is Order Reveiw; {products.length}</h2>
            <h3>{cart.length}</h3>
            <Cart cart= {cart}></Cart>
*/