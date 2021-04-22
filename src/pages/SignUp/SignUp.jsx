import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import { Grid, Avatar, Typography, Paper } from "@material-ui/core/";

import useStyles from "./style";
import { signUpApi } from "services/api/publicApi";
import BtnSignUp from "./components/BtnSignUp/BtnSignUp";
import TFFullname from "./components/TFFullname/TFFullname";
import TFPassword from "./components/TFPassword/TFPassword";
import TFUsername from "./components/TFUsername/TFUsername";

const SignUp = () => {
  let history = useHistory();
  const classes = useStyles();
  const fullnameRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();

  const handleSubmit = async () => {
    const isSuccess = await signUpApi(
      fullnameRef.current.value,
      usernameRef.current.value,
      passwordRef.current.value
    );
    if (isSuccess) {
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
              Sign up
            </Typography>
            <form className={classes.form} noValidate>
              <TFFullname ref={fullnameRef} />
              <TFUsername ref={usernameRef} />
              <TFPassword ref={passwordRef} />
              <BtnSignUp handleClick={handleSubmit} />
              <div style={{ textAlign: "right" }}>
                <Link className={classes.link} to="/sign-in" variant="body2">
                  Already have an account? Sign in
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

export default SignUp;
