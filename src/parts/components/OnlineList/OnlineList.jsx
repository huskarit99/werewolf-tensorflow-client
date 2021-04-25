import React from "react";
import { List, Avatar, ListItem, Typography, Grid } from "@material-ui/core";

import useStyles from "./style";
// import { useRecoilValue } from "recoil";
// import socketState from "state/socketState";

const OnlineList = () => {
  const classes = useStyles();
  // const [users, setUsers] = useState([]);
  // const socket = useRecoilValue(socketState);

  const listUser = [];
  for (let i = 0; i < 10; i++) {
    listUser.push({
      fullname: "Nguyen Thai Hoc",
      username: "ThaiHoc",
    });
  }

  // useEffect(() => {
  //   socket.on("getOnlineUsers", ({ users }) => {
  //     setUsers(users);
  //   });
  // }, [socket]);

  return (
    <React.Fragment>
      <List>
        <ListItem className={classes.listItem} style={{ minHeight: "8vh" }}>
          <Typography display="block" variant="caption">
            People
          </Typography>
        </ListItem>
      </List>
      <List className={classes.list}>
        {listUser.map((User, index) => (
          <ListItem className={classes.listItem} key={index}>
            <Grid
              container
              justify="center"
              alignItems="center"
              style={{ minHeight: "8vh" }}
            >
              <Grid item xs={3}>
                <Avatar
                  className={classes.avatar}
                  variant="rounded"
                  sizes="5px"
                >
                  H
                </Avatar>
              </Grid>
              <Grid item xs={9}>
                <Grid container direction="column" justify="center">
                  <Grid item xs={12}>
                    <Typography
                      style={{
                        color: "white",
                        fontSize: "13px",
                        lineHeight: "1",
                      }}
                    >
                      {User.fullname}
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="caption"
                      style={{
                        color: "#84848A",
                        fontSize: "11px",
                        lineHeight: "1",
                      }}
                    >
                      @{User.username}
                    </Typography>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </ListItem>
        ))}
      </List>
    </React.Fragment>
  );
};

export default OnlineList;
