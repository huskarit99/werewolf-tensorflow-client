import { React, useEffect, useState } from "react";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";
import { Star } from "@material-ui/icons";
import {
  Grid,
  Paper,
  Box,
  Typography,
  Avatar,
  Hidden,
} from "@material-ui/core";

import useStyles from "./style";
import roomState from "state/roomState";
import socketState from "state/socketState";
import ChatBox from "./containers/ChatBox/ChatBox";

const Room = () => {
  const classes = useStyles();
  const socket = useRecoilValue(socketState);
  const [room, setRoom] = useRecoilState(roomState);

  useEffect(() => {
    socket.on("server:update-room", (res) => {
      setRoom(res);
    });
  }, [socket]);

  return (
    <Grid container>
      <Grid item xs={8}>
        <Grid container>
          <Grid item xs={12}></Grid>
          <Grid item xs={12} style={{ minHeight: "81vh" }}>
            <Paper
              style={{
                overflow: "auto",
                width: "96%",
                maxHeight: "75vh",
                backgroundColor: "#00000000",
                boxShadow: "none",
              }}
            >
              <Box
                display="flex"
                flexWrap="wrap"
                justifyContent="center"
                bgcolor="#00000000"
                css={{ maxWidth: "80vw" }}
                style={{ marginBottom: "10%" }}
              >
                {room &&
                  room.member &&
                  room.member.length >= 1 &&
                  room.member.map((player, index) => (
                    <Hidden xsDown implementation="css">
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
                                  fontSize: "2rem",
                                  backgroundColor: "red",
                                }}
                              >
                                {player.username[0]}
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
                                <Star
                                  style={{
                                    height: "12px",
                                    width: "12px",
                                    backgroundColor: "#00000000",
                                    color: "yellow",
                                  }}
                                />
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
                              {/* <Button
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
                            >
                              REMOVE
                            </Button> */}
                              {/* <Typography
                              style={{
                                color: "white",
                                fontWeight: "bold",
                                fontSize: "18px",
                              }}
                            >
                              You
                            </Typography> */}
                            </Grid>
                          </Grid>
                        </Paper>
                      </Box>
                    </Hidden>
                  ))}
              </Box>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <ChatBox />
      </Grid>
    </Grid>
  );
};

export default Room;
