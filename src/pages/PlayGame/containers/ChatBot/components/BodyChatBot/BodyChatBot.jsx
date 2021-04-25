import React from "react";
import ReactEmoji from "react-emoji";
import { useRecoilValue } from "recoil";
import {
  Typography,
  Paper,
  List,
  ListItem,
  Grid,
  Avatar,
} from "@material-ui/core";

import "./BodyChatBot.css";
import useStyles from "./style";
import messagesState from "state/messagesState";

const BodyChatBot = () => {
  const messages = useRecoilValue(messagesState);
  const classes = useStyles();

  return (
    <Paper className={classes.paperMessageBot}>
      <List>
        {messages.length !== 0 &&
          messages.map((message, index) => (
            <ListItem key={index}>
              <Grid container>
                <Grid item xs={12}>
                  <Grid container>
                    <Grid item xs={2}>
                      <Avatar style={{ width: "20px", height: "20px" }}>
                        H
                      </Avatar>
                    </Grid>
                    <Grid item xs={10}>
                      <Typography
                        style={{
                          fontSize: "12px",
                          color: "white",
                          fontWeight: "bold",
                        }}
                      >
                        ThaiHoc
                      </Typography>
                    </Grid>
                  </Grid>
                </Grid>
                <Grid item xs={12}>
                  <div className="messageContainer justifyStart">
                    <div className="messageBox backgroundBlue">
                      <p className="messageText colorWhite">
                        {ReactEmoji.emojify(message.text)}
                      </p>
                    </div>
                  </div>
                </Grid>
              </Grid>
            </ListItem>
          ))}
      </List>
    </Paper>
  );
};

export default BodyChatBot;
