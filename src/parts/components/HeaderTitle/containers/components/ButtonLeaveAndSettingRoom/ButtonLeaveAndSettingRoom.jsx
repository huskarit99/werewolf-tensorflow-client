import React, { useState } from "react";
import { useRecoilValue } from "recoil";
import { Grid, Button } from "@material-ui/core";
import SettingsIcon from "@material-ui/icons/Settings";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSignOutAlt } from "@fortawesome/free-solid-svg-icons";

import useStyles from "./style";
import userState from "../../../../../../state/userState";
import roomState from "../../../../../../state/roomState";
import SettingRoomModal from "../../../../../../parts/components/modals/SettingRoomModal/SettingRoomModal";

const ButtonLeaveAndSettingRoom = (props) => {
  const classes = useStyles();
  const user = useRecoilValue(userState);
  const room = useRecoilValue(roomState);
  const [open, setOpen] = useState();

  const handleClickSettingRoom = () => {
    setOpen(!open);
  };

  return (
    <Grid item xs={2} className={classes.root}>
      {user &&
        room &&
        room.member &&
        user.username === room.member[0].username &&
        room.isPlaying == 0 && (
          <Button className={classes.button} style={{ marginRight: "20px" }}>
            <SettingsIcon
              className={classes.icon}
              onClick={handleClickSettingRoom}
            />
          </Button>
        )}
      <Button className={classes.button}>
        <FontAwesomeIcon
          className={classes.icon}
          style={{ width: "25px", height: "23px" }}
          icon={faSignOutAlt}
          onClick={() => props.handleClickLeaveRoom()}
        />
      </Button>
      <SettingRoomModal open={open} setOpen={setOpen} />
    </Grid>
  );
};

export default ButtonLeaveAndSettingRoom;
