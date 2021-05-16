import React from "react";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import PersonIcon from "@material-ui/icons/Person";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import { Grid, List, Typography } from "@material-ui/core";
import VideogameAsset from "@material-ui/icons/VideogameAsset";
import { useRecoilState, useRecoilValue, useSetRecoilState } from "recoil";

import roomState from "state/socketState";
import socketState from "state/socketState";
import { clearToken } from "utils/tokenUtil";
import { useStyles, ListItem } from "./style";
import indexPrivateMenuState from "state/indexPrivateMenuState";

const PrivateMenu = () => {
  const classes = useStyles();
  const socket = useRecoilValue(socketState);
  const setRoom = useSetRecoilState(roomState);

  const [indexPrivateMenu, setIndexPrivateMenu] = useRecoilState(
    indexPrivateMenuState
  );
  const listMenu = [
    {
      icon: <HomeIcon style={{ color: "white" }} />,
      name: "Home",
      link: "/",
    },
    {
      icon: <PersonIcon style={{ color: "white" }} />,
      name: "Profile",
      link: "/profile",
    },
    {
      icon: <VideogameAsset style={{ color: "white" }} />,
      name: "Lobby",
      link: "/lobby",
    },
  ];

  const handleClick = (index) => {
    setIndexPrivateMenu(index);
  };

  const handleLogout = () => {
    socket.emit("react:disconnect-server");
    setRoom(null);
    clearToken();
  };

  return (
    <List>
      <ListItem style={{ minHeight: "10vh" }}>
        <Typography display="block" variant="caption">
          Menu
        </Typography>
      </ListItem>
      {listMenu.map((item, index) => (
        <Link
          to={item.link}
          className={classes.link}
          key={index}
          onClick={() => handleClick(index)}
        >
          <ListItem button selected={index === indexPrivateMenu}>
            <Grid container justify="center" alignItems="center">
              <Grid item xs={4}>
                <Typography variant="subtitle2">{item.name}</Typography>
              </Grid>
              <Grid item xs={5} />
              <Grid item xs={3}>
                {item.icon}
              </Grid>
            </Grid>
          </ListItem>
        </Link>
      ))}
      <a href="/" className={classes.link}>
        <ListItem button onClick={handleLogout}>
          <Grid container justify="center" alignItems="center">
            <Grid item xs={3}>
              <Typography variant="subtitle2">Logout</Typography>
            </Grid>
            <Grid item xs={6} />
            <Grid item xs={3}>
              <ExitToAppIcon style={{ color: "white" }} />
            </Grid>
          </Grid>
        </ListItem>
      </a>
    </List>
  );
};

export default PrivateMenu;
