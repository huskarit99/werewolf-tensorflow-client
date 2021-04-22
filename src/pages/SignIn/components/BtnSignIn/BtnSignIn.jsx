import React from "react";
import { Button, Grid } from "@material-ui/core/";

import useStyles from "./style";

const BtnSignIn = (props) => {
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleClick();
  };

  return (
    <Grid item xs={12}>
      <Button
        fullWidth
        type="submit"
        variant="contained"
        onClick={handleSubmit}
        className={classes.submit}
      >
        Sign In
      </Button>
    </Grid>
  );
};

export default BtnSignIn;
