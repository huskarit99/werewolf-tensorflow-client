import React from "react";
import { useRecoilValue } from "recoil";
import { Redirect } from "react-router-dom";
import { Grid, Hidden } from "@material-ui/core";

import { stateOfAuthentication } from "utils/enumsUtil";
import isAuthenticatedState from "state/isAuthenticatedState";
import RecommendGame from "parts/components/RecommendGame/RecommendGame";
import BackgroundDownloadGame from "parts/components/BackgroundDownloadGame/BackgroundDownloadGame";

const Home = (props) => {
  const isAuthenticated = useRecoilValue(isAuthenticatedState);

  if (props.location.pathname !== props.match.path) return <Redirect to="/" />;
  else
    return (
      <Hidden smDown>
        {isAuthenticated === stateOfAuthentication.SUCCESS ? (
          <Grid container style={{ height: "81vh", overflow: "hidden" }}>
            <Grid item xs={8} style={{ height: "100%", width: "100%" }}>
              <BackgroundDownloadGame />
            </Grid>
            <Grid item xs={4}>
              <RecommendGame userState="login" />
            </Grid>
          </Grid>
        ) : (
          <BackgroundDownloadGame />
        )}
      </Hidden>
    );
};

export default Home;
