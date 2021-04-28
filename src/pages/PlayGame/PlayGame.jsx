import React from "react";
import {
  Grid,
  Paper,
  Box,
  Typography,
  Avatar,
  Button,
  Hidden,
} from "@material-ui/core";

// import ListRoom from "./containers/ListRoom/ListRoom";

// import ChatBot from "./containers/ChatBot/ChatBot";

// import { useRecoilValue } from "recoil";
// import socketState from "state/socketState";
import useStyles from "./style";
import wolfIcon from "assets/images/wolfIcon.png";
import mageIcon from "assets/images/mageIcon.png";
import hunterIcon from "assets/images/hunterIcon.png";
import shieldIcon from "assets/images/shieldIcon.png";

const avaRoom = {
  0: wolfIcon,
  1: mageIcon,
  2: hunterIcon,
  3: shieldIcon,
};

const listUser = [];
for (let i = 0; i < 10; i++)
  listUser.push({
    name: "thaihoc",
    fullname: "Nguyễn Thái Học",
    icon: (
      <Avatar
        variant="square"
        style={{
          width: "35%",
          height: "65%",
          fontSize: "2rem",
          backgroundColor: "#00000000",
        }}
        src={avaRoom[Math.floor(Math.random() * 4)]}
      />
    ),
  });

const PlayGame = () => {
  // const socket = useRecoilValue(socketState);
  // const [name] = useState("ThaiHoc");
  // const history = useHistory();
  const classes = useStyles();
  return (
    <Grid container>
      <Grid item xs={12}></Grid>
      <Grid item xs={12} style={{ minHeight: "81vh" }}>
        <Paper
          style={{
            overflow: "auto",
            width: "96%",
            maxHeight: "70vh",
            backgroundColor: "#00000000",
            boxShadow: "none",
          }}
        >
          <Box
            display="flex"
            flexWrap="wrap"
            justifyContent="center"
            bgcolor="#00000000"
            css={{ maxWidth: "80vw" }}
            style={{ marginBottom: "10%" }}
          >
            {listUser.map((user, index) => (
              <Hidden xsDown implementation="css">
                <Box
                  key={index}
                  display="flex"
                  bgcolor="#00000000"
                  justifyContent="center"
                  alignItems="center"
                  style={{
                    width: "240px",
                    height: "240px",
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
                        {user.icon}
                      </Grid>
                      <Grid
                        item
                        xs={12}
                        style={{
                          height: "10%",
                          textAlign: "center",
                        }}
                      >
                        <Typography
                          style={{ color: "white", fontWeight: "bold" }}
                        >
                          {user.name}
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
                        <Typography style={{ color: "white" }}>
                          {user.fullname}
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
                        <Button
                          variant="contained"
                          style={{
                            backgroundColor: "rgba(255,255,255,0.3)",
                            boxShadow: "none",
                            color: "white",
                            borderRadius: "20px",
                            width: "60%",
                            fontWeight: "bold",
                          }}
                        >
                          REMOVE
                        </Button>
                      </Grid>
                    </Grid>
                  </Paper>
                </Box>
              </Hidden>
            ))}
          </Box>
        </Paper>
      </Grid>
      {/* <Grid item xs={8}></Grid>
      <Grid item xs={4}>
        <ChatBot />
      </Grid> */}
    </Grid>
  );
};

export default PlayGame;
