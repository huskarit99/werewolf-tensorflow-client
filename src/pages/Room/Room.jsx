import { React, useEffect, useState } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { Star } from "@material-ui/icons";
import {
  Grid,
  Paper,
  Box,
  Typography,
  Avatar,
  Hidden,
  Button,
} from "@material-ui/core";

import useStyles from "./style";
import roomState from "state/roomState";
import socketState from "state/socketState";
import { getUser } from "services/api/privateApi";
import ChatBox from "./containers/ChatBox/ChatBox";

const Room = () => {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const socket = useRecoilValue(socketState);
  const [room, setRoom] = useRecoilState(roomState);

  useEffect(() => {
    getUser().then((res) => {
      setUsername(res.user.username);
    });
  }, []);

  useEffect(() => {
    socket.on("server:update-room", (res) => {
      setRoom(res);
    });
    socket.on("server:force-get-out-room", () => {
      setRoom(null);
    });
  }, [socket]);

  const handleRemove = (roomId, usernameOfPlayer) => {
    socket.emit("react:host-force-leave-room", {
      id: roomId,
      usernameOfPlayer,
    });
  };

  return (
    <Grid container style={{ height: "72vh" }}>
      <Grid item xs={8} style={{ height: "100%" }}>
        <Grid container style={{ height: "100%" }}>
          <Grid item xs={12}>
            <Paper
              style={{
                overflow: "auto",
                width: "96%",
                height: "100%",
                backgroundColor: "#2A2D3B",
                boxShadow: "none",
              }}
            >
              <Hidden xsDown implementation="css">
                <Box
                  display="flex"
                  flexWrap="wrap"
                  justifyContent="center"
                  bgcolor="#00000000"
                  css={{ maxWidth: "80vw" }}
                  style={{ marginTop: "5%" }}
                >
                  {room &&
                    room.member &&
                    room.member.length >= 1 &&
                    room.member.map((player, index) => (
                      <Box
                        key={index}
                        display="flex"
                        bgcolor="#00000000"
                        justifyContent="center"
                        alignItems="center"
                        style={{
                          width: "200px",
                          height: "200px",
                        }}
                      >
                        <Paper className={classes.paper}>
                          <Grid
                            container
                            justify="center"
                            alignItems="center"
                            style={{ height: "100%", width: "100%" }}
                          >
                            <Grid
                              item
                              xs={12}
                              style={{
                                height: "50%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              <Avatar
                                style={{
                                  width: "35%",
                                  height: "65%",
                                  fontSize: "1.5rem",
                                  backgroundColor: player.isOnline
                                    ? "green"
                                    : "red",
                                  textTransform: "uppercase",
                                }}
                              >
                                {player.username[0] + player.username[1]}
                              </Avatar>
                            </Grid>
                            <Grid
                              item
                              xs={12}
                              style={{
                                height: "10%",
                                textAlign: "center",
                              }}
                            >
                              <Typography
                                style={{
                                  color: "white",
                                  fontWeight: "bold",
                                  fontSize: "12px",
                                }}
                              >
                                {player.username}{" "}
                                {player.username ===
                                  room.member[0].username && (
                                  <Star
                                    style={{
                                      height: "12px",
                                      width: "12px",
                                      backgroundColor: "#00000000",
                                      color: "yellow",
                                    }}
                                  />
                                )}
                              </Typography>
                            </Grid>
                            <Grid
                              item
                              xs={12}
                              style={{
                                height: "10%",
                                textAlign: "center",
                              }}
                            >
                              <Typography
                                style={{ color: "white", fontSize: "14px" }}
                              >
                                {player.fullname}
                              </Typography>
                            </Grid>
                            <Grid
                              item
                              xs={12}
                              style={{
                                height: "30%",
                                display: "flex",
                                alignItems: "center",
                                justifyContent: "center",
                              }}
                            >
                              {username === room.member[0].username &&
                                player.username !== username && (
                                  <Button
                                    variant="contained"
                                    style={{
                                      backgroundColor: "rgba(255,255,255,0.3)",
                                      boxShadow: "none",
                                      color: "white",
                                      borderRadius: "20px",
                                      height: "50%",
                                      width: "60%",
                                      fontWeight: "bold",
                                      fontSize: "12px",
                                    }}
                                    onClick={() =>
                                      handleRemove(room.id, player.username)
                                    }
                                  >
                                    REMOVE
                                  </Button>
                                )}
                              {player.username === username && (
                                <Typography
                                  style={{
                                    color: "white",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                  }}
                                >
                                  You
                                </Typography>
                              )}
                            </Grid>
                          </Grid>
                        </Paper>
                      </Box>
                    ))}
                </Box>
              </Hidden>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4} style={{ height: "100%" }}>
        <ChatBox />
      </Grid>
    </Grid>
  );
};

export default Room;
