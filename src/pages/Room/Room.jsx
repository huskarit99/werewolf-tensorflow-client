import { React, useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { Grid, Paper, Box, Hidden } from "@material-ui/core";

import useStyles from "./style";
import userState from "state/userState";
import roomState from "state/roomState";
import socketState from "state/socketState";
import ChatBox from "./containers/ChatBox/ChatBox";
import PlayerBox from "./containers/PlayerBox/PlayerBox";

const Room = () => {
  const classes = useStyles();
  const user = useRecoilValue(userState);
  const socket = useRecoilValue(socketState);
  const [room, setRoom] = useRecoilState(roomState);

  useEffect(() => {
    socket.on("server:update-room", (res) => {
      setRoom(res);
    });
    socket.on("server:force-get-out-room", () => {
      setRoom(null);
    });
  }, [socket, setRoom]);

  const handleRemove = (roomId, usernameOfPlayer) => {
    socket.emit("react:host-force-leave-room", {
      id: roomId,
      usernameOfPlayer,
    });
  };

  return (
    <Grid container style={{ height: "75vh" }}>
      <Grid item xs={8} style={{ height: "100%" }}>
        <Grid container style={{ height: "100%" }}>
          <Grid item xs={12}>
            <Paper className={classes.paper}>
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
                      <PlayerBox
                        handleClick={handleRemove}
                        key={index}
                        username={user.username}
                        room={room}
                        player={player}
                      />
                    ))}
                </Box>
              </Hidden>
            </Paper>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={4} style={{ height: "100%" }}>
        <ChatBox room={room} username={user.username} />
      </Grid>
    </Grid>
  );
};

export default Room;
