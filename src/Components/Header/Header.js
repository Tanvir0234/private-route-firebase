import React from 'react';
import { Link } from 'react-router-dom';
import useFirebase from '../../Hooks/useFirebase';
import './Header.css'

const Header = () => {
    const {handleLogOut,user}=useFirebase()
    return (
        <div className="bg-dark text-white App">
            <Link className="header-items" to="home">Home</Link>
            <Link className="header-items" to="payment">Payment</Link>
            <Link className="header-items" to="Shipping">Shipping</Link>
            { 
              !user.email?
              (<Link className="header-items" to="login">Log In</Link>)
              :
              (<Link onClick={handleLogOut}  className="header-items" to="logout">Log Out</Link>)
            }
        </div>
    );
};

export default Header;