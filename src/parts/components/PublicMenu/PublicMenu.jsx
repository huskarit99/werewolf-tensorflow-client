import React, { useRef } from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import { List, Grid, Typography } from "@material-ui/core";

import { useStyles, ListItem } from "./style";

const PublicMenu = () => {
  const classes = useStyles();
  const homeRef = useRef();

  React.useEffect(() => {
    console.log(homeRef.current);
  }, []);

  return (
    <List>
      <Link to="/" className={classes.link}>
        <ListItem ref={homeRef} button selected>
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
      <Link to="/sign-in" className={classes.link}>
        <ListItem button>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={3}>
              <Typography variant="subtitle2">Sign In</Typography>
            </Grid>
            <Grid item xs={6} />
            <Grid item xs={3}>
              <AssignmentIndIcon style={{ color: "white" }} />
            </Grid>
          </Grid>
        </ListItem>
      </Link>
      <Link to="/sign-up" className={classes.link}>
        <ListItem button>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={5}>
              <Typography variant="subtitle2">Sign Up</Typography>
            </Grid>
            <Grid item xs={4} />
            <Grid item xs={3}>
              <AssignmentIcon style={{ color: "white" }} />
            </Grid>
          </Grid>
        </ListItem>
      </Link>
    </List>
  );
};

export default PublicMenu;
