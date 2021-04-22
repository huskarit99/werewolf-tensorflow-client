import { useRecoilValue } from "recoil";
import React, { useEffect } from "react";
import { Grid } from "@material-ui/core";
import { getToken } from "utils/tokenUtil";
import { useLocation } from "react-router-dom";

import Welcome from "parts/components/Welcome/Welcome";
import { stateOfAuthentication } from "utils/enumsUtil";
import isAuthenticatedState from "state/isAuthenticatedState";
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
      alignItems="top"
      style={{ minHeight: "12vh", marginTop: "7vh" }}
    >
      <Grid item xs={8}>
        {location.pathname === "/" && <Welcome username={username} />}
      </Grid>
      {isAuthenticated === stateOfAuthentication.SUCCESS ? (
        <Grid item xs={4}>
          <SettingAndAvatar />
        </Grid>
      ) : (
        <Grid item xs={4} />
      )}
    </Grid>
  );
};

export default Header;
