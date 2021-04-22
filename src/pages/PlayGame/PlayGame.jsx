import React, { useState, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import Grid from "@material-ui/core/Grid";
import Snackbar from "@material-ui/core/Snackbar";

import ChatBot from "./containers/ChatBot/ChatBot";
import { useHistory } from "react-router-dom";

import { useRecoilValue } from "recoil";
import socketState from "state/socketState";

const useStyles = makeStyles(() => ({
  card: {
    minHeight: 500,
  },
}));

const PlayGame = () => {
  const socket = useRecoilValue(socketState);
  const [name] = useState("ThaiHoc");
  const history = useHistory();

  const [roomItems, setRoomItems] = useState([]);
  const [message, setMessage] = useState({ open: false, text: "" });

  useEffect(() => {
    // Reload data
    socket.emit("reloadRooms", ({ rooms }) => {
      setRoomItems(rooms);
    });

    socket.on("getRooms", ({ rooms }) => {
      setRoomItems(rooms);
    });

    socket.on("joinRoomByCode", ({ room }) => {
      if (room != null) {
        if (room.numOfWaiting < room.numOfPlayers) {
          history.push(
            `/room?name=${name}&room=${room.id}&roomName=${room.name}&numOfPlayers=${room.numOfPlayers}`
          );
        } else {
          showMessage("Room is full");
        }
      } else {
        showMessage("Room is not exist");
        return;
      }
    });

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
    if (roomName != null && numOfPlayers != null) {
      history.push(
        `/room?name=${name}&room=${room}&roomName=${roomName}&numOfPlayers=${numOfPlayers}`
      );
    } else {
      showMessage("Please fill in all fields");
      return false;
    }
  };
  const joinRoomByCode = (roomId) => {
    socket.emit("requestJoinRoomByCode", roomId);
  };

  const goToQuickGame = () => {
    socket.emit("requestQuickGame");
  };

  const showMessage = (msg) => {
    setMessage({ open: true, text: msg });

    setTimeout(() => {
      handleClose();
    }, 4000);
  };

  const handleClose = () => {
    setMessage({ open: false, text: "" });
  };
  return (
    <Grid container component="main">
      <Grid item xs={8}>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ minHeight: "100vh" }}
        >
          {/* <h1>Play Game</h1> */}
          <Grid
            container
            direction="row"
            justify="center"
            alignItems="center"
            style={{ marginTop: "25px" }}
          >
            <Grid item xs={5} container>
              {/* <RoomSearchHeader /> */}
            </Grid>

            <Grid item xs={7} sm container alignItems="center" justify="center">
              {/* <Button
                variant="contained"
                color="secondary"
                onClick={goToQuickGame}
              >
                QUICK GAME
              </Button> */}
              {/* <Popup
                modal
                lockScroll={true}
                nested
                // trigger={
                // <Button
                //   variant="contained"
                //   color="secondary"
                //   style={{ marginLeft: "12px" }}
                // >
                //   Join with CODE
                // </Button>
                // }
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
                // trigger={
                // <Button
                //   variant="contained"
                //   color="primary"
                //   style={{ marginLeft: "12px" }}
                // >
                //   Create room
                // </Button>
                // }
              >
                {(close) =>
                  name && name !== "" ? (
                    <RoomCreateModal close={close} onClick={goToRoom} />
                  ) : (
                    Popups.Information("Please login!", (close = { close }))
                  )
                }
              </Popup> */}
            </Grid>
          </Grid>
          <Snackbar
            anchorOrigin={{ vertical: "top", horizontal: "center" }}
            open={message.open}
            onClose={handleClose}
            message={message.text}
            key="toast"
          />
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <ChatBot />
      </Grid>
    </Grid>
  );
};

export default PlayGame;
