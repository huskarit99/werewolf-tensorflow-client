import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Checkbox from "@material-ui/core/Checkbox";
import SettingsIcon from '@material-ui/icons/Settings';
import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
} from "@material-ui/core";

import { ThemeContext } from "../../../App";
import "./css/styles.css";
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
  inputField:{
      paddingBottom: theme.spacing(2)
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
  }
}));

const SettingGame = ({ close, onClick, numOfPlayers }) => {
  const { user } = useContext(AuthContext);
  const [name] = useState(user?.username ?? "");

  const classes = useStyles();
  const socket = useContext(ThemeContext);

  const [formData, setFormData] = useState({
    room: socket.id,
  });

  const handleInputChange = (e) => {
    if (e.target.name === "wereWolfs" || e.target.name === "villagers") {
      setFormData({ ...formData, [e.target.name]: parseInt(e.target.value) });
      return;
    }
    setFormData({ ...formData, [e.target.name]: e.target.checked });
  };

  return (
    <div className="werewoft-modal">
      <a  className="close" onClick={close}>
      &times;
      </a>
      <div className="content">
        <CssBaseline />
        <div className={classes.paper}>
        <Avatar className={classes.avatar}>
            <SettingsIcon fontSize="large" />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
            className={classes.inputField}
          >
            Setting
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container>
              <Grid xs={6} container alignItems="center">
                <Typography>Ma sói:</Typography>
              </Grid>
              <Grid xs={3}>
                <TextField
                  id="wereWolfs"
                  name="wereWolfs"
                  type="number"
                  variant="outlined"
                  InputProps={{ inputProps: { min: 1, max: numOfPlayers-1 }, style:{height: '40px'} }}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
            </Grid>

            <Grid container>
              <Grid xs={6} container alignItems="center">
                <Typography>Phù thủy:</Typography>
              </Grid>
              <Grid xs={6}>
                <Checkbox
                  name="witch"
                  defaultChecked={false}
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  onChange={handleInputChange}
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
                  defaultChecked={false}
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  onChange={handleInputChange}

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
                  defaultChecked={false}
                  color="primary"
                  inputProps={{ "aria-label": "secondary checkbox" }}
                  onChange={handleInputChange}
                  
                />
              </Grid>
            </Grid>
            <Grid container >
              <Grid xs={6} container alignItems="center">
                <Typography>Dân làng:</Typography>
              </Grid>
              <Grid xs={3}>
                <TextField
                  id="villagers"
                  name="villagers"
                  type="number"
                  variant="outlined"
                  InputProps={{ inputProps: { min: 1, max: numOfPlayers-1 },style:{height: '40px'} }}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
            </Grid>
            <Grid container > 
              <Grid xs={6} container alignItems="center" justify="center">
              <Button
              name="confirm"
              type="submit"
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(e) => {
                e.preventDefault();
                const { wereWolfs, witch, hunter, guard, villagers } = formData;
                onClick(wereWolfs, witch, hunter, guard, villagers);
                close();
              }}
            >
              Confirm
            </Button>
              </Grid>
              <Grid xs={6} container alignItems="center" justify="center">
              <Button
              name="cancel"
              type="submit"
              variant="contained"
              className={classes.cancel}
              onClick={(e) => {
                e.preventDefault();
               close();
              }}
            >
              Cancel
            </Button>
              </Grid>
            </Grid>
            
          </form>
        </div>
      </div>
    </div>
  );
};

export default SettingGame;
