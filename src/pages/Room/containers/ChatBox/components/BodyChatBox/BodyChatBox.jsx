import ReactEmoji from "react-emoji";
import React from "react";
import {
  Typography,
  Paper,
  List,
  ListItem,
  Grid,
  Avatar,
} from "@material-ui/core";

import "./BodyChatBox.css";
import useStyles from "./style";

const BodyChatBox = (props) => {
  const classes = useStyles();

  const isOnline = {};
  if (props.room && props.room.member) {
    for (let player of props.room.member) {
      isOnline[player.username] = player.isOnline;
    }
  }

  return (
    <Paper className={classes.paperMessageBox}>
      <List style={{ paddingTop: "0px" }}>
        {props &&
          props.room &&
          props.room.messages &&
          props.room.messages.length !== 0 &&
          props.room.messages.map((message, index) => (
            <ListItem key={index}>
              <Grid container>
                {message.username !== "admin" && (
                  <Grid item xs={12}>
                    <Grid
                      container
                      style={{
                        height: "30px",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Grid item xs={2}>
                        <Avatar
                          style={{
                            backgroundColor: isOnline[message.username]
                              ? "green"
                              : "red",
                          }}
                          className={classes.avatar}
                        >
                          {message.username[0]}
                        </Avatar>
                      </Grid>
                      <Grid item xs={10}>
                        <Typography className={classes.typography}>
                          {message.username}
                        </Typography>
                      </Grid>
                    </Grid>
                  </Grid>
                )}
                <Grid item xs={12}>
                  <div className="messageContainer justifyStart">
                    {props.username !== message.username ? (
                      message.username !== "admin" ? (
                        <div className="messageBox backgroundGray">
                          <p className="messageText colorWhite">
                            {ReactEmoji.emojify(message.message)}
                          </p>
                        </div>
                      ) : (
                        <div className="messageAlert backgroundTransparent">
                          <p className="messageText colorGray">
                            {message.message}
                          </p>
                        </div>
                      )
                    ) : (
                      <div className="messageBox backgroundBlue">
                        <p className="messageText colorWhite">
                          {ReactEmoji.emojify(message.message)}
                        </p>
                      </div>
                    )}
                  </div>
                </Grid>
              </Grid>
            </ListItem>
          ))}
      </List>
    </Paper>
  );
};

export default BodyChatBox;
