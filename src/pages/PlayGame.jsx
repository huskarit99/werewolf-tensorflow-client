import React, { Fragment, useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Grid from "@material-ui/core/Grid";

import Popup from "reactjs-popup";
import "reactjs-popup/dist/index.css";

import RoomSearchHeader from "../components/PlayGame/RoomSearchHeader";
import GameRoomListView from "../components/PlayGame/RoomListView";
import RoomCreateModal from "../components/PlayGame/RoomCreateModal";
import RoomJoinModal from "../components/PlayGame/RoomJoinModal";
import OnlineListWrapper from "../components/OnlineListWrapper";
import Popups from "../components/Display/Popups";
import { ThemeContext } from "../App";
import AuthContext from "../context/auth/authContext";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles(() => ({
  card: {
    minHeight: 500,
  },
}));

const PlayGame = () => {
  const { user } = useContext(AuthContext);
  const [name] = useState(user?.username ?? "");
  const history = useHistory();

  const classes = useStyles();

  const socket = useContext(ThemeContext);
  const [roomItems, setRoomItems] = useState([]);

  useEffect(() => {
    // Reload data
    socket.on("reloadRooms", ({ rooms }) => {
      setRoomItems(rooms);
    });

    socket.on("getRooms", ({ rooms }) => {
      console.log("[PlayGame] ..rooms =", rooms);
      setRoomItems(rooms);
    });

    socket.on("joinRoomByCode",({room})=>{
      console.log(room);
      if(room.numOfWaiting<room.numOfPlayers)
      {
        history.push(
          `/room?name=${name}&room=${room.id}&roomName=${room.name}&numOfPlayers=${room.numOfPlayers}`
        );
      }
      else{
        alert("Room is full");
      }
    })

    socket.on("quickRoom", ({ room }) => {
      console.log("[PlayGame] ..quickRoom =", room);
      if (room.host && room.player2) {
        history.push(
          `/room?name=${name}&room=${room.id}&roomName=${room.name}&numOfPlayers=${room.numOfPlayers}`
        );
      }
    });
    
    // eslint-disable-next-line
  }, [socket]);

  const goToRoom = (name, room, roomName, numOfPlayers) => {
    if ((roomName != null && numOfPlayers != null)) {
      history.push(
        `/room?name=${name}&room=${room}&roomName=${roomName}&numOfPlayers=${numOfPlayers}`
      );
    } else
    { 
      alert("Please fill in all fields")
      return false;
    }
  };
  const joinRoomByCode = (roomId)=>{
    socket.emit("requestJoinRoomByCode",(roomId));
  }

  const goToQuickGame = () => {
    socket.emit("requestQuickGame");
  };

  return (
    <Fragment>
      <OnlineListWrapper>
        <h1>Play Game</h1>
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
          style={{ marginTop: "25px" }}
        >
          <Grid item xs={5} container>
            <RoomSearchHeader />
          </Grid>

          <Grid item xs={7} sm container alignItems="center" justify="center">
            <Button
              variant="contained"
              color="secondary"
              onClick={goToQuickGame}
            >
              QUICK GAME
            </Button>
            <Popup
              modal
              lockScroll={true}
              nested
              trigger={
                <Button
                  variant="contained"
                  color="secondary"
                  style={{ marginLeft: "12px" }}
                >
                  Join with CODE
                </Button>
              }
            >
              {(close) =>
                name && name !== "" ? (
                  <RoomJoinModal close={close} onClick={joinRoomByCode} />
                ) : (
                  Popups.Information("Please login!", (close = { close }))
                )
              }
            </Popup>
            <Popup
              modal
              lockScroll={true}
              nested
              trigger={
                <Button
                  variant="contained"
                  color="primary"
                  style={{ marginLeft: "12px" }}
                >
                  Create room
                </Button>
              }
            >
              {(close) =>
                name && name !== "" ? (
                  <RoomCreateModal close={close} onClick={goToRoom} />
                ) : (
                  Popups.Information("Please login!", (close = { close }))
                )
              }
            </Popup>
          </Grid>
        </Grid>
        {roomItems && roomItems.length !== 0 ? (
          <Card className={classes.card} style={{ marginTop: "15px" }}>
            <CardContent style={{ padding: "18px" }}>
              <GameRoomListView rooms={roomItems} />
            </CardContent>
          </Card>
        ) : (
          <h5 style={{ marginTop: "50px" }}>There are no result.</h5>
        )}
      </OnlineListWrapper>
    </Fragment>
  );
};

export default PlayGame;
