import React, { useEffect } from "react";
import { useRecoilValue, useRecoilState } from "recoil";
import { useHistory } from "react-router-dom";
import { Grid, Hidden } from "@material-ui/core";

import useStyles from "./style";
import socketState from "state/socketState";
import listRoomState from "state/listRoomState";
import BodyTable from "./containers/BodyTable/BodyTable";
import HeaderTable from "./containers/HeaderTable/HeaderTable";
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
      <Grid item xs={12} className={classes.root}>
        <Hidden smDown>
          <HeaderTable />
          <BodyTable listRoom={listRoom} handleJoin={handleClickJoinRoom} />
          <SearchAndCreateRoom />
        </Hidden>
      </Grid>
    </Grid>
  );
};

export default Lobby;
