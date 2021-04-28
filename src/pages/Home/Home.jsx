import React, { Fragment } from "react";
import { useRecoilValue } from "recoil";
import { Redirect } from "react-router-dom";
import { Grid, Hidden } from "@material-ui/core";

import { stateOfAuthentication } from "utils/enumsUtil";
import isAuthenticatedState from "state/isAuthenticatedState";
import RecommendGame from "parts/components/RecommendGame/RecommendGame";

const Home = (props) => {
  const isAuthenticacted = useRecoilValue(isAuthenticatedState);
  if (props.location.pathname !== props.match.path) return <Redirect to="/" />;
  else
    return (
      <Fragment>
        <Grid container style={{ minHeight: "81vh" }}>
          <Grid item xs={8}></Grid>
          <Hidden smDown>
            <Grid item xs={4}>
              {isAuthenticacted === stateOfAuthentication.SUCCESS && (
                <RecommendGame userState="login" />
              )}
            </Grid>
          </Hidden>
        </Grid>
      </Fragment>
    );
};

export default Home;
