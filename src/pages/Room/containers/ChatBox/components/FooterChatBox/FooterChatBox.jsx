import React, { useRef } from "react";
import { Grid, InputBase, Typography } from "@material-ui/core";

const FooterChatBox = (props) => {
  const messageRef = useRef();
  const handleSend = () => {
    if (messageRef.current.value) {
      props.handleSend(messageRef.current.value);
      messageRef.current.value = "";
    }
  };

  return (
    <Grid container alignItems="center" style={{ height: "100%" }}>
      <Grid item xs={9}>
        <InputBase
          style={{ color: "white", marginLeft: "10%", fontSize: "1rem" }}
          inputProps={{ placeholder: "Type...", color: "white" }}
          inputRef={messageRef}
          onKeyPress={(e) => {
            if (e.key === "Enter") {
              handleSend();
            }
          }}
        />
      </Grid>
      <Grid item xs={3}>
        <Typography
          style={{
            color: "white",
            fontWeight: "bold",
            marginRight: "10%",
          }}
          onClick={handleSend}
        >
          Send
        </Typography>
      </Grid>
    </Grid>
  );
};

export default FooterChatBox;
