import React from "react";
import { Grid, Typography } from "@material-ui/core";

import useStyles from "./style";

const RoomId = (props) => {
  const classes = useStyles();
  return (
    <Grid item xs={12} style={{ height: "20%" }}>
      <Typography className={classes.typography}>
        {"Room ID: "}
        {props ? props.id : ""}
      </Typography>
    </Grid>
  );
};

export default RoomId;
