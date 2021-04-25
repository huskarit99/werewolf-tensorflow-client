import React, { forwardRef } from "react";
import { AccountCircle } from "@material-ui/icons";
import { TextField, Typography, InputAdornment } from "@material-ui/core";

import useStyles from "./style";

const TFUsername = forwardRef((props, usernameRef) => {
  const classes = useStyles();

  const TFUsername = () => {
    return (
      <React.Fragment>
        <Typography className={classes.typography}>Username</Typography>
        <TextField
          size="small"
          required
          fullWidth
          margin="normal"
          variant="outlined"
          inputRef={usernameRef}
          className={classes.textField}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle
                  style={{ color: "#004c9e", backgroundColor: "#00000000" }}
                />
              </InputAdornment>
            ),
          }}
        />
      </React.Fragment>
    );
  };
  return <TFUsername />;
});

export default TFUsername;
