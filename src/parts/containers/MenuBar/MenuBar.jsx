import { useRecoilState } from "recoil";
import Wolf from "assets/images/wolf.png";
import React, { useEffect, Fragment } from "react";
import {
  List,
  Grid,
  Hidden,
  Drawer,
  Avatar,
  ListItem,
} from "@material-ui/core";

import useStyles from "./style";
import Loading from "pages/Loading/Loading";
import Header from "parts/containers/Header/Header";
import { authTokenApi } from "services/api/privateApi";
import { stateOfAuthentication } from "utils/enumsUtil";
import isAuthenticatedState from "state/isAuthenticatedState";
import PublicMenu from "parts/components/PublicMenu/PublicMenu";
import OnlineList from "parts/components/OnlineList/OnlineList";
import PrivateMenu from "parts/components/PrivateMenu/PrivateMenu";

const MenuBar = (props) => {
  const classes = useStyles();
  const [isAuthenticated, setIsAuthenticated] = useRecoilState(
    isAuthenticatedState
  );
  const [drawer, setDrawer] = React.useState(<Fragment />);
  useEffect(() => {
    authTokenApi().then((result) => {
      setIsAuthenticated(result);
      setDrawer(() => {
        if (result === stateOfAuthentication.SUCCESS) return <PrivateMenu />;
        else if (result === stateOfAuthentication.FAIL) return <PublicMenu />;
      });
    });
  }, [setIsAuthenticated]);

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
                      <Avatar variant="rounded" src={Wolf} />
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
        <Grid contaner>
          <Grid item xs={12}>
            <Header />
          </Grid>
          <Grid item xs={12}>
            <main>
              {isAuthenticated !== stateOfAuthentication.PROCESSING ? (
                props.children
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
