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
    <Grid container component="main">
      <Grid item xs={10}>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ minHeight: "70vh" }}
        >
          <Paper className={classes.paper}>
            <Avatar className={classes.avatar}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <form className={classes.form} noValidate>
              <TFUsername ref={usernameRef} />
              <TFPassword ref={passwordRef} />
              <BtnSignIn handleClick={handleSubmit} />
              <div style={{ textAlign: "right" }}>
                <Link className={classes.link} justify="right" to="/sign-up">
                  {"Don't have an account? Sign Up"}
                </Link>
              </div>
            </form>
          </Paper>
        </Grid>
      </Grid>
      <Grid item xs={2} />
    </Grid>
  );
};

export default SignIn;
