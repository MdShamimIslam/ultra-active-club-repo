
import React from 'react';
import './SingleExercise.css';

const SingleExercise = (props) => {
    const {name,img,time}=props.exercisePart;
    return (
        <div>
            <div className="singleEx">
                <img src={img} alt="" />
                <div className="exercise-info">
                    <h3> {name}</h3>
                    <p>Time required: {time}</p>
                </div>
                <button className='btn'>
                    <p className="btn-text">Add</p>
                    </button>
            </div>
            
        </div>
    );
};

export default SingleExercise;