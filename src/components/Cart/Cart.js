
import React, { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import './Cart.css';
import image from '../../images/shamim.jpg'
const Cart = (props) => {
    
    const notify = () => toast("Congratulations!");
    const {cart} = props;
    
        
    const [breaks , setBreaks] = useState(0)

    const handleBreak = (value) => {
        setBreaks(value)
    }
    let time = 0;
    for(const singlePart of cart){
        time =parseInt(time + parseInt(singlePart.time));
    }
    
    return (
        <div className="cart-info">

            <div className="self-info">
                <img src={image} alt="" />
                <h3>
                    Muhammad Shamim Islam <br />
                    <small className="address">Sundarganj,Gaibandha</small>
                </h3>
            </div>
           <p>My long time dream is to become a Web Developer.So I am now on way my to become a Web Developer.May Allah fulfills my dreams.</p>
           <p className="details-text">Add A Break</p>
           <div className="time-info">
                <button onClick={()=> handleBreak(10)}>10s</button>
                <button onClick={()=> handleBreak(20)}>20s</button>
                <button onClick={()=> handleBreak(30)}>30s</button>
                <button onClick={()=> handleBreak(40)}>40s</button>
                <button onClick={()=> handleBreak(50)}>50s</button>
           </div>
           <div>
                <p className="details-text">Exercise Details</p>
                <p className="time-text">Exercise Time: {time}s</p>
                <p className="time-text">Break Time: {breaks}s</p>
                <button onClick={notify} className="activity-btn">
                        <p className="btn-para">Activity Completed</p>
                </button>
                <ToastContainer />
           </div>
        </div>
    );
};

export default Cart;