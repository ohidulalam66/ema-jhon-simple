import React from 'react';
import { Link, useLocation, useHistory } from 'react-router-dom';
import useAuth from '../../hooks/useAuth';
import './Login.css'

const Login = () => {

    const { error, signInUsingGoogle } = useAuth();
    const location = useLocation();
    const history = useHistory();
    const redirect_uri = location.state?.from || '/shop';
    // console.log('came form', location.state?.form);

    const handleGoogleLogin = () => {
        signInUsingGoogle()
            .then(result => {
                history.push(redirect_uri);
            })
    }

    return (
        <div className="login-form">
            <div>
                <h2>Login</h2>
                <from>
                    <input className="input-field" type="email" placeholder="Your Email" id="" />
                    <br />
                    <input className="input-field" type="password" placeholder="Your Password" id="" />
                    <br />
                    <input className="purchase-btn" type="submit" value="Submit" />
                </from>
                <hr />
                <p>{error}</p>
                <button
                    className="purchase-btn"
                    onClick={handleGoogleLogin}
                >Google Sign in</button>
                <p>New to Ema-jhon? <Link to="/register">Create Account</Link></p>
            </div>
        </div>
    );
};

export default Login;