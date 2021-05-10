import { Link } from "react-router-dom";
import React, { useEffect, Fragment } from "react";
import { useRecoilState, useRecoilValue } from "recoil";
import {
  List,
  Grid,
  Hidden,
  Drawer,
  Avatar,
  ListItem,
} from "@material-ui/core";

import useStyles from "./style";
import Wolf from "assets/images/wolf.png";
import Loading from "pages/Loading/Loading";
import Header from "parts/containers/Header/Header";
import { authTokenApi } from "services/api/privateApi";
import { stateOfAuthentication } from "utils/enumsUtil";
import isAuthenticatedState from "state/isAuthenticatedState";
import PublicMenu from "parts/components/PublicMenu/PublicMenu";
import OnlineList from "parts/components/OnlineList/OnlineList";
import PrivateMenu from "parts/components/PrivateMenu/PrivateMenu";
import RecommendGame from "parts/components/RecommendGame/RecommendGame";

import { getToken } from "utils/tokenUtil";
import socketState from "state/socketState";

const MenuBar = (props) => {
  const classes = useStyles();
  const socket = useRecoilValue(socketState);
  const [isAuthenticated, setIsAuthenticated] = useRecoilState(
    isAuthenticatedState
  );
  const [drawer, setDrawer] = React.useState(<Fragment />);
  useEffect(() => {
    authTokenApi().then((result) => {
      setIsAuthenticated(result);
      setDrawer(() => {
        if (result === stateOfAuthentication.SUCCESS) {
          const token = getToken().token;
          socket.emit("react:connect-server", { token: token });
          return <PrivateMenu />;
        } else if (result === stateOfAuthentication.FAIL) return <PublicMenu />;
      });
    });
  }, [setIsAuthenticated, socket]);

  return (
    <Grid container style={{ minHeight: "100vh" }}>
      <Grid item xs={3}>
        <div className={classes.root}>
          <Hidden smDown implementation="css">
            <Drawer
              classes={{
                paper: classes.drawerPaper,
              }}
              variant="permanent"
              open
            >
              <List>
                <ListItem>
                  <Grid
                    justify="center"
                    alignItems="center"
                    direction="column"
                    style={{ marginTop: "5vh" }}
                    container
                  >
                    <Grid item xs={12}>
                      <Link to="/">
                        <Avatar variant="rounded" src={Wolf} />
                      </Link>
                    </Grid>
                  </Grid>
                </ListItem>
              </List>
              {drawer}
              {isAuthenticated === stateOfAuthentication.SUCCESS && (
                <OnlineList />
              )}
            </Drawer>
          </Hidden>
        </div>
      </Grid>
      <Grid item xs={9}>
        <Grid container direction="column">
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12} style={{ overflow: "scroll" }}>
            <main>
              {isAuthenticated !== stateOfAuthentication.PROCESSING ? (
                isAuthenticated === stateOfAuthentication.SUCCESS ? (
                  props.children
                ) : (
                  <Grid container style={{ minHeight: "81vh" }}>
                    <Grid item xs={7}>
                      {props.children}
                    </Grid>
                    <Hidden smDown>
                      <Grid item xs={5}>
                        <RecommendGame userState="nonLogin" />
                      </Grid>
                    </Hidden>
                  </Grid>
                )
              ) : (
                <Loading />
              )}
            </main>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default MenuBar;
