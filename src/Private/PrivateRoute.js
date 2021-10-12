
import React, { useContext, createContext, useState } from "react";
import {

    
    Route,
    
    Redirect,
    useHistory,
    useLocation
} from "react-router-dom";
import useAuth from "../Hooks/useAuth";
import useFirebase from "../Hooks/useFirebase";

const PrivateRoute = ({ children, ...rest }) => {
    const  {user} = useAuth();
    console.log(user)
    let history = useHistory();
    let location = useLocation();

    return (

        <Route

            {...rest}
            render={(props) =>
                user.email ? (
                    children
                ) : (
                    <Redirect to={{
                        pathname: "/login",
                        state: { from: location }
                    }}

                    />
                )
            }

        >


        </Route>
    );
};

export default PrivateRoute;