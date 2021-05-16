import React from "react";
import { Group } from "@material-ui/icons";
import {
  Paper,
  Typography,
  List,
  ListItem,
  Divider,
  Grid,
} from "@material-ui/core";

import useStyles from "./style";

const HeaderTable = () => {
  const classes = useStyles();
  return (
    <Paper className={classes.paper}>
      <List>
        <ListItem>
          <Grid container>
            <Grid item xs={3}>
              <Typography className={classes.typography}>ID</Typography>
            </Grid>
            <Grid item xs={5}>
              <Typography className={classes.typography}>Name</Typography>
            </Grid>
            <Grid item xs={1}>
              <Group className={classes.icon} />
            </Grid>
            <Grid item xs={2}>
              <Typography className={classes.typography}>Host</Typography>
            </Grid>
            <Grid item xs={1}></Grid>
          </Grid>
        </ListItem>
        <Divider className={classes.divider}></Divider>
      </List>
    </Paper>
  );
};

export default HeaderTable;
