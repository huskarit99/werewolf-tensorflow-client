import React from "react";
import { Button } from "@material-ui/core";

import useStyles from "./style";

const BtnSignIn = (props) => {
  const classes = useStyles();

  const handleSubmit = (e) => {
    e.preventDefault();
    props.handleClick();
  };

  return (
    <Button
      fullWidth
      type="submit"
      variant="contained"
      onClick={handleSubmit}
      className={classes.submit}
      style={{
        marginTop: "10%",
      }}
    >
      Sign In
    </Button>
  );
};

export default BtnSignIn;
