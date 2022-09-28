import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';
import SingleExercise from '../SingleExsercise/SingleExercise';
import './Exercise.css';
const Exercise = () => {

    const [exerciseParts,setExerciseParts]=useState([]);

    useEffect(()=>{
        fetch('data.json')
        .then(res=>res.json())
        .then(data=>setExerciseParts(data))
    },[]);

    return (
        <div className="exercise"> 

            <div className="single-exercise">
            {
                exerciseParts.map(exercisePart=><SingleExercise
                    key={exercisePart.id}
                    exercisePart={exercisePart}
                ></SingleExercise>)
            }
            </div>
            <div className="cart">
                <Cart></Cart>
            </div>

        </div>
    );
};

export default Exercise;