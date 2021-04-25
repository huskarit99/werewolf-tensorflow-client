import React from "react";

import Grid from "@material-ui/core/Grid";

import ChatBot from "./containers/ChatBot/ChatBot";

// import { useRecoilValue } from "recoil";
// import socketState from "state/socketState";

const PlayGame = () => {
  // const socket = useRecoilValue(socketState);
  // const [name] = useState("ThaiHoc");
  // const history = useHistory();
  return (
    <Grid container>
      <Grid item xs={8}></Grid>
      <Grid item xs={4}>
        <ChatBot />
      </Grid>
    </Grid>
  );
};

export default PlayGame;
