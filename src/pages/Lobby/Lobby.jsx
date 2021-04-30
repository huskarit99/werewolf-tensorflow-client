import React from "react";
import { Group } from "@material-ui/icons";
import { useHistory } from "react-router-dom";
import {
  Grid,
  Paper,
  Typography,
  Avatar,
  Button,
  Hidden,
  List,
  ListItem,
  Divider,
} from "@material-ui/core";

import useStyles from "./style";
import wolfIcon from "assets/images/wolfIcon.png";
import mageIcon from "assets/images/mageIcon.png";
import hunterIcon from "assets/images/hunterIcon.png";
import shieldIcon from "assets/images/shieldIcon.png";
import SearchAndCreateRoom from "./containers/SearchAndCreateRoom/SearchAndCreateRoom";

const avaRoom = {
  0: wolfIcon,
  1: mageIcon,
  2: hunterIcon,
  3: shieldIcon,
};

const Lobby = () => {
  let history = useHistory();
  const classes = useStyles();

  const listRoom = [];
  for (let i = 0; i < 15; i++)
    listRoom.push({
      nameRoom: "SBTC",
      codeRoom: "hfhsdfsdfldfkfjsdfsdfksfd",
      playersInRoom: Math.floor(Math.random() * 10),
      maxPlayerInRoom: 10,
      usernameOfHost: "thaihoc",
      icon: (
        <Avatar
          variant="square"
          className={classes.avatar}
          style={{
            textAlign: "center",
            alignItems: "center",
            justifyContent: "center",
          }}
          src={avaRoom[Math.floor(Math.random() * 4)]}
        />
      ),
    });

  const handleClickJoinRoom = () => {
    history.push("/room");
  };

  return (
    <Grid container>
      <Grid item xs={12}></Grid>
      <Grid item xs={12} style={{ minHeight: "81vh", overflow: "hidden" }}>
        <Hidden smDown>
          <Paper
            style={{
              width: "96%",
              maxHeight: "20vh",
              backgroundColor: "#2A2D3B",
              borderRadius: "0",
              boxShadow: "none",
            }}
          >
            <List>
              <ListItem>
                <Grid container>
                  <Grid item xs={3}>
                    <Typography style={{ color: "#fff", fontWeight: "bold" }}>
                      ID
                    </Typography>
                  </Grid>
                  <Grid item xs={5}>
                    <Typography style={{ color: "#fff", fontWeight: "bold" }}>
                      Name
                    </Typography>
                  </Grid>
                  <Grid item xs={1}>
                    <Group
                      style={{
                        backgroundColor: "#00000000",
                        color: "#fff",
                        fontWeight: "bold",
                      }}
                    />
                  </Grid>
                  <Grid item xs={2}>
                    <Typography style={{ color: "#fff", fontWeight: "bold" }}>
                      Host
                    </Typography>
                  </Grid>
                  <Grid item xs={1}></Grid>
                </Grid>
              </ListItem>
              <Divider
                style={{
                  display: "flex",
                  alignItems: "center",
                  backgroundColor: "#fff",
                  width: "100%",
                }}
              ></Divider>
            </List>
          </Paper>
          <Paper
            style={{
              overflow: "auto",
              width: "96%",
              height: "60vh",
              maxHeight: "60vh",
              backgroundColor: "#2A2D3B",
              borderRadius: "0",
              boxShadow: "none",
            }}
          >
            <List>
              {listRoom.map((room, index) => (
                <ListItem key={index} className={classes.listItem}>
                  <Grid container justify="center" alignItems="center">
                    <Grid item xs={3}>
                      <Typography style={{ color: "#fff" }}>
                        {room.codeRoom}
                      </Typography>
                    </Grid>
                    <Grid item xs={5}>
                      <Typography style={{ color: "#fff" }}>
                        {room.nameRoom}
                      </Typography>
                    </Grid>
                    <Grid item xs={1}>
                      {room.playersInRoom < room.maxPlayerInRoom - 3 ? (
                        <Typography style={{ color: "#fff" }}>
                          {room.playersInRoom}/{room.maxPlayerInRoom}
                        </Typography>
                      ) : room.playersInRoom >= room.maxPlayerInRoom - 1 ? (
                        <Typography style={{ color: "red" }}>
                          {room.playersInRoom}/{room.maxPlayerInRoom}
                        </Typography>
                      ) : (
                        <Typography style={{ color: "yellow" }}>
                          {room.playersInRoom}/{room.maxPlayerInRoom}
                        </Typography>
                      )}
                    </Grid>
                    <Grid item xs={2}>
                      <Typography style={{ color: "#fff" }}>
                        {room.usernameOfHost}
                      </Typography>
                    </Grid>
                    <Grid item xs={1} style={{ textAlign: "center" }}>
                      <Button
                        style={{
                          color: "#fff",
                          backgroundColor: "#3f51b5",
                        }}
                        onClick={handleClickJoinRoom}
                      >
                        JOIN
                      </Button>
                    </Grid>
                  </Grid>
                </ListItem>
              ))}
            </List>
          </Paper>
          <Paper
            style={{
              marginTop: "10px",
              width: "96%",
              height: "5vh",
              backgroundColor: "#00000000",
              borderRadius: "0",
              boxShadow: "none",
            }}
          >
            <SearchAndCreateRoom />
          </Paper>
        </Hidden>
      </Grid>
    </Grid>
  );
};

export default Lobby;
