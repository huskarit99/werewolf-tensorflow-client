import React, { useRef } from "react";
import { Link, useHistory } from "react-router-dom";
import { Grid, Typography, Paper } from "@material-ui/core/";

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
    <Grid container direction="row" style={{ minHeight: "70vh" }}>
      <Paper className={classes.paper}>
        <Typography
          component="h1"
          variant="h5"
          style={{ color: "white", fontSize: "2.3rem", fontWeight: "bold" }}
        >
          Sign up
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
          create a new account.
        </Typography>
        <TFFullname ref={fullnameRef} />
        <TFUsername ref={usernameRef} />
        <TFPassword ref={passwordRef} />
        <BtnSignUp handleClick={handleSubmit} />
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
          Already have an account?
          <Link to="/sign-in" className={classes.link}>
            {" Sign in your account"}
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default SignUp;
