import { React } from "react";
import { Star } from "@material-ui/icons";
import {
  Grid,
  Paper,
  Box,
  Typography,
  Avatar,
  Button,
} from "@material-ui/core";

import useStyles from "./style";

const PlayerBox = (props) => {
  const room = props.room;
  const player = props.player;
  const username = props.username;
  const classes = useStyles();
  return (
    <Box
      display="flex"
      bgcolor="#00000000"
      justifyContent="center"
      alignItems="center"
      style={{
        width: "200px",
        height: "200px",
      }}
    >
      <Paper className={classes.paper}>
        <Grid
          container
          justify="center"
          alignItems="center"
          style={{ height: "100%", width: "100%" }}
        >
          <Grid
            item
            xs={12}
            style={{
              height: "50%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <Avatar
              style={{
                backgroundColor: player.isOnline ? "green" : "red",
              }}
              className={classes.avatar}
            >
              {player.username[0] + player.username[1]}
            </Avatar>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              height: "10%",
              textAlign: "center",
            }}
          >
            <Typography className={classes.typography}>
              {player.username}{" "}
              {player.username === room.member[0].username && (
                <Star className={classes.star} />
              )}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              height: "10%",
              textAlign: "center",
            }}
          >
            <Typography style={{ color: "white", fontSize: "14px" }}>
              {player.fullname}
            </Typography>
          </Grid>
          <Grid
            item
            xs={12}
            style={{
              height: "30%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            {username === room.member[0].username &&
              player.username !== username && (
                <Button
                  variant="contained"
                  className={classes.button}
                  onClick={() => props.handleClick(room.id, player.username)}
                >
                  REMOVE
                </Button>
              )}
            {player.username === username && (
              <Typography className={classes.typography1}>You</Typography>
            )}
          </Grid>
        </Grid>
      </Paper>
    </Box>
  );
};

export default PlayerBox;
