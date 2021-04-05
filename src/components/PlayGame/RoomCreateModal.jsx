import React, { useState, useContext } from "react";
import { makeStyles } from "@material-ui/core/styles";

import VideogameAsset from "@material-ui/icons/VideogameAsset";

import {
  Avatar,
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
} from "@material-ui/core";

import { ThemeContext } from "../../App";
import "./css/styles.css";
import AuthContext from "../../context/auth/authContext";

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
    marginTop: theme.spacing(3),
  },
  submit: {
    marginTop: theme.spacing(3),
    background: "#004c9e",
    color: "#fff",
    "&:hover": {
      background: "#004c9edd",
    },
  },
}));

const RoomCreateModal = ({ close, onClick }) => {
  const { user } = useContext(AuthContext);
  const [name] = useState(user?.username ?? "");

  const classes = useStyles();
  const socket = useContext(ThemeContext);

  const [formData, setFormData] = useState({
    room: Math.random().toString(36).substring(2, 15) + Math.random().toString(36).substring(2, 15),
  });

  const handleInputChange = (e) => {
    
    if (e.target.name === "numOfPlayers") {
      setFormData({ ...formData, [e.target.name]: parseInt(e.target.value) });
      return;
    }
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  return (
    <div className="werewoft-modal">
      <a href="#/" className="close" onClick={close}>
        &times;
      </a>
      <div className="content">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <VideogameAsset />
          </Avatar>
          <Typography
            component="h1"
            variant="h5"
            className={classes.inputField}
          >
            Create Room
          </Typography>
          <form className={classes.form} noValidate>
            <TextField
              disabled
              variant="outlined"
              className={classes.inputField}
              required
              fullWidth
              id="room"
              label="CODE"
              value={formData.room}
              onChange={handleInputChange}
              name="room"
              autoComplete="room"
              autoFocus
            />
            <TextField
              variant="outlined"
              className={classes.inputField}
              required
              fullWidth
              id="roomName"
              onChange={handleInputChange}
              label="Name"
              name="roomName"
              autoComplete="roomName"
              autoFocus
            />
            <Grid container xs={3} sm item className={classes.inputField}>
              <Grid item style={{ marginRight: ".75rem" }} xs={6} alignItems = "center">
                <Typography component="legend">Number of players: </Typography>
              </Grid>
              <Grid item xs={3}>
                <TextField
                  id="numOfPlayers"
                  name="numOfPlayers"
                  type="number"
                  variant="outlined"
                  InputProps={{ inputProps: { min: 3, max: 10},style:{height: '40px'} }}
                  onChange={handleInputChange}
                  required
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(e) => {
                e.preventDefault();

                const { room, roomName, numOfPlayers } = formData;
                onClick(name, room, roomName, numOfPlayers);
                close();
              }}
            >
              Create
            </Button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default RoomCreateModal;
