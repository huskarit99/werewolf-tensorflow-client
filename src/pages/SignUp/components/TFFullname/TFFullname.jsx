import React, { forwardRef } from "react";
import { AssignmentInd } from "@material-ui/icons";
import { TextField, Typography, InputAdornment } from "@material-ui/core";

import useStyles from "./style";

const TFFullname = forwardRef((props, fullnameRef) => {
  const classes = useStyles();

  const TFFullname = () => {
    return (
      <React.Fragment>
        <Typography className={classes.typography}>Fullname</Typography>
        <TextField
          size="small"
          required
          fullWidth
          margin="normal"
          variant="outlined"
          inputRef={fullnameRef}
          className={classes.textField}
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AssignmentInd
                  style={{ color: "#004c9e", backgroundColor: "#00000000" }}
                />
              </InputAdornment>
            ),
          }}
        />
      </React.Fragment>
    );
  };
  return <TFFullname />;
});

export default TFFullname;
