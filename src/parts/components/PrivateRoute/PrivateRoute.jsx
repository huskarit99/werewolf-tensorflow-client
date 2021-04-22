import React from "react";
import { useRecoilValue } from "recoil";
import { Route, Redirect } from "react-router-dom";
import isAuthenticactedState from "state/isAuthenticatedState";

import Loading from "pages/Loading/Loading";
import { stateOfAuthentication } from "utils/enumsUtil";

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useRecoilValue(isAuthenticactedState);

  if (isAuthenticated === stateOfAuthentication.PROCESSING) {
    return <Route {...rest} render={() => <Loading />} />;
  } else {
    if (Component.name === "SignIn" || Component.name === "SignUp") {
      return (
        <Route
          {...rest}
          render={() => {
            if (isAuthenticated === stateOfAuthentication.SUCCESS)
              return <Redirect to="/dashboard" />;
            else if (isAuthenticated === stateOfAuthentication.FAIL)
              return <Component />;
          }}
        />
      );
    } else {
      return (
        <Route
          {...rest}
          render={() => {
            if (isAuthenticated === stateOfAuthentication.SUCCESS)
              return <Component />;
            else if (isAuthenticated === stateOfAuthentication.FAIL)
              return <Redirect to="/" />;
          }}
        />
      );
    }
  }
};

export default PrivateRoute;
