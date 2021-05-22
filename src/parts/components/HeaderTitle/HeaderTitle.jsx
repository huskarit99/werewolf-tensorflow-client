import React from "react";
import { useRecoilValue } from "recoil";
import { Typography } from "@material-ui/core";

import useStyles from "./style";
import RoomTitle from "./containers/RoomTitle";
import { stateOfAuthentication } from "utils/enumsUtil";
import isAuthenticatedState from "state/isAuthenticatedState";

const HeaderTitle = (props) => {
  const isAuthenticated = useRecoilValue(isAuthenticatedState);

  const classes = useStyles();
  return (
    <div style={{ display: "flex", height: "100%", alignItems: "center" }}>
      {props.path === "/" ? (
        isAuthenticated === stateOfAuthentication.SUCCESS &&
        props.username !== null ? (
          <Typography variant="h4" className={classes.typography}>
            Welcome back, {props.username}
          </Typography>
        ) : (
          <Typography variant="h4" className={classes.typography}>
            Welcome to The WereWolf
          </Typography>
        )
      ) : props.path === "/lobby" ? (
        <Typography variant="h4" className={classes.typography}>
          LOBBY
        </Typography>
      ) : props.path === "/profile" ? (
        <Typography variant="h4" className={classes.typography}>
          PROFILE
        </Typography>
      ) : (
        props.path === "/room" && <RoomTitle />
      )}
    </div>
  );
};

export default HeaderTitle;
