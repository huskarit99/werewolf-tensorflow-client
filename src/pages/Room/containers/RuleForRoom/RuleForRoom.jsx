import React from "react";
import { Typography, Hidden, Avatar, Paper } from "@material-ui/core";

import useStyles from "./style";
import witch from "../../../../assets/images/witch.png";
import guard from "../../../../assets/images/guard.png";
import hunter from "../../../../assets/images/hunter.png";
import villager from "../../../../assets/images/villager.png";
import werewolf from "../../../../assets/images/werewolf.png";
const RuleForRoom = (props) => {
  const numberOfWolf = props && props.room ? props.room.wolf : 0;
  const numberOfWitch = props && props.room ? props.room.witch : 0;
  const numberOfGuard = props && props.room ? props.room.guard : 0;
  const numberOfHunter = props && props.room ? props.room.hunter : 0;
  const numberOfVillager =
    5 - numberOfWolf - numberOfWitch - numberOfGuard - numberOfHunter;

  const classes = useStyles();
  return (
    <Hidden mdDown>
      <div className={classes.root1}>
        <div className={classes.container}>
          <Avatar
            variant="square"
            style={{ width: "100%", height: "150px" }}
            src={werewolf}
          />
        </div>
        <div className={classes.container}>
          <Avatar
            variant="square"
            style={{ width: "50px", height: "150px" }}
            src={villager}
          />
        </div>
        <div className={classes.container}>
          <Avatar
            variant="square"
            style={{ width: "120px", height: "170px" }}
            src={witch}
          />
        </div>
        <div className={classes.container}>
          <Avatar
            variant="square"
            style={{ width: "92px", height: "170px" }}
            src={guard}
          />
        </div>
        <div className={classes.container}>
          <Avatar
            variant="square"
            style={{ width: "112px", height: "170px" }}
            src={hunter}
          />
        </div>
      </div>
      <div className={classes.root2}>
        <div className={classes.container}>
          <Paper className={classes.paper}>
            <Typography className={classes.typography}>
              {numberOfWolf}
            </Typography>
          </Paper>
        </div>
        <div className={classes.container}>
          <Paper className={classes.paper}>
            <Typography className={classes.typography}>
              {numberOfVillager}
            </Typography>
          </Paper>
        </div>
        <div className={classes.container}>
          <Paper className={classes.paper}>
            <Typography className={classes.typography}>
              {numberOfWitch}
            </Typography>
          </Paper>
        </div>
        <div className={classes.container}>
          <Paper className={classes.paper}>
            <Typography className={classes.typography}>
              {numberOfGuard}
            </Typography>
          </Paper>
        </div>
        <div className={classes.container}>
          <Paper className={classes.paper}>
            <Typography className={classes.typography}>
              {numberOfHunter}
            </Typography>
          </Paper>
        </div>
      </div>
    </Hidden>
  );
};
export default RuleForRoom;
