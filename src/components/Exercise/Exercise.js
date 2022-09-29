import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import SingleExercise from '../SingleExercise/SingleExercise';
import './Exercise.css';
const Exercise = () => {

    const [exerciseParts,setExerciseParts]=useState([]);

    const [cart,setCart]=useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setExerciseParts(data))
    },[]);

    const handleAddToCart=(p)=>{
        const newCart=[...cart,p];
        setCart(newCart);
    }

    return (
        <div className="exercise"> 

            <div className="single-exercise">
            {
                exerciseParts.map(exercisePart=><SingleExercise
                    key={exercisePart.id}
                    exercisePart={exercisePart}
                    handleAddToCart={handleAddToCart}
                ></SingleExercise>)
            }
            </div>
            <div className="cart">
                <Cart cart = {cart}></Cart>
            </div>

        </div>
    );
};

export default Exercise;