import { React, useEffect } from "react";
import { useHistory } from "react-router-dom";
import { useRecoilValue, useRecoilState } from "recoil";
import { Grid, Paper, Box, Hidden, Button } from "@material-ui/core";

import useStyles from "./style";
import userState from "../../state/userState";
import roomState from "../../state/roomState";
import socketState from "../../state/socketState";
import ChatBox from "./containers/ChatBox/ChatBox";
import PlayerBox from "./containers/PlayerBox/PlayerBox";
import RuleForRoom from "./containers/RuleForRoom/RuleForRoom";
import PlayingGame from "./containers/PlayingGame/PlayingGame";

const Room = () => {
  let history = useHistory();
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
      history.push("/lobby");
    });
  }, [socket, setRoom]);

  const handleRemove = (roomId, usernameOfPlayer) => {
    socket.emit("react:host-force-leave-room", {
      id: roomId,
      usernameOfPlayer,
    });
  };

  const handleClickPlayGame = () => {
    socket.emit("react:play-game", { id: room.id });
  };

  return (
    <Grid container style={{ overflow: "hidden", height: "75vh" }}>
      <Grid item xs={8} style={{ overflow: "hidden", height: "100%" }}>
        {room && room.isPlaying == 0 ? (
          <Grid container style={{ height: "100%" }}>
            <Grid item xs={12} style={{ height: "100%" }}>
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
                  {user &&
                    room &&
                    room.member &&
                    user.username === room.member[0].username && (
                      <div className={classes.div1}>
                        <Button
                          className={classes.button}
                          onClick={handleClickPlayGame}
                        >
                          Let's play
                        </Button>
                      </div>
                    )}
                  <RuleForRoom room={room} />
                </Hidden>
              </Paper>
            </Grid>
          </Grid>
        ) : (
          <div className={classes.div2}>
            <div style={{ width: "640px", height: "480px" }}>
              <PlayingGame username={user.username} />
            </div>
          </div>
        )}
      </Grid>
      <Grid item xs={4} style={{ overflow: "hidden", height: "100%" }}>
        <ChatBox room={room} username={user.username} />
      </Grid>
    </Grid>
  );
};

export default Room;
