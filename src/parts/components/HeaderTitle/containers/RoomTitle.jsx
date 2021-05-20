import React, { useEffect } from "react";
import { Paper, Grid } from "@material-ui/core";
import { useRecoilValue, useRecoilState } from "recoil";

import useStyles from "./style";
import roomState from "state/roomState";
import { getToken } from "utils/tokenUtil";
import socketState from "state/socketState";
import RoomId from "./components/RoomId/RoomId";
import RoomName from "./components/RoomName/RoomName";
import ButtonLeaveRoom from "./components/ButtonLeaveRoom/ButtonLeaveRoom";

const RoomTitle = () => {
  const classes = useStyles();
  const socket = useRecoilValue(socketState);
  const [room, setRoom] = useRecoilState(roomState);

  const handleLeaveRoom = () => {
    const token = getToken() !== null ? getToken().token : null;
    socket.emit("react:leave-room", { token: token, id: room.id });
  };

  useEffect(() => {
    socket.on("server:force-get-out-room", () => {
      setRoom(null);
    });
  }, [socket]);

  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <Grid container style={{ height: "100%" }}>
          <Grid item xs={8} style={{ height: "100%" }}>
            <Grid item xs={12} style={{ height: "30%" }} />
            <RoomId id={room ? room.id : ""} />
            <RoomName name={room ? room.name : ""} />
          </Grid>
          <ButtonLeaveRoom handleClick={handleLeaveRoom} />
        </Grid>
      </Paper>
    </div>
  );
};

export default RoomTitle;
