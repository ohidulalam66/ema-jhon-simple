import React from 'react';
import { useForm } from 'react-hook-form';
import useAuth from '../../hooks/useAuth';
import './Shipping.css';

const Shipping = () => {

    const { register, handleSubmit, formState: { errors } } = useForm();
    const onSubmit = data => {
        console.log(data)
    };
    const { user } = useAuth();
    return (
        <div className="shipping-form">
            <form onSubmit={handleSubmit(onSubmit)}>
                <h2>Shipping</h2>
                <input className="shipping-field" defaultValue={user.displayName} {...register("name")} />
                <input className="shipping-field" defaultValue={user.email} {...register("email", { required: true })} />
                <br />
                {errors.email && <span className="error">This field is required</span>}
                <input className="shipping-field" placeholder="Address" {...register("address")} />
                <input className="shipping-field" placeholder="City Name" {...register("city")} />
                <input className="shipping-field" placeholder="Phone No."  {...register("phone")} />
                <input className="purchase-btn" type="submit" />
            </form>
        </div>
    );
};

export default Shipping;