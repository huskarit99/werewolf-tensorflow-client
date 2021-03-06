import React, { useEffect } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import { List, Avatar, ListItem, Typography, Grid } from "@material-ui/core";

import useStyles from "./style";
import userState from "../../../state/userState";
import socketState from "../../../state/socketState";
import listOnlinePlayersState from "../../../state/listOnlinePlayersState";

const colorAvatar = [
  "red",
  "green",
  "blue",
  "orange",
  "yellow",
  "gray",
  "black",
];

const OnlineList = () => {
  const classes = useStyles();
  const user = useRecoilValue(userState);
  const socket = useRecoilValue(socketState);
  const [listOnlinePlayers, setListOnlinePlayers] = useRecoilState(
    listOnlinePlayersState
  );

  useEffect(() => {
    socket.emit("react:list-online-players");
  }, []);

  useEffect(() => {
    socket.on("server:list-online-players", (res) => {
      setListOnlinePlayers(res);
    });
  }, [socket, setListOnlinePlayers]);

  return (
    <React.Fragment>
      <List>
        <ListItem className={classes.listItem} style={{ minHeight: "8vh" }}>
          <Typography display="block" variant="caption">
            People
          </Typography>
        </ListItem>
      </List>
      <List className={classes.list}>
        {listOnlinePlayers &&
          listOnlinePlayers.length > 0 &&
          listOnlinePlayers.map(
            (User, index) =>
              User.username !== user.username && (
                <ListItem className={classes.listItem} key={index}>
                  <Grid
                    container
                    justify="center"
                    alignItems="center"
                    style={{ minHeight: "8vh" }}
                  >
                    <Grid item xs={3}>
                      <Avatar
                        className={classes.avatar}
                        variant="rounded"
                        sizes="5px"
                        style={{
                          backgroundColor:
                            colorAvatar[Math.floor(Math.random() * 7)],
                          color: "white",
                          textTransform: "uppercase",
                        }}
                      >
                        {User.username[0]}
                      </Avatar>
                    </Grid>
                    <Grid item xs={9}>
                      <Grid container direction="column" justify="center">
                        <Grid item xs={12}>
                          <Typography className={classes.fullname}>
                            {User.fullname}
                          </Typography>
                        </Grid>
                        <Grid item xs={12}>
                          <Typography
                            variant="caption"
                            className={classes.username}
                          >
                            @{User.username}
                          </Typography>
                        </Grid>
                      </Grid>
                    </Grid>
                  </Grid>
                </ListItem>
              )
          )}
      </List>
    </React.Fragment>
  );
};

export default OnlineList;
