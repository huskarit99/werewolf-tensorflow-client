import { useRecoilValue } from "recoil";
import React, { useRef, useState, Fragment, useEffect } from "react";
import {
  Button,
  Dialog,
  Grid,
  Hidden,
  TextField,
  List,
  ListItem,
  Checkbox,
  Avatar,
} from "@material-ui/core";

import roomState from "../../../../state/roomState";
import socketState from "../../../../state/socketState";
import { colorAlertEnum } from "../../../../utils/enumsUtil";
import { DialogContent, DialogActions, DialogTitle, useStyles } from "./style";

import wolfIcon from "../../../../assets/images/wolfIcon.png";
import witchIcon from "../../../../assets/images/witchIcon.png";
import hunterIcon from "../../../../assets/images/hunterIcon.png";
import shieldIcon from "../../../../assets/images/shieldIcon.png";

const SettingRoomModal = (props) => {
  const socket = useRecoilValue(socketState);
  const room = useRecoilValue(roomState);
  const [messageAlert, setMessageAlert] = useState(<Fragment />);
  const classes = useStyles();
  const wolfRef = useRef();
  const witchRef = useRef();
  const hunterRef = useRef();
  const shieldRef = useRef();

  const handleClose = () => {
    props.setOpen(false);
  };

  const handleSave = () => {
    const wolf =
      wolfRef && wolfRef.current && wolfRef.current.value
        ? parseInt(wolfRef.current.value)
        : parseInt(0);
    const witch =
      witchRef && witchRef.current && witchRef.current.checked ? 1 : 0;
    const hunter =
      hunterRef && hunterRef.current && hunterRef.current.checked ? 1 : 0;
    const shield =
      shieldRef && shieldRef.current && shieldRef.current.checked ? 1 : 0;
    if (wolf + witch + hunter + shield > 5) {
      setMessageAlert(
        <p style={{ color: colorAlertEnum.ERROR }}>
          {"Number of characters must be less than or equal to 5 !!!"}
        </p>
      );
    } else {
      setMessageAlert(
        <p style={{ color: colorAlertEnum.WARNING }}>{"Processing..."}</p>
      );
      socket.emit("react:update-rule", {
        id: room.id,
        wolf: wolf,
        witch: witch,
        hunter: hunter,
        shield: shield,
      });
    }
  };

  useEffect(() => {
    socket.on("server:response-result-update", (res) => {
      if (res.isSuccess) {
        setMessageAlert(<Fragment />);
        props.setOpen(false);
      } else {
        setMessageAlert(
          <p style={{ color: colorAlertEnum.ERROR }}>{"Server Error !!!"}</p>
        );
      }
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
          Setting Room
        </DialogTitle>
        <DialogContent dividers className={classes.bodyDialog}>
          <List>
            <ListItem style={{ width: "300px" }}>
              <div className={classes.div}>
                <Avatar
                  src={wolfIcon}
                  variant="square"
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
              <TextField
                variant="outlined"
                size="small"
                className={classes.textField}
                style={{ marginLeft: "90px" }}
                type="number"
                defaultValue={room ? room.wolf : 0}
                inputRef={wolfRef}
              />
            </ListItem>
            <ListItem style={{ width: "300px" }}>
              <div className={classes.div}>
                <Avatar
                  src={shieldIcon}
                  variant="square"
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
              <Checkbox
                inputRef={shieldRef}
                color="primary"
                style={{ width: "40px", height: "40px", marginLeft: "108px" }}
                inputProps={{ "aria-label": "secondary checkbox" }}
                defaultChecked={room && room.guard ? true : false}
              />
            </ListItem>
            <ListItem style={{ width: "300px" }}>
              <div className={classes.div}>
                <Avatar
                  src={witchIcon}
                  variant="square"
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
              <Checkbox
                defaultChecked={room && room.witch ? true : false}
                inputRef={witchRef}
                color="primary"
                style={{ width: "40px", height: "40px", marginLeft: "108px" }}
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            </ListItem>
            <ListItem style={{ width: "300px" }}>
              <div className={classes.div}>
                <Avatar
                  src={hunterIcon}
                  variant="square"
                  style={{ width: "40px", height: "40px" }}
                />
              </div>
              <Checkbox
                defaultChecked={room && room.hunter ? true : false}
                inputRef={hunterRef}
                color="primary"
                style={{ width: "40px", height: "40px", marginLeft: "108px" }}
                inputProps={{ "aria-label": "secondary checkbox" }}
              />
            </ListItem>
            <ListItem style={{ width: "100%" }}>{messageAlert}</ListItem>
          </List>
        </DialogContent>
        <DialogActions className={classes.footerDialog}>
          <Grid
            container
            alignItems="center"
            justify="center"
            style={{ width: "100%", height: "100%" }}
          >
            <Grid item xs={6} className={classes.itemCancle}>
              <Button onClick={handleClose} className={classes.buttonCancle}>
                CANCLE
              </Button>
            </Grid>
            <Grid item xs={6} className={classes.itemSave}>
              <Button onClick={handleSave} className={classes.buttonSave}>
                SAVE
              </Button>
            </Grid>
          </Grid>
        </DialogActions>
      </Dialog>
    </Hidden>
  );
};

export default SettingRoomModal;
