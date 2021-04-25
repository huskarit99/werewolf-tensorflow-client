import React, { useRef } from "react";
import { Link } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Grid, Avatar, Typography, Paper } from "@material-ui/core";

import useStyles from "./style";
import { createBrowserHistory } from "history";
import { signInApi } from "services/api/publicApi";
import BtnSignIn from "./components/BtnSignIn/BtnSignIn";
import TFPassword from "./components/TFPassword/TFPassword";
import TFUsername from "./components/TFUsername/TFUsername";

const SignIn = () => {
  const history = createBrowserHistory({ forceRefresh: true });
  const classes = useStyles();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async () => {
    const isSuccess = await signInApi(
      usernameRef.current.value,
      passwordRef.current.value
    );
    if (isSuccess === true) {
      history.push("/");
    }
  };

  return (
    <Grid
      container
      direction="row"
      justify="left"
      alignItems="left"
      style={{ minHeight: "70vh" }}
    >
      <Paper className={classes.paper}>
        <Typography
          component="h1"
          variant="h5"
          style={{ color: "white", fontSize: "2.3rem", fontWeight: "bold" }}
        >
          Sign in
        </Typography>
        <Typography
          component="h1"
          variant="h5"
          style={{
            width: "70%",
            color: "#84848A",
            fontSize: "0.875rem",
            marginTop: "2%",
            marginBottom: "3%",
          }}
        >
          Thank you for using WereWolf, remember that it will always be free to
          play.
        </Typography>
        <TFUsername ref={usernameRef} />
        <TFPassword ref={passwordRef} />
        <BtnSignIn handleClick={handleSubmit} />
        <Typography
          component="h1"
          variant="h5"
          style={{
            width: "70%",
            color: "#84848A",
            fontSize: "0.875rem",
            marginTop: "2%",
            marginBottom: "3%",
          }}
        >
          Don't have an account yet?
          <Link to="/sign-up" className={classes.link}>
            {" Create your account"}
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default SignIn;
