import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import React, { useEffect, useState } from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import { Avatar, Grid, Typography, Hidden } from "@material-ui/core";

import useStyles from "./style";
import userState from "state/userState";
import { getUser } from "services/api/privateApi";

const colorAvatar = [
  "red",
  "green",
  "blue",
  "orange",
  "yellow",
  "gray",
  "black",
];

const SettingAndAvatar = () => {
  const [user, setUser] = useRecoilState(userState);
  const [fullname, setFullname] = useState("");
  const [username, setUsername] = useState("");
  const classes = useStyles();

  useEffect(() => {
    getUser().then((res) => {
      setUser({
        id: res.user._id,
        fullname: res.user.fullname,
        username: res.user.username,
      });
      setFullname(res.user.fullname);
      setUsername(res.user.username);
    });
  }, [setFullname, setUsername, setUser]);

  useEffect(() => {
    setFullname(user.fullname);
    setUsername(user.username);
  }, [user]);

  return (
    <Hidden smDown>
      <Grid container style={{ height: "100%" }}>
        <Grid
          item
          xs={3}
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Link to="/profile">
            <SettingsIcon className={classes.icon} />
          </Link>
        </Grid>
        <Grid
          item
          xs={9}
          style={{
            height: "100%",
            display: "flex",
            alignItems: "center",
          }}
        >
          <Grid container>
            <Grid item xs={8}>
              <Grid container>
                <Grid item xs={12} className={classes.item}>
                  <Typography className={classes.fullname}>
                    {fullname}
                  </Typography>
                </Grid>
                <Grid item xs={12} className={classes.item}>
                  <Typography className={classes.username}>
                    {username}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={3}>
              <Avatar
                style={{
                  backgroundColor: colorAvatar[Math.floor(Math.random() * 7)],
                  color: "white",
                  textTransform: "uppercase",
                }}
              >
                {username[0]}
              </Avatar>
            </Grid>
            <Grid item xs={1} />
          </Grid>
        </Grid>
      </Grid>
    </Hidden>
  );
};

export default SettingAndAvatar;
