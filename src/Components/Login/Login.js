import React from 'react';
import useFirebase from '../../Hooks/useFirebase';


const Login = () => {
    const {handleGoogleSignIn,user} = useFirebase()
    return (
        <div className="App mt-5">
            <h2>This is {user.email}</h2>
            <h1>Please Login</h1>
            <input type="email" placeholder="Email" /><br /><br />
            <input type="password" placeholder="Password" /><br /><br />
            <button onClick={handleGoogleSignIn} className="btn btn-primary fw-bold ms-3">Google Sign In</button>

        </div>
    );
};

export default Login;