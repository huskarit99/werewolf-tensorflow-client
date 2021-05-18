import React, { useEffect } from "react";
import { Route, Redirect } from "react-router-dom";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";

import { getToken } from "utils/tokenUtil";
import roomState from "state/roomState";
import socketState from "state/socketState";
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
  const socket = useRecoilValue(socketState);
  const [room, setRoom] = useRecoilState(roomState);
  const isAuthenticated = useRecoilValue(isAuthenticactedState);
  const setIndexPublicMenu = useSetRecoilState(indexPublicMenuState);
  const setIndexPrivateMenu = useSetRecoilState(indexPrivateMenuState);

  useEffect(() => {
    setIndexPublicMenu(indexOrder[Component.name]);
    setIndexPrivateMenu(indexOrder[Component.name]);
  }, [setIndexPublicMenu, setIndexPrivateMenu, Component]);

  useEffect(() => {
    const token = getToken() !== null ? getToken().token : null;
    socket.emit("react:detail-room", token);
  }, []);

  useEffect(() => {
    socket.on("server:detail-room", (res) => {
      setRoom(res);
    });
  }, [socket, setRoom]);

  if (room !== null && Component.name !== "Room") {
    return <Redirect to="/room" />;
  }

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
