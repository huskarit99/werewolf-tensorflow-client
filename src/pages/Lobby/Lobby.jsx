import React, { useEffect } from "react";
import { Group } from "@material-ui/icons";
import { useRecoilValue, useRecoilState } from "recoil";
import { useHistory } from "react-router-dom";
import {
  Grid,
  Paper,
  Typography,
  Button,
  Hidden,
  List,
  ListItem,
  Divider,
} from "@material-ui/core";

import useStyles from "./style";
import socketState from "state/socketState";
import listRoomState from "state/listRoomState";
import SearchAndCreateRoom from "./containers/SearchAndCreateRoom/SearchAndCreateRoom";

const Lobby = () => {
  let history = useHistory();
  const [listRoom, setListRoom] = useRecoilState(listRoomState);
  const classes = useStyles();
  const socket = useRecoilValue(socketState);

  useEffect(() => {
    socket.emit("react:list-room", (res) => {
      setListRoom(res);
    });
  }, []);
  useEffect(() => {
    socket.on("server:list-room", (res) => {
      setListRoom(res);
    });
  }, [socket, setListRoom]);

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
              {listRoom &&
                listRoom.length >= 1 &&
                listRoom.map((room, index) => (
                  <ListItem key={index} className={classes.listItem}>
                    <Grid container justify="center" alignItems="center">
                      <Grid item xs={3}>
                        <Typography style={{ color: "#fff" }}>
                          {room.id}
                        </Typography>
                      </Grid>
                      <Grid item xs={5}>
                        <Typography style={{ color: "#fff" }}>
                          {room.name}
                        </Typography>
                      </Grid>
                      <Grid item xs={1}>
                        {room.numberOfPlayersInRoom <= 2 ? (
                          <Typography style={{ color: "white" }}>
                            {room.numberOfPlayersInRoom}/{"5"}
                          </Typography>
                        ) : room.numberOfPlayersInRoom === 5 ? (
                          <Typography style={{ color: "red" }}>
                            {room.numberOfPlayersInRoom}/{"5"}
                          </Typography>
                        ) : (
                          <Typography style={{ color: "yellow" }}>
                            {room.numberOfPlayersInRoom}/{"5"}
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
