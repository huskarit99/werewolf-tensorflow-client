import React, { forwardRef } from "react";
import { Grid, InputBase } from "@material-ui/core";

import useStyles from "./style";

const Username = forwardRef((props, usernameRef) => {
  const classes = useStyles();
  const Username = () => {
    return (
      <Grid container className={classes.container}>
        <Grid item xs={3} className={classes.item}>
          <p className={classes.p}>Username</p>
        </Grid>
        <Grid item xs={7} className={classes.item}>
          <InputBase
            inputRef={usernameRef}
            className={classes.input}
            disabled
          />
        </Grid>
        <Grid item xs={2} className={classes.item}></Grid>
      </Grid>
    );
  };
  return <Username />;
});

export default Username;
