
import React from 'react';
import './Header.css';
import image from '../../images/fight.jpg';

const Header = () => {
    return (
        <header className='header'>
            <img src={image} alt=""/>
            <h2>FIGHT CLUB</h2>
            
        </header>
    );
};

export default Header;