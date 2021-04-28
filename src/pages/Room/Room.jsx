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

import ChatBot from "./containers/ChatBot/ChatBot";
import useStyles from "./style";

// import { useRecoilValue } from "recoil";
// import socketState from "state/socketState";

const listUser = [];
for (let i = 0; i < 10; i++)
  listUser.push({
    name: "thaihoc",
    fullname: "Nguyễn Thái Học",
    icon: (
      <Avatar
        style={{
          width: "35%",
          height: "65%",
          fontSize: "2rem",
          backgroundColor: "red",
        }}
      >
        H
      </Avatar>
    ),
  });

const Room = () => {
  const classes = useStyles();
  // const socket = useRecoilValue(socketState);
  // const [name] = useState("ThaiHoc");
  // const history = useHistory();
  return (
    <Grid container>
      <Grid item xs={8}>
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
                              style={{
                                color: "white",
                                fontWeight: "bold",
                                fontSize: "12px",
                              }}
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
                            <Typography
                              style={{ color: "white", fontSize: "14px" }}
                            >
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
                                height: "50%",
                                width: "60%",
                                fontWeight: "bold",
                                fontSize: "12px",
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
        </Grid>
      </Grid>
      <Grid item xs={4}>
        <ChatBot />
      </Grid>
    </Grid>
  );
};

export default Room;
