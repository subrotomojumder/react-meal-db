import { faShoppingCart } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React from 'react';
import './Meal.css';

const Meal = ({meal, handleCart}) => {
    const {strIngredient1, strMealThumb, strInstructions} = meal;
    return (
        <div className='single-meal'>
            <img src={strMealThumb} alt="" />
            <h2 className='title'>{strIngredient1}</h2>
            <p>Info: <small>{strInstructions.length > 60 ? strInstructions.substring(0, 60): strInstructions}</small></p>
            <button onClick={()=>handleCart(meal)} className='meal-btn'>
                <p>Add To Cart</p>
                <FontAwesomeIcon icon={faShoppingCart}></FontAwesomeIcon>
            </button>
        </div>
    );
};

export default Meal;