import React, { useState, useContext} from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Button, CssBaseline, Grid } from "@material-ui/core";
import Image from "material-ui-image";
import { ThemeContext } from "../../../App";
import ExitIcon from "../../../icons/logout.png";
import SettingIcon from "../../../icons/settings.png";
import AddIcon from "../../../icons/add.png";
import ReadyIcon from "../../../icons/check.png";
import PlayIcon from "../../../icons/play-button.png";
import Popup from "reactjs-popup";
import Setting from "./../SettingGame";
import { useHistory } from "react-router-dom";

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: "15%",
    padding: "5px 15px",
  },
}));

const Controller = ({ host,players, numOfPlayers, roomId }) => {
  const classes = useStyles();
  const socket = useContext(ThemeContext);
  const history= useHistory();

  const handleSetting = (wereWolfs, witch, hunter, guard, villagers) => {
    let numOfSetting = 0;
    if (wereWolfs != null && villagers != null) {
      if (witch === true) numOfSetting++;
      else witch = false;
      if (hunter === true) numOfSetting++;
      else hunter = false;
      if (guard === true) numOfSetting++;
      else guard = false;
      numOfSetting += wereWolfs + villagers;
      if (numOfSetting === parseInt(numOfPlayers)) {
        const gameSetting = { wereWolfs, witch, hunter, guard, villagers };
        socket.emit("gameSetting", { gameSetting, roomId });
      } else alert("Setting is not reasonable!");
    } else {
      alert("Please fill in all setting!");
      return false;
    }
  };
  const handleExit =()=>{
    socket.emit('exitRoom',{host,roomId});
    history.push('/play-game');
  }
  const handleReady = ()=>{
    const index = players.findIndex((player)=>player.id===socket.id);
    if(players[index].status!=='ready')
      socket.emit('setReady');
    else{
      socket.emit('setUnReady');
    }
  }

  return (
    <div>
      <CssBaseline />
      <Grid container>
        <Grid container spacing={1} justify="flex-end" alignItems="flex-end">
          <Grid item>
            <Button variant="outlined" className={classes.button} onClick={handleExit}>
              <Image src={ExitIcon} style={{ width: "100%" }} />
            </Button>
          </Grid>
          {host.id === socket.id ? (
            <Grid item>
              <Popup
                modal
                lockScroll={true}
                nested
                trigger={
                  <Button variant="outlined" className={classes.button}>
                    <Image src={SettingIcon} style={{ width: "100%" }} />
                  </Button>
                }
              >
                {(close) => (
                  <Setting
                    close={close}
                    onClick={handleSetting}
                    numOfPlayers={numOfPlayers}
                  />
                )}
              </Popup>
            </Grid>
          ) : (
            ""
          )}
          <Grid item>
            <Button variant="outlined" className={classes.button}>
              <Image src={AddIcon} style={{ width: "100%" }} />
            </Button>
          </Grid>
          {host.id === socket.id ? (
            <Grid item>
              <Button variant="outlined" className={classes.button}>
                <Image src={PlayIcon} style={{ width: "100%" }} />
              </Button>
            </Grid>
          ) : (
            <Grid item>
              <Button variant="outlined" className={classes.button} onClick={handleReady}>
                <Image src={ReadyIcon} style={{ width: "100%" }} />
              </Button>
            </Grid>
          )}
        </Grid>
      </Grid>
    </div>
  );
};
export default Controller;
