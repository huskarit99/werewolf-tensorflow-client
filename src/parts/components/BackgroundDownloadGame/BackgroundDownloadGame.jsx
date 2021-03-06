import React from "react";
import { useRecoilValue } from "recoil";
import {
  Paper,
  Grid,
  Typography,
  Avatar,
  Button,
  Divider,
} from "@material-ui/core";

import useStyles from "./style";
import backgroundDownload from "../../../images/3.jpg";
import { stateOfAuthentication } from "../../../utils/enumsUtil";
import isAuthenticatedState from "../../../state/isAuthenticatedState";

const BackgroundDownloadGame = () => {
  let stateUser = "nonLogin";
  const isAuthenticated = useRecoilValue(isAuthenticatedState);
  if (isAuthenticated === stateOfAuthentication.SUCCESS) stateUser = "login";
  const classes = useStyles(stateUser)();

  return (
    <Paper className={classes.paper}>
      <Grid container className={classes.container}>
        <Grid item xs={12} className={classes.item1}>
          <Avatar className={classes.avatar} src={backgroundDownload} />
        </Grid>
        <Grid item xs={12} className={classes.item2}>
          <Typography
            className={classes.typography}
            style={{
              color: "white",
              fontSize: "1.75rem",
            }}
          >
            {"WereWolf TensorFlow HCMUS: 2021"}
          </Typography>
        </Grid>
        <Grid item xs={12} className={classes.item3}>
          <Divider
            className={classes.divider}
            style={{ backgroundColor: "rgb(100, 100, 100)" }}
          />
        </Grid>
        <Grid item xs={12} className={classes.item4}>
          <a
            style={{ textDecoration: "none" }}
            href="https://drive.google.com/file/d/19--ClWLv5Rxf7YSTeFaeS_pc7sLMAWpC/view?usp=sharing"
          >
            <Button className={classes.button}>{"DownLoad"}</Button>
          </a>
        </Grid>
      </Grid>
    </Paper>
  );
};

export default BackgroundDownloadGame;
