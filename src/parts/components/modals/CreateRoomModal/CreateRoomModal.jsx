import { v4 as uuidv4 } from "uuid";
// import { createBrowserHistory } from "history";
import { useHistory } from "react-router-dom";
import { useSetRecoilState, useRecoilValue } from "recoil";
import React, { useRef, useState, Fragment, useEffect } from "react";
import {
  Button,
  Dialog,
  Grid,
  Hidden,
  Typography,
  TextField,
  List,
  ListItem,
} from "@material-ui/core";

import roomState from "state/roomState";
import socketState from "state/socketState";
import { colorAlertEnum } from "utils/enumsUtil";
import { DialogContent, DialogActions, DialogTitle, useStyles } from "./style";
import { getUser } from "services/api/privateApi";

const CreateRoomModal = (props) => {
  // const history = createBrowserHistory({ forceRefresh: true });
  const history = useHistory();
  const socket = useRecoilValue(socketState);
  const setRoom = useSetRecoilState(roomState);
  const [messageAlert, setMessageAlert] = useState(<Fragment />);
  const classes = useStyles();
  const nameRef = useRef();
  const idRef = useRef();

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleCreate = () => {
    setMessageAlert(
      <p style={{ color: colorAlertEnum.WARNING }}>Processing....</p>
    );
    if (!idRef || !idRef.current || idRef.current.value === "") {
      setMessageAlert(
        <p style={{ color: colorAlertEnum.ERROR }}>
          {"Id must be not empty !!!"}
        </p>
      );
    } else if (!nameRef || !nameRef.current || nameRef.current.value === "") {
      setMessageAlert(
        <p style={{ color: colorAlertEnum.ERROR }}>
          {"Name must be not empty !!!"}
        </p>
      );
    } else {
      getUser().then((res) => {
        setRoom({
          id: idRef.current.value,
          name: nameRef.current.value,
          fullnameOfHost: res.user.fullname,
          usernameOfHost: res.user.username,
        });
        socket.emit("react:create-room", {
          id: idRef.current.value,
          name: nameRef.current.value,
          fullnameOfHost: res.user.fullname,
          usernameOfHost: res.user.username,
        });
      });
    }
  };

  useEffect(() => {
    socket.on("server:get-in-room", (room) => {
      setRoom(room);
      setMessageAlert(<Fragment />);
      props.setOpen(false);
      history.push("/room");
    });
  }, [socket]);

  return (
    <Hidden xsDown>
      <Dialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={props.open}
      >
        <DialogTitle
          id="customized-dialog-title"
          onClose={handleClose}
          className={classes.title}
        >
          {"Create Room"}
        </DialogTitle>
        <DialogContent dividers className={classes.bodyDialog}>
          <List>
            <ListItem>
              <div className={classes.div}>
                <Typography className={classes.typography}>ID</Typography>
              </div>
              <TextField
                variant="outlined"
                size="small"
                className={classes.textField}
                defaultValue={uuidv4()}
                inputRef={idRef}
                disabled
              />
            </ListItem>
            <ListItem>
              <div className={classes.div}>
                <Typography className={classes.typography}>Name</Typography>
              </div>
              <TextField
                variant="outlined"
                size="small"
                className={classes.textField}
                inputRef={nameRef}
              />
            </ListItem>
          </List>
        </DialogContent>
        <DialogActions className={classes.footerDialog}>
          <Grid container alignItems="center">
            <Grid item xs={10}>
              {messageAlert}
            </Grid>
            <Grid
              item
              xs={2}
              style={{ display: "flex", justifyContent: "flex-end" }}
            >
              <Button
                autoFocus
                onClick={handleCreate}
                className={classes.button}
              >
                CREATE
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </Hidden>
  );
};

export default CreateRoomModal;
