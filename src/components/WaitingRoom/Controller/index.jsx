import React, { useState, useContext } from "react";
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

const useStyles = makeStyles((theme) => ({
  button: {
    borderRadius: "15%",
    padding: "5px 15px",
  },
}));
const handleSetting= ()=>{

}
const Controller = ({ host, numOfPlayers }) => {
  const classes = useStyles();
  const socket = useContext(ThemeContext);

  return (
      
    <div>
      <CssBaseline />
      <Grid container>
        <Grid container spacing={1} justify="flex-end" alignItems="flex-end">
          <Grid item>
            <Button variant="outlined" className={classes.button}>
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
              <Button variant="outlined" className={classes.button} onClick={handleSetting}>
                <Image src={SettingIcon} style={{ width: "100%" }} />
              </Button>
              }
              >
                  {(close) =>
                  {<Setting close={close} onClick={handleSetting} numOfPlayers={numOfPlayers}/>}
              }
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
              <Button variant="outlined" className={classes.button}>
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
