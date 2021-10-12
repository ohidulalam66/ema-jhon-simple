import React from 'react';
import { Link } from 'react-router-dom';

const Register = () => {
    return (
        <div className="login-form">
            <div>
                <form>
                    <h2>Register: Create Account</h2>
                    <input className="input-field" type="name" name="name" placeholder="Your Name" id="" />
                    <br />
                    <input className="input-field" type="email" name="email" placeholder="Your Email" id="" />
                    <br />
                    <input className="input-field" type="password" name="password" placeholder="Your Password" id="" />
                    <br />
                    <input className="input-field" type="password" name="password" placeholder="Re-enter Password" id="" />
                    <br />
                    <input className="purchase-btn" type="submit" value="Submit" />
                    <hr />
                    <button className="purchase-btn">Google Sign in</button>
                </form>
                <p>Already have an account? <Link to="/login">Log in</Link></p>
            </div>
        </div>
    );
};

export default Register;