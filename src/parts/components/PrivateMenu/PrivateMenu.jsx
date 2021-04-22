import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import VideogameAsset from "@material-ui/icons/VideogameAsset";
import { Grid, List, Typography } from "@material-ui/core";

import { clearToken } from "utils/tokenUtil";
import { useStyles, ListItem } from "./style";

const PrivateMenu = () => {
  const classes = useStyles();

  const handleLogout = () => {
    clearToken();
  };

  return (
    <List>
      <ListItem style={{ minHeight: "10vh" }}>
        <Typography display="block" variant="caption">
          Menu
        </Typography>
      </ListItem>
      <Link to="/" className={classes.link}>
        <ListItem button selected>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={3}>
              <Typography variant="subtitle2">Home</Typography>
            </Grid>
            <Grid item xs={6} />
            <Grid item xs={3}>
              <HomeIcon style={{ color: "white" }} />
            </Grid>
          </Grid>
        </ListItem>
      </Link>
      <Link to="/profile" className={classes.link}>
        <ListItem button>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={3}>
              <Typography variant="subtitle2">Profile</Typography>
            </Grid>
            <Grid item xs={6} />
            <Grid item xs={3}>
              <PersonIcon style={{ color: "white" }} />
            </Grid>
          </Grid>
        </ListItem>
      </Link>
      <Link to="/play-game" className={classes.link}>
        <ListItem button>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={5}>
              <Typography variant="subtitle2">Play Game</Typography>
            </Grid>
            <Grid item xs={4} />
            <Grid item xs={3}>
              <VideogameAsset style={{ color: "white" }} />
            </Grid>
          </Grid>
        </ListItem>
      </Link>
      <a href="/" className={classes.link}>
        <ListItem button onClick={handleLogout}>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={5}>
              <Typography variant="subtitle2">Logout</Typography>
            </Grid>
            <Grid item xs={4} />
            <Grid item xs={3}>
              <ExitToAppIcon style={{ color: "white" }} />
            </Grid>
          </Grid>
        </ListItem>
      </a>
    </List>
  );
};

export default PrivateMenu;
