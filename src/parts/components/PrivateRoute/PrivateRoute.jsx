import React, { useEffect } from "react";
import { Route, Redirect, useHistory, useLocation } from "react-router-dom";
import { useRecoilValue, useSetRecoilState, useRecoilState } from "recoil";

import roomState from "../../../state/roomState";
import { getToken } from "../../../utils/tokenUtil";
import socketState from "../../../state/socketState";
import Loading from "../../../pages/Loading/Loading";
import { stateOfAuthentication } from "../../../utils/enumsUtil";
import indexPublicMenuState from "../../../state/indexPublicMenuState";
import isAuthenticactedState from "../../../state/isAuthenticatedState";
import indexPrivateMenuState from "../../../state/indexPrivateMenuState";

const indexOrder = {
  "/": 0,
  "/sign-in": 1,
  "/sign-up": 2,
  "/profile": 1,
  "/lobby": 2,
  "/room": 3,
};

const PrivateRoute = ({ component: Component, ...rest }) => {
  const location = useLocation();
  const history = useHistory();
  const socket = useRecoilValue(socketState);
  const [room, setRoom] = useRecoilState(roomState);
  const isAuthenticated = useRecoilValue(isAuthenticactedState);
  const setIndexPublicMenu = useSetRecoilState(indexPublicMenuState);
  const setIndexPrivateMenu = useSetRecoilState(indexPrivateMenuState);

  useEffect(() => {
    setIndexPublicMenu(indexOrder[location.pathname]);
    setIndexPrivateMenu(indexOrder[location.pathname]);
  }, [setIndexPublicMenu, setIndexPrivateMenu, Component]);

  useEffect(() => {
    const token = getToken() !== null ? getToken().token : null;
    socket.emit("react:detail-room", token);
  }, []);

  useEffect(() => {
    socket.on("server:detail-room", (res) => {
      setRoom(res);
      if (res) {
        history.push("/room");
      }
    });
  }, [socket, setRoom]);

  if (room && location.pathname !== "/room") {
    return <Redirect to="/room" />;
  }
  if (!room && location.pathname === "/room") {
    return <Redirect to="/" />;
  }

  if (isAuthenticated === stateOfAuthentication.PROCESSING) {
    return <Route {...rest} render={() => <Loading />} />;
  } else {
    if (location.pathname === "/sign-in" || location.pathname === "/sign-up") {
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
