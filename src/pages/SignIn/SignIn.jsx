import { Link } from "react-router-dom";
import React, { useRef, useState, Fragment } from "react";
import { Grid, Typography, Paper } from "@material-ui/core";

import useStyles from "./style";
import { createBrowserHistory } from "history";
import { signInApi } from "services/api/publicApi";
import BtnSignIn from "./components/BtnSignIn/BtnSignIn";
import TFPassword from "./components/TFPassword/TFPassword";
import TFUsername from "./components/TFUsername/TFUsername";
import { colorAlertEnum } from "utils/enumsUtil";

const SignIn = () => {
  const history = createBrowserHistory({ forceRefresh: true });
  const classes = useStyles();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [errorAlert, setErrorAlert] = useState(<Fragment></Fragment>);

  const handleSubmit = () => {
    signInApi(usernameRef.current.value, passwordRef.current.value).then(
      (res) => {
        if (res.isSuccess) {
          history.push("/");
        }
        setErrorAlert(
          <p
            style={{
              color: colorAlertEnum.ERROR,
              marginTop: "5px",
            }}
          >
            {res.message}
          </p>
        );
      }
    );
  };

  return (
    <Grid container direction="row" style={{ minHeight: "70vh" }}>
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5" className={classes.typography1}>
          {"Sign in"}
        </Typography>
        <Typography component="h1" variant="h5" className={classes.typography2}>
          {
            "Thank you for using WereWolf, remember that it will always be free to play."
          }
        </Typography>
        <form>
          <TFUsername handleClick={handleSubmit} ref={usernameRef} />
          <TFPassword handleClick={handleSubmit} ref={passwordRef} />
          {errorAlert}
          <BtnSignIn handleClick={handleSubmit} />
        </form>
        <Typography component="h1" variant="h5" className={classes.typography2}>
          {"Don't have an account yet?"}
          <Link to="/sign-up" className={classes.link}>
            {" Create your account"}
          </Link>
        </Typography>
      </Paper>
    </Grid>
  );
};

export default SignIn;
