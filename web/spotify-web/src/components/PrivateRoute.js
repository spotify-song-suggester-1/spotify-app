//can change redirect
//import to App.js
//<Router>
//<Route path="/login" component={...} /> 
//<PrivateRoute exact path="/" component={ProfilePage} /> 
//</Router>


import React from "react";
import { Route, Redirect } from "react-router-dom";

export default function PrivateRoute({ component: Component, ...rest }) {
    return (
        <Route 
            {...rest}
            render={props => {
                if (localStorage.getItem('token')) {
                    return <Component {...props} />
                } else {
                    return <Redirect to="/login" />
                }
            }}
        />
    );
};