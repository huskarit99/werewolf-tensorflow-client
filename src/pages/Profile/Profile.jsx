import { Grid, Hidden, Divider, Button } from "@material-ui/core";
import React, { Fragment, useEffect, useRef } from "react";

import useStyles from "./style";
import { getUser } from "services/api/privateApi";
import Fullname from "./components/Fullname/Fullname";
import Username from "./components/Username/Username";
import Password from "./components/Password/Password";
import ButtonSave from "./components/ButtonSave/ButtonSave";
import RecommendGame from "parts/components/RecommendGame/RecommendGame";

const Profile = () => {
  const classes = useStyles();
  const usernameRef = useRef();
  const fullnameRef = useRef();
  const passwordRef = useRef("");
  const editFullnameRef = useRef();
  useEffect(() => {
    getUser().then((result) => {
      fullnameRef.current.value = result.user.fullname;
      usernameRef.current.value = result.user.username;
    });
  });

  const handleClickEditFullname = () => {
    fullnameRef.current.disabled = !fullnameRef.current.disabled;
    if (fullnameRef.current.disabled === true) {
      editFullnameRef.current.style.color = "white";
      fullnameRef.current.style.color = "white";
    } else {
      editFullnameRef.current.style.color = "#216fdb";
      fullnameRef.current.style.color = "rgb(132, 132, 138)";
    }
  };

  const handleSave = () => {
    console.log(usernameRef.current.value);
    console.log(fullnameRef.current.value);
    console.log(passwordRef.current.value);
  };

  return (
    <Fragment>
      <Grid container style={{ minHeight: "81vh" }}>
        <Grid item xs={8}>
          <Grid container className={classes.root}>
            <Grid item xs={12} style={{ height: "2%" }}>
              <Divider className={classes.divider1} />
            </Grid>
            <Grid item xs={12} className={classes.fieldInput}>
              <Fullname
                ref={{
                  fullnameRef: fullnameRef,
                  editFullnameRef: editFullnameRef,
                }}
                handleClick={handleClickEditFullname}
              />
            </Grid>
            <Grid item xs={12} style={{ height: "2%" }}>
              <Divider className={classes.divider2} />
            </Grid>
            <Grid item xs={12} className={classes.fieldInput}>
              <Username ref={usernameRef} />
            </Grid>
            <Grid item xs={12} style={{ height: "2%" }}>
              <Divider className={classes.divider2} />
            </Grid>
            <Grid item xs={12} className={classes.fieldInput}>
              <Password ref={passwordRef} />
            </Grid>
            <Grid item xs={12} style={{ height: "2%" }}>
              <Divider className={classes.divider1} />
            </Grid>
            <Grid item xs={12} style={{ height: "30px" }}></Grid>
            <Grid item xs={12}>
              <ButtonSave handleClick={handleSave} />
            </Grid>
          </Grid>
        </Grid>
        <Hidden smDown>
          <Grid item xs={4}>
            <RecommendGame userState="login" />
          </Grid>
        </Hidden>
      </Grid>
    </Fragment>
  );
};

export default Profile;
