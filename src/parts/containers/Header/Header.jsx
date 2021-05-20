import { useRecoilValue } from "recoil";
import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { getToken } from "utils/tokenUtil";
import { useLocation } from "react-router-dom";

import { stateOfAuthentication } from "utils/enumsUtil";
import isAuthenticatedState from "state/isAuthenticatedState";
import HeaderTitle from "parts/components/HeaderTitle/HeaderTitle";
import SettingAndAvatar from "parts/components/SettingAndAvatar/SettingAndAvatar";

const Header = () => {
  let location = "";
  location = useLocation();
  const username = getToken() !== null ? getToken().username : null;
  const isAuthenticated = useRecoilValue(isAuthenticatedState);
  useEffect(() => {}, [location]);

  return (
    <Grid
      container
      justify="center"
      alignItems="center"
      style={{ height: "100%" }}
    >
      <Grid item xs={8} style={{ height: "100%" }}>
        <HeaderTitle username={username} path={location.pathname} />
      </Grid>
      {isAuthenticated === stateOfAuthentication.SUCCESS ? (
        <Grid item xs={4} style={{ height: "100%" }}>
          <SettingAndAvatar />
        </Grid>
      ) : (
        <Grid item xs={4} />
      )}
    </Grid>
  );
};

export default Header;
