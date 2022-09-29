
import React from 'react';
import './SingleExercise.css';

const SingleExercise = (props) => {
    const {handleAddToCart}=props;
    const {name,img,time}=props.exercisePart;
    return (
        <div>
            <div className="singleEx">
                <img src={img} alt="" />
                <div className="exercise-info">
                    <h3> {name}</h3>
                    <p className="Time-text">Time required: {time}</p>
                </div>
                <button onClick={()=>handleAddToCart(props.exercisePart)} className='btn'>
                    <p className="btn-text">Add To List</p>
                    </button>
            </div>
            
        </div>
    );
};

export default SingleExercise;