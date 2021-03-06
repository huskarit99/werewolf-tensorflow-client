import { useRecoilState } from "recoil";
import { Grid, Hidden, Divider } from "@material-ui/core";
import React, { Fragment, useEffect, useRef, useState } from "react";

import useStyles from "./style";
import userState from "../../state/userState";
import { colorAlertEnum } from "../../utils/enumsUtil";
import { updateUser } from "../../services/api/privateApi";
import Fullname from "./components/Fullname/Fullname";
import Username from "./components/Username/Username";
import Password from "./components/Password/Password";
import ButtonSave from "./components/ButtonSave/ButtonSave";
import RecommendGame from "../../parts/components/RecommendGame/RecommendGame";

const Profile = () => {
  const classes = useStyles();
  const usernameRef = useRef("");
  const fullnameRef = useRef("");
  const passwordRef = useRef("");
  const editFullnameRef = useRef();
  const [user, setUser] = useRecoilState(userState);
  const [errorAlert, setErrorAlert] = useState(<Fragment />);

  useEffect(() => {
    if (fullnameRef.current && usernameRef.current) {
      fullnameRef.current.value =
        user.fullname && user.fullname !== "" ? user.fullname : "";
      usernameRef.current.value =
        user.username && user.username !== "" ? user.username : "";
    }
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
    updateUser(fullnameRef.current.value, passwordRef.current.value).then(
      (res) => {
        let colorAlert = colorAlertEnum.ERROR;
        if (res.isSuccess) {
          setUser((prev) => {
            return {
              id: prev.id,
              username: prev.username,
              fullname: fullnameRef.current.value,
            };
          });
          colorAlert = colorAlertEnum.SUCCESS;
        }
        setErrorAlert(
          <p
            style={{
              color: colorAlert,
              marginTop: "5px",
            }}
          >
            {res.message}
          </p>
        );
      }
    );
  };

  return (
    <Hidden xsDown>
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
            <Grid item xs={12} style={{ height: "30px" }}>
              {errorAlert}
            </Grid>
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
    </Hidden>
  );
};

export default Profile;
