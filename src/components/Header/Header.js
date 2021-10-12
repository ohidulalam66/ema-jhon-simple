import React from 'react';
import './Header.css';
import logo from '../../images/logo.png';
import { NavLink } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';

const Header = () => {
    const { user, logOut } = useAuth();

    return (
        <div className="header">
            <img className="logo" src={logo} alt="" />
            <nav>
                <NavLink to="/shop">Shop</NavLink>
                <NavLink to="/orders">Order Reveiw</NavLink>
                <NavLink to="/inventory">Manage Inventory</NavLink>
                {
                    user.email ?
                        <NavLink to="/login" onClick={logOut}>Log out</NavLink>
                        :
                        <NavLink to="/login">Login</NavLink>
                }
                {user.email && <span>{user.displayName}</span>}

            </nav>
        </div >
    );
};

export default Header;