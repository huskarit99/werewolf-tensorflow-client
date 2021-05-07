import React, { forwardRef } from "react";
import { Grid, InputBase, Button } from "@material-ui/core";

import useStyles from "./style";

const Fullname = forwardRef((props, ref) => {
  const classes = useStyles();
  const { fullnameRef, editFullnameRef } = ref;
  const Fullname = () => {
    const handleClick = () => {
      props.handleClick();
    };
    return (
      <Grid container className={classes.container}>
        <Grid item xs={3} className={classes.item}>
          <p className={classes.p}>Fullname</p>
        </Grid>
        <Grid item xs={7} className={classes.item}>
          <InputBase
            className={classes.input}
            inputRef={fullnameRef}
            disabled
          />
        </Grid>
        <Grid item xs={2} className={classes.item}>
          <Button className={classes.button}>
            <p
              ref={editFullnameRef}
              onClick={handleClick}
              className={classes.p}
            >
              Edit
            </p>
          </Button>
        </Grid>
      </Grid>
    );
  };
  return <Fullname />;
});

export default Fullname;
