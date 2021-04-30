import React from "react";
import { BrowserRouter, Switch, Route } from "react-router-dom";

import "./App.css";
import Home from "pages/Home/Home";
import Room from "pages/Room/Room";
import SignIn from "pages/SignIn/SignIn";
import SignUp from "pages/SignUp/SignUp";
import Lobby from "pages/Lobby/Lobby";
import MenuBar from "parts/containers/MenuBar/MenuBar";
import PrivateRoute from "parts/components/PrivateRoute/PrivateRoute";

const App = () => {
  return (
    <BrowserRouter>
      <MenuBar>
        <Switch>
          <PrivateRoute exact path="/sign-in" component={SignIn} />
          <PrivateRoute exact path="/sign-up" component={SignUp} />
          <PrivateRoute exact path="/lobby" component={Lobby} />
          <PrivateRoute exact path="/room" component={Room} />
          <Route path="/" component={Home} />

          {/* <PrivateRoute exact path="/room" component={Room} /> */}
          {/* <Route exact path="*" component={My404Component} /> */}
        </Switch>
      </MenuBar>
    </BrowserRouter>
  );
};

export default App;
