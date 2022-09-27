import React from 'react';
import Meal from '../Meal/Meal';
import './Cart.css';

const Cart = ({carts}) => {
    return (
        <div className='cart'>
            <h2>Order List</h2>
                <div style={{display: 'flex', justifyContent: 'space-evenly', marginTop: '0px'}}>
                    <h5>Meal</h5>
                    <h5>Quantity</h5>
                </div>
            <ol className='product'>
                {
                    carts.map(meal => <li><p>{meal.strIngredient1}</p> <p className='quantity'>{meal.quantity}</p></li>)
                }
            </ol>
        </div>
    );
};

export default Cart;