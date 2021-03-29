import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Checkbox from "@material-ui/core/Checkbox";

import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
} from "@material-ui/core";

import { ThemeContext } from "../../../App";
import AuthContext from "../../../context/auth/authContext";

const useStyles = makeStyles((theme) => ({
  paper: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    backgroundColor: "#004c9e",
  },
  form: {
    width: "100%", // Fix IE 11 issue.
  },
  inputField: {
    paddingBottom: theme.spacing(2),
  },
  submit: {
    marginTop: theme.spacing(3),
    background: "#004c9e",
    color: "#fff",
    "&:hover": {
      background: "#004c9edd",
    },
  },
  cancel: {
    marginTop: theme.spacing(3),
  },
}));

const GameInfo = ({ roomSetting }) => {
  const { user } = useContext(AuthContext);
  const [name] = useState(user?.username ?? "");

  const classes = useStyles();

  return (
    <div className="tictactoe-modal">
      <div className="content">
        <CssBaseline />
        <div className={classes.paper}>
          <Typography
            component="h1"
            variant="h5"
            className={classes.inputField}
          >
            Game Info
          </Typography>

          <Grid container>
            <Grid xs={6} container alignItems="center">
              <Typography>Ma sói:</Typography>
            </Grid>
            <Grid xs={3}>
              <Typography>{roomSetting.wereWolfs}</Typography>
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={6} container alignItems="center">
              <Typography>Phù thủy:</Typography>
            </Grid>
            <Grid xs={6}>
              <Checkbox
                name="witch"
                defaultChecked={roomSetting.witch}
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={6} container alignItems="center">
              <Typography>Thợ săn:</Typography>
            </Grid>
            <Grid xs={6}>
              <Checkbox
                name="hunter"
                defaultChecked={roomSetting.hunter}
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={6} container alignItems="center">
              <Typography>Bảo vệ:</Typography>
            </Grid>
            <Grid xs={6}>
              <Checkbox
                name="guard"
                defaultChecked={roomSetting.guard}
                color="primary"
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            </Grid>
          </Grid>
          <Grid container>
            <Grid xs={6} container alignItems="center">
              <Typography>Dân làng:</Typography>
            </Grid>
            <Grid xs={3}>
              <Typography>{roomSetting.villagers}</Typography>
            </Grid>
          </Grid>
        </div>
      </div>
    </div>
  );
};

export default GameInfo;
