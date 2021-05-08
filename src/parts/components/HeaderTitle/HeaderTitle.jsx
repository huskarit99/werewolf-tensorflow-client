import React from "react";
import { Typography } from "@material-ui/core";

import useStyles from "./style";

const HeaderTitle = (props) => {
  const classes = useStyles();
  return (
    <React.Fragment>
      {props.path === "/" ? (
        props.username !== null ? (
          <Typography variant="h3" className={classes.typography}>
            Welcome back, {props.username}
          </Typography>
        ) : (
          <Typography variant="h3" className={classes.typography}>
            Welcome to The WereWolf
          </Typography>
        )
      ) : props.path === "/lobby" ? (
        <Typography variant="h3" className={classes.typography}>
          LOBBY LIST
        </Typography>
      ) : (
        props.path === "/profile" && (
          <Typography variant="h3" className={classes.typography}>
            PROFILE
          </Typography>
        )
      )}
    </React.Fragment>
  );
};

export default HeaderTitle;
