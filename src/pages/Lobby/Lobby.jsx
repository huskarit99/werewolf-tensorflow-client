import React, { useEffect } from "react";
import { useHistory } from "react-router-dom";
import { Grid, Hidden } from "@material-ui/core";
import { useRecoilValue, useRecoilState, useSetRecoilState } from "recoil";

import useStyles from "./style";
import userState from "state/userState";
import roomState from "state/roomState";
import socketState from "state/socketState";
import listRoomState from "state/listRoomState";
import BodyTable from "./containers/BodyTable/BodyTable";
import HeaderTable from "./containers/HeaderTable/HeaderTable";
import SearchAndCreateRoom from "./containers/SearchAndCreateRoom/SearchAndCreateRoom";

const Lobby = () => {
  let history = useHistory();
  const classes = useStyles();
  const user = useRecoilValue(userState);
  const socket = useRecoilValue(socketState);
  const setRoom = useSetRecoilState(roomState);
  const [listRoom, setListRoom] = useRecoilState(listRoomState);

  useEffect(() => {
    socket.emit("react:list-room", (res) => {
      setListRoom(res);
    });
  }, []);
  useEffect(() => {
    socket.on("server:list-room", (res) => {
      setListRoom(res);
    });
    socket.on("get-in-room", (res) => {
      setRoom(res);
      history.push("/room");
    });
  }, [socket]);

  const handleClickJoinRoom = (id) => {
    socket.emit("react:join-room", {
      id: id,
      usernameOfPlayer: user.username,
      fullnameOfPlayer: user.fullname,
    });
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
