import React from "react";
import { useRecoilValue } from "recoil";
import { Grid, Paper, Hidden } from "@material-ui/core";

import useStyles from "./style";
import { getToken } from "../../../../utils/tokenUtil";
import socketState from "../../../../state/socketState";
import BodyChatBox from "./components/BodyChatBox/BodyChatBox";
import HeaderChatBox from "./components/HeaderChatBox/HeaderChatBox";
import FooterChatBox from "./components/FooterChatBox/FooterChatBox";

const ChatBox = (props) => {
  const socket = useRecoilValue(socketState);
  const handleSend = (message) => {
    const token = getToken() !== null ? getToken().token : null;
    socket.emit("react:send-message", { token: token, message: message });
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
              height: "10%",
              paddingTop: "10%",
              paddingLeft: "10%",
            }}
          >
            <HeaderChatBox />
          </Grid>
          <Grid item xs={12} style={{ height: "73%" }}>
            <BodyChatBox room={props.room} username={props.username} />
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
