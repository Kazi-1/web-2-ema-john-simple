import React from 'react';
import Logo from '../../images/logo.png';
import './Header.css'

const header = () => {
    return (
        <div className="header">
            <h1>This is Header</h1>
            <img src={Logo} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/review">Order Review</a>
                <a href="/manage">Manage Inventory</a>
            </nav>
        </div>
    );
};

export default header;