import React, { forwardRef } from "react";
import { Grid, InputBase } from "@material-ui/core";

import useStyles from "./style";

const Password = forwardRef((props, passwordRef) => {
  const classes = useStyles();
  const Password = () => {
    return (
      <Grid container className={classes.container}>
        <Grid item xs={3} className={classes.item}>
          <p className={classes.p}>Password</p>
        </Grid>
        <Grid item xs={9} className={classes.item}>
          <InputBase
            className={classes.input}
            type="password"
            inputRef={passwordRef}
            placeholder="******"
          />
        </Grid>
      </Grid>
    );
  };
  return <Password />;
});

export default Password;
