import React from "react";
import { Grid, Typography } from "@material-ui/core";

import useStyles from "./style";

const RoomName = (props) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} className={classes.root}>
      <Typography
        className={classes.typography}
        style={{ marginLeft: "2%", fontSize: "2rem" }}
      >
        {props ? props.name : ""}
      </Typography>
    </Grid>
  );
};

export default RoomName;
