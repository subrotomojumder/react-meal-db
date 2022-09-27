import React from 'react';
import { useEffect } from 'react';
import { useState } from 'react';
import Cart from '../Cart/Cart';
import { addedStorage, getStorageData } from '../Fakedb/Fakedb';
import Meal from '../Meal/Meal';
import './Shop.css';

const Shop = () => {
    const [meals, setMeals] = useState([]);
    const [carts, setCarts] = useState([]);
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?f=b')
        .then(res => res.json())
        .then(data => setMeals(data.meals))
    },[]);
    
    useEffect(()=> {
        const storageData = getStorageData();
        const storageMeals = [];
        for (const name in storageData) {
           const selectedMeal = meals.find(meal => meal.strIngredient1 === name)
           if (selectedMeal) {
            selectedMeal['quantity'] = storageData[name];
            storageMeals.push(selectedMeal);
           }
        }
        setCarts(storageMeals);
    },[meals])

    const handleCart = product =>{
        let newProduct = [];
        const exist = carts.find(meal => meal.quantity === product.quantity);
        if (!exist) {
            product.quantity = 1;
            newProduct = [...carts, product];
        }
        else{
            const rest = carts.filter(meal => meal.quantity !== product.quantity)
            exist.quantity++;
            newProduct = [...rest, exist];
        }
        setCarts(newProduct)
        addedStorage(product.strIngredient1)
        
    }
    return (
        <div className='shop-container'>
            <div className='all-meals'>
               {
                meals.map(meal => <Meal meal={meal} handleCart={handleCart} key={meal.idMeal}/>)
               }
            </div>
            <div className='cart-section'>
               <Cart carts={carts}></Cart>
            </div>
        </div>
    );
};

export default Shop;