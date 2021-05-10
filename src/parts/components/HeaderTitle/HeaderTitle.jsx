import React from "react";
import { useRecoilValue } from "recoil";
import { Typography } from "@material-ui/core";

import useStyles from "./style";
import { stateOfAuthentication } from "utils/enumsUtil";
import isAuthenticatedState from "state/isAuthenticatedState";

const HeaderTitle = (props) => {
  const isAuthenticated = useRecoilValue(isAuthenticatedState);

  const classes = useStyles();
  return (
    <React.Fragment>
      {props.path === "/" ? (
        isAuthenticated === stateOfAuthentication.SUCCESS &&
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
