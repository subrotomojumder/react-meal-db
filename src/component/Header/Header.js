import React from 'react';
import logo from '../../images/logo.png';
import './Header.css';

const Header = () => {
    return (
        <div className='header'>
            <div className='logo'>
                <img src={logo} alt="" />
                <h3>MEAL DB</h3>
            </div>
            <nav>
                <h5>Item-1</h5>
                <h5>Item-2</h5>
                <h5>Item-3</h5>
                <h5>Item-4</h5>
            </nav>
        </div>
    );
};

export default Header;