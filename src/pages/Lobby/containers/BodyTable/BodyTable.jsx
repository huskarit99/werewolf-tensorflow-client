import React from "react";
import {
  Grid,
  Paper,
  Typography,
  Button,
  List,
  ListItem,
} from "@material-ui/core";

import useStyles from "./style";

const BodyTable = (props) => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <List>
        {props.listRoom &&
          props.listRoom.length >= 1 &&
          props.listRoom.map((room, index) => (
            <ListItem key={index} className={classes.listItem}>
              <Grid container justify="center" alignItems="center">
                <Grid item xs={3}>
                  <Typography className={classes.typography}>
                    {room.id}
                  </Typography>
                </Grid>
                <Grid item xs={5}>
                  <Typography className={classes.typography}>
                    {room.name}
                  </Typography>
                </Grid>
                <Grid item xs={1}>
                  {room.numberOfPlayersInRoom <= 2 ? (
                    <Typography style={{ color: "white" }}>
                      {room.numberOfPlayersInRoom}/{"5"}
                    </Typography>
                  ) : room.numberOfPlayersInRoom === 5 ? (
                    <Typography style={{ color: "red" }}>
                      {room.numberOfPlayersInRoom}/{"5"}
                    </Typography>
                  ) : (
                    <Typography style={{ color: "yellow" }}>
                      {room.numberOfPlayersInRoom}/{"5"}
                    </Typography>
                  )}
                </Grid>
                <Grid item xs={2}>
                  <Typography className={classes.typography}>
                    {room.usernameOfHost}
                  </Typography>
                </Grid>
                <Grid item xs={1} style={{ textAlign: "center" }}>
                  {room.isPlaying == 0 && (
                    <Button
                      className={classes.button}
                      onClick={() => {
                        props.handleJoin(room.id);
                      }}
                    >
                      JOIN
                    </Button>
                  )}
                </Grid>
              </Grid>
            </ListItem>
          ))}
      </List>
    </Paper>
  );
};

export default BodyTable;
