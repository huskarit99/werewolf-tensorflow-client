import React,{useContext} from 'react';
import { Route, Redirect } from 'react-router-dom';
import AuthContext from "../context/auth/authContext";

const PublicRoute = ({component: Component, restricted, ...rest}) => {
    const authContext = useContext(AuthContext);
    const isAuthenticated = authContext.isAuthenticated;
    return (
        <Route {...rest} render={props => (
             isAuthenticated&& restricted ?
                <Redirect to="/" />
            : <Component {...props} />
        )} />
    );
};

export default PublicRoute;