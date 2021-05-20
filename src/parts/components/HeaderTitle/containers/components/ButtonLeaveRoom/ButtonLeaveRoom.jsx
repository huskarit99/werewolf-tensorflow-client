import React from "react";
import { Grid, Button } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import useStyles from "./style";

const ButtonLeaveRoom = (props) => {
  const classes = useStyles();

  return (
    <Grid item xs={4} className={classes.root}>
      <Button style={{ minHeight: "0" }}>
        <FontAwesomeIcon
          className={classes.icon}
          style={{ width: "40px", height: "40px" }}
          icon={faSignOutAlt}
          onClick={() => props.handleClick()}
        />
      </Button>
    </Grid>
  );
};

export default ButtonLeaveRoom;
