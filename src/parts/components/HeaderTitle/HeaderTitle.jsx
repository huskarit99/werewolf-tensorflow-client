import React from "react";
import { useRecoilValue } from "recoil";
import { Typography, Paper, Grid } from "@material-ui/core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import useStyles from "./style";
import roomState from "state/roomState";
import { stateOfAuthentication } from "utils/enumsUtil";
import isAuthenticatedState from "state/isAuthenticatedState";

const HeaderTitle = (props) => {
  const isAuthenticated = useRecoilValue(isAuthenticatedState);
  const room = useRecoilValue(roomState);

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
          LOBBY LIST
        </Typography>
      ) : props.path === "/profile" ? (
        <Typography variant="h4" className={classes.typography}>
          PROFILE
        </Typography>
      ) : (
        props.path === "/room" && (
          <div
            style={{
              display: "flex",
              height: "100%",
              width: "100%",
              alignItems: "flex-end",
            }}
          >
            <Paper
              style={{
                height: "100%",
                width: "96%",
                boxShadow: "none",
                backgroundColor: "#00000000",
                borderBottom: "1px solid white",
              }}
            >
              <Grid container style={{ height: "100%" }}>
                <Grid item xs={8} style={{ height: "100%" }}>
                  <Grid item xs={12} style={{ height: "30%" }} />
                  <Grid item xs={12} style={{ height: "20%" }}>
                    <Typography
                      style={{ marginLeft: "2%", fontSize: "1rem" }}
                      className={classes.typography}
                    >
                      {"Room ID: "}
                      {room ? room.id : ""}
                    </Typography>
                  </Grid>
                  <Grid item xs={12} style={{ height: "50%" }}>
                    <Typography
                      className={classes.typography}
                      style={{ marginLeft: "2%", fontSize: "2rem" }}
                    >
                      {room ? room.name : ""}
                    </Typography>
                  </Grid>
                </Grid>
                <Grid
                  item
                  xs={4}
                  style={{
                    height: "100%",
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "flex-end",
                  }}
                >
                  <FontAwesomeIcon
                    icon={faSignOutAlt}
                    style={{
                      borderRadius: "5px",
                      backgroundColor: "#00000000",
                      color: "red",
                      height: "40px",
                      width: "40px",
                    }}
                  />
                </Grid>
              </Grid>
            </Paper>
          </div>
        )
      )}
    </div>
  );
};

export default HeaderTitle;
