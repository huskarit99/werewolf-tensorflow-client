import React, { forwardRef } from "react";
import { LockOutlined } from "@material-ui/icons";
import { TextField, Typography, InputAdornment } from "@material-ui/core";

import useStyles from "./style";

const TFPassword = forwardRef((props, passwordRef) => {
  const classes = useStyles();

  const TFPassword = () => {
    return (
      <React.Fragment>
        <Typography className={classes.typography}>Password</Typography>
        <TextField
          size="small"
          required
          type="password"
          margin="normal"
          variant="outlined"
          inputRef={passwordRef}
          className={classes.textField}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockOutlined
                  style={{ color: "#004c9e", backgroundColor: "#00000000" }}
                />
              </InputAdornment>
            ),
          }}
        />
      </React.Fragment>
    );
  };
  return <TFPassword />;
});

export default TFPassword;
