import React from "react";
import { useSetRecoilState } from "recoil";
import { Grid, Paper, Hidden } from "@material-ui/core";

import useStyles from "./style";
import messagesState from "state/messagesState";
import BodyChatBox from "./components/BodyChatBox/BodyChatBox";
import HeaderChatBox from "./components/HeaderChatBox/HeaderChatBox";
import FooterChatBox from "./components/FooterChatBox/FooterChatBox";

const ChatBox = () => {
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
      <Paper className={classes.paperChatBox}>
        <Grid container style={{ height: "100%" }}>
          <Grid
            item
            xs={12}
            style={{
              height: "15%",
              paddingTop: "10%",
              paddingLeft: "10%",
              paddingBottom: "5%",
            }}
          >
            <HeaderChatBox />
          </Grid>
          <Grid item xs={12} style={{ height: "73%" }}>
            <BodyChatBox />
          </Grid>
          <Grid item xs={12} style={{ height: "12%" }}>
            <FooterChatBox handleSend={(text) => handleSend(text)} />
          </Grid>
        </Grid>
      </Paper>
    </Hidden>
  );
};

export default ChatBox;
