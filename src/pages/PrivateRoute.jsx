import React, {useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from "../context/auth/authContext";

const PrivateRoute = ({component: Component, ...rest}) => {
    const authContext = useContext(AuthContext);
    const isAuthenticated = authContext.isAuthenticated;
    return (

        // Show the component only when the user is logged in
        // Otherwise, redirect the user to /signin page
        <Route {...rest} render={props => (
            isAuthenticated ?
                <Component {...props} />
            : <Redirect to="/login" />
        )} />
    );
};

export default PrivateRoute;