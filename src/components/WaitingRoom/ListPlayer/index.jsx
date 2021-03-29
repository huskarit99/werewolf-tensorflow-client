import React, { useState, useContext, useEffect } from "react";
import { makeStyles } from "@material-ui/core/styles";

import {
  Button,
  CssBaseline,
  TextField,
  Grid,
  Typography,
} from "@material-ui/core";
import { ThemeContext } from "../../../App";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import CancelIcon from "@material-ui/icons/Cancel";
import SvgIcon from "@material-ui/core/SvgIcon";
import { yellow } from "@material-ui/core/colors";

const useStyles = makeStyles((theme) => ({
  listPlayer: {},
  cardContent: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
}));

const ListPlayer = ({host,players}) => {
  const classes = useStyles();
  const socket = useContext(ThemeContext);
  const play = players.filter((player)=>player.id !== host.id);
  

  const HomeIcon = (props) => {
    return (
      <SvgIcon {...props}>
        <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z" />
      </SvgIcon>
    );
  };
  return (
    <div>
      <Grid container spacing={1}>
        <Grid item xs={3}>
          <Card variant="outlined" className={classes.listPlayer}>
            <CardContent className={classes.cardContent}>
              <Typography>Chủ phòng</Typography>
              <Typography>{host.name}</Typography>
              <Typography>Rank: {host.rank}</Typography>
              <Button disabled>
                <HomeIcon fontSize="large" style={{ color: yellow[500] }} />
              </Button>
            </CardContent>
          </Card>
        </Grid>
        {players.filter(player=>player.id !== host.id).map((player) => (
          <Grid item xs={3}>
            <Card variant="outlined" className={classes.listPlayer}>
              <CardContent className={classes.cardContent}>
                <Typography>
                  {host.id === player.id ? "Chủ phòng" : "Người chơi"}
                </Typography>
                <Typography>{player.name}</Typography>
                <Typography>Rank: {player.rank}</Typography>
                {(host.id === socket.id) ? (
                  <Button>
                    <CancelIcon fontSize="large" color="secondary"></CancelIcon>
                  </Button>
                ) : (
                  ""
                )}
              </CardContent>
            </Card>
          </Grid>
        ))}
      </Grid>
    </div>
  );
};
export default ListPlayer;
