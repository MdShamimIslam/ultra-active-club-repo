
import React from 'react';
import './Cart.css';
import image from '../../images/shamim.jpg'
const Cart = (props) => {
    const {cart}=props;

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
                <button>10s</button>
                <button>20s</button>
                <button>30s</button>
                <button>40s</button>
                <button>50s</button>
           </div>
           <div>
                <p className="details-text">Exercise Details</p>
                <p className="time-text">Exercise Time: {time}s</p>
                <p className="time-text">Break Time:</p>
                <button className="activity-btn">
                        <p className="btn-para">Activity Completed</p>
                </button>
           </div>
        </div>
    );
};

export default Cart;