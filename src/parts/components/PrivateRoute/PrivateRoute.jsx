import React from "react";
import { useRecoilValue, useSetRecoilState } from "recoil";
import { Route, Redirect } from "react-router-dom";

import Loading from "pages/Loading/Loading";
import { stateOfAuthentication } from "utils/enumsUtil";
import indexPublicMenuState from "state/indexPublicMenuState";
import isAuthenticactedState from "state/isAuthenticatedState";
import indexPrivateMenuState from "state/indexPrivateMenuState";

const indexOrder = {
  "/": 0,
  SignIn: 1,
  SignUp: 2,
  Profile: 1,
  Lobby: 2,
  Room: 3,
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const isAuthenticated = useRecoilValue(isAuthenticactedState);
  const setIndexPublicMenu = useSetRecoilState(indexPublicMenuState);
  const setIndexPrivateMenu = useSetRecoilState(indexPrivateMenuState);

  React.useEffect(() => {
    setIndexPublicMenu(indexOrder[Component.name]);
    setIndexPrivateMenu(indexOrder[Component.name]);
  }, [setIndexPublicMenu, setIndexPrivateMenu, Component]);

  if (isAuthenticated === stateOfAuthentication.PROCESSING) {
    return <Route {...rest} render={() => <Loading />} />;
  } else {
    if (Component.name === "SignIn" || Component.name === "SignUp") {
      return (
        <Route
          {...rest}
          render={() => {
            if (isAuthenticated === stateOfAuthentication.SUCCESS)
              return <Redirect to="/" />;
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
