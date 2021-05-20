import React from "react";
import { useRecoilValue } from "recoil";
import { Paper, Grid } from "@material-ui/core";

import useStyles from "./style";
import roomState from "state/roomState";
import RoomId from "./components/RoomId/RoomId";
import RoomName from "./components/RoomName/RoomName";
import ButtonLeaveRoom from "./components/ButtonLeaveRoom/ButtonLeaveRoom";

const RoomTitle = () => {
  const classes = useStyles();
  const room = useRecoilValue(roomState);

  const handleLeaveRoom = () => {};

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
