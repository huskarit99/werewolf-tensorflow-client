import { Link } from "react-router-dom";
import { createBrowserHistory } from "history";
import React, { useRef, useState, Fragment } from "react";
import { Grid, Typography, Paper } from "@material-ui/core/";

import useStyles from "./style";
import { colorAlertEnum } from "utils/enumsUtil";
import { signUpApi } from "services/api/publicApi";
import BtnSignUp from "./components/BtnSignUp/BtnSignUp";
import TFFullname from "./components/TFFullname/TFFullname";
import TFPassword from "./components/TFPassword/TFPassword";
import TFUsername from "./components/TFUsername/TFUsername";

const SignUp = () => {
  const history = createBrowserHistory({ forceRefresh: true });
  const classes = useStyles();
  const fullnameRef = useRef();
  const usernameRef = useRef();
  const passwordRef = useRef();
  const [errorAlert, setErrorAlert] = useState(<Fragment></Fragment>);

  const handleSubmit = () => {
    signUpApi(
      fullnameRef.current.value,
      usernameRef.current.value,
      passwordRef.current.value
    ).then((res) => {
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
    });
  };

  return (
    <Grid container direction="row" style={{ minHeight: "70vh" }}>
      <Paper className={classes.paper}>
        <Typography component="h1" variant="h5" className={classes.typography1}>
          {"Sign up"}
        </Typography>
        <Typography component="h1" variant="h5" className={classes.typography2}>
          {
            "Thank you for using WereWolf, remember that it will always be free to create a new account. "
          }
        </Typography>
        <form>
          <TFFullname ref={fullnameRef} />
          <TFUsername ref={usernameRef} />
          <TFPassword ref={passwordRef} />
          {errorAlert}
          <BtnSignUp handleClick={handleSubmit} />
        </form>
        <Typography component="h1" variant="h5" className={classes.typography2}>
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
