import React, { Fragment } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import "./App.css";
import "./style.css";
import setAuthToken from "./utils/setAuthToken";
import Alert from "./components/Alert";
import AuthState from "./context/auth/AuthState";
import AlertState from "./context/alert/AlertState";

import Home from "./pages/Home";
import SignUp from "./pages/SignUp";
import Login from "./pages/Login";
import Logout from "./pages/Logout";
import PlayGame from "./pages/PlayGame";
import Room from "./pages/Room";
import PrivateRoute from "./pages/PrivateRoute";
import PublicRoute from "./pages/PublicRoute";

import ResponsiveDrawer from "./layout/ResponsiveDrawer";
import { makeStyles } from "@material-ui/core/styles";
import io from "socket.io-client";

let socket;
const ENDPOINT = `http://localhost:${process.env.REACT_APP_API_URL}`;
socket = io(ENDPOINT, {
  transports: ["websocket", "polling", "flashsocket"],
});
console.log(socket)
export const ThemeContext = React.createContext("");

const useStyles = makeStyles((theme) => ({
  content: {
    padding: "2rem",
  },
}));

setAuthToken(localStorage.token);

const App = () => {
  const classes = useStyles();
  

  return (
    <Router>
      <AlertState>
        <AuthState>
          <Fragment>
            <ResponsiveDrawer>
              <ThemeContext.Provider value={socket}>
                <div className={classes.content}>
                  <Switch>
                    <PublicRoute restricted={false} exact path="/" component={Home} />
                    <PublicRoute restricted={true} exact path="/login" component={Login} />
                    <PublicRoute restricted={true} exact path="/sign-up" component={SignUp} />
                    {/*  */}
                    {/* Authenticate */}
                    <PrivateRoute exact path="/play-game" component={PlayGame} />
                    <PrivateRoute exact path="/room" component={Room} />
                    <PrivateRoute exact path="/logout" component={Logout} />
                    
                  </Switch>
                </div>
              </ThemeContext.Provider>
            </ResponsiveDrawer>
            <Alert />
          </Fragment>
        </AuthState>
      </AlertState>
    </Router>
  );
};

export default App;
