import React from "react";
import { useSetRecoilState } from "recoil";
import { Grid, Paper, Hidden } from "@material-ui/core";

import useStyles from "./style";
import messagesState from "state/messagesState";
import BodyChatBot from "./components/BodyChatBot/BodyChatBot";
import HeaderChatBot from "./components/HeaderChatBot/HeaderChatBot";
import FooterChatBot from "./components/FooterChatBot/FooterChatBot";

const ChatBot = () => {
  const setMessages = useSetRecoilState(messagesState);

  const handleSend = (text) => {
    setMessages((oldMessages) => {
      return [
        ...oldMessages,
        {
          text: text,
        },
      ];
    });
  };

  const classes = useStyles();
  return (
    <Hidden smDown>
      <Paper className={classes.paperChatBot}>
        <Grid container direction="column" style={{ minHeight: "75vh" }}>
          <Grid
            item
            xs={12}
            style={{
              paddingTop: "10%",
              paddingLeft: "10%",
              paddingBottom: "5%",
            }}
          >
            <HeaderChatBot />
          </Grid>
          <Grid item xs={12}>
            <BodyChatBot />
          </Grid>
          <Grid item xs={12}>
            <FooterChatBot handleSend={(text) => handleSend(text)} />
          </Grid>
        </Grid>
      </Paper>
    </Hidden>
  );
};

export default ChatBot;
