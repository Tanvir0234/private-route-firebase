
import React from 'react';
import useAuth from '../../Hooks/useAuth';

const Shipping = () => {
    const {user}=useAuth();
    return (
        <div>
            <h1>Shipping</h1>
            <h2>Hi {user.email}</h2>
        </div>
    );
};

export default Shipping;