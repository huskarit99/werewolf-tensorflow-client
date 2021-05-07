import React from "react";
import { Button } from "@material-ui/core";

import useStyles from "./style";

const ButtonSave = (props) => {
  const classes = useStyles();
  return (
    <Button
      className={classes.button}
      onClick={() => {
        props.handleClick();
      }}
    >
      Save Changes
    </Button>
  );
};

export default ButtonSave;
