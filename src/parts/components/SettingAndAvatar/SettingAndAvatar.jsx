import React from "react";
import { Link } from "react-router-dom";
import SettingsIcon from "@material-ui/icons/Settings";
import { Avatar, Grid, Typography, Hidden } from "@material-ui/core";

const SettingAndAvatar = () => {
  return (
    <Hidden smDown>
      <Grid container style={{ marginTop: "2vh" }}>
        <Grid item xs={3}>
          <Link to="/">
            <SettingsIcon
              style={{
                color: "white",
                backgroundColor: "#3f51b5",
                borderRadius: "5px",
                width: "30px",
                height: "30px",
              }}
            />
          </Link>
        </Grid>
        <Grid item xs={9}>
          <Grid container>
            <Grid item xs={8}>
              <Grid container direction="column" justify="center">
                <Grid
                  item
                  xs={12}
                  style={{
                    textAlign: "right",
                    marginRight: "1.5vh",
                  }}
                >
                  <Typography style={{ color: "white", lineHeight: "1.5" }}>
                    Nguyen Thai Hoc
                  </Typography>
                </Grid>
                <Grid
                  item
                  xs={12}
                  style={{
                    textAlign: "right",
                    marginRight: "1.5vh",
                  }}
                >
                  <Typography
                    style={{
                      color: "#84848A",
                      fontSize: "13px",
                      lineHeight: "1",
                    }}
                  >
                    ThaiHoc
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={4}>
              <Avatar>T</Avatar>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Hidden>
  );
};

export default SettingAndAvatar;
