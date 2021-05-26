import React from "react";
import { useRecoilState } from "recoil";
import { Link } from "react-router-dom";
import HomeIcon from "@material-ui/icons/Home";
import AssignmentIcon from "@material-ui/icons/Assignment";
import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import { List, Grid, Typography } from "@material-ui/core";

import { useStyles, ListItem } from "./style";
import indexPublicMenuState from "../../../state/indexPublicMenuState";

const listMenu = [
  {
    icon: <HomeIcon style={{ color: "white" }} />,
    name: "Home",
    link: "/",
  },
  {
    icon: <AssignmentIndIcon style={{ color: "white" }} />,
    name: "Sign In",
    link: "/sign-in",
  },
  {
    icon: <AssignmentIcon style={{ color: "white" }} />,
    name: "Sign Up",
    link: "/sign-up",
  },
];

const PublicMenu = () => {
  const classes = useStyles();
  const [indexPublicMenu, setIndexPublicMenu] =
    useRecoilState(indexPublicMenuState);

  const handleClick = (index) => {
    setIndexPublicMenu(index);
  };

  return (
    <List>
      {listMenu.map((item, index) => (
        <Link to={item.link} className={classes.link} key={index}>
          <ListItem
            button
            onClick={() => handleClick(index)}
            selected={index === indexPublicMenu}
          >
            <Grid container justify="center" alignItems="center">
              <Grid item xs={3}>
                <Typography variant="subtitle2">{item.name}</Typography>
              </Grid>
              <Grid item xs={6} />
              <Grid item xs={3}>
                {item.icon}
              </Grid>
            </Grid>
          </ListItem>
        </Link>
      ))}
    </List>
  );
};

export default PublicMenu;
