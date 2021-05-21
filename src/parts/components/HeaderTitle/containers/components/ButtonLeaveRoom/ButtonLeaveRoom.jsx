import React from "react";
import { Grid, Button } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import useStyles from "./style";

const ButtonLeaveRoom = (props) => {
  const classes = useStyles();

  return (
    <Grid item xs={2} className={classes.root}>
      <Button className={classes.button} style={{ marginRight: "20px" }}>
        <SettingsIcon className={classes.icon} style={{ color: "blue" }} />
      </Button>
      <Button className={classes.button} style={{ color: "red" }}>
        <FontAwesomeIcon
          className={classes.icon}
          style={{ width: "35px", height: "35px" }}
          icon={faSignOutAlt}
          onClick={() => props.handleClick()}
        />
      </Button>
    </Grid>
  );
};

export default ButtonLeaveRoom;
